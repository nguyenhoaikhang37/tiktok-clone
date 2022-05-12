import React, { ReactElement, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Popper from '@/components/layouts/components/Popper';
import styles from './MenuPopper.module.scss';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

interface IMenuItem {
    icon?: ReactElement;
    title: string;
    to?: string;
    children?: any;
}

interface IHistory {
    data: IMenuItem[];
    title?: string;
}

interface MenuPopperProps {
    children: ReactElement;
    items: IMenuItem[];
    onMenuChange: (item: IMenuItem) => void;
}

const MenuPopper = ({ children, items, onMenuChange }: MenuPopperProps) => {
    const [history, setHistory] = useState<IHistory[]>([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const renderItems = () => {
        return currentMenu.data.map((item, index) => (
            <MenuItem
                data={item}
                key={index}
                onClick={() => {
                    const isParent = !!item.children;
                    if (isParent) {
                        setHistory((prev) => [...prev, item.children]);
                    } else {
                        onMenuChange(item);
                    }
                }}
            />
        ));
    };

    const handleBackBtnClick = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <Tippy
            offset={[12, 8]}
            delay={[0, 700]}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <Popper>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={currentMenu.title}
                                onBackClick={handleBackBtnClick}
                            />
                        )}
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
