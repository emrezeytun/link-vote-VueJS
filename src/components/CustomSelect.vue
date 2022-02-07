<template>
    <div class="custom-select">
      <select  @change="sortListEmit($event.target.value)"> 
      <option  disabled selected> Order By </option> 
      <option  v-for="(option,index) of options" :key="index" :value="option.value"> {{option.text}} </option> 
      </select>
    </div>
</template>

<script>
    export default {
        name: "CustomSelect",
        props: {
            options:{
                type: Array
            },
        },
        methods: {
            sortListEmit(val){
                this.$emit('selectedVal', val);
            }
        }
    }
</script>

<style scoped >

.custom-select select {
  margin: 0 5rem 15px 5px;
  width: 200px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(../assets/arrow-down.png) 96% / 15% no-repeat #eee;
}

.custom-select select::-ms-expand { 
    display: none; 
}
   
</style>
