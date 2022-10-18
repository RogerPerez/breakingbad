import { useTranslation } from "react-i18next";
import Label from "../label/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

const DetailCard = ({ character, quote }) => {
  const { t } = useTranslation("global");
  return (
    <div className="detailCard">
      <div className="imageContainer">
        <img className="image" src={character.img} alt={character.name} />
      </div>
      <div className="texts">
        <Label label={t("detail.quote")} text={quote} />
        <Label label={t("detail.name")} text={character.name} />
        <Label label={t("detail.nickname")} text={character.nickname} />
        <Label
          label={t("detail.birthday")}
          text={character.birthday}
          isDate={true}
        />
        <Label label={t("detail.portrayed")} text={character.portrayed} />
        <Label label={t("detail.status")} text={character.status} />
        <div className="label">
          <span className="bold">{t("detail.occupation")}</span>:{" "}
          {character.occupation.map((i) => (
            <li key={i} className="li">
              <FontAwesomeIcon
                onClick={() => handleSearch}
                className="icon"
                icon={faFlask}
              />
              {i}
            </li>
          )) || t("detail.unknown")}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
