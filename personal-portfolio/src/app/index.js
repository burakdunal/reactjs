// src/app/index.js
"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/material/hero";
import InformationSection from "./information-section";
import LatestBlogPosts from "./latest-blog-posts";
import { Spinner } from "@material-tailwind/react";
import ContactSection from "./contact-section";
import { useSelector, useDispatch } from "react-redux";
import { scroller } from "react-scroll";
import { resetScroll } from "@/store/navClick";

const HomePage = (props) => {
  const { hash, triggerScroll, triggeredOnAnotherPage } = useSelector((state) => state.navClick);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(props.userData);
  }, [props.userData]);

  useEffect(() => {
    if (triggerScroll && hash) {
      if (triggeredOnAnotherPage) {
        setTimeout(() => {
          scroller.scrollTo(hash, {
            duration: 600,
            delay: 0,
            smooth: "easeInOutQuart",
          });
          dispatch(resetScroll());
        }, 100);
      } else {
        scroller.scrollTo(hash, {
          duration: 600,
          delay: 0,
          smooth: "easeInOutQuart",
        });
        dispatch(resetScroll());
      }
    }
  }, [triggerScroll]);

  useEffect(() => {
    if (!triggerScroll) {
      const handleInitialHashScroll = () => {
        const hash = window.location.hash;
        if (hash) {
          const cleanHash = hash.substring(1); // Remove the '#'
          setTimeout(() => {
            scroller.scrollTo(cleanHash, {
              duration: 600,
              delay: 0,
              smooth: 'easeInOutQuart',
            });
          }, 100);
        }
      };
  
      handleInitialHashScroll(); // Initial check
  
      // Add event listener for hash changes
      window.addEventListener('hashchange', handleInitialHashScroll);
  
      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener('hashchange', handleInitialHashScroll);
      };
    }
  }, []);

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  return (
    <>
      <Hero user={userData.user} backendEndpoint={props.backendEndpoint} />
      <InformationSection userData={userData} />
      <LatestBlogPosts latestBlogs={userData.latestBlogs} />
      <ContactSection apiEndpoint={props.apiEndpoint} />
    </>
  );
};

export default HomePage;
