import InputField from "./component/InputField";
import Table from "./table/Table";
import { useState, useEffect } from "react";

const fetchedData = {
  intern: 24000,
  savings: 20000,
  "VU fee": 5000,
  mitu: 10000,
};
function handleSubmit(e){
  e.preventDefault();
  const name = e.target.name.value;
  const amount = e.target.amount.value;
  console.log(name, amount);

  
  document.querySelector('form').reset();
}

export default function App() {
  const [data] = useState(fetchedData);
  return (
    <div className="max-w-5xl m-auto">
      <Table data={data}></Table>
      <InputField handleSubmit={handleSubmit}></InputField>
    </div>
  );
}
