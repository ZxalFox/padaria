import Template from "../template";
import bolo from "../../assets/img/bolo.webp";
import pao from "../../assets/img/pao.webp";
import doce from "../../assets/img/doce.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <Template>
      <div className="p-10">
        <section className="text-center bg-gray-800 p-10 rounded-lg shadow-md py-20">
          <h2 className="text-4xl font-bold text-yellow-400">
            {t("home.welcome")}
          </h2>
          <p className="mt-4 text-white text-xl">{t("home.welcome-text")}</p>
        </section>
        <section className="py-10">
          <div className="bg-orange-800 rounded-lg py-10">
            <h3 className="text-3xl text-center text-white font-semibold">
              {t("home.our-products")}
            </h3>
          </div>
          <div className="bg-orange-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-orange-400 group">
                <div className="flex justify-center">
                  <Image
                    src={pao.src}
                    width={400}
                    height={400}
                    alt="Pão"
                    className="rounded-md d-flex text-center"
                  />
                </div>
                <h4 className="text-xl font-semibold mt-4 group-hover:text-white">
                  {t("home.breads")}
                </h4>
                <p className="text-gray-500 mt-2 group-hover:text-white">
                  {t("home.breads-text")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg pt-9 shadow-lg hover:bg-orange-400 group">
                <div className="flex justify-center">
                  <Image
                    src={bolo.src}
                    width={400}
                    height={400}
                    alt="Bolo"
                    className="rounded-md"
                  />
                </div>
                <h4 className="text-xl font-semibold mt-4 pt-3 group-hover:text-white">
                  {t("home.cakes")}
                </h4>
                <p className="text-gray-500 mt-2 group-hover:text-white">
                  {t("home.cakes-text")}
                </p>
              </div>

              <div className="bg-white  p-6 rounded-lg shadow-lg hover:bg-orange-400 group">
                <div className="flex justify-center">
                  <Image
                    src={doce.src}
                    width={400}
                    height={400}
                    alt="Doce"
                    className="rounded-md"
                  />
                </div>
                <h4 className="text-xl font-semibold mt-4 text-start group-hover:text-white">
                  {t("home.candys")}
                </h4>
                <p className="text-gray-500 mt-2 group-hover:text-white">
                  {t("home.candys-text")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center bg-yellow-400 p-10 rounded-md shadow-md">
          <h3 className="text-3xl font-bold text-white">
            {t("home.visit-us")}
          </h3>
          <p className="mt-4 text-white text-xl">{t("home.visit-us-text")}</p>
          <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 text-xl">
            {t("home.know-more")}
          </button>
        </section>
      </div>
    </Template>
  );
}
