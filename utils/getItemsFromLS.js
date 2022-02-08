const utilsGetItemsFromLS = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export {
    utilsGetItemsFromLS
}