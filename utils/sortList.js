const utilsSortList = (orderType, list) => {
    if(orderType == 'voteDecreasing') {
        list.sort((a,b) => {
          if(b.count - a.count == 0) { 
            return b.lastUpdated - a.lastUpdated
            }
          else { 
            return b.count - a.count 
            }
        } );
        }
        if(orderType == 'voteIncreasing') {
            list.sort((a,b) =>   a.count - b.count);
        }
        else if (orderType== 'dateIncreasing') {
            list.sort((a,b) =>  b.date - a.date);
        }
        else if (orderType== 'dateDecreasing') {
            list.sort((a,b) =>  a.date - b.date);
        }

        return list;
}

export {
    utilsSortList
}