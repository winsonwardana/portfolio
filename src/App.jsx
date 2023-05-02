import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./router";
import store from "./store/reducer";
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
