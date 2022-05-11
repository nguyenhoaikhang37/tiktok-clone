import { Button } from '@/components/common';
import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';

import styles from './MenuPopper.module.scss';

const cx = classNames.bind(styles);

export interface MenuItemProps {
    data: {
        icon: ReactElement;
        title: string;
        to?: string;
    };
}

export default function MenuItem({ data }: MenuItemProps) {
    const { icon, title, to } = data;
    return (
        <Button
            className={cx('menu-item')}
            leftIcon={icon}
            onClick={() => alert('Menu clicked')}
            to={to}
        >
            {title}
        </Button>
    );
}
