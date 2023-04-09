import React from 'react';
import Navbar from './Navbar';


const  Sidebar = ({loaderData}) => {
  console.log(loaderData);
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
 
   
     <aside className=''>
        <div>
            <h1 className="font-bold text-xl font-serif my-2  "> workflow name: {loaderData.name}</h1>
         
        </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
            simple module
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
       simple module 2
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        simple module 3
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        simple module 4
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        simple module 5
      </div>
    </aside>

  );
};

export default Sidebar