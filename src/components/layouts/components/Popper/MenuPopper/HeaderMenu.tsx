import React from 'react';
import classNames from 'classnames/bind';
import styles from './MenuPopper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

export interface HeaderMenuProps {
    title?: string;
    onBackClick: () => void;
}

export default function HeaderMenu({ title, onBackClick }: HeaderMenuProps) {
    return (
        <div className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBackClick}>
                <FontAwesomeIcon icon={faChevronLeft as IconProp} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}
