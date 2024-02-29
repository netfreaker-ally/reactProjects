import investmentImg from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header>
      <img src={investmentImg} alt="investmentImage" />
      <h1>Investment calculater</h1>
    </header>
  );
}
