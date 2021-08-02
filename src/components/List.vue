<template>
  <tr  class="grab" :class="{'d-none':active}" draggable="true"
   @dragstart="dragStartEvent(note.id,$event)"
  >  
    <td class="ps-5 fs-4"><i class="bi bi-grip-vertical"></i></td>
    <td class="pe-5 text-start">{{ index+1 }}</td>
    <td class="text-start">{{ note.title }}</td>
    <td class="ps-5 text-start">{{ note.comment.substring(0, 10) }}</td>
    <td class="ps-5 text-start">
   
     {{ note.dateTime.substring(0, 10) }}
    </td>
    <th scope="row" class=" ">
       <div class="dropdown dropend dropdown-icon">
       <a
          class=" fs-4 px-1 py-1  text-secondary"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"          
        >
          <i class="bi bi-three-dots-vertical"></i>
        </a>
      <ul class="dropdown-menu dropdown-menu-dark fs-4">
        <li class="d-inline-block">
          <a href="" @click.prevent="edit" class="d-inline-block p-2 text-secondary" data-bs-toggle="modal" data-bs-target="#AddEdit">
            <i class="bi bi-pencil-square"></i>
            </a>
        </li>
        <li class="d-inline-block">
          <a href="" @click.prevent="saveReminder" class="d-inline-block p-2 text-secondary">
             <i :class="[note.reminder ? 'text-success bi bi-bookmark-fill':'bi bi-bookmark']" ></i>
          </a>
        </li>
        <li class="d-inline-block">
          <a href="" @click.prevent="saveStatus" class="d-inline-block p-2 text-secondary">
            <i class="bi" :class="[note.status ? 'text-warning bi-check-circle-fill':' bi-check-circle']"></i>
            </a>
        </li>
      </ul>
       </div>
    </th>
  </tr>

  
</template>
<script>
import { saveNote } from "noteAPI";
export default {
  emits:['editNote'],
  props: {
    active: Boolean,
    note: Object,
    index:Number
  },
  methods: {
     dragStartEvent(id, evt) {
       evt.dataTransfer.setData("text",id);
        // console.log("drag",evt);
      // evt.dataTransfer.setData("noteId",id);
     // console.log("Start");
    },
    // dragOverEvent() {
    //   console.log("over");
    //   this.$refs['card'+this.index]
    // },
    
     edit(){
      this.$emit('editNote',this.note);
    },
    saveReminder(){
      this.note.reminder =  !this.note.reminder;
      saveNote(this.note)
    },
    saveStatus(){
      this.note.status =  !this.note.status;
      saveNote(this.note)
    }
  },
};
</script>
