export default function CalculatorBody({userInputs, onChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVETSMENT</label>
          <input type="number" value={userInputs.initialInvestment} required onChange={(event)=>onChange('initialInvestment', event.target.value)} />
        </p>
        <p>
          <label>ANNUAL INVESTMENT </label>
          <input type="number" value={userInputs.annualInvestment} required onChange={(event)=>onChange('annualInvestment', event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" value={userInputs.expectedReturn} required onChange={(event)=>onChange('expectedReturn', event.target.value)} />
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" value={userInputs.duration} required onChange={(event)=>onChange('duration', event.target.value)} />
        </p>
      </div>
    </section>
  );
}
