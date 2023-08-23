import Navbar from '@/components/Layouts/Navbar';
import RootLayout from '@/components/Layouts/RootLayout';
import CategorySelection from '@/components/Ui/categorySelection';
import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { BsGpuCard, BsKeyboard, BsMotherboard, BsMouse3 } from 'react-icons/bs';
import { CgBox, CgSmartphoneRam } from 'react-icons/cg';
import { GiCpu, GiPowerGenerator } from 'react-icons/gi';
import { MdMonitor, MdOutlineStorage } from 'react-icons/md';

const categories = [
    {
        path: '/Processor',
        icon: <GiCpu />,
        label: 'Processor',
    }, {
        path: '/Motherboard',
        icon: <BsMotherboard />,
        label: 'Motherboard'
    }, {
        path: '/Ram',
        icon: <CgSmartphoneRam />,
        label: 'Ram'
    }, {
        path: '/Power-supply',
        icon: <GiPowerGenerator />,
        label: 'Power-supply'
    }, {
        path: '/Storage',
        icon: <MdOutlineStorage />,
        label: 'Storage'
    }, {
        path: '/Monitor',
        icon: <MdMonitor />,
        label: 'Monitor'
    }, {
        path: '/Casing',
        icon: <CgBox />,
        label: 'Casing'
    }, {
        path: '/Mouse',
        icon: <BsMouse3 />,
        label: 'Mouse'
    }, {
        path: '/Keyboard',
        icon: <BsKeyboard />,
        label: 'Keyboard'
    }, {
        path: '/Gpu',
        icon: <BsGpuCard />,
        label: 'Gpu'
    },
]

const PcBuilder = () => {
    const [userPcData, setUserPcData] = useState([])
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        if (typeof window !== undefined) {
            const data = JSON.parse(localStorage.getItem('PcData')) || []

            setUserPcData(data)
        }
    }, [])

    const openNotification = () => {
        api.open({
            message: 'Pc building completed',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    return (
        <div className='w-full'>
            <div>
                {
                    categories.map((category, index) =>
                        <CategorySelection key={index + 1} userPcData={userPcData} setUserPcData={setUserPcData} category={category} />
                    )
                }
            </div>
            <div className='flex justify-center'>
                {
                    userPcData.length >= 5 && <>
                        {contextHolder}
                        <button onClick={openNotification} className='p-2 w-full md:w-[30%] text-md font-bold border-slate-900 rounded-md bg-slate-900 text-white cursor-pointer'>Complete build</button>
                    </>
                }
            </div>
        </div>
    );
};

export default PcBuilder;


PcBuilder.getLayout = function getLayout(page) {
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