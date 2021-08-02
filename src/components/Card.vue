<template>
  <div
    draggable="true"
    :ref="'card'+index"
    @dragstart="dragStartEvent(note.id, $event)"

    
    class="
    
      card
      text-white
      bg-secondary
      mb-3
      me-5
      mt-3
      px-0
      border-5 border-end-0 border-top-0 border-bottom-0
    "
    :class="{
      'd-none': !active,
      'border-start': note.status,
      'border-warning': note.status,
      'border-success ': note.reminder,
    }"
    style="max-width: 18rem"
  >
    <div class=" card-header px-0 py-2 d-flex">
      <h2 class="overflow-hidden ps-0 pe-3 me-auto grab w-100" style="white-space: nowrap">
        <i class="bi bi-grip-vertical "></i>
        {{ note.title }}
      </h2>
   <!-- data-bs-offset="-125,2"  -->
      <div class="dropdown dropdown-icon">
        <a
          class="fs-4 px-1 py-1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"          
        >
          <i class="bi bi-three-dots-vertical text-light"></i>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark ">
          <li class="d-inline-block">
            <a
              href=""
              @click.prevent="edit"
              class=" dropdown-item d-inline-block   text-secondary "
              data-bs-toggle="modal"
              data-bs-target="#AddEdit"
            >
              <i class="bi bi-pencil-square"></i
            ></a>
          </li>
          <li class="d-inline-block">
            <a
              href=""
              @click.prevent="saveReminder"
              class=" dropdown-item d-inline-block   text-secondary"
            >
              <i
                :class="[
                  note.reminder
                    ? 'text-success bi bi-bookmark-fill'
                    : 'bi bi-bookmark',
                ]"
              ></i
            ></a>
          </li>
          <li class="d-inline-block">
            <a
              href=""
              @click.prevent="saveStatus"
              class=" dropdown-item d-inline-block   text-secondary"
            >
              <i
                class="bi"
                :class="[
                  note.status
                    ? 'text-warning bi-check-circle-fill'
                    : ' bi-check-circle',
                ]"
              ></i
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="card-body">
      <p class="card-text overflow-hidden" style="white-space: nowrap">
        {{ note.comment }}
      </p>
      <div class="d-flex justify-content-end">
        <!-- <span class="text-must me-auto">
          <a
            href=""
            class="text-info"
            data-bs-toggle="modal"
            data-bs-target="#AddEdit"
          >
            more...</a
          >
        </span> -->

        <span class="text-must">{{ note.dateTime.substring(0, 10) }}</span>
      </div>
    </div>

    <div
      :class="{ active: note.status, ' d-none': !note.status }"
      class="card-overlay"
    >
      <span class="card-overlay-text"> Completed </span>
    </div>
  </div>
</template>
<script>
import { saveNote } from "noteAPI";
export default {
  emits: ["editNote"],
  props: {
    active: Boolean,
    note: Object,
    index:Number
  },

  methods: {
    
    dragStartEvent(id, evt) {
       evt.dataTransfer.setData("text",id);
        console.log("drag",evt);
      // evt.dataTransfer.setData("noteId",id);
      console.log("Start");
    },
    // dragOverEvent() {
    //   console.log("over");
    //   this.$refs['card'+this.index]
    // },
   

    edit() {
      this.$emit("editNote", this.note);
    },
    saveReminder() {
      this.note.reminder = !this.note.reminder;
      saveNote(this.note);
    },
    saveStatus() {
      this.note.status = !this.note.status;
      saveNote(this.note);
    },
  },
};
</script>
