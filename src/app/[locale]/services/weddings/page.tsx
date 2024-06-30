import Image from "next/image";
import Footer from "@/components/footer";
import BackButton from "@/components/back-btn";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weddings",
  description: "Brahm Mauer Bartending Service offers services for weddings.",
};

export default function Home() {
  const t = useTranslations("Services");
  return (
    <div>
      <div className="mt-10 max-w-[80rem] container mx-auto">
        <BackButton linkTo="/services" backText="Services" />
      </div>

      <div className="my-32 container mx-auto max-w-6xl">
        <h1 className="pl-2 font-bold text-6xl mb-4 text-pink-600">
          {t("weddings.title")}.
        </h1>
        <div className="flex flex-col-reverse space-x-0 gap-4 md:flex-row-reverse p-4 md:space-x-2 justify-between">
          <p className="w-full md:w-1/3 bg-pink-600 p-4 text-white text-lg font-medium leading-5 lg:w-1/4">
            {t.rich("weddings.long-description", {
              br: () => <br />,
            })}
          </p>
          <Image
            width={1000}
            height={1000}
            src="/images/bmbs-wedding.jpg"
            alt="festival image"
            className="w-full md:w-2/3 h-[42rem] object-cover object-center"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
