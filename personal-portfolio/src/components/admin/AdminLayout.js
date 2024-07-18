"use client";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import classes from "./AdminLayout.module.css";
import Link from "next/link";
import useCheckAuth from "@/hooks/useCheckAuth";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import store from "@/store";
import { setIsAuth } from "@/store/isAuth";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children, apiEndpoint, mainDomain }) => {
  const cookies = new Cookies();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();
  const { isAuthCheckedForInit, isAuth } = useCheckAuth();

  useEffect(() => {
    if (isAuthCheckedForInit && !isAuth) {
      router.push("/auth/login");
    }
  }, [isAuthCheckedForInit, isAuth, router]);

  if (!isAuthCheckedForInit) {
    // Eğer auth kontrolü henüz tamamlanmamışsa burada bir yükleme gösterebiliriz
    return <div>Loading...</div>;
  }

  const handleLogoutAction = async () => {
    try {
      const response = await fetch(`${apiEndpoint}auth/logout`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Check Auth failed");
      }

      const data = await response.json();

      if (response.status === 200 && data.status === "success") {
        cookies.remove("checkToken", { path: "/", domain: mainDomain });
        cookies.remove("user", { path: "/", domain: mainDomain });
        store.dispatch(setIsAuth(false));
        router.push("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    isAuthCheckedForInit &&
    isAuth && (
      <Layout className={classes.min_h_100}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={classes.demoLogoVertical} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            // items={[
            //   {
            //     key: '1',
            //     icon: <UserOutlined />,
            //     label: 'nav 1',
            //   },
            //   {
            //     key: '2',
            //     icon: <VideoCameraOutlined />,
            //     label: 'nav 2',
            //   },
            //   {
            //     key: '3',
            //     icon: <UploadOutlined />,
            //     label: 'nav 3',
            //   },
            // ]}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link href="/admin/nav1">Nav 1</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link href="/admin/nav2">Nav 2</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link href="/admin/nav3">Nav 3</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />}>
              <Link href="#" onClick={handleLogoutAction}>
                Logout
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  );
};
export default AdminLayout;
