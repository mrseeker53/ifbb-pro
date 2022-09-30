// use local storage to manage rest time
const addToDb = (rest) => {
    localStorage.setItem('rest', rest);
}

const displayToUi = () => {
    const previousRest = localStorage.getItem('rest');
    return previousRest;
}

export { addToDb, displayToUi }