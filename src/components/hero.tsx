import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");
  return (
    <section id="hero">
      <div className="container mx-auto max-w-6xl pb-64 pt-64 px-6 py-12 flex flex-col items-center justify-center">
        <div className="max-w-lg text-6xl font-sans p-6 pr-20 text-slate-200 uppercase border-4 md:max-w-2xl md:p-12 md:mx-0 md:text-8xl">
          {t("title")}
        </div>
        <div className="text-white text-2xl uppercase font-sans text-center mt-12">
          <p>
            Weddings. Festivals.
            <br className="md:hidden" />
            &nbsp;Corporate Events.
          </p>
        </div>
        <div className="mt-12">
          <Link href="/book-now" className="btn-white">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}