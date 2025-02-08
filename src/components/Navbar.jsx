import { Avatar, Layout, Menu, Dropdown, Typography } from "antd";
import { useState } from "react";
import { HomeOutlined, UserOutlined, LogoutOutlined, SwapOutlined } from "@ant-design/icons";
import "../Styles/Navbar.css";

const { Sider } = Layout;
const { Text } = Typography;

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleSignOut = () => {
        console.log("Signing out...");
    };

    const userMenu = (
        <Menu>
            <Menu.Item key="signout" icon={<LogoutOutlined />} onClick={handleSignOut}>
                Sign Out
            </Menu.Item>
            <Menu.Item key="switch" icon={<SwapOutlined />} onClick={() => console.log("Switch Account")}>
                Switch Account
            </Menu.Item>
        </Menu>
    );

    const menuItems = [
        { key: "1", icon: <HomeOutlined />, label: "Option 1" },
        { key: "2", icon: <HomeOutlined />, label: "Option 2" },
        { key: "3", icon: <HomeOutlined />, label: "Option 3" },
        { key: "4", icon: <HomeOutlined />, label: "Option 4" },
    ];

    return (
        <Layout style={{ height: "100vh", overflow: "hidden" }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ height: "100vh", backgroundColor: "#262626", display: "flex", flexDirection: "column" }}
            >
                <div style={{ padding: "16px", textAlign: "center", color: "white", flexShrink: 0 }}>
                    <Dropdown overlay={userMenu} trigger={["click"]} placement="bottom">
                        <div style={{ cursor: "pointer" }}>
                            <Avatar size={collapsed ? 40 : 64} icon={<UserOutlined />} />
                            {!collapsed && <Text style={{ color: "white", display: "block", marginTop: 8 }}>John Doe</Text>}
                        </div>
                    </Dropdown>
                </div>

                <Menu
                    mode="inline"
                    items={menuItems}
                    style={{ flexGrow: 1, backgroundColor: "#262626", color: "white", border: "none" }}
                />
            </Sider>
        </Layout>
    );
};

export default Navbar;
