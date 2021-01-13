import { createStore } from "redux";
import { reducer } from "../manager/todoListReducer/reducer";

export let store = createStore(reducer);