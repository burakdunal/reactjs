"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BlogPostCard from "@/components/material/blog-post-card";
import Link from "next/link";

export function LatestBlogPosts(props) {
  return (
    <section id="son-yayinlar" className="py-40 px-8">
      <div className="container mx-auto mb-12">
        <Typography variant="h3" color="blue-gray">
          Son yayınlarıma göz atın
        </Typography>
        <Typography variant="p" color="blue-gray">
          Çok yakında
        </Typography>
      </div>
      {/* <div className="container mx-auto grid grid-cols-1 gap-10 md:gap-6 lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {props.latestBlogs.map((blog, idx) => (
          <BlogPostCard
            key={idx}
            url={blog.url}
            img={blog.img}
            title={blog.title}
            excerpt={blog.excerpt}
            cdate={blog.createdAt}
            category={blog.blogCategories[0]}
          />
        ))}
        <Card className="relative grid h-full w-full place-items-center overflow-hidden bg-black">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full h-full" style={{paddingTop: "34%"}}>
            <Typography variant="h3" className="mt-4" color="white">
              Bütün yayınlarımı keşfedin
            </Typography>
            <Typography color="white" className="py-4 font-normal">
              Bla bla bla konularında içerik üretiyorum.
            </Typography>
            <div className="absolute bottom-4 left-0 w-full flex">
              <Link href="/yayinlar">
                <Button
                  variant="text"
                  color="white"
                  className="flex items-center gap-2"
                >
                  HEPSİNİ GÖR
                  <ArrowRightIcon
                    strokeWidth={3}
                    className="h-3.5 w-3.5 text-white"
                  />
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div> */}
    </section>
  );
}

export default LatestBlogPosts;
