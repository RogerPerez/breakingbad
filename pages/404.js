import Link from "next/link";
import Layout from "../src/components/layout/Layout";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation("global");

  return (
    <Layout>
      <div className="notFonundContainer">
        <img
          className="img"
          src="https://media.giphy.com/media/QT9SVRVexMgOk/giphy.gif"
        />
        <div>
          <p className="text">{t("notFound.message")}</p>
          <Link href={"/"}>
            <p className="link">{t("notFound.link")}</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
