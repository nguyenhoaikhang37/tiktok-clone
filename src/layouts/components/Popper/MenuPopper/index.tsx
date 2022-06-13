import React, { ReactElement, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Popper from '@/layouts/components/Popper';
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
    hideOnClick?: boolean;
    onMenuChange: (item: IMenuItem) => void;
}

const MenuPopper = ({
                        children,
                        items,
                        hideOnClick = false,
                        onMenuChange,
                    }: MenuPopperProps) => {
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

    const renderResult = (attrs: { 'data-placement': any, 'data-reference-hidden'?: string | undefined, 'data-escaped'?: string | undefined }) => (
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
    );

    const handleResetToFirstMenu = () => setHistory(prev => prev.slice(0, 1))

    return (
        <Tippy
            hideOnClick={hideOnClick}
            offset={[12, 8]}
            delay={[0, 500]}
            interactive
            placement='bottom-end'
            onHide={handleResetToFirstMenu}
            render={renderResult}
        >
            <div className={cx('wrapper')}>{children}</div>
        </Tippy>
    );
};

export default MenuPopper;
