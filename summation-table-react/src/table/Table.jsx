import { useState, useEffect } from "react";

const fetchedData = {
    'intern': 24000,
    'savings': 20000,
    "VU fee": 5000,
    'mitu': 10000
};

const Table = () => {
    const [data] = useState(fetchedData);

    useEffect(() => {
        const calculateTotal = () => {
            let total = Object.values(data).reduce((acc, currentValue) => acc + currentValue, 0);
            // console.log(Object.values(data)); //returns an array of all the object values
            return total.toLocaleString(); //toLocaleString adds comma after thousands
        };
        document.getElementById("totalAmount").innerText = calculateTotal();
    }, [data]);

    return (
        <div>
            <table id="moneyTable" className="overflow-x-auto max-w-5xl m-auto">
                <thead className="table_heading">
                    <tr>
                        <th>Source</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(data).map(([source,amount])=>{
                            return <tr key={source}>
                                <td>{source}</td>
                                <td>{amount.toLocaleString()}</td>
                            </tr>
                        })
                    }
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
