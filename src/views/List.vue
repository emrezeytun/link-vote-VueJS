<template>
  <div class="home">
     <Notification :notificationObj="notificationOptions" > </Notification>
    
    <Modal :linkObj="removingItemObj" :modalStatus="isModalActive" @deletinObjId="removeItem" > </Modal>

    <div class="box"> 
    <router-link to="/add">
    <div class="addLinkArea">  
      <div class="square"> <p> <i class="fas fa-plus"></i> </p> </div>
      <div class="linkAreaDescription"> <p> SUBMIT A LINK </p>  </div>
    </div>
    </router-link>
    <hr>
   <CustomSelect  v-if="paginationObj.arrLength > 0" ref="cSelect" :options="optionsObj" @selectedVal="sortList" > </CustomSelect>
    <div v-for="(item,index) in linkList" :key="index" class="linkListArea">  
      <div class="square"> <div class="voteStatsArea"> {{item.count}} <h4 class="voteDescription"> POINTS </h4>  </div>    </div>
      <div class="d-flex-direction-column"> 
      <div class="linkAreaDescription"> <p class="linkName"> {{item.linkName}} </p>  </div>
       <p class="voteArea"> <a :href="item.linkUrl"> ( {{item.linkUrl}} ) </a> </p>
      <div class="voteButtons">
          <p v-on:click="vote(item.id,'up')"> <i class="fas fa-arrow-up"></i> Up Vote </p>  
          <p v-on:click="vote(item.id,'down')"> <i class="fas fa-arrow-down"></i> Down Vote </p>  
      </div>
      </div>
        <div v-on:click="openModal(item.id)"  class="remove"> <i class="fas fa-minus"></i>  </div>
    </div>
    <Pagination  v-if="paginationObj.arrLength > 0" @currentPageVal="currentPageChanged" :pagination="paginationObj"> </Pagination>
    </div>
  </div>
</template>

<script>

import CustomSelect from '../components/CustomSelect.vue'
import Pagination from '../components/Pagination.vue'
import Modal from '../components/Modal.vue'
import Notification from '../components/Notification.vue'
import {utilsGetItemsFromLS} from '../../utils/getItemsFromLS'
import {utilsPagination, utilsGetPageSize} from '../../utils/pagination'
import {utilsSetItemsToLS} from '../../utils/setItemsToLS'
import {utilsSortList} from '../../utils/sortList'

export default {
  name: 'Home',
  components: {CustomSelect, Pagination, Modal, Notification},

  data() {
    return {
      linkList: null,
      paginationObj: {splitSize: 5, currentPage: null, arrLength: null, pageSize: null },
      optionsObj: [
        {value:"voteIncreasing", text:"Less Voted - (Z > A)"},
        {value:"voteDecreasing", text:"Most Voted - (A > Z)"},
        {value:"dateIncreasing", text:"Last Added - (Z > A)"},
        {value:"dateDecreasing", text:"First Added - (A > Z)"},
      ],
      removingItemObj: null,
      isModalActive: false,
      notificationMessage: null,
      isNotificationActive: false,
      itemName: null,
       notificationOptions: {itemNameForNotification: null, isNotificationActive:false, notificationMessage: null }
    }
  },

  created() {
    this.linkList = utilsGetItemsFromLS('linkList');
  },

  watch: {
    'notificationOptions.isNotificationActive': function (){
        this.$emit('notificationOptionsEmit', this.notificationOptions)
     },
  },

  methods: {
    openModal(id) {
      this.removingItemObj = this.linkList.find(item => item.id == id);
      this.isModalActive = true;
    },


    removeItem(id) {
      this.linkList = this.getItemFromLS();
      this.notificationOptions.itemNameForNotification = this.linkList.find(item => item.id == id);
      this.notificationOptions.itemNameForNotification = this.notificationOptions.itemNameForNotification.linkName;
      this.notificationOptions.notificationMessage = " successfully deleted."
      this.notificationOptions.isNotificationActive = true;
      this.linkList = this.linkList.filter(item => item.id != id);
      this.isModalActive = false;
      this.setLS();
      this.paginationObj.currentPage = 1;
      this.pagination();
      setTimeout(() => {
        this.notificationOptions.isNotificationActive = false;
      }, 1500)
    },
    setLS() {
      utilsSetItemsToLS('linkList', this.linkList);
    },
    vote(id, value) {
      this.linkList = this.getItemFromLS();
      if(value == 'up') {
       this.linkList.forEach(element => {
          if(element.id == id) {
            element.count += 1;
            element.lastUpdated = Date.now();
          }
        });
      } 
      else {
        this.linkList.forEach(element => {
          if(element.id == id) {
            element.count -= 1;
            element.lastUpdated = Date.now();
          }
        });
      }
      
       this.setLS();
       this.sortList('voteDecreasing');
    },
    
    sortList(orderType) {
      this.linkList = this.getItemFromLS();
      this.linkList = utilsSortList(orderType, this.linkList);
      this.setLS();
      this.paginationObj.currentPage = 1;
      this.pagination();
    },

    pagination() {
      this.linkList = this.getItemFromLS();
      this.paginationObj.arrLength =  this.getLengthFromLS();
      this.paginationObj.pageSize = utilsGetPageSize(this.paginationObj.arrLength, this.paginationObj.splitSize);
      this.linkList = utilsPagination(this.linkList,  this.paginationObj.splitSize , this.paginationObj.currentPage);
      console.log(this.linkList);
      
    },
    currentPageChanged(cur) {
      this.paginationObj.currentPage = cur;
      this.pagination();
    },
      getItemFromLS() {
      return utilsGetItemsFromLS('linkList');
    },
    getLengthFromLS() {
    return this.getItemFromLS().length;
   }
  },

  mounted() {
    if(localStorage.getItem('linkList')) {
     this.linkList = this.getItemFromLS();
     this.sortList('dateIncreasing');
     this.paginationObj.splitSize = 5;
     this.paginationObj.currentPage = 1;
     this.paginationObj.arrLength = this.getLengthFromLS();
     this.pagination();
    }
  }

}
</script>

