const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../Layout/Layout");
const { default: Dnd } = require("../components/Dnd");
const { default: Table } = require("../pages/Table");



export const routers=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Table/>
            },
            {
            path:"/dnd/:id",
            loader:({params})=> fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/modules/${params.id}`),
            element:<Dnd/>
        }  
    ]

    }
])