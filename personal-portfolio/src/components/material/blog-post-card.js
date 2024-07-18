import React from "react";
import Image from "next/image";
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { CalendarIcon, TagIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { tr } from 'date-fns/locale';

export function BlogPostCard({ url, img, title, excerpt, cdate, category }) {
  
  const formattedDate = format(new Date(cdate), 'dd MMM yyyy', { locale: tr });
  return (
    <Card className="border blog-card-min-500">
      <CardHeader>
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <TagIcon className="h-6 w-6 text-black" />
            <Typography variant="small" color="blue" className="!font-medium">
              {category.name}
            </Typography>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-6 w-6 text-black" />
            <Typography
              variant="small"
              color="gray"
              className="!font-medium"
            >
              {formattedDate}
            </Typography>
          </div>
        </div>
        <Link
          href={`/yayinlar/${url}`}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </Link>
        <Typography className="mb-3 font-normal !text-gray-500">
          {excerpt}
        </Typography>
        <div className="absolute bottom-4 left-0 w-full flex ps-4">
          <Link href={`/yayinlar/${url}`}>
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              Devamını Oku
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

export default BlogPostCard;
