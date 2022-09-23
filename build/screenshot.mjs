import puppeteer from 'puppeteer';
import { createServer } from 'http-server';
import fs from 'fs';
import glob from 'glob';
import path from 'path';

const PORT = 18112;
const HOST = 'localhost';
const TESTS_SPEC = process.argv[2];
const OUTPUT_PATH = process.argv[3];

function pathUrl(path) {
    return `http://${HOST}:${PORT}/${path.replace('./', '')}`;
}

const files = glob.sync(TESTS_SPEC);
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
    port: PORT
});

const chunks = arrayChunks(pages, 4);
server.listen(PORT, HOST, async() => {
    await Promise.all(chunks.map(processChunk));
    server.close();
});

async function processChunk(chunk) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1024,
        height: 1,
        deviceScaleFactor: 1,
    });

    for (let i = 0; i < chunk.length; i++) {
        const [ filePath, url ] = chunk[i];
        const fileName = path.basename(filePath);
        const folderName = path.basename(path.dirname(filePath));
        const outputPath = path.join(OUTPUT_PATH, folderName, path.basename(fileName, '.html') + '.png');

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
