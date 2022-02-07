const getItemFromLS = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export {
    getItemFromLS
}