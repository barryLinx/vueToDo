<template>
  <Header :notes="AllNotes" @select="navSelecded" />
  <div class="container position-relative">
    <div class="row justify-content-center">
      <Card
        v-for="item in classFilter"
        :key="item.renderId"
        :note="item"
        :active="defaultActive"
        @update="getNotes"
        @editNote="updateNote"
      />
    </div>
   
    <div class="d-flex flex-column justify-content-between align-items-center ">
    <table class="table-Note text-light" :class="{'d-none':defaultActive}">
      <thead>
        <tr>          
           <th scope="col" class="fs-3 pe-5 text-start text-light"></th>
          <th scope="col" class="fs-3 pe-5 text-start text-light">#</th>
          <th scope="col" class="fs-3 text-start text-light">Title</th>
          <th scope="col" class="fs-3 ps-5 text-start text-light">Comment</th>
          <th scope="col" class="fs-3 text-end text-light">DateTime</th>         
        </tr>
      </thead>
      <tbody>
        <List
          v-for="(item,index) in classFilter"
          :key="item.renderId"
          :index="index"
          :note="item"
          :active="defaultActive"
           @editNote="updateNote"
        />
      </tbody>
    </table>
 </div>
    <Sidebar @switch="defaultActive = !defaultActive" />
  </div>
  <Modal  @update="getNotes"  :edit="editmodal"/>
</template>
<script>
import Header from "./components/Header";
import Card from "./components/Card.vue";
import List from "./components/List.vue";
import Modal from "./components/Modal.vue";
import Sidebar from "./components/Sidebar";
import { getAllNotes } from "noteAPI";
export default {
  components: {
    Header,
    Card,
    List,
    Modal,
    Sidebar,
  },
  data() {
    return {
      defaultActive: true,
      selected:'',
      AllNotes: [],
      Completed:0,
      inProgress:0,
      editmodal:null
    };
  },
  methods: {
    // switchToggle(parm){
    //   this.defaultActive = parm;
    // }
    navSelecded(parm){
      this.selected = parm

    },
    updateNote(parm){
      this.editmodal= parm;
    },
    getNotes() {
      this.AllNotes = getAllNotes();
    },
  },
  mounted() {
    this.AllNotes = getAllNotes();
    console.log(this.AllNotes);
  },
  computed: {
    classFilter(){
      let fNote;
      switch (this.selected) {
        case 'Completed':
           fNote = this.AllNotes.filter(n=> n.status == true );
          break;
        case 'progress':
           fNote = this.AllNotes.filter(n=> n.reminder == true && n.status == false);
          break;
      
        default:
          fNote = this.AllNotes.filter(n=> n.reminder == false && n.status == false);
          console.log('fNote',fNote)
          break;
      }
      return fNote;
    }
  },
};
</script>
