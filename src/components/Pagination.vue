<template>
<div>
    <div class="pagination">
          <div :class="{'disabled':pagination.currentPage==1}"  @click="currentPageEmit((pagination.currentPage)-1)" class="paginationItem customMR1"> <p> <i class="fas fa-angle-left"></i> </p> </div>
        <div  v-for="(page, index) of pagination.pageSize" :key="'diff'+index" class="paginationItem"> 
            <p :class="{'active':pagination.currentPage==index+1}" @click="currentPageEmit(index+1)"> {{index+1}} </p> </div>
          <div :class="{'disabled':pagination.currentPage==pagination.pageSize}" @click="currentPageEmit((pagination.currentPage)+1)" class="paginationItem customML1"> <p><i class="fas fa-angle-right"></i>  </p> </div>
    </div>
    </div>
</template>

<script>

export default {
    props: {
        pagination: {
            type: Object
        }
    },
    methods: {
         currentPageEmit(val){
           this.$emit('currentPageVal', val);
         }
    }

}
</script>


<style scoped>

.pagination  {
    display: flex;
    margin: 0 0.2rem;
    justify-content: center;
    color: black;
}

.paginationItem p:hover  {
    border: 1px solid #b3b3b3;
}

.paginationItem p.active  {
    border: 1px solid #b3b3b3;
}

.paginationItem p  {
    margin: 0rem 0.2rem;
    padding: 0.5rem;
    border: 1px solid transparent;
    font-weight: 800;
    cursor: pointer;
}

.customMR1 {
    margin-right: 1rem;
}

.customML1 {
    margin-left: 1rem;
}

.pagination .disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: .3;
}

.pagination .disabled:hover {
    cursor: not-allowed;
}

</style>
