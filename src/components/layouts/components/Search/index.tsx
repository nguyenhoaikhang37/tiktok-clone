import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { SearchIcon } from '@/components/common/Icons';
import SearchPopper from '../Popper/SearchPopper';
import styles from './Search.module.scss';
import IUser from '@/models/User';
import useDebounce from '@/hooks/useDebounce';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const debounceValue = useDebounce<string>(searchValue);

    const [searchResults, setSearchResults] = useState<IUser[]>([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResults([]);
            return;
        }

        setLoading(true);

        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                debounceValue
            )}&type=less`
        )
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setLoading(false);
                setSearchResults(res.data);
            })
            .catch((error) => {
                setLoading(false);
                console.log('⭐️ · file: index.tsx · line 26 · error', error);
            });
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current?.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <SearchPopper
            visible={showResult && searchResults.length > 0}
            onClickOutside={handleHideResult}
            data={searchResults}
        >
            <div className={cx('search')}>
                <input
                    placeholder='Tìm kiếm tài khoản và video'
                    spellCheck={false}
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {Boolean(searchValue) && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark as IconProp} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner as IconProp}
                    />
                )}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </SearchPopper>
    );
};

export default Search;
