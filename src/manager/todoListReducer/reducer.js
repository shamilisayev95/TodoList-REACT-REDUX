import constants from '../../constants/index';

let initialState = [
    {
        id: '',
        name: ''
    }
]
export let reducer = (state = initialState, action) => {
    let newTodos;
    switch (action.type) {
        case constants.ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case constants.DELETE_TODO:
                newTodos = [...state];
                newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;
            
    }
    return state;
}