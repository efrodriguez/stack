import "./app.css";

const App = (state) => {
  const render = () => {
    return `
      <div class="app">
         HELLO
      </div>
   `;
  };

  return {
    render,
  };
};

export { App };
