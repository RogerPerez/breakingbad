import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Menu = () => {
  const router = useRouter();
  const [t, i18n] = useTranslation("global");

  const handleLanguage = (language) => {
    router.push(router.pathname, router.asPath, { locale: language });
  };
  useEffect(() => {
    i18n.changeLanguage(router.locale);
  }, [router.locale]);

  return (
    <div className="menu">
      <p className="logo" onClick={() => router.push("/")}>
        Breaking Bad Test
      </p>
      <nav className="nav">
        <li className="li">
          <Link href={`https://www.linkedin.com/in/roger-perez-serrano/`}>
            <a className="link">
              <h3 className="linikTitle">{t("menu.about")}</h3>
            </a>
          </Link>
        </li>
        <li className="languageSelector">
          <p
            className={router.locale === "es" ? "currentLanguage" : "language"}
            onClick={() => handleLanguage("es")}
          >
            Español
          </p>

          <p
            className={router.locale === "en" ? "currentLanguage" : "language"}
            onClick={() => handleLanguage("en")}
          >
            English
          </p>
        </li>
      </nav>
    </div>
  );
};

export default Menu;
