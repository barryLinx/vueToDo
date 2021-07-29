<template>
  <header class="position-sticky top-0 mt-3">
    <div class="container">
        <h1 class="text-center text-light">Vue todo Note</h1>
      <nav class="d-flex justify-content-center mt-5">      
        <ul class="list-group d-flex">
          <li class="nav-item me-5">
            <button type="button" class="btn btn-outline-primary position-relative">
                Notes
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   10                
               </span>
            </button>
          </li>
          <li class="nav-item me-5">
            <button type="button" class="btn btn-success position-relative">
                In progress
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   5                
               </span>
            </button>
            </li>
          <li class="nav-item me-5">
            <button type="button" class="btn btn-warning  position-relative">
                Completed
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   1                
               </span>
            </button>
            </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
