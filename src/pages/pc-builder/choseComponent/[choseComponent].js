import Navbar from '@/components/Layouts/Navbar';
import RootLayout from '@/components/Layouts/RootLayout';
import Image from 'next/image';
//import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { TbCurrencyTaka } from "react-icons/tb";

const ChoseComponent = ({ products }) => {
    const router = useRouter()

    const addProduct = (product) => {
        const data = JSON.parse(localStorage.getItem('PcData')) || []
        data.push(product)
        localStorage.setItem('PcData', JSON.stringify(data))
        router.push('/pc-builder')
    }

    return (
        <div className='w-full'>
            {
                products.map(product => <>
                    <div key={product?._id} className='bg-white shadow-md shadow-slate-200 flex flex-col md:flex-row my-4 rounded-md text-slate-900 px-4'>
                        <div className='text-center xl:w-[15%]'>
                            <Image src={product.image} alt='' width={180} height={180} />
                        </div>
                        <div className='w-[70%] pl-5'>
                            <div className='inline border-2 border-white'>
                                <h1 className='text-[13px] md:text-[16px] lg:text-[20px]'>{product.productName}</h1>
                                <p>Category: {product.category}</p>
                                <p>Status: {product.status}</p>
                                <p>Rating: {product.rating}</p>
                                <h2 className='flex items-center'>{product.price}<TbCurrencyTaka /></h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full md:w-[15%]'>
                            <button onClick={() => addProduct(product)} className='p-2 w-full text-md font-bold border-slate-900 rounded-md bg-slate-900 text-white cursor-pointer'>Add To Builder</button>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default ChoseComponent;

ChoseComponent.getLayout = function getLayout(page) {
    return (
        <>
            <RootLayout >
                {page}
            </RootLayout>
            <Navbar>
                {page}
            </Navbar>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/products`)
    const productsData = await res.json()
    const data = productsData.data.filter(products => products?.category === params.choseComponent)

    return {
        props: { products: data }

    }
}
