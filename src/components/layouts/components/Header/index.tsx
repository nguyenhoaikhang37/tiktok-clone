import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import images from '@/assets/images';
import styles from './Header.module.scss';
import Popper from '../Popper';
import SearchPopper from '../SearchPopper';
import { Button } from '@/components/common';

const cx = classNames.bind(styles);

export default function Header() {
    const [searchResults, setSearchResults] = useState<any>([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResults([1, 2]);
    //     }, 0);
    // }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>

                <Tippy
                    interactive
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex={-1} {...attrs}>
                            <Popper>
                                <SearchPopper />
                            </Popper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder='Tìm kiếm tài khoản và video'
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            {/* @ts-ignore */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* @ts-ignore */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            {/* @ts-ignore */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button onClick={() => console.log('Log in click')} btnType='text'>
                        Tải lên
                    </Button>
                    <Button onClick={() => alert('Log in click')} btnType='primary'>
                        Đăng nhập
                    </Button>
                </div>
            </div>
        </header>
    );
}
