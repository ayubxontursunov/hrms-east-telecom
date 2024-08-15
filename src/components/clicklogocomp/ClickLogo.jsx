import TypingEffect from "../../utils/TypingEffect"
import { useTranslation } from "react-i18next";
function ClickLogo(){
     const {t} = useTranslation("global");
     const textToType = t("hrms.text");
     return(
          <div className="default-height">
               <p><strong>{t("hrms.title")}</strong></p>
               <hr />
               <br />
               <TypingEffect text={textToType} typingSpeed={5} />
          </div>
     )
}

export default ClickLogo