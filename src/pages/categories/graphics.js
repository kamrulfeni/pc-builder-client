import Navbar from '@/components/Layouts/Navbar';
import RootLayout from '@/components/Layouts/RootLayout';
import ComponentCard from '@/components/Ui/componentCard';
import React from 'react';

const Graphics = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10'>
            {
                products?.map(product => <ComponentCard key={product?._id} product={product} />)
            }
        </div>
    );
};

export default Graphics;


Graphics.getLayout = function getLayout(page) {
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


export const getStaticProps = async () => {
    const res = await fetch(`https://pc-bulder-server.vercel.app/products`)
    const productsData = await res.json()
    const data = productsData.data.filter(products => products?.category === 'Gpu')


    return {
        props: { products: data }

    }
}