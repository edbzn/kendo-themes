import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface PickerProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    size: null | 'small' | 'medium' | 'large';
    rounded: null | 'small' | 'medium' | 'large' | 'full';
    fillMode: null | 'solid' | 'outline' | 'flat';
    hover?: boolean;
    focus?: boolean;
    valid?: boolean;
    invalid?: boolean;
    required?: boolean;
    loading?: boolean;
    disabled?: boolean;
}

export class Picker extends React.Component<PickerProps> {

    static defaultProps = {
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid'
    };

    render() {
        const {
            children,
            className,
            style,
            size,
            rounded,
            fillMode,
            hover,
            focus,
            valid,
            invalid,
            required,
            loading,
            disabled
        } = this.props;

        return (
            <span
                className={classNames(
                    className,
                    'k-picker',
                    {
                        [`k-picker-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        [`k-picker-${fillMode}`]: fillMode,
                        [`k-rounded-${kendoThemeMaps.roundedMap[rounded!] || rounded}`]: rounded,
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-valid': valid,
                        'k-invalid': invalid,
                        'k-required': required,
                        'k-disabled': disabled,
                        'k-loading': loading
                    }
                )}
                style={style}>
                {children}
            </span>
        );
    }
}
