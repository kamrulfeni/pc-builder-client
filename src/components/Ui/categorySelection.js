
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const CategorySelection = ({ category, userPcData, setUserPcData }) => {

    const handleCancel = (id) => {
        const data = JSON.parse(localStorage.getItem('PcData')) || [];
        const updatedData = data.filter((d) => d._id !== id);
        localStorage.setItem('PcData', JSON.stringify(updatedData));
        setUserPcData(updatedData)
    }


    const pcInfo = userPcData.find(pcData => pcData.category === category.label)

    return (
        <div className='bg-white shadow-md shadow-slate-200 flex my-4 rounded-md text-slate-900 px-2'>
            <dic className='flex items-center justify-center w-[10%]'>
                <p className='text-3xl md:text-5xl lg:text-6xl text-slate-900 m-7'>{category.icon}</p>
            </dic>
            <div className='w-[70%] px-5'>
                <div>
                    <p className='font-bold text-[10px] md:text-[12px] lg:text-[14px]'>{category.label}</p>
                </div>
                <div>
                    {
                        pcInfo && <div>
                            <h3 className='leading-none text-[10px] sm:text-lg md:text-[17px] lg:text-[20px] my-1'>{pcInfo.productName}</h3>
                            <p className='mt-1 xs:text-[10px] sm:text-xl lg:text-[20px] font-bold text-start flex items-center'>{pcInfo.price}<TbCurrencyTaka /></p>
                        </div>
                    }
                </div>
            </div>
            <div className='w-[20%] flex flex-col md:flex-row justify-center items-center'>
                {
                    pcInfo ? <div className='flex justify-center items-center lg:p-5'>
                        <Image className='rounded-md xs:w-full sm:w-14 md:w-full' src={pcInfo.image} alt='' width={80} height={80} layout="responsive" />
                    </div> : <div className='flex justify-center items-center'></div>
                }
                <div className='flex items-center justify-center w-full'>
                    {
                        !pcInfo && <div className='flex w-full justify-center items-center'>
                            <Link className='flex w-full justify-center items-center' href={`/pc-builder/choseComponent${category.path}`}>
                                <button className='p-2 w-full text-[5px] sm:text-[10px] font-bold border-slate-900 rounded-md bg-slate-900 text-white cursor-pointer'>Chose</button>
                            </Link>
                        </div>
                    }
                    {
                        pcInfo && <div className='flex w-full justify-center items-center'>
                            <button onClick={() => { handleCancel(pcInfo._id) }} className='p-2 w-full text-[5px] sm:text-[10px] font-bold border-slate-900 rounded-md bg-slate-900 text-white cursor-pointer'>Cancel</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CategorySelection;