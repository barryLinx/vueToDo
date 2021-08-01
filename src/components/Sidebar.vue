<template>
  <!-- <div class="position-relative">  </div> -->
    <div class=" position-absolute top-50 start-100  translate-middle">
      <ul class="nav flex-column fs-2 ">
        <li class="nav-item">
          <a href="#" class=" nav-link" 
          data-bs-toggle="modal" 
          data-bs-target="#AddEdit">
          <i class="bi bi-plus-lg text-success"></i></a>
        </li>
        <li class="nav-item">
          <a href="" class=" nav-link" @click.prevent="layoutSwitch">            
           <i class="text-info" :class="[ 
              active 
               ? 'bi bi-grid-1x2-fill'
               :'bi bi-list-task' ]"
               ></i> 
            </a>
        </li>
        <li class="nav-item" @drop.prevent="drop_delete">
          <span  class=" nav-link text-danger"> 
            <i class="bi bi-trash-fill"></i>
            </span>
        </li>
      </ul>
    </div>

</template>
<script>
//<i class="bi bi-plus-lg"></i>
// <i class="bi bi-grid-1x2-fill"></i>
// <i class="bi bi-trash-fill"></i>
import { deleteNote }  from 'noteAPI.js'
export default {
  emits:[
    'switch'
  ],
  data() {
    return {
      active:true
    }
  },
  methods: {
    layoutSwitch(){
      this.active = !this.active;
      this.$emit('switch',this.active)
    },
    drop_delete(evt){
        evt.target.style.background = "red";
      console.log("id",id);
       console.log("drop");
      //deleteNote()
    }
  },

};
</script>
