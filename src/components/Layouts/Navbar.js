import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useSession, signOut } from "next-auth/react"
import auth from '@/firebase/firebase.auth';
import {
    DatabaseOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { TbHandClick } from 'react-icons/tb';


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Category', 'sub1', <DatabaseOutlined />, [
        getItem(<Link rel="noopener noreferrer" href="/categories/processor">
            Processor
        </Link>, '0'),
        getItem(<Link rel="noopener noreferrer" href="/categories/motherboard">
            Motherboard
        </Link>, '1'),
        getItem(<Link rel="noopener noreferrer" href="/categories/ram">
            RAM
        </Link>, '2'),
        getItem(<Link rel="noopener noreferrer" href="/categories/powersupply">
            Power Supply Unit
        </Link>, '3'),
        getItem(<Link rel="noopener noreferrer" href="/categories/storagedevice">
            Storage Device
        </Link>, '4'),
        getItem(<Link rel="noopener noreferrer" href="/categories/monitor">
            Monitor
        </Link>, '5'),
        getItem(<Link rel="noopener noreferrer" href="/categories/casing">
            Casing
        </Link>, '6'),
        getItem(<Link rel="noopener noreferrer" href="/categories/mouse">
            Mouse
        </Link>, '7'),
        getItem(<Link rel="noopener noreferrer" href="/categories/keyboard">
            Keyboard
        </Link>, '8'),
        getItem(<Link rel="noopener noreferrer" href="/categories/graphics">
            Graphics
        </Link>, '9'),

    ]),

];

const Navbar = ({ children }) => {
    const { data: session } = useSession()
    const [user] = useAuthState(auth);
    const [{ signOut: logout }] = useSignOut(auth);
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout className='md:hidden'
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu theme="dark" mode="inline" items={items} />

                {
                    (session?.user?.email || user?.email) ? <>
                        {
                            session?.user?.email && <Menu
                                theme="dark"
                                mode="inline"
                                items={[
                                    {
                                        key: '1',
                                        icon: <UserOutlined />,
                                        label: <button className='text-lg bg-transparent border-none text-white cursor-pointer' onClick={() => signOut()}>
                                            Logout
                                        </button>,
                                    }
                                ]}
                            />
                        }
                        {
                            user?.email && <Menu
                                theme="dark"
                                mode="inline"
                                items={[
                                    {
                                        key: '1',
                                        icon: <UserOutlined />,
                                        label: <button className='text-lg bg-transparent border-none text-white cursor-pointer' onClick={() => logout()}>
                                            Logout
                                        </button>,
                                    }
                                ]}
                            />
                        }

                    </>
                        : <Menu
                            theme="dark"
                            mode="inline"
                            items={[
                                {
                                    key: '1',
                                    icon: <UserOutlined />,
                                    label: <Link style={{
                                        color: 'white',
                                        fontSize: '16px'
                                    }} href='/login'>Login</Link>
                                }
                            ]}
                        />
                }
                <Menu
                    theme="dark"
                    mode="inline"
                    items={[
                        {
                            key: '1',
                            icon: <TbHandClick />,
                            label: <Link href='/pc-builder'><Button>
                                PC Builder
                            </Button>
                            </Link>
                        }
                    ]}
                />
            </Sider>
            <Layout>
                <Header

                    style={{
                        padding: 0,
                    }}
                ><div>
                        <h1 className='text-center text-md'>
                            <Link
                                href="/"
                                style={{
                                    color: "white",
                                }}
                            >
                                Thunder_Tech
                            </Link>
                        </h1>
                    </div>
                </Header>
                <Content>
                    <div
                        style={{
                            padding: 10,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        {
                            children
                        }
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Navbar;