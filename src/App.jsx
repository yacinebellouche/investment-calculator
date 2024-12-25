import Header from "./components/Header";
import CalculatorBody from "./components/CalculatorBody";
import ResultLog from "./components/ResultLog";
import { isValidElement, useState } from "react";
function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInputs.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInputs((oldValues) => {
      return { ...oldValues, [inputIdentifier]: +newValue }; // the plus allows to keep the value as a number
    });
  }

  return (
    <>
      <Header />
      <CalculatorBody userInputs={userInputs} onChange={handleChange} />

      {inputIsValid ? (
        <ResultLog input={userInputs} />
      ) : (
        <p className="center">The duration cannot be lesser than 1</p>
      )}
    </>
  );
}

export default App;