<style scoped>

a {
  color: inherit;
  text-decoration: none;
}
    .home {
      width: 100%;
    }
    .box {
      width: 100%;
    }
  .addLinkArea {
    background-color: #f7f7f7;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    width: 250px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    cursor: pointer;
    opacity: 1;
    transition: .6s;
  }

  .addLinkArea:hover {
    opacity: .6;
  }

  .custom-d-flex-column-direction {
    display: flex;
    flex-direction: column;
  }

  .square p {
    margin: 0;
    padding: 1rem;
    border-radius: 5px;
    font-size: 2rem;
    width: 50px;
    font-weight: 800;
    border: 1px solid #9f9f9f;
    margin-right: 1rem;
  }

  .square .voteStatsArea {
    margin: 0;
    background-color: #ececec;
    padding: 1rem;
    border-radius: 5px;
    font-size: 1.8rem;
    font-weight: 800;
    border: 1px solid #9f9f9f;
    margin-right: 1rem;
  }

  .linkAreaDescription p {
    font-weight: 500;
    font-size: 1.2rem;
  }

  .linkAreaDescription .linkName {
    margin-bottom: 0.1rem;
    margin:0;
    font-weight: 700;
    text-align:left;
  }

  hr {
    color: #ececec;
    width: 280px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .custom-d-none {
    display: none;
  }

   .linkListArea {
    margin-bottom: 1rem;
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem;
    width: 260px;
    display:flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    cursor: pointer;
    opacity: 1;
    transition: .6s;
    max-width: 260px;
    position: relative;
  }

  .linkListArea .remove {
    position: absolute; 
    top:-5px;
    right: -5px;
    font-size: 1rem; 
    background-color: red;
    color: #fff; 
    transition: .9s;
    opacity: 0;
    padding: 0rem 0.2rem; 
    margin: 0; 
    border-radius: 50%; 
    border: 2px solid #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .voteButtons {
    display: flex; 
    justify-content: space-between;  
    text-align:left; 
    width: 150px;
  }

  .linkListArea:hover {
    background-color: rgba(0,0,0,0.05);
    border-radius: 5px;
    padding: 1rem;
    width: 260px;
    display:flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    cursor: pointer;
    opacity: 1;
    transition: .6s;
    max-width: 260px;
  }

  .linkListArea:hover .remove  {
    opacity: 1;
    display: block;
  }

  .d-flex-direction-column {
    display: flex;
    flex-direction: column;
  }

  .voteDescription {
    color: rgba(0,0,0,1);
    font-size: 0.8rem;
    padding: 0;
    font-weight: 400;
    margin:0;
    letter-spacing: 1px;
  }

  .voteArea {
    max-width: 200px;
    padding:0;
    margin:0;
    opacity: .6;
    font-size: 10px;
    text-align:left;
  }

  .voteButtons p {
    font-size: 12px;
    color: #babdbf;
  }

</style>
