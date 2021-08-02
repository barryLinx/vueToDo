<template>
  <!-- <div class="position-relative  position-absolute top-50 start-100  translate-middle">  </div> -->
    <div class="position-fixed" style="right:35px;bottom:60px">
      <span 
           class="text-danger p-5 fs-2"
          ref="drop-trash"  
          @drop.prevent="drop_delete" 
          @dragover.prevent="allowDrop"
          @dragleave.prevent="leaveDrop"
           > 
            <i class="bi bi-trash-fill"></i>
          </span>
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
      //active:true
    }
  },
  methods: {
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
