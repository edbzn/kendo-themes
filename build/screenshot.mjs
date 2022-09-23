import puppeteer from 'puppeteer';
import { createServer } from 'http-server';
import fs from 'fs';
import glob from 'glob';
import path from 'path';
import { ArgumentParser } from 'argparse';

const parser = new ArgumentParser({
    description: 'Screenshot tests'
});

const HOST = 'localhost';
parser.add_argument('-t', '--tests', { help: 'Glob for test files' });
parser.add_argument('-p', '--port', { help: 'Port for built-in web server', default: 18111 });
parser.add_argument('--width', { help: 'Screen width', default: 1024 });
parser.add_argument('--min-height', { help: 'Minimum height for generated images', default: 100 });
parser.add_argument('-o', '--output-path', { help: 'Output path' });
parser.add_argument('-n', '--parallel', { help: 'Numbers of browsers to run in parallel', default: 8 });
const args = parser.parse_args();

function pathUrl(path) {
    return `http://${HOST}:${args.port}/${path.replace('./', '')}`;
}

const files = glob.sync(args.tests);
const pages = files.map(path => [ path, pathUrl(path) ]);

function arrayChunks( array, chunkCount ) {
    const result = [];
    const chunkSize = Math.ceil(array.length / chunkCount);

    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }

    return result;
}

const server = createServer({
    root: './',
    port: args.port
});

const chunks = arrayChunks(pages, args.parallel);
server.listen(args.port, HOST, async() => {
    await Promise.all(chunks.map(processChunk));
    server.close();
});

async function processChunk(chunk) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: args.width,
        height: args.min_height,
        deviceScaleFactor: 1,
    });

    for (let i = 0; i < chunk.length; i++) {
        const [ filePath, url ] = chunk[i];
        const fileName = path.basename(filePath);
        const folderName = path.basename(path.dirname(filePath));
        const outputPath = path.join(args.output_path, folderName, path.basename(fileName, '.html') + '.png');

        fs.mkdirSync(path.dirname(outputPath), { recursive: true });

        await page.goto(url, {
            waitUntil: 'networkidle2',
        });

        await page.screenshot({
            path: outputPath,
            fullPage: true
        });
    }

    await browser.close();
}
