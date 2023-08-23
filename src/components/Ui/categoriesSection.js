import { Card } from 'antd';
import React from 'react';
import { GiCpu, GiPowerGenerator } from "react-icons/gi";
import { BsMotherboard, BsMouse3, BsKeyboard, BsGpuCard } from "react-icons/bs";
import { CgSmartphoneRam, CgBox } from "react-icons/cg";
import { MdOutlineStorage, MdMonitor } from "react-icons/md";
import Link from 'next/link';

const categories = [
    {
        path: '/categories/processor',
        icon: <GiCpu />,
        label: 'Processor',
    }, {
        path: '/categories/motherboard',
        icon: <BsMotherboard />,
        label: 'Motherboard'
    }, {
        path: '/categories/ram',
        icon: <CgSmartphoneRam />,
        label: 'Ram'
    }, {
        path: '/categories/powersupply',
        icon: <GiPowerGenerator />,
        label: 'Power supply'
    }, {
        path: '/categories/storagedevice',
        icon: <MdOutlineStorage />,
        label: 'Storage device'
    }, {
        path: '/categories/monitor',
        icon: <MdMonitor />,
        label: 'Monitor'
    }, {
        path: '/categories/casing',
        icon: <CgBox />,
        label: 'Casing'
    }, {
        path: '/categories/mouse',
        icon: <BsMouse3 />,
        label: 'Mouse'
    }, {
        path: '/categories/keyboard',
        icon: <BsKeyboard />,
        label: 'Keyboard'
    }, {
        path: '/categories/gpu',
        icon: <BsGpuCard />,
        label: 'GPU'
    },
]

const CategoriesSection = () => {
    return (
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5 lg:gap-8' >
            {
                categories.map((category, index) => (
                    <div key={index + 1} className='w-full lg:w-[260px]'>
                        <Link href={category.path}>
                            <Card className='text-center p-0'>
                                <h1 className='text-5xl my-2'>{category.icon}</h1>
                                <h1 className='text-xl'>{category.label}</h1>
                            </Card>
                        </Link>
                    </div>))
            }
        </div>
    );
};

export default CategoriesSection;