const utilsSetItemsToLS = (key, obj) => {
   localStorage.setItem(key, JSON.stringify(obj))
};

export {
    utilsSetItemsToLS
}