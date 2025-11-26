import { createBrowserRouter } from "react-router";

import App from './App.jsx';
import ErrorPage from './errorPage.jsx';
import Gallery from './Gallery.jsx';
import Image from './Image.jsx';
import SelectNum from './SelectNum.jsx';
import NumberDetails from './NumberDetails.jsx';
import axios from "axios";

async function loadDetail({params}) {
    try {
      const response = await axios.get('https://numbersapi.com/'+params.num)
      return {detail:response.data};
    } catch (error) {
      
    }
  
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
  }, 

  {
    path: "/gallery",
    Component: Gallery,
    children: [
        {
            path: 'child',
            element: <h1>To test the gallery</h1>
        },

        {
            path: 'image/id?/:id',
            Component: Image,
        }
    ],

  },

  {
    path:'/story',
    //Component: SelectNum,
    children:[

      {
        index: true,
        Component: SelectNum
      },
      {
        path:'num/:num',
        Component: NumberDetails,
        loader: loadDetail
      
      },
    ]
    
  }

]);

export default router;
