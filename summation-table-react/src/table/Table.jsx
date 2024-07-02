/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Table = ({data}) => {
  useEffect(() => {
    const calculateTotal = () => {
      let total = Object.values(data).reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
      // console.log(Object.values(data)); //returns an array of all the object values
      return total.toLocaleString(); //toLocaleString adds comma after thousands
    };
    document.getElementById("totalAmount").innerText = calculateTotal();
  }, [data]);

  return (
    <div>
      <table id="moneyTable" className="overflow-x-auto">
        <thead className="table_heading">
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([name, amount]) => {
            return (
              <tr key={name}>
                <td>{name}</td>
                <td>{amount.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="total">
            <td>Total</td>
            <td id="totalAmount">sum</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
