import { updateStore } from "../store/updateStore";

const StackItem = (state) => {

    const handleItemEdit = (event)  => {
        const li = event.target.parentElement;

        const itemIndex = state.items.findIndex((item) => item.id === Number.parseInt(li.id));
        const updatedItems = Object.assign([...state.items], {
           [itemIndex]: { ...state.items[itemIndex], editing: true },
        });
    
        updateStore(state, { items: updatedItems });
    }

    const handleItemSave = (event)  => {
        const li = event.target.parentElement;

        const newText = li.querySelector("input").value;
    
        const itemIndex = state.items.findIndex((item) => item.id === Number.parseInt(li.id));
        const updatedItems = Object.assign([...state.items], {
          [itemIndex]: { ...state.items[itemIndex], editing: false, text: newText },
        });
    
        updateStore(state, { items: updatedItems });
    }

    const addEventListeners = () => {
        const addItemEditEventListener = () =>
            Array.from(document.querySelectorAll("div#stack #itemEdit")).map((el) =>
                el.addEventListener("click", handleItemEdit)
            );

        const addItemSaveEventListener = () =>
            Array.from(document.querySelectorAll("div#stack #itemSave")).map((el) =>
                el.addEventListener("click", handleItemSave)
            );

        return { addItemEditEventListener, addItemSaveEventListener };
    };

    const render = () => {
        return `
        <li id="${state.id}" class="item">
            ${state.editing === false ?
                `
                    <div>${state.text}</div>
                    <button id="itemEdit">Edit</button>
                ` : 
                `
                    <input type="text" id="formEdit" value="${state.text}">
                    <button id="itemSave">Save</button>
                `
            }
        </li>
        `
    }

    return {
        render,
        addEventListeners
    }
}

export { StackItem }