import TypingEffect from "../../utils/TypingEffect";

function NotificationComponent() {
  const textToType = "For now, you do not have a new message!";
  return (
    <div>
      <p>
        <strong>Notification Alert</strong>
        <hr />
      </p>
      <br />
      <TypingEffect text={textToType} typingSpeed={50} />
    </div>
  );
}

export default NotificationComponent;
