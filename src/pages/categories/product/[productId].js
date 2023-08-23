'use client'
import Navbar from '@/components/Layouts/Navbar';
import RootLayout from '@/components/Layouts/RootLayout';
import ProductDetails from '@/components/Ui/productDetails';
import React from 'react';



const SingleProduct = ({ product }) => {
    return (
        <div>
{/* 
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))} */}
            <ProductDetails key={product.id} product={product}></ProductDetails>
        </div>
    );
};

export default SingleProduct;


SingleProduct.getLayout = function getLayout(page) {
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

export const getStaticPaths = async () => {
    const res = await fetch('https://pc-bulder-server.vercel.app/products')
    const products = await res.json()
    const paths = products?.data.map(product => ({
        params: { productId: product._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://pc-bulder-server.vercel.app/products/${params.productId}`)
    const data = await res.json()
    //console.log(data)

    return {
        props: { product: data.data }

    }
}