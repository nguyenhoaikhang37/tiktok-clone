import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisV,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import images from '@/assets/images';
import styles from './Header.module.scss';
import SearchPopper from '../Popper/SearchPopper';
import { Button } from '@/components/common';
import MenuPopper from '../Popper/MenuPopper';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia as IconProp} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'eng',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion as IconProp} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard as IconProp} />,
        title: 'Phím tắt trên bàn phím',
    },
];

export default function Header() {
    const [searchResults, setSearchResults] = useState<any>([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResults([1, 2]);
    //     }, 0);
    // }, []);

    const handleMenuItemChange = (menuItem: any) => {
        switch (menuItem.type) {
            case 'language':
                console.log('language', menuItem);
                break;

            default:
                console.log('default func');
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>

                <SearchPopper>
                    <div className={cx('search')}>
                        <input
                            placeholder='Tìm kiếm tài khoản và video'
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark as IconProp} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner as IconProp}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
                        </button>
                    </div>
                </SearchPopper>

                <div className={cx('actions')}>
                    <Button onClick={() => console.log('Log in click')} btnType='text'>
                        Tải lên
                    </Button>
                    <Button onClick={() => alert('Log in click')} btnType='primary'>
                        Đăng nhập
                    </Button>

                    <div className={cx('more-btn-wrapper')}>
                        <MenuPopper
                            items={MENU_ITEMS}
                            onMenuChange={handleMenuItemChange}
                        >
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisV as IconProp} />
                            </button>
                        </MenuPopper>
                    </div>
                </div>
            </div>
        </header>
    );
}
