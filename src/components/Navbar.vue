<template>
    <div class="navbar"> 
      <img src="../assets/logo.png"> 
     <p class="navbar-item"><span class="customBold">Link</span>VOTE <span class="customThin">Challenge</span></p>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>



<style scoped>



.navbar {
    display: flex;
    justify-content: space-around;
    margin: 0rem 4rem 0rem 4rem;
}
.customBold {
    font-weight: 800;
}

.customThin {
  font-weight: 400;
}

hr {
    margin: 0 18%;
}
.navbar img {
  margin-bottom: 5px;
}


.navbar-item {
    margin: auto 0;
    font-size: 1.2rem;
    font-weight: 300;
}
    hr {
        margin-bottom: 2rem;
    }
</style>