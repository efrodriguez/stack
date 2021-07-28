import { App } from "./app";
import { Stack } from "./components/Stack";
import { StackItem } from "./components/StackItem";

const render = (root, state) => {
  root.innerHTML = App(state).render();

  Stack(state).addEventListeners().addItemAddEventListener();
  Stack(state).addEventListeners().addItemRemoveEventListener();
  StackItem(state).addEventListeners().addItemEditEventListener();
  StackItem(state).addEventListeners().addItemSaveEventListener();
};

export { render };
