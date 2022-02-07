<template>
<div class="addArea"> 
  <Notification :notificationObj="notificationOptions" > </Notification>
 <p class="returnToList"> <router-link  to="/"> <i class="fas fa-arrow-left"></i> Return to List </router-link> </p>
  <h3>Add New Link</h3>
  <div class="addLink">
    <form @submit.prevent="addLinkToLS">  
      <div class="custom-form-group">
      <label for="linkName"> Link Name: </label> 
      <input placeholder="e.g. Alphabet" type="text" v-model="linkName" id="linkName">
       </div>
       <div class="custom-form-group">
      <label for="linkUrl"> Link URL: </label>
      <input placeholder="e.g. http://abc.xyz" v-model="linkUrl" id="linkUrl" type="text">
       </div>
      <button type="submit" class="button"> Add </button>
      <p class="error"> {{errorMsg}} </p>
    </form>
  </div>
   </div>
</template>

<script>
import Notification from '../components/Notification'

export default {

name: 'Add',

components: {Notification},

  data() {
    return {
      linkList: [],
      id: null,
      linkName: null,
      linkUrl: null,
      errorMsg: null,
      count:0,
      notificationOptions: {itemNameForNotification: null, isNotificationActive:false, notificationMessage: null }
    }
  },
  
  mounted(){
    if(localStorage.getItem('linkList')) {
      this.linkList = JSON.parse(localStorage.getItem('linkList'));
    }
  },

  methods: {
    addLinkToLS() {
      if(this.linkName == null || this.linkUrl == null) {
        this.errorMsg = 'Please fill all blanks.';
      }
      else {
        this.id = this.generateUniqueId();
        let obj = { "id": this.id, "linkName": this.linkName, "linkUrl": this.linkUrl, count: this.count, date: Date.now(), lastUpdated: Date.now() };
        this.linkList.push(obj);
        this.clearInputs();
        localStorage.setItem('linkList', JSON.stringify(this.linkList));
        this.notificationOptions.itemNameForNotification = obj.linkName;
        this.notificationOptions.notificationMessage = ' successfully added.'
        this.showToast();
        this.errorMsg = '';
        console.log('obbbb',this.notificationOptions)
      }
    },

    showToast(){
      this.notificationOptions.isNotificationActive = true;
      setTimeout(()=>{
       this.notificationOptions.isNotificationActive = false;
      },2500);
    },

    generateUniqueId() {
      return (Math.random().toString(36) + Date.now().toString(36)).substr(2);
    },
    clearInputs() {
     this.linkName = null;
     this.linkUrl = null;
    }
  }

  
}
</script>

<style scoped>

  .addArea {
    width: 300px;
    margin: 0 auto;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
  }

  .error {
    color: red;
  }

  .addLink {
    margin-top: 1rem;
  }

  form label {
    text-align: left;
    margin-left: 9px;

  }

  form input {
    width: 300px;
    height: 30px;
    
    border-radius: 5px;
    border: 1px solid #bab9b9;
    margin-left: 1rem;
    margin: 0 auto;
    margin-bottom: 1rem
  }

  .button {
    background-color: black;
    padding: 0.7rem;
   font-size: 1rem;
   cursor: pointer;
    font-weight: 600;
    width: 150px;
    margin-left: 11rem;
    color: #fff;
    transition: .6s;
    border-radius: 2rem;
  }
  .button:hover {
    opacity: .7;
  }
  
  .custom-form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .addArea h3 {
    font-size: 1.5rem;
    text-align: left;
  }

  input[type="text"] {
    
    padding: 0.4rem 0.8rem 0.4rem 0.8rem;
  }

  .returnToList {
    font-size: 0.9rem;
    text-align: left;
  }

</style>