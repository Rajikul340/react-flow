
import React, { useEffect, useState } from "react";
import TableRow from "../components/TableRow";

const Table = () => {
  const [tableData, setTableData] = useState(null);



  useEffect(() => {
    fetch("https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=1&limit=5")
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  return (
   
      <div className="">
        <div>
            <h1 className="font-bold text-2xl font-serif py-5 mx-20 "> Works Flow</h1>
             <hr className="border border-blue-50"/>
        </div>
        <table className=" border w-6/12 mx-auto mt-4">
          {/* head*/}
          <thead className="bg-[#4472C4] p-3">
            <tr>
           
              <th className="p-2 text-white text-lg">Name</th>
              <th className="p-2 text-white text-lg">Input Type</th>
              <th className="p-2 text-white text-lg">Create At</th>
            </tr>
          </thead>
          <tbody className="">
            {tableData?.map((singleData, i) => (
              <TableRow key={singleData.id} index={i} singleData={singleData} />
            ))}
          </tbody>
        </table>
      </div>

  );
};

export default Table;
