"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function LogoScroll() {
  const t = useTranslations("Hero");
  const images = [
    "/images/logos/k4k.png",
    "/images/logos/maxim.png",
    "/images/logos/f1.png",
    "/images/logos/igloofest.png",
    "/images/logos/osheaga.png",
    "/images/logos/patron.png",
    "/images/logos/picnik.png",
    "/images/logos/ilesoniq.png",
    "/images/logos/evenko.png",
    "/images/logos/cedar.png",
    "/images/logos/greygoose.png",
    "/images/logos/saint-mary.png",
    "/images/logos/jewish.png",
  ];

  // Assign each grid cell a unique subset of 2-3 images
  const imageSubsets = [
    [images[0], images[1]],
    [images[2], images[3]],
    [images[4], images[5]],
    [images[6], images[7]],
    [images[8], images[9]],
    [images[10], images[11], images[12]], // Last subset has three images
  ];

  const [indices, setIndices] = useState(Array(6).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      indices.forEach((_, i) => {
        setTimeout(() => {
          setIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[i] = (newIndices[i] + 1) % imageSubsets[i].length;
            return newIndices;
          });
        }, i * 300); // Delay each grid spot by 500ms for the staggered effect
      });
    }, 4000); // Base interval of 6000ms

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="mt-24 mb-48">
      <h2 className="text-white font-medium text-2xl text-center uppercase">
        {t("trusted")}
      </h2>
      <div className="flex justify-center">
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-x-28 lg:gap-x-40 gap-y-4 h-fit items-center">
          {indices.map((index, i) => (
            <div
              key={`${index}-${i}`} // Dynamic key to retrigger animation
              className="w-28 h-28 md:w-48 md:h-48 fade-up flex items-center justify-center overflow-hidden"
            >
              <img
                src={imageSubsets[i][index]}
                alt={`Logo ${i}`}
                width={1000}
                height={1000}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
