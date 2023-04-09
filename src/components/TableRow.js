import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ singleData , index}) => {
 
  const { name, input_type, createdAt,id } = singleData;
  const bgColor = ["#CFD5EA", "#E9EBF5"]
  console.log(bgColor);


  return (
    <tr key={index} className={index % 2 === 0 ? 'bg-[#CFD5EA]' : 'bg-[#E9EBF5]'}>
      <td className="border text-center p-2"><Link style={{borderBottom:"1px solid blue"}} to={`/dnd/${id}`}>{name}</Link></td>
      <td className="border text-center p-2">{input_type}</td>
      <td className="border text-center p-2">{createdAt}</td>
    </tr>
  );
};

export default TableRow;
