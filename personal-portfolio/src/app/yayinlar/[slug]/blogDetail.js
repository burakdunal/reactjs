"use client";

import Image from "next/image";
import { Button, Chip, IconButton, Typography } from "@material-tailwind/react";
import { CalendarIcon, TagIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

function BlogDetails({ blog }) {
  const formattedDate = format(new Date(blog.createdAt), "dd MMM yyyy", {
    locale: tr,
  });

  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-lg">
        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6">
          {blog.title}
        </Typography>
        {/* <div className="flex gap-2">
          <Chip value={blog.createdAt} variant="outlined" icon={<CalendarIcon />} />
          <Chip value={blog.blogCategories[0].name} variant="outlined" icon={<TagIcon />} />
        </div> */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <TagIcon className="h-6 w-6 text-black" />
            <Typography variant="small" color="blue" className="!font-medium">
              {blog.blogCategories[0].name}
            </Typography>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-6 w-6 text-black" />
            <Typography variant="small" color="gray" className="!font-medium">
              {formattedDate}
            </Typography>
          </div>
        </div>
        <Image
          width={768}
          height={500}
          src={blog.img}
          alt="post"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography className="my-12 font-normal !text-gray-500">
          {blog.excerpt}
        </Typography>
        <div className="border-t my-4" />
        <Typography className="my-10 font-normal !text-gray-500">
          {blog.descr}
        </Typography>
        <div className="border-t my-4" />
        <div className="gap-2 flex items-center">
          <Typography variant="h6" color="blue-gray">
            Bu yayını paylaş:
          </Typography>
          <Button variant="text" size="md" className="p-2">
            <img className="h-7 w-7" src="/logos/facebook.png" alt="Facebook" />
          </Button>
          <Button variant="text" size="md" className="p-2">
            <img className="h-7 w-7" src="/logos/linkedin.png" alt="LinkedIn" />
          </Button>
          <Button variant="text" size="md" className="p-2">
            <img className="h-7 w-7" src="/logos/twitter.png" alt="X" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
