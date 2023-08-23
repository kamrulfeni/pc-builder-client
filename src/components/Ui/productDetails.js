import React from 'react';
import { Rate } from 'antd';
import Image from 'next/image';

const ProductDetails = ({ product }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className=''>
                <Image alt='' className='md:p-10' src={product.image} width={300} height={300} layout="responsive" />
            </div>

            <div className=''>
                <h1 className=''>Title: {product?.productName}</h1>
                <p><span className='font-bold'>Category:</span> {product?.category}</p>
                <p><span className='font-bold'>Status:</span> {product?.status}</p>
                <h4 className='font-bold m-0'>Individual rating:</h4>
                <Rate className='mt-2' allowHalf defaultValue={product?.individualRating} />
                <h3>Reviews</h3>
                {
                    product?.reviews?.map(r => <>

                        <p>{r.reviewText}</p>
                    </>)
                }
                <h1>Price: {product?.price}</h1>
            </div>



            <div>
                <h1 className='text-xl'>Key features</h1>
                <ul>
                    <li className='font-semibold text-md md:text-lg'>
                        Brand: {product?.keyFeatures?.brand}
                    </li>
                    {product?.keyFeatures?.model && <li className='font-semibold text-md md:text-lg'>Model: {product?.keyFeatures?.model}</li>}

                    {product?.keyFeatures?.aspectRation && <li className='font-semibold  text-md md:text-lg'>Aspect Ratio: {product?.keyFeatures?.aspectRation}</li>}

                    {product?.keyFeatures?.display && <li className='font-semibold  text-md md:text-lg'>Display: {product?.keyFeatures?.display}</li>}


                    {product?.keyFeatures?.features && <li className='font-semibold  text-md md:text-lg'>Features: {product?.keyFeatures?.features}</li>}


                    {product?.keyFeatures?.port && <li className='font-semibold text-md md:text-lg'>Port: {product?.keyFeatures?.port}</li>}

                    {product?.keyFeatures?.cache && <li className='font-semibold text-md md:text-lg'>Cache: {product?.keyFeatures?.cache}</li>}

                    {product?.keyFeatures?.speed && <li className='font-semibold text-md md:text-lg'> Speed: {product?.keyFeatures?.speed}</li>}

                    {product?.keyFeatures?.GraphicsOutput && <li className='font-semibold text-md md:text-lg'> Graphics Output: {product?.keyFeatures?.GraphicsOutput}</li>}

                    {product?.keyFeatures?.SupportedMemory && <li className='font-semibold  text-md md:text-lg'> Supported Memory: {product?.keyFeatures?.SupportedMemory}</li>}

                    {product?.keyFeatures?.SupportedProcessors && <li className='font-semibold  text-md md:text-lg'> Supported Processors: {product?.keyFeatures?.SupportedProcessors}</li>}

                    {product?.keyFeatures?.capacity && <li className='font-semibold text-md md:text-lg'> Capacity: {product?.keyFeatures?.capacity}</li>}

                    {product?.keyFeatures?.frequency && <li className='font-semibold text-md md:text-lg'> Frequency: {product?.keyFeatures?.frequency}</li>}

                    {product?.keyFeatures?.Certification && <li className='font-semibold text-md md:text-lg'> Certification: {product?.keyFeatures?.Certification}</li>}

                    {product?.keyFeatures?.modularType && <li className='font-semibold text-md md:text-lg'> Modular Type: {product?.keyFeatures?.modularType}</li>}

                    {product?.keyFeatures?.frequencyRange && <li className='font-semibold  text-md md:text-lg'>Frequency Range: {product?.keyFeatures?.frequencyRange}</li>}

                    {product?.keyFeatures?.busType && <li className='font-semibold text-md md:text-lg'>Bus Type: {product?.keyFeatures?.busType}</li>}

                    {product?.keyFeatures?.coreClock && <li className='font-semibold text-md md:text-lg'>Core Clock: {product?.keyFeatures?.coreClock}</li>}

                    {product?.keyFeatures?.memoryClock && <li className='font-semibold  text-md md:text-lg'>Memory Clock: {product?.keyFeatures?.memoryClock}</li>}

                    {product?.keyFeatures?.dimension && <li className='font-semibold  text-md md:text-lg'>Dimension: {product?.keyFeatures?.dimension}</li>}

                    {product?.keyFeatures?.formFactory && <li className='font-semibold  text-md md:text-lg'>Form Factor: {product?.keyFeatures?.formFactory}</li>}

                    {product?.keyFeatures?.mtbf && <li className='font-semibold text-md md:text-lg'>MTBF: {product?.keyFeatures?.mtbf}</li>}

                    {product?.keyFeatures?.color && <li className='font-semibold text-md md:text-lg'>Color: {product?.keyFeatures?.color}</li>}

                    {product?.keyFeatures?.weight && <li className='font-semibold text-md md:text-lg'>Weight: {product?.keyFeatures?.weight}</li>}

                    {product?.keyFeatures?.voltage && <li className='font-semibold v'>Voltage: {product?.keyFeatures?.voltage}</li>}

                    {product?.keyFeatures?.dimensions && <li className='font-semibold  text-md md:text-lg'>Dimensions: {product?.keyFeatures?.dimensions}</li>}

                    {product?.keyFeatures?.type && <li className='font-semibold text-md md:text-lg'>Type: {product?.keyFeatures?.type}</li>}

                    {product?.keyFeatures?.buttons && <li className='font-semibold  text-md md:text-lg'>Buttons: {product?.keyFeatures?.buttons}</li>}

                    <li className='font-semibold text-md md:text-lg'><span className='font-bold'>Average rating:</span>
                        <Rate allowHalf defaultValue={product?.averageRating} />
                    </li>
                </ul>

            </div>
            <div>
                <h1>Description</h1>
                {
                    product.description ? <p>{product.description}</p> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores earum totam voluptatum dolore quia, aliquam esse. Facilis, eius accusamus officiis quis commodi doloribus nulla cupiditate repellat rem, nisi itaque laborum sint modi praesentium sapiente mollitia. Accusamus numquam fugiat officia quo itaque, tenetur, necessitatibus iure aspernatur, quod laborum quam repellendus minus repellat ut dolores architecto eum perferendis nam delectus suscipit? Officiis adipisci error sint doloribus veniam aspernatur officia quis est pariatur. Autem quae maxime dignissimos sit rerum impedit aperiam laudantium tenetur cum id earum, eum in minima accusantium ea qui, animi consectetur at delectus. Similique sequi nemo ut iste commodi.</p>
                }
            </div>
        </div>
    );
};

export default ProductDetails;