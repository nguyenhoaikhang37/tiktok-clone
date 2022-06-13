import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { SearchIcon } from '@/components/common/Icons';
import SearchPopper from '../Popper/SearchPopper';
import styles from './Search.module.scss';
import IUser from '@/models/User';
import { useDebounce } from '@/hooks';

import * as searchApi from '@/apis/searchApi';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(searchValue);

    const [searchResults, setSearchResults] = useState<IUser[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResults([]);
            return;
        }

        (async () => {
            try {
                setLoading(true);
                const response = await searchApi.search({
                    q: debouncedValue,
                    type: 'less',
                });
                setSearchResults(response.data);
            } catch (error) {
                setLoading(false);
            }
            setLoading(false);
        })();
    }, [debouncedValue]);

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
                    onChange={(e) => {
                        if (searchValue.length === 0 && e.target.value.trim() === '')
                            return;
                        setSearchValue(e.target.value);
                    }}
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
                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <SearchIcon />
                </button>
            </div>
        </SearchPopper>
    );
};

export default Search;
