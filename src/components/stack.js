import { updateStore } from "../store/updateStore";
import { StackItem } from "./StackItem";

const Stack = (state) => {
    
    const handleItemAdd = ()  => {
        const newItem = {
            id: state.items.length + 1,
            text: `Item ${state.items.length + 1}`,
            editing: false
        }

        updateStore(state, { items: [...state.items, newItem] });
    }

    const handleItemRemove = ()  => {

        updateStore(state, { items: state.items.filter(i => i.id !== state.items.length) });
    }

    const addEventListeners = () => {
        const addItemAddEventListener = () =>
          document.querySelector("div#stack #itemAdd").addEventListener("click", handleItemAdd);

        const addItemRemoveEventListener = () =>
          document.querySelector("div#stack #itemRemove").addEventListener("click", handleItemRemove);
    
        return { addItemAddEventListener, addItemRemoveEventListener };
    };

    const render = () => {
        return `
            <div id="stack">
                <ul>
                    ${state.items.map((item) => StackItem(item).render())
                        .toString()
                        .replaceAll(",", "")}
                </ul>
                <div id="controls">
                    <button id="itemAdd">Add Item</button>
                    <button id="itemRemove">Remove Item</button>
                </div>
            </div>
        `
    }

    return {
        render,
        addEventListeners
    }
}

export { Stack }