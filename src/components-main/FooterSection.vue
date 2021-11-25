<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>جميع الحقوق محفوظه لدى شركة بنائي 2021 <span>&copy;</span></h5>
        </div>
        <div class="col-md-6 text-start">
          <p>تصميم وتطوير لدى شركة بنائي</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterSecotion",
};
</script>

<style scoped>
.footer {
  background-color: #085aa5;
  width: 100%;
  height: auto;
  padding: 5px 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
h5 {
  font-family: "El Messiri";
  color: #ffffff;
  font-size: 14px;
  pointer-events: none;
}
span {
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-family: fantasy;
  pointer-events: none;
}
p {
  font-family: "El Messiri";
  color: #ffffff;
  font-size: 14px;
  display: inline-block;
  pointer-events: none;
}
@media (max-width: 768px) {
  .col-md-6 {
    text-align: center !important;
  }
}
</style>
