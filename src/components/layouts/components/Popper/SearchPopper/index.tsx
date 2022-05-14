import { ReactElement } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Popper from '@/components/layouts/components/Popper';
import AccountItem from '../../AccountItem';
import styles from './SearchPopper.module.scss';

const cx = classNames.bind(styles);

interface SearchPopperProps {
    children: ReactElement;
    visible?: boolean;
    onClickOutside?: () => void;
}

const SearchPopper = ({ children, ...props }: SearchPopperProps) => {
    return (
        <HeadlessTippy
            {...props}
            interactive
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex={-1} {...attrs}>
                    <Popper>
                        <div className={cx('wrapper')}>
                            <h4 className={cx('search-label')}>Tài khoản</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </div>
                    </Popper>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
};

export default SearchPopper;
