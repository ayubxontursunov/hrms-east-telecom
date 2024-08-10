import TypingEffect from "../../utils/TypingEffect"
function ClickLogo(){
     const textToType = "Human Resource Management Systems (HRMS) are integrated software solutions designed to streamline and manage various HR functions within an organization. HRMS typically encompasses a range of features including employee information management, recruitment, onboarding, payroll, performance evaluations, and benefits administration. These systems centralize employee data, automate administrative tasks, and facilitate compliance with labor laws.";
     return(
          <div>
               <p><strong>ABOUT HUMAN RESOURCES MANAGEMENT SYSTEM</strong></p>
               <hr />
               <br />
               <TypingEffect text={textToType} typingSpeed={20} />
          </div>
     )
}

export default ClickLogo