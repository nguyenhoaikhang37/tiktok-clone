import React, { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import images from '@/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src, alt, className, fallback, ...props }: any, ref: any) {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback ? fallback : images.noImage);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            alt={alt}
            src={_fallback || src}
            onError={handleError}
            {...props}
        />
    );
}
export default forwardRef(Image);
