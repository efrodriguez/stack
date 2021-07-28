import "./app.css";
import { Stack } from "./components/Stack";

const App = (state) => {
  const render = () => {
    return `
      <div id="app">
         ${Stack(state).render()}
      </div>
   `;
  };

  return {
    render,
  };
};

export { App };
