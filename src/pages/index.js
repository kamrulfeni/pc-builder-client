import RootLayout from '@/components/Layouts/RootLayout';
import CategoriesSection from '@/components/Ui/categoriesSection';
import React from 'react';
import dynamic from 'next/dynamic'
import Hero from '@/components/Ui/hero';
import Navbar from '@/components/Layouts/Navbar';

const HomePage = ({ products }) => {

  const ComponentCard = dynamic(() => import('@/components/Ui/componentCard'), {
    loading: () => <p>Loading...</p>,
  })



  return (
    <div>
      <section className='w-full'>
        <Hero></Hero>
      </section>
      <section className='my-10'>
        <h1 className='text-lg md:text-2xl lg:text-3xl text-center'>Featured Products</h1>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
          {
            products?.map(product => <ComponentCard key={product?._id} product={product} />)
          }
        </div>
      </section>
      <section className='my-10'>
        <h1 className='text-lg md:text-2xl lg:text-3xl text-center'>Featured Categories</h1>
        <CategoriesSection className='w-full' />
      </section>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
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
  const randomData = productsData.data.sort(() => Math.random() - 0.5)
  const data = randomData.slice(0, 6)


  return {
    props: { products: data }

  }
}

