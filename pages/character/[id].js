import DetailCard from "../../src/components/detailCard/DetailCard";
import Layout from "../../src/components/layout/Layout";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const CharacterPage = ({ characterInfo, quote }) => {
  const router = useRouter();
  const { t } = useTranslation("global");
  if (!characterInfo) {
    router.push;
  }
  return (
    <Layout>
      <div className="detailContainer">
        <div className="goBack">
          <FontAwesomeIcon
            onClick={() => router.push("/")}
            className="goBackButton"
            icon={faArrowLeft}
          />
          <p onClick={() => router.push("/")} className="text">
            {t("detail.go-back")}
          </p>
        </div>
        {!characterInfo ? (
          <p className="noCharacters">{t("home.no-characters")}</p>
        ) : (
          <DetailCard character={characterInfo} quote={quote} />
        )}
      </div>
    </Layout>
  );
};
export default CharacterPage;

export const getServerSideProps = async (context) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/${context.query.id}`
    );
    const data = await res.json();
    if (!data || data.length < 1) {
      return {
        redirect: {
          destination: "/",
        },
        props: { characterInfo: null, quote: null },
      };
    }

    try {
      const resQuote = await fetch(
        `${process.env.NEXT_PUBLIC_QUOTES}/random?author=${data[0].name}`
      );
      const dataQuote = await resQuote.json();
      if (!data || data.length < 1) {
        return {
          redirect: {
            destination: "/",
          },
          props: { characterInfo: null, quote: null },
        };
      } else {
        return {
          props: { characterInfo: data[0], quote: dataQuote[0].quote },
        };
      }
    } catch (error) {
      return {
        props: { characterInfo: data[0], quote: null },
      };
    }
  } catch (error) {
    return {
      props: { characterInfo: null, quote: null },
    };
  }
};
