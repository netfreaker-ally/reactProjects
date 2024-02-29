const UserInput = ({ handleChange }) => {
  return (
    <form>
      <div className="form-investment">
        <label>
          Initial Investment
          <input
            type="text"
            name="initial-investment"
            onChange={(e) => {
              handleChange(e.target.value, "initial-investment");
            }}
          />
        </label>

        <label>
          Annual Investment
          <input
            type="number"
            name="annual-investment"
            onChange={(e) => {
              handleChange(e.target.value, "annual-investment");
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Expected Return
          <input
            type="number"
            name="expected-return"
            onChange={(e) => {
              handleChange(e.target.value, "expected-return");
            }}
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            name="duration"
            onChange={(e) => {
              handleChange(e.target.value, "duration");
            }}
          />
        </label>
      </div>
    </form>
  );
};

export default UserInput;
