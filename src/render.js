import { App } from "./app";
import { Stack } from "./components/stack";

const render = (root, state) => {
  root.innerHTML = App(state).render();

  Stack(state).addEventListeners().addItemAddEventListener();
  Stack(state).addEventListeners().addItemRemoveEventListener();
};

export { render };
