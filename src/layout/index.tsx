import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import Queries from '../components/Queries';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
): MenuItem {
    return {
        key,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Queries', '1'),
];

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<string>('1');

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const renderContent = () => {
        switch (selectedMenu) {
            case '1':
                return <Queries />;
            default:
                return <div>Pilih menu untuk melihat konten.</div>;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                breakpoint="lg"
                collapsedWidth="0"
                zeroWidthTriggerStyle={{

                    display: 'none',
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={({ key }) => setSelectedMenu(key)} />
            </Sider>
            <Layout>
                {!collapsed && (
                    <Button
                        type="text"
                        icon={<MenuFoldOutlined />}
                        onClick={() => setCollapsed(true)}
                        className="lg:hidden "
                    />
                )}
                {collapsed && (
                    <div className='rounded-tr-lg rounded-br-lg absolute top-28 bg-black'>
                        <Button
                            type="text"
                            icon={<MenuUnfoldOutlined style={{ color: 'white' }} />}
                            onClick={() => setCollapsed(false)}
                        /></div>
                )}
                <Header style={{ background: colorBgContainer }} className='p-4'>
                    <h1 className='m-0 font-bold text-2xl'>Something something something, we win</h1>
                </Header>
                <Content style={{ margin: '0 16px' }}>

                    <div
                        style={{

                            minHeight: "100%",
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {renderContent()}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Code by Eri
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;