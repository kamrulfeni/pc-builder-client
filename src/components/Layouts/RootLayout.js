import React from 'react';
import { Button, Layout, theme } from 'antd';
import Link from 'next/link';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useSession, signOut } from "next-auth/react"
import auth from '@/firebase/firebase.auth';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

const { Header, Content, Footer } = Layout;

const items = [
    {
        label: (
            <Link rel="noopener noreferrer" href="/categories/processor">
                Processor
            </Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link rel="noopener noreferrer" href="/categories/motherboard">
                Motherboard
            </Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link rel="noopener noreferrer" href="/categories/ram">
                RAM
            </Link>
        ),
        key: '2',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/powersupply">
                Power Supply Unit
            </Link>
        ),
        key: '3',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/storagedevice">
                Storage Device
            </Link>
        ),
        key: '4',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/monitor">
                Monitor
            </Link>
        ),
        key: '5',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/casing">
                Casing
            </Link>
        ),
        key: '6',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/mouse">
                Mouse
            </Link>
        ),
        key: '7',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/keyboard">
                Keyboard
            </Link>
        ),
        key: '8',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/graphics">
                Graphics
            </Link>
        ),
        key: '9',
    },
    {
        type: 'divider',
    }
];


const RootLayout = ({ children }) => {
    const { data: session } = useSession()
    const [user] = useAuthState(auth);
    const [{ signOut: logout }] = useSignOut(auth);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    //console.log(user);
    console.log(session);
    return (
        <Layout className="layout bg-white hidden md:flex">
            <Header
                style={{
                    backgroundColor: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <div>
                    <h1>
                        <Link
                            href="/"
                            style={{
                                color: "white",
                                padding: "5px 10px",
                                borderRadius: "3px",
                            }}
                        >
                            Thunder_Tech
                        </Link>
                    </h1>
                </div>

                <div className='flex gap-6'>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space style={{
                                color: 'white',
                                fontSize: '16px'
                            }}>
                                Categories
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    {
                        (session?.user?.email) ? <>
                            {
                                session?.user?.email && <button className='text-lg bg-transparent border-none text-white cursor-pointer' onClick={() => signOut()}>
                                    Logout
                                </button>
                            }
                        </>
                            : <Link style={{
                                color: 'white',
                                fontSize: '16px'
                            }} href='/login'>Login</Link>
                    }
                </div>
                <Link href='/pc-builder'><Button>
                    PC Builder
                </Button>
                </Link>
            </Header>
            <Content
                style={{
                    margin: '16px 0'
                }}
            >

                <div
                    className="container mx-auto"
                    style={{
                        background: colorBgContainer,
                        minHeight: '100vh',
                        color: 'black',
                        display: 'flex',
                        padding: "0 20px"
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: '#0F172A',
                    color: 'white'
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default RootLayout;