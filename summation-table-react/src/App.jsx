import InputField from "./component/InputField";
import Table from "./table/Table";
import GeneratePdf from "./hooks/GeneratePdf";
import { useState } from "react";
import GeneratePng from "./hooks/GeneratePng";

// const fetchedData = {
//   intern: 24000,
//   savings: 20000,
//   mitu: 10000,
// };

export default function App() {
  const [data, setData] = useState({});

  function handleSubmit(e) {
    const name = e.target.name.value;
    const amount = e.target.amount.value;
    console.log(name, amount);
    // Update state with new property
    setData(prevData => ({
      ...prevData,
      [name]: parseInt(amount)
    }));

    document.querySelector("form").reset();
  }

  return (
    <div className="max-w-5xl m-auto">
      <Table data={data}></Table>
      <InputField handleSubmit={handleSubmit}></InputField>
      <GeneratePdf rootElementId="moneyTable" downloadFileName="table"></GeneratePdf>
      <GeneratePng rootElementId="moneyTable" downloadFileName="table"></GeneratePng>
    </div>
  );
}
