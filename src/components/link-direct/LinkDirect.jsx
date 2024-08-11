import TypingEffect from "../../utils/TypingEffect";
function LinkDirect() {
  const textToType = "Complete details will be available here later!";
  return (
    <div className="default-height">
      <p>
        <strong>Details</strong>
        <hr />
      </p>
      <br />
      <TypingEffect text={textToType} typingSpeed={25} />
    </div>
  );
}

export default LinkDirect;
