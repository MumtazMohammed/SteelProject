<template>
  <div class="section-one">
    <div class="container-lg">
      <div class="row">
        <div class="col-sm-12 t1 text-center">
          <h3>شركة بنائي لتوريد الحديد ومعدات البناء</h3>
        </div>
        <div class="col-sm-12 t2 text-center">
          <div class="alert alert-light" role="alert">
            لسنا الوحيدون ولكن سنبقى الافضل
          </div>
        </div>
        <div class="col-sm-12 t3 text-center">
          <p class="logo">logo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstSection",
};
</script>

<style scoped>
.section-one {
  position: relative;
  width: 100%;
  height: calc(100vh - 75px);
  overflow: hidden;
  background-color: #085aa5;
}
.section-one::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2.5vh;
  background-color: #ffffff;
  transform: skew(0deg, -8deg);
  z-index: 0;
  bottom: 130px ;
}
.t1 {
  transform: translateY(70px) ;
}
h3 {
  color: #ececec;
  font-family: "El Messiri";
  margin: 100px 0 0 0;
  font-size: 30px;
}
.t2 {
  transform: translateY(70px) ;
}

.alert-light {
  color: #cfcfcf;
  background-color: transparent;
  border-color: transparent;
  font-family: "El Messiri";
  font-size: 22px;
}
.t3 {
  transform: translateY(70px) ;
}
.logo {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 30px;
  font-family: cursive;
}

@media (max-width: 532px) {
  .alert-light {
    font-size: 15px;
  }
  h3 {
    font-size: 22px;
  }
}
@media (max-width: 393px) {
  .alert-light {
    font-size: 15px;
  }
  h3 {
    font-size: 18px;
  }
}
@media (max-height: 450px) {
  .t1 {
    transform: translateY(0px);
    margin-top: 5px;
  }
  .t2 {
    transform: translateY(0px);
  }
  .t3 {
    transform: translateY(0px);
  }
  .alert {
    margin: 5px 0 5px 0;
    padding: 0;
  }
  h3 {
    color: #ececec;
    font-family: "El Messiri";
    margin: 10px 0 0 0;
    font-size: 30px;
  }
  .section-one::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2.5vh;
    background-color: #ffffff;
    transform: skew(0deg, -8deg);
    z-index: 0;
    bottom: 65px;
  }
}
</style>
