<template>
  
    <div
      class="note-list w-75 d-flex mb-4 align-items-center justify-content-between border-bottom border-3"
      :class="{'d-none':active}"
    >
      <div class="icon-list me-1">
        <ul class="nav item-icon">
          <li class="nav-item">
            <a href="" class="nav-link p-2">
              <i class="bi bi-pencil-square"></i
            ></a>
          </li>
          <li class="nav-item">
            <a href="" class=" nav-link p-2"><i class="bi bi-bookmark"></i></a>
          </li>
          <li class="nav-item">
            <a href="" class=" nav-link p-2"><i class="bi bi-check-circle"></i></a>
          </li>
        </ul>
      </div>
      <div class="title me-3 text-light">Vue 已經完成</div>
      <div
        class="comment overflow-hidden me-3 text-light"
        style="width: 36rem;white-space:nowrap;"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        rem nobis veniam porro beatae! Est fugiat, voluptatum pariatur
        obcaecati, dolorum eius error magni, aperiam repellendus blanditiis
        perspiciatis eaque consequuntur quaerat.
      </div>
      <div class="time text-light">2021/12/20</div>
    </div>

  
</template>
<script>
export default {
  props:{
    active:Boolean
  }
}
</script>