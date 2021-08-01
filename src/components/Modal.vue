<template>
  <div
    class="modal fade"
    id="AddEdit"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ Note.title ? "Edit Note" : "Add Note" }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="input-group mb-3">
              <span class="input-group-text">Title</span>
              <input
                v-model="Note.title"
                type="text"
                class="form-control"
                placeholder="Add Title"
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Comment</span>
              <textarea
                v-model="Note.comment"
                class="form-control"
                cols="42"
                rows="6"
              ></textarea>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">DateTime</span>
              <input v-model="Note.dateTime" type="datetime-local" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="save"
          >
            {{ edit !== null ? "Modify Note" : "Save changes" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveNote } from "noteAPI";
export default {
  emits: ["update"],
  props: {
    edit: Object,
  },
  data() {
    return {
      Note: {
        id: "",
        renderId: "",
        title: "",
        comment: "",
        dateTime: "",
        reminder: false,
        status: false,
      },
    };
  },

  watch: {
    edit: {
      handler() {
        if (this.edit !== null) {
          this.Note = { ...this.edit };
        }
      },
    },
  },
  methods: {
    save() {
      if (!this.Note.title) {
        alert("Title is Empty");
        return;
      }
      saveNote(this.Note);
      this.$emit("update");
      this.deleteNote(this.Note)
    },
    deleteNote(obj) {
      Object.keys(obj).forEach((key) => {
        switch (typeof obj[key]) {
          case "boolean":
            obj[key] = false;
            break;

          default:
            obj[key] = "";
            break;
        }
      });
    },
  },
};
</script>
