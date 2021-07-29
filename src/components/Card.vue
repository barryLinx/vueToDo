<template>
  <div
    class="card card-hover text-dark bg-light mb-3 me-5 mt-3 px-0 "
    :class="{'d-none':!active}"
    style="max-width: 18rem;"
  >
    <h2 class="card-header overflow-hidden pe-3" style="white-space:nowrap;" >完成vue55555555555555555555555555555555555555555</h2>

    <div class="card-body">
      <p class="card-text overflow-hidden" style="white-space:nowrap;">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
           Some quick example text to build on the card title and make up the bulk
        of the card's content.
           Some quick example text to build on the card title and make up the bulk
        of the card's content.
           Some quick example text to build on the card title and make up the bulk
        of the card's content.
           Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <span class="text-must"><a href="" class="">more...</a> </span>
    </div>
    <div class="card-icon">
      <ul class="nav flex-column item-icon ">
        <li class="nav-item">
          <a href="" class=" nav-link"> <i class="bi bi-pencil-square"></i></a>
        </li>
        <li class="nav-item">
          <a href="" class=" nav-link"><i class="bi bi-bookmark"></i></a>
        </li>
        <li class="nav-item">
          <a href="" class=" nav-link"><i class="bi bi-check-circle"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    active:Boolean
  }
}
</script>