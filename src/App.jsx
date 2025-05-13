import { RouterProvider } from "react-router";
import router from "./routes/main/router";

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
