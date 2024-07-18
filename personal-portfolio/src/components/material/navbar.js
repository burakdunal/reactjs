// src/components/material/navbar.js
"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setHash, setHashAnotherPage } from "@/store/navClick";
import { usePathname } from "next/navigation";

export function StickyNavbar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleNavClick = (pathname, hash) => {
    if (pathname !== "/") {
      dispatch(setHashAnotherPage(hash));
    } else {
      dispatch(setHash(hash));
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Link
        href="/#bilgilerim"
        className="flex items-center"
        onClick={() => handleNavClick(pathname, "bilgilerim")}
      >
        <Button
          variant="text"
          color="gray"
          className="flex items-center p-2 nonecase"
        >
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            Özgeçmişim
          </Typography>
        </Button>
      </Link>
      {/* <Link
        href="/#son-yayinlar"
        className="flex items-center"
        onClick={() => handleNavClick(pathname, "son-yayinlar")}
      >
        <Button
          variant="text"
          color="gray"
          className="flex items-center p-2 nonecase"
        >
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            Son Yayınlar
          </Typography>
        </Button>
      </Link> */}
      {/* <Link href="/yayinlar" className="flex items-center">
        <Button
          variant="text"
          color="gray"
          className="flex items-center p-2 nonecase"
        >
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            Tüm Yayınlar
          </Typography>
        </Button>
      </Link> */}
      <Link
        href="/#iletisim"
        className="flex items-center"
        onClick={() => handleNavClick(pathname, "iletisim")}
      >
        <Button
          variant="text"
          color="gray"
          className="flex items-center p-2 nonecase"
        >
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            İletişim
          </Typography>
        </Button>
      </Link>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-30 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/#giris" onClick={() => handleNavClick(pathname, "giris")}>
          <Button
            variant="text"
            color="gray"
            className="flex items-center p-2 nonecase"
          >
            <Typography className="font-medium px-2">
              Giriş
            </Typography>
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
