import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { PiBreadFill } from "react-icons/pi";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="bg-yellow-400 px-4 py-7">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="">
          <h1 className="text-3xl text-gray-800 font-bold flex justify-center items-center hover:text-white">
            {t("header.title")} <PiBreadFill className="ms-2" size={40} />
          </h1>
        </Link>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link
                className="text-gray-800 text-xl hover:underline hover:text-white"
                href="/products"
              >
                {t("header.products")}
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white text-gray-800 text-xl">
                {t("header.contact")}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
