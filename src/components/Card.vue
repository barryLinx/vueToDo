<template>

  <div  
    draggable="true"
    @dragstart="dragStartEvent(note.id,$event)"
    @dragover="dragOverEvent"
    @dragenter="dragEnterEvent"
    @dragleave="dragLeaveEvent"
    class="card text-white bg-secondary 
    mb-3 me-5 mt-3 px-0 
     border-5  border-end-0 border-top-0 border-bottom-0"
    :class="{ 'd-none': !active ,
    'border-start': note.status,   
    'border-warning':note.status,
    'border-success ':note.reminder,
    }"
    style="max-width: 18rem;"
  >
    <h2 class="card-header overflow-hidden ps-0 pe-3" style="white-space:nowrap;">
      <i class="bi bi-grip-vertical"></i>
      {{ note.title }}
    </h2>

    <div class="card-body">
      <p class="card-text overflow-hidden" style="white-space:nowrap;">
        {{ note.comment }}
      </p>
      <div class="d-flex ">
        <span class="text-must me-auto">
          <a href="" class="text-info" data-bs-toggle="modal" data-bs-target="#AddEdit">
            more...</a
          >
        </span>

        <span class="text-must">{{
          note.dateTime.substring(0, 10)
        }}</span>
      </div>
    </div>
    <div class="card-icon">
      <ul class="nav flex-column item-icon ">
        <li class="nav-item">
          <a href="" @click.prevent="edit" class="nav-link text-secondary"  data-bs-toggle="modal" data-bs-target="#AddEdit"> 
            <i class="bi bi-pencil-square"></i></a>
        </li>
        <li class="nav-item">
          <a href="" @click.prevent="saveReminder" class="nav-link text-secondary">
            <i :class="[note.reminder ? 'text-success bi bi-bookmark-fill':'bi bi-bookmark']" ></i></a>
        </li>
        <li class="nav-item">
          <a href="" @click.prevent="saveStatus" class=" nav-link text-secondary">
            <i class="bi" :class="[note.status ? 'text-warning bi-check-circle-fill':' bi-check-circle']"></i></a>
        </li>
      </ul>
    </div>

    <div :class="{'active':note.status,' d-none':!note.status}" class="card-overlay" >
      <span  class="card-overlay-text" >
      Completed
      </span>
    </div>
  </div>
</template>
<script>
import {saveNote}  from 'noteAPI'
export default {
  emits:['editNote'],
  props: {
    active: Boolean,
    note: Object,
  },

  methods: {
    dragStartEvent(id,event){
      console.log(event)
    },
    dragOverEvent(){
      console.log('over')
    },
    dragLeaveEvent(){
      console.log('Leave');
    },

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
