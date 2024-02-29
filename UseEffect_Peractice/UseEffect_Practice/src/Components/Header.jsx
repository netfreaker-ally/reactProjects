import QuizLogo from "../assets/quiz-logo.png";

const Header = () => {
  console.log("Header rendered")
  return (
    <header>
      <img src={QuizLogo} alt="Quiz_Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
