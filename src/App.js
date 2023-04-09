
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Routes/routers';



function App() {
  return (
    <div className="">
        <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
