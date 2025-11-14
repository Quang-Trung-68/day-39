import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import "@/index.css";
import { Provider } from "./libs/react-redux";
import TodoListStore from "./store";

createRoot(document.getElementById("root")).render(
  <Provider store={TodoListStore}>
    <App />
  </Provider>
);
