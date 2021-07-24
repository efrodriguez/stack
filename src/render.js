import { App } from "./app";

const render = (root, state) => {
  root.innerHTML = App(state).render();
};

export { render };
