import { Button } from '@/components/common';
import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';

import styles from './MenuPopper.module.scss';

const cx = classNames.bind(styles);

export interface MenuItemProps {
    data: {
        icon?: ReactElement;
        title: string;
        to?: string;
        separate?: boolean;
    };
    onClick?: () => void;
}

export default function MenuItem({ data, onClick }: MenuItemProps) {
    const { icon, title, to, separate } = data;
    return (
        <Button
            className={cx('menu-item', {
                separate,
            })}
            leftIcon={icon}
            onClick={onClick}
            to={to}
        >
            {title}
        </Button>
    );
}
