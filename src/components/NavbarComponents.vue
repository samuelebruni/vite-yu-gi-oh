<script>
export default {
  name: 'navbar'
}
</script>

<template>
  <section class="bg-light">
    <div class="container bg-light">
      <nav class="navbar navbar-expand navbar-light bg-light ">
        <div class="nav navbar-nav w-100 d-flex justify-content-between">
          <div>
            <img src="https://www.nicepng.com/png/detail/71-713842_transparent-yugioh-logo-yu-gi-oh-the-art.png" alt=""
              height="50px" width="80px">
          </div>
          <div class="d-flex">
            <a class="nav-item nav-link active" href="#" aria-current="page">Home <span
                class="visually-hidden">(current)</span></a>
            <a class="nav-item nav-link" href="#">Cards</a>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<style scoped></style>
