export const showAlert = text => () => {
    alert(text);
} // showAlert is a thunk: A fn which calls another fn which performs a particular task