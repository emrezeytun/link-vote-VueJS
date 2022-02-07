<template>
  <div id="app">
    <div class="navbar"> 
      <img src="./assets/logo.png"> 
     <p class="navbar-item"><span class="customBold">Link</span>VOTE <span class="customThin">Challenge</span></p>
  </div>
  <hr style="margin-bottom: 2rem;">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
}



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
</style>
