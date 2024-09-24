<template>
<footer class="footer bg-dark text-white py-4">
    <div class="container">
      <div class="row justify-content-around">

        <div class="col-lg-3 col-md-3 mb-3 mb-lg-0 text-center ">
        <h5 class="title">Dove Sono</h5>
        Alcamo (TP), 91011
        </div>
        
        <div class="col-lg-3 col-md-3 mb-3 mb-lg-0 text-center text-lg-left">
          <h5 class="title">Contattami</h5>
          <p> <a href="mailto:cruciata9748@gmail.com" class="social">Cruciata9748@gmail.com</a></p>
          <p> <a href="tel:+393393132363" class="social">+39 3393132363</a></p>
        </div>

       
        <div class="col-lg-3 col-md-3 d-flex flex-column align-items-center ">
          <h5 class="title">Seguimi su</h5>
          <div class="d-flex justify-content-center gap-3">
            <a href="https://github.com/pietrocruciata" class="social me-3" target="_blank">
                <img src="/public/img/github.png" alt="">
          </a>
          <a href="https://www.linkedin.com/in/pietro-cruciata-7463a2258/" class="social me-3" target="_blank">
            <img src="/public/img/linkedin.png" alt="">
          </a>
          <a href="https://instagram.com/piero_cruciata" class="social" target="_blank">
            <img src="/public/img/instagram.png" alt="">
            
          </a>
          </div>
          
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {};
</script>

<style scoped lang="scss">
@use '../style/partials/palette' as *;
@use '../style/general';



.social{
  width: 50px;
    &:hover {
        transform: scale(1.07);
        // border-bottom: 1px solid $yellow;
    }
}
.footer a:hover {
    text-decoration: none;
    color: #ffc107;
    
}

.footer .fab {
    transition: transform 0.2s;
}

.footer .fab:hover {
    transform: scale(1.1);
}
.title {
    color: $yellow;
    font-size: 40px;
    text-align: center;
    font-family: auto;
    // border-top: 4px solid $yellow;
    // border-bottom: 1px solid $yellow;
}
</style>