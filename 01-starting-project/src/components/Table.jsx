const Table = ({ annualData }) => {
  const totalYears = annualData.length;
  const totalInterest = annualData.reduce(
    (sum, data) => sum + data.interest,
    0
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <br />
            <th>Interest(Year)</th>
            <br />
            <th>Total Interest</th>
            <br />
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>

              <td>{Math.round(data.valueEndOfYear)}</td>
              <br></br>
              <td>{Math.ceil(data.interest)}</td>
              <br></br>
              <td>{Math.ceil(totalInterest)}</td>
              <br></br>
              <td>{data.annualInvestment}</td>
              <br></br>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
