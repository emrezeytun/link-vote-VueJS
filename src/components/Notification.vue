<template>
    <div v-if="notificationObj.isNotificationActive" class="notificationToast">
        <div class="notificationItem">
             <p> <span> {{notificationObj.itemNameForNotification}} </span> {{notificationObj.notificationMessage}}</p>   
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notification",
        props: { 
            notificationObj: {
                type: Object
            }
        },
    }
</script>

<style scoped >
    .notificationToast {
        position: fixed;
        top: 30%;
        left: 45%;
        justify-content: center;
        z-index: 5;
        }
   .notificationToast  .notificationItem {
            padding: 1rem;
            position: fixed;
            background-color: #dcf9d3;
            color: #57a457;
            border: 1px solid #7ec76a;
            top: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            
            }

    .notificationToast .notificationItem p  {
                font-weight: 500;
      }

      .notificationToast .notificationItem p span {
            font-weight: 800;
      }
</style>
