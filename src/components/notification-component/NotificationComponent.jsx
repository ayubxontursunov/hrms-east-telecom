import TypingEffect from "../../utils/TypingEffect";
import "./NotificationComponent.css"
import { useTranslation } from "react-i18next";
function NotificationComponent() {
  const {t} = useTranslation("global");
  const textToType = t("notification.content");
  return (
    <div className="default-height">
      <p>
        <strong>{t("notification.label")}</strong>
        <hr />
      </p>
      <br />
      <TypingEffect text={textToType} typingSpeed={25} />
    </div>
  );
}

export default NotificationComponent;
