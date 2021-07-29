<template>
  <Header />
  <div class="container position-relative">
    <div class="row justify-content-center">
      <Card v-for="item in 3" :key="item" :active="defaultActive" />
    </div>
    <div class="d-flex flex-column justify-content-between align-items-center">
      <List v-for="item in 3" :key="item" :active="defaultActive" />
    </div>
    <Sidebar @switch="switchToggle" />
  </div>
</template>
<script>
import Header from "./components/Header";
import Card from "./components/Card.vue";
import List from "./components/List.vue";
import Modal from "./components/Modal.vue";
import Sidebar from "./components/Sidebar";
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
      defaultActive:true
    }
  },
  methods: {
    switchToggle(parm){
      this.defaultActive = parm;
    }
  },
};
</script>
