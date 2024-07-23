"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import {
  ArrowDownTrayIcon,
  BookOpenIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

function Hero({user, backendEndpoint}) {
  return (
    <header className="!flex h-[55vh] w-full items-center justify-between lg:px-10 sm:px-3 hero-mb lg:mt-0 sm:mt-44">
      <Image
        id="giris"
        width={1200}
        height={1200}
        src={"/image/image8.svg"}
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
        priority={true}
        placeholder = 'empty'
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <div className="flex flex-col md:flex-row lg:flex-row gap-6">
              <div className="flex flex-col sm:items-center md:flex-row lg:flex-row gap-4">
                <Image
                  width={1024}
                  height={1024}
                  alt="avatar"
                  src={`${backendEndpoint}/${user.img}`}
                  className="w-40 rounded-xl"
                />
                <div>
                  <Typography variant="h2" className="!text-gray-900">
                    {user.fullname}
                  </Typography>
                  <div className="flex items-center space-x-2">
                    <BookOpenIcon className="h-6 w-6 text-black" />
                    <Typography variant="paragraph" color="gray">
                    {user.title}
                    </Typography>
                  </div>
                  <div className="flex items-center space-x-2">
                    <EnvelopeIcon className="h-6 w-6 text-black" />
                    <Link href={`mailto:${user.email}`}>
                      <Typography variant="paragraph" color="black">
                      {user.email}
                      </Typography>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-6 w-6 text-black" />
                    <Typography variant="paragraph" color="gray">
                    {user.location}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <Typography
              variant="paragraph"
              className="mb-10 mt-6 !text-gray-900"
            >
              {user.about}
            </Typography>
            {/* <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Link target="_blank" href={`http://localhost:3500/${user.resumeUrl}`}>
                <Button variant="outlined" className="flex items-center gap-3">
                  <ArrowDownTrayIcon className="h-6 w-6 text-black" />
                  ÖZGEÇMİŞİM
                </Button>
              </Link>
            </div> */}
          </Card>
        </div>
      </div>
    </header>
  );
}
export default Hero;
