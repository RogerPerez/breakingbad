import "../styles/globals.scss";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "../src/translations/es/global.json";
import global_en from "../src/translations/en/global.json";

function MyApp({ Component, pageProps }) {
  i18next.init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
