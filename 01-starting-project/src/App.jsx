import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./components/UserInput";
import { CalculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = useState();
  const [annualInvestment, setAnnualInvestment] = useState();
  const [expectedReturn, setExpectedReturn] = useState();
  const [duration, setDuration] = useState();
  function handleChange(name, type) {
    if (type === "initial-investment") {
      setInitialInvestment(+name);
    } else if (type === "annual-investment") {
      setAnnualInvestment(+name);
    } else if (type === "expected-return") {
      setExpectedReturn(+name);
    } else {
      setDuration(+name);
    }
  }
  let annualData = null;
  let isValidNumber;
  if (initialInvestment && annualInvestment && expectedReturn && duration) {
    console.log(
      "in app" + initialInvestment,
      annualInvestment,
      expectedReturn,
      duration
    );
    isValidNumber = duration >= 0;
    annualData = CalculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });

    console.log(annualData);
  }
  return (
    <div>
      <Header />

      <main>
        <h2>Time to get started!</h2>
        <UserInput handleChange={handleChange} />
        {isValidNumber ? (
          annualData && <Table annualData={annualData} />
        ) : (
          <p className="center">please type valid duration</p>
        )}
      </main>
    </div>
  );
}

export default App;
