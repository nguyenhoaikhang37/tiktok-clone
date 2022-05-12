import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisV,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faRightFromBracket,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCircle,
    faCircleQuestion,
    faMessage,
    faUser,
} from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '@/assets/images';
import styles from './Header.module.scss';
import SearchPopper from '../Popper/SearchPopper';
import { Button } from '@/components/common';
import MenuPopper from '../Popper/MenuPopper';

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
    const currentUser = true;

    const USER_MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faUser as IconProp} />,
            title: 'Xem hồ sơ',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCircle as IconProp} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear as IconProp} />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket as IconProp} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

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
                    {currentUser && (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                placement='bottom'
                                content='Tải video lên'
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage as IconProp} />
                                </button>
                            </Tippy>
                        </>
                    )}

                    {!currentUser && (
                        <>
                            <Button
                                onClick={() => console.log('Log in click')}
                                btnType='text'
                            >
                                Tải lên
                            </Button>
                            <Button
                                onClick={() => alert('Log in click')}
                                btnType='primary'
                            >
                                Đăng nhập
                            </Button>
                        </>
                    )}
                    <div className={cx('more-btn-wrapper')}>
                        <MenuPopper
                            items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS}
                            onMenuChange={handleMenuItemChange}
                        >
                            <>
                                {currentUser && (
                                    <img
                                        src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f7d1af728f990606c8dccaf101610c67.jpeg?x-expires=1652533200&x-signature=vafs4kncqJvBTEnThnmJOne%2FCTg%3D'
                                        alt='NHK'
                                        className={cx('user-avatar')}
                                    />
                                )}
                                {!currentUser && (
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisV as IconProp} />
                                    </button>
                                )}
                            </>
                        </MenuPopper>
                    </div>
                </div>
            </div>
        </header>
    );
}
