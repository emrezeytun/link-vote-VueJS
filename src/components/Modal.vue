<template>
    <div v-if="modalStatus" class="modal">
        <div class="modal-header">
            <p>Remove Link</p>
           <a @click="closeModal"> <i class="fas fa-times"></i> </a>
        </div>
        <div class="modal-content"> 
            <p> Do you want to remove: </p> 
            <p class="objName"> {{linkObj.linkName}} </p>
        </div>
        <div class="buttons"> 
            <button class="button button-del" @click="btnDeleteEmit(linkObj.id)"> OK </button>
            <button class="button button-close" @click="closeModal"> CANCEL </button>
        </div>

    </div>
</template>

<script>

export default {
    props: {
        linkObj: {
            type: String
        },
        modalStatus: {
            type: Boolean
        }
    },
    methods: {
        btnDeleteEmit(objId) {
            this.$emit('deletinObjId', objId)
        },
        closeModal() {
            this.modalStatus = false;
        }
    }
}

</script>

<style scoped>
    .modal {
        width: 500px;
        background-color: #d7d7d7;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }

    .modal .modal-header {
        display: flex;
        justify-content: space-between;
        padding:0;
        margin: 0;
        background-color: black;
        padding: 0.5rem;
    }
    .modal .modal-header p {
        color: #fff;
        padding: 0;
        margin: 0;
        font-weight: 700;
    }

    .modal .modal-header i {
        color: #fff;
        cursor: pointer;
    }

    .modal .modal-content {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

   .modal .modal-content p {
        color: #595959;
        padding:0;
        margin:0;
        font-weight: 500;
        display: flex;
        flex-direction: column;
    }

    .objName {
        font-weight: 800 !important;
        color: black !important;
        font-size: 1.4rem;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        margin-bottom: 2rem;
    }

    .button {
    background-color: black;
    padding: 1rem;
   font-size: 1rem;
   cursor: pointer;
    font-weight: 600;
    width: 150px;
    color: #fff;
    transition: .6s;
    border-radius: 2rem;
  }
  .button:hover {
    opacity: .7;
  }
    
</style>