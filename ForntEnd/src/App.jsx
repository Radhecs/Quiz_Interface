//components/App.js

import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import components */
import Index from "../components/Index.jsx";
import Quiz from "../components/Quiz.jsx";
import Result from "../components/Result.jsx";
import { CheckUserExist } from "../helper/helper.jsx";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
      //<div>newthing</div>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
      //<div>hello</div>
    ),
  },
]);
console.log(`http://localhost:${2797 || 5000}/api/questions`);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
