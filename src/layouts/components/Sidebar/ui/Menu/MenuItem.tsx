import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

type MenuItemProps = {
    title: string;
    icon: ReactNode;
    activeIcon: ReactNode;
    to: string;
};

const MenuItem = ({ title, to, icon, activeIcon }: MenuItemProps) => {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
};

export default MenuItem;
