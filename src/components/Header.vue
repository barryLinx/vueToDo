<template>
  <header class="position-sticky top-0 mt-5">
    <div class="container">
      <div class="d-flex justify-content-center">
        <h1 class="text-light">Vue todo Note</h1>
        <nav class="d-flex justify-content-center ">
          <ul class="d-flex">
            <!-- change checkbox  -->
            <li class="nav-item me-3">
              <button
                type="button"
                @click="this.$emit('select', '')"
                class="btn btn-outline-primary position-relative"
              >
                Notes
                <span
                  class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-danger
                  "
                >
                  {{
                    this.notes.length == 0
                      ? ""
                      : this.notes.filter(
                          (n) => n.status == false && n.reminder == false
                        ).length
                  }}
                </span>
              </button>
            </li>
            <li class="nav-item me-3">
              <button
                type="button"
                @click="this.$emit('select', 'progress')"
                class="btn btn-success position-relative"
              >
                In progress
                <span
                  class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-danger
                  "
                >
                  {{
                    this.notes.filter(
                      (n) => n.reminder == true && n.status == false
                    ).length == 0
                      ? ""
                      : this.notes.filter(
                          (n) => n.reminder == true && n.status == false
                        ).length
                  }}
                </span>
              </button>
            </li>
            <li class="nav-item me-3">
              <button
                type="button"
                @click="this.$emit('select', 'Completed')"
                class="btn btn-warning position-relative"
              >
                Completed
                <span
                  class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-danger
                  "
                >
                  {{
                    this.notes.filter((n) => n.status == true).length == 0
                      ? ""
                      : this.notes.filter((n) => n.status == true).length
                  }}
                </span>
              </button>
            </li>
          </ul>
        </nav>
        <div class="d-flex">
          <a
            href="#"
            class="nav-link align-items-center fs-4"
            data-bs-toggle="modal"
            data-bs-target="#AddEdit"
          >
            <i class="bi bi-plus-lg text-success"></i
          ></a>

          <a
            href=""
            class="nav-link align-items-center"
            @click.prevent="layoutSwitch"
          >
            <i
              class="text-info"
              :class="[
                active ? 'bi bi-grid-1x2-fill fs-4' : 'bi bi-list-task fs-3',
              ]"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  emits: ["select", "switch"],
  props: {
    notes: Array,
  },
  data() {
    return {
      selected: "",
      active: true,
    };
  },
  methods: {
    layoutSwitch() {
      this.active = !this.active;
      this.$emit("switch", this.active);
    },
    change(parm) {
      this.$emit("select", parm);
    },
  },

  computed: {},
};
</script>
