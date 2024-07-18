"use client";

import BlogPostCard from "@/components/material/blog-post-card";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";

export function AllBlogsSection({posts}) {
  return (
    <section className="grid min-h-screen place-items-center p-8">
      <Tabs value="1" className="mx-auto max-w-7xl w-full mb-16 ">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90">
            {posts.map(({ name, id }) => (
              <Tab key={id} value={id}>
                {name}
              </Tab>
            ))}
          </TabsHeader>
          <Typography variant="h2" className="mb-2 mt-2">
            Trends News
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="max-w-3xl mb-10 text-center text-gray-500"
          >
            Check out what&apos;s new in the web development and tech worls! Do
            not forget to subscribe to our blog and we will notify you with the
            latest news.
          </Typography>
          <TabsBody>
            {posts.map(({ name, id, blogs}) => (
              <TabPanel
                className="grid gap-4 md:grid-cols-3 sm:grid-cols-1"
                key={id}
                value={id}
              >
                {blogs.map(({ img, title, url, excerpt, createdAt }) => (
                  <div key={url} className="py-5">
                    <BlogPostCard
                      url={url}
                      img={img}
                      title={title}
                      excerpt={excerpt}
                      cdate={createdAt}
                      category={{name, id}}
                    />
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </div>
      </Tabs>
      <Button
        variant="text"
        size="lg"
        color="gray"
        className="flex items-center gap-2 mt-24"
      >
        <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
        VIEW MORE
      </Button>
      {/* <Typography variant="h6" className="mb-2">
        Latest Blog Posts
      </Typography>
      <Typography variant="h1" className="mb-2">
        Trends News
      </Typography>
      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-36 text-center text-gray-500"
      >
        Check out what&apos;s new in the web development and tech worls! Do not
        forget to subscribe to our blog and we will notify you with the latest
        news.
      </Typography> */}
    </section>
  );
}
