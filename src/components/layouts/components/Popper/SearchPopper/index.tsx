import { ReactElement } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Popper from '@/components/layouts/components/Popper';
import AccountItem from '../../AccountItem';
import styles from './SearchPopper.module.scss';

const cx = classNames.bind(styles);

const SearchPopper = ({ children }: { children: ReactElement }) => {
    return (
        <Tippy
            interactive
            visible={false}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex={-1} {...attrs}>
                    <Popper>
                        <div className={cx('wrapper')}>
                            <h4 className={cx('search-label')}>Accounts</h4>
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
        </Tippy>
    );
};

export default SearchPopper;
