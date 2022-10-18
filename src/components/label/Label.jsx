import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
const Label = ({ label, text, isDate }) => {
  const { t } = useTranslation("global");
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (isDate && text !== "Unknown") {
      const formatedDate =
        i18next.language === "en" ? format(new Date(text), "dd-MM-yyyy") : text;
      setDate(formatedDate);
    }
  }, [i18next.language]);

  return (
    <p className="label">
      <span className="bold">{label}</span>:{" "}
      {(isDate ? date : text) || t("notFound.unknown")}
    </p>
  );
};

export default Label;
