import { Button, Card, Col, Rate } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ComponentCard = ({ product }) => {
    return (
        <div className='flex items-center'>
            <Card>
                <div>
                    <Image alt="example" src={product.image} priority width={200} height={200} layout="responsive" />
                </div>
                <div className='h-[210px] md:h-[170px] lg:h-[190px] xl:h-[210px]'>
                    <h1 className='xs:text-xs sm:text-[17px]'>{product.productName.slice(0, 45)}</h1>
                    <p className='xs:leading-3 xs:text-xs md:text-sm'>Category: {product.category}</p>
                    <p className='xs:leading-3 xs:text-xs md:text-sm'>Price: {product.price}</p>
                    <p className='xs:leading-3 xs:text-xs md:text-sm'>Status: {product.status}</p>
                </div>
                <div className='mb-1'>
                    <Rate allowHalf defaultValue={product.rating} />
                </div>
                <div>
                    <Link className='flex justify-center w-full border-slate-900 rounded-md bg-slate-900 text-white cursor-pointer' href={`/categories/product/${product._id}`}>
                        <Button className='w-full text-md font-bold border-slate-900 bg-slate-900 text-white'>View Details</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default ComponentCard;