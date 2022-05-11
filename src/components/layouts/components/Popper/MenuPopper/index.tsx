import React, { ReactElement } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Popper from '@/components/layouts/components/Popper';
import styles from './MenuPopper.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

interface MenuPopperProps {
    children: ReactElement;
    items: {
        icon: ReactElement;
        title: string;
        to?: string;
    }[];
}

const MenuPopper = ({ children, items }: MenuPopperProps) => {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem data={item} key={index} />);
    };

    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <Popper>
                        <div className={cx('wrapper')}>{renderItems()}</div>
                    </Popper>
                </div>
            )}
        >
            <div className={cx('wrapper')}>{children}</div>
        </Tippy>
    );
};

export default MenuPopper;
