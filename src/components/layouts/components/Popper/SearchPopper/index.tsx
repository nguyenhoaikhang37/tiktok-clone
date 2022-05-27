import { ReactElement } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Popper from '@/components/layouts/components/Popper';
import AccountItem from '../../AccountItem';
import styles from './SearchPopper.module.scss';
import IUser from '@/models/User';

const cx = classNames.bind(styles);

interface SearchPopperProps {
    children: ReactElement;
    visible?: boolean;
    data: IUser[];
    onClickOutside?: () => void;
}

const SearchPopper = ({ children, data, ...props }: SearchPopperProps) => {
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                {...props}
                interactive
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex={-1} {...attrs}>
                        <Popper>
                            <div className={cx('wrapper')}>
                                <h4 className={cx('search-label')}>Tài khoản</h4>
                                {data.map((item: IUser) => (
                                    <AccountItem key={item.id} data={item} />
                                ))}
                            </div>
                        </Popper>
                    </div>
                )}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
};

export default SearchPopper;
