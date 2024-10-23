// pages/contact.tsx
import { useTranslations } from "next-intl";
import Template from "@/components/template";

export default function Contact() {
  const t = useTranslations();

  return (
    <Template>
      <div className="p-10">
        <section className="text-center bg-gray-800 p-10 rounded-lg shadow-md py-20">
          <h2 className="text-4xl font-bold text-yellow-400">
            {t("contact.get-in-touch")}
          </h2>
          <p className="mt-4 text-white text-xl">
            {t("contact.contact-us-text")}
          </p>
        </section>
        <section className="py-10">
          <div className="bg-blue-800 rounded-lg py-10">
            <h3 className="text-3xl text-center text-white font-semibold">
              {t("contact.reach-us")}
            </h3>
          </div>
          <div className="bg-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mt-4 text-gray-800">
                  {t("contact.address")}
                </h4>
                <p className="text-gray-500 mt-2">
                  {t("contact.address-details")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mt-4 text-gray-800">
                  {t("contact.phone")}
                </h4>
                <p className="text-gray-500 mt-2">
                  {t("contact.phone-details")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mt-4 text-gray-800">
                  {t("contact.email")}
                </h4>
                <p className="text-gray-500 mt-2">
                  {t("contact.email-details")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mt-4 text-gray-800">
                  {t("contact.hours")}
                </h4>
                <p className="text-gray-500 mt-2">
                  {t("contact.hours-details")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Template>
  );
}
