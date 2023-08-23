'use client'
import Navbar from '@/components/Layouts/Navbar';
import RootLayout from '@/components/Layouts/RootLayout';
import ProductDetails from '@/components/Ui/productDetails';
import React from 'react';



const SingleProduct = ({ product }) => {
    return (
        <div>
            <ProductDetails product={product}></ProductDetails>
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
    const res = await fetch('http://localhost:5000/products')
    const products = await res.json()
    const paths = products?.data.map(product => ({
        params: { productId: product._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/products/${params.productId}`)
    const data = await res.json()
    console.log(data)

    return {
        props: { product: data.data }

    }
}