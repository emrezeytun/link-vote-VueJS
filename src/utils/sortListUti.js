const sortListUti = (orderType) => {
    this.linkList = this.getItemFromLS();
    if(orderType == 'voteDecreasing') {
    this.linkList.sort((a,b) => {
      if(b.count - a.count == 0) { 
        return b.lastUpdated - a.lastUpdated
        }
      else { 
        return b.count - a.count 
        }
    } );
    }
    if(orderType == 'voteIncreasing') {
    this.linkList.sort((a,b) =>   a.count - b.count);
    }
    else if (orderType== 'dateIncreasing') {
      this.linkList.sort((a,b) =>  b.date - a.date);
    }
    else if (orderType== 'dateDecreasing') {
      this.linkList.sort((a,b) =>  a.date - b.date);
    }
    this.setLS();
    this.paginationObj.currentPage = 1;
    this.pagination();
  }

  export {
    sortListUti
  }