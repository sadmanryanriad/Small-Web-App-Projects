const Table = () => {
  return (
    <div>
      <table id="moneyTable" className="overflow-x-auto max-w-5xl m-auto">
        <tr className="table_heading">
          <th>Source</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>Intern</td>
          <td>24,000</td>
        </tr>
        <tr>
          <td>Savings</td>
          <td>20,000</td>
        </tr>
        <tr>
          <td>VU fees</td>
          <td>5,000</td>
        </tr>
        <tr>
          <td>Mitu</td>
          <td>10,000</td>
        </tr>
        <tr className="border-2"></tr>
        <tr className="total">
          <td>Total</td>
          <td id="totalAmount">sum</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
