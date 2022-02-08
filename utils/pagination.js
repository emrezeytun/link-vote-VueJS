const utilsPagination = (list,  splitSize, cur) => {
      let firstItem = (splitSize * (cur-1));
      let lastItem = (splitSize * (cur)) -1;
      list = list.filter((data,index) => index >= firstItem && index <= lastItem );
      return list;
}

const utilsGetPageSize = (arrLength, splitSize) => {
    return Math.ceil(arrLength / splitSize);
}

export  {
    utilsPagination, utilsGetPageSize
}