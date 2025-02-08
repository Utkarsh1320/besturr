import { Layout, Menu } from "antd"
import { useState } from "react";
import { HomeOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const menuItems = [
        { key: '1', icon: <HomeOutlined />, label: 'option1' },
        { key: '2', icon: <HomeOutlined />, label: 'option2' },
        { key: '3', icon: <HomeOutlined />, label: 'option3' },
        { key: '4', icon: <HomeOutlined />, label: 'option4' },
    ]
    return (
        <div>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100vh' }}>
                <Menu mode="inline" items={menuItems} style={{ backgroundColor: '#262626', color: '#000' }} />
            </Sider>
        </div>
    )
}

export default Navbar
