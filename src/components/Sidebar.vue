<template>
  <!-- <div class="position-relative">  </div> -->
    <div class=" position-absolute top-50 start-100  translate-middle">
      <ul class="nav flex-column fs-2 ">
        <li class="nav-item ">
          <a href="#" class=" nav-link p-5" 
          data-bs-toggle="modal" 
          data-bs-target="#AddEdit">
          <i class="bi bi-plus-lg text-success"></i></a>
        </li>
        <li class="nav-item ">
          <a href="" class="nav-link p-5" @click.prevent="layoutSwitch">            
           <i class="text-info" :class="[ 
              active 
               ? 'bi bi-grid-1x2-fill'
               :'bi bi-list-task' ]"
               ></i> 
            </a>
        </li>
        <li class="nav-item">
          <span 
           class="text-danger p-5"
          ref="drop-trash"  
          @drop.prevent="drop_delete" 
          @dragover.prevent="allowDrop"
          @dragleave.prevent="leaveDrop"
           > 
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
    'switch',
    'updateView'
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
      
       const id = evt.dataTransfer.getData("text");
       console.log("drop id",Number(id))
       deleteNote(Number(id));
       
      this.$emit('updateView')
      this.$refs["drop-trash"].classList.remove('drop__hover');
    },
    allowDrop(){
      this.$refs["drop-trash"].classList.add('drop__hover');
    },
    leaveDrop(){
       this.$refs["drop-trash"].classList.remove('drop__hover');
    }
   

  },

};
</script>
