"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const [visibleWords, setVisibleWords] = useState({
    weddings: false,
    events: false,
    festivals: false,
    fundraisers: false,
  });

  const wordContainerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        // Trigger each word appearance with staggered delays
        setTimeout(
          () => setVisibleWords((prev) => ({ ...prev, events: true })),
          500
        );
        setTimeout(
          () => setVisibleWords((prev) => ({ ...prev, festivals: true })),
          1000
        );
        setTimeout(
          () => setVisibleWords((prev) => ({ ...prev, fundraisers: true })),
          1500
        );

        setTimeout(
          () => setVisibleWords((prev) => ({ ...prev, weddings: true })),
          2000
        );

        // Disconnect observer after the animation starts
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust the threshold as needed
    });

    if (wordContainerRef.current) {
      observer.observe(wordContainerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="h-screen pt-40 flex flex-col justify-center items-center text-center my-10 min-h-fit gap-y-6 px-4 md:px-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="w-full text-white font-okine font-medium text-6xl tracking-wider uppercase">
          Services
        </h2>
        <h2 className=" mt-10 mb-16 text-xl font-normal text-left text-neutral-100 max-w-[60rem] w-fit leading-9">
          We offer a variety of services to elevate your event, including custom
          cocktail creations, professional bartenders, mobile bar setups, and
          tailored drink menus. Whether it’s a wedding, corporate event, or
          private party, we ensure every drink is crafted to perfection and
          every guest enjoys a memorable experience.
        </h2>

        <div
          ref={wordContainerRef}
          className="max-w-[100rem] text-center grid md:grid-cols-2 font-made items-center gap-y-4 md:gap-x-10 text-4xl tracking-widest"
        >
          {/* Events */}
          <Link
            href="/services/corporate"
            className={`word font-bold text-white group rounded-sm ${
              visibleWords.events ? "show" : ""
            }`}
          >
            <Image
              src={"/images/events-1.jpg"}
              alt="events"
              width={1000}
              height={1000}
              className="group-hover:grayscale transition duration-100"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 opacity-1000 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-4xl font-okine font-normal opacity-0 transition group-hover:opacity-100 duration-150">
                Corporate
              </span>
            </div>
          </Link>

          {/* Festivals */}
          <Link
            href="/services/festivals"
            className={`word font-bold text-white group rounded-sm ${
              visibleWords.festivals ? "show" : ""
            }`}
          >
            <Image
              src={"/images/festivals-2.jpg"}
              alt="festivals"
              width={1000}
              height={1000}
              className="group-hover:grayscale transition duration-100"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 opacity-1000 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-4xl font-okine font-normal opacity-0 transition group-hover:opacity-100 duration-150">
                Festivals
              </span>
            </div>
          </Link>

          {/* Fundraisers */}
          <Link
            href="/services/weddings"
            className={`word font-bold text-white group rounded-sm ${
              visibleWords.fundraisers ? "show" : ""
            }`}
          >
            <Image
              src={"/images/fundraisers.jpg"}
              alt="fundraisers"
              width={1000}
              height={1000}
              className="group-hover:grayscale group-hover: transition ease-in group-hover:shadow-inner duration-200"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 opacity-100 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-4xl font-okine font-normal opacity-0 transition group-hover:opacity-100 duration-150">
                Fundraisers
              </span>
            </div>
          </Link>

          {/* Weddings */}
          <Link
            href="/services/weddings"
            className={`word font-bold text-white group rounded-sm ${
              visibleWords.weddings ? "show" : ""
            }`}
          >
            <Image
              src={"/images/weddings.jpg"}
              alt="weddings"
              width={1000}
              height={1000}
              className="group-hover:grayscale group-hover: transition ease-in group-hover:shadow-inner duration-200"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 opacity-100 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-4xl font-okine font-normal opacity-0 transition group-hover:opacity-100 duration-150">
                Weddings
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
