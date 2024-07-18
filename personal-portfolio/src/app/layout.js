"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/store";
import { usePathname } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import { setIsAuth } from "@/store/isAuth";
import { API_BASE_URL, MAIN_DOMAIN } from "@/lib/urlConfig";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isAuth = pathname.startsWith("/auth");

  const [isAntDesignLoaded, setIsAntDesignLoaded] = useState(false);
  const [isMaterialTailwindLoaded, setIsMaterialTailwindLoaded] =
    useState(false);
  const [AntdRegistry, setAntdRegistry] = useState(null);
  const [ConfigProvider, setConfigProvider] = useState(null);
  const [MaterialTailwindComponents, setMaterialTailwindComponents] = useState(
    {}
  );

  useEffect(() => {
    if (isAdmin) {
      import("antd/dist/reset.css")
        .then(() => import("@ant-design/nextjs-registry"))
        .then((module) => {
          setAntdRegistry(() => module.AntdRegistry);
          return import("antd").then((antdModule) => {
            setConfigProvider(() => antdModule.ConfigProvider);
            setIsAntDesignLoaded(true);
          });
        })
        .catch((error) => console.error("Error loading Ant Design:", error));
    } else {
      import("./globals.css")
        .then(() => import("@material-tailwind/react"))
        .then((module) => {
          setMaterialTailwindComponents({
            ThemeProvider: module.ThemeProvider,
            StickyNavbar: require("@/components/material/navbar").StickyNavbar,
            BasicFooter: require("@/components/material/basic-footer")
              .BasicFooter,
          });
          setIsMaterialTailwindLoaded(true);
        })
        .catch((error) =>
          console.error("Error loading Material Tailwind:", error)
        );
    }
  }, [isAdmin]);

  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body>
        {isAdmin ? (
            isAntDesignLoaded ? (
              <AntdRegistry>
                <ConfigProvider>
                  <AdminLayout apiEndpoint={API_BASE_URL} mainDomain={MAIN_DOMAIN}>
                    {children}
                  </AdminLayout>
                </ConfigProvider>
              </AntdRegistry>
            ) : (
              <div>Loading Ant Design...</div>
            )
          ) : (
            isMaterialTailwindLoaded && (
              <MaterialTailwindComponents.ThemeProvider>
                {isAuth ? (
                  children
                ) : (
                  <>
                    <MaterialTailwindComponents.StickyNavbar />
                      {children}
                    <MaterialTailwindComponents.BasicFooter />
                  </>
                )}
              </MaterialTailwindComponents.ThemeProvider>
            )
          )}
        </body>
      </html>
    </Provider>
  );
}
