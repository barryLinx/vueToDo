<template>
  <tr :class="{'d-none':active}" draggable="true"
   @dragstart="dragstart"
   
  >  
    <td class="ps-5 fs-4"><i class="bi bi-grip-vertical"></i></td>
    <td class="pe-5 text-start">{{ index+1 }}</td>
    <td class="text-start">{{ note.title }}</td>
    <td class="ps-5 text-start">{{ note.comment.substring(0, 10) }}</td>
    <td class="ps-5 text-start">
   
     {{ note.dateTime.substring(0, 10) }}
    </td>
    <th scope="row" class="">
      <ul class="nav item-icon d-flex justify-content-start fs-4">
        <li class="nav-item">
          <a href="" @click.prevent="edit" class="nav-link p-2 text-secondary" data-bs-toggle="modal" data-bs-target="#AddEdit">
            <i class="bi bi-pencil-square"></i>
            </a>
        </li>
        <li class="nav-item">
          <a href="" @click.prevent="saveReminder" class="nav-link p-2 text-secondary">
             <i :class="[note.reminder ? 'text-success bi bi-bookmark-fill':'bi bi-bookmark']" ></i>
          </a>
        </li>
        <li class="nav-item">
          <a href="" @click.prevent="saveStatus" class="nav-link p-2 text-secondary">
            <i class="bi" :class="[note.status ? 'text-warning bi-check-circle-fill':' bi-check-circle']"></i>
            </a>
        </li>
      </ul>
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
