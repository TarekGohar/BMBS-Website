import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Success",
  description: "Your booking was successful",
};

export default function Home() {
  const t = useTranslations("Booking");
  return (
    <section id="booking-success" className="">
      <div className="container mx-auto min-h-[50rem] h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="w-fit px-56 text-white text-center text-6xl font-bold">
          {t("title")}
        </h1>
        <h2 className="text-white font-medium">{t("subtitle")}</h2>
      </div>
    </section>
  );
}
