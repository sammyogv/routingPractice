import { createBrowserRouter } from "react-router";

import App from './App.jsx';
import ErrorPage from './errorPage.jsx';
import Gallery from './Gallery.jsx';
import Image from './Image.jsx';
import SelectNum from './SelectNum.jsx';
import NumberDetails from './NumberDetails.jsx';
import axios from "axios";

import ActionSubmit from "./ActionSubmit.jsx";

async function loadDetail({params}) {
    try {
      const response = await axios.get('https://numbersapi.com/'+params.num)
      return {detail:response.data};
    } catch (error) {
      
    }
  
};

async function actionSubmit({params,request}){
    const formData = await request.formData();
    const num = formData.get('num');
    return {num: num};
}

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
    Component: SelectNum,
    children:[

      {
        index: true,
        Component: SelectNum
      },
      {
        path:'num/:num',
        Component: NumberDetails,
        loader: loadDetail,
        hydrateFallbackElement: <h2>Loading story...</h2>,
        errorElement: <h2 className="text-red-600">Failed to load story details.</h2>
      
      },
    ]
    
  },

  {
    path: 'action',
    children: [
      {
        path: 'form',
        lazy: async () => {
          const compModule = await import('./ActionForm.jsx');
          return { Component: compModule.default };
        }
      },
      {
        path: 'submit',
        action: actionSubmit,
        Component: ActionSubmit
      }
    ]
  }

]);

export default router;
