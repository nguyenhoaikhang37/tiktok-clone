import classNames from 'classnames/bind';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export interface ButtonProps {
    children: string | ReactElement;
    btnType?: 'text' | 'primary' | 'outline';
    btnSize?: any;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;

    disabled?: boolean;
    to?: string;
    href?: string;
    className?: any;
    target?: string;
    onClick?: () => void;
}

export function Button({
    children,
    btnSize,
    btnType = 'text',
    leftIcon,
    rightIcon,

    disabled,
    to,
    href,
    className,
    onClick,
    ...passProps
}: ButtonProps) {
    let Comp: any = 'button';
    const props: any = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        [btnType]: btnType,
        [btnSize]: btnSize,
    });

    return (
        <Comp disabled={disabled} className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title-btn')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
