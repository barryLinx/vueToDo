<template>
  <header class="position-sticky top-0 mt-3">
    <div class="container">
        <h1 class="text-center text-light">Vue todo Note</h1>
      <nav class="d-flex justify-content-center mt-5">      
        <ul class=" d-flex">
          <!-- change checkbox  -->
          <li class="nav-item me-5">
            <button type="button" @click="this.$emit('select','')" class="btn btn-outline-primary position-relative">
                Notes
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                             {{ this.notes.length == 0 
                                ? ''
                                : this.notes.filter(n=> n.status == false && n.reminder == false).length
                             }}       
               </span>
            </button>
          </li>
          <li class="nav-item me-5">
            <button type="button" @click="this.$emit('select','progress')" class="btn btn-success position-relative">
                In progress
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   {{this.notes.filter(n=> n.reminder == true && n.status == false ).length == 0 
                     ? ''
                     : this.notes.filter(n=> n.reminder == true && n.status == false).length }}                
               </span>
            </button>
            </li>
          <li class="nav-item me-5">
            <button type="button" @click="this.$emit('select','Completed')" class="btn btn-warning  position-relative">
                Completed
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   {{this.notes.filter(n=> n.status == true).length == 0 
                    ? ''
                    : this.notes.filter(n=> n.status == true).length 
                   }}                
               </span>
            </button>
            </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  emits:['select'],
  props:{
    notes:Array
  },
  data() {
    return {
     selected:''
    }
  },
  methods: {
    change(parm){
      this.$emit('select',parm)

    }
  },

  computed: {
  }
}
</script>