import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Todo from "./app/todo/todo.js";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      <div
        className="App"
        style={{
          textAlign: "left",
          width: 700,
          margin: "0 auto",
          paddingTop: 40,
        }}
      >
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
