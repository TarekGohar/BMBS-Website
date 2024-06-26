import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section id="hero">
      <div className="container mx-auto max-w-6xl pb-64 pt-64 px-6 py-12 flex flex-col items-center justify-center">
        <div className="max-w-lg text-6xl font-sans p-5 text-slate-200 uppercase border-4 md:max-w-2xl md:p-12 md:mx-0 md:text-8xl">
          {t("title")}
        </div>
        <div className="w-fit px-24 text-white text-2xl uppercase font-sans text-center mt-12">
          <p>{t("subtitle")}</p>
        </div>
        <div className="mt-12">
          <Link href="/book-now" className="btn-white">
            {t("book-now")}
          </Link>
        </div>
      </div>
    </section>
  );
}
