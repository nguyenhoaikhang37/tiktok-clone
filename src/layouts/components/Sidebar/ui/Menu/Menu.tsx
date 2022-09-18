import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = ({ children }: { children: ReactNode }) => {
    return <nav>{children}</nav>;
};

export default Menu;
