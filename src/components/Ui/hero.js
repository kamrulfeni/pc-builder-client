/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const Hero = () => {
    return (
        <div>
            <Image layout="responsive" alt='fd' src='https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal/desktop-deal-live-now-home-banner-982x500.webp' width={400} height={400} />
        </div>
    );
};

export default Hero;