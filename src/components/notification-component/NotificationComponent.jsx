import TypingEffect from "../../utils/TypingEffect";
import "./NotificationComponent.css"
function NotificationComponent() {
  const textToType = "For now, you do not have a new message!";
  return (
    <div className="default-height">
      <p>
        <strong>Notification Alert</strong>
        <hr />
      </p>
      <br />
      <TypingEffect text={textToType} typingSpeed={25} />
    </div>
  );
}

export default NotificationComponent;
