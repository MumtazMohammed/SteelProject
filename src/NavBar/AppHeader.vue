<template>
  <div class="app-header">
    <div class="container-lg">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="brand">
            <a class="navbar-brand" href="#">بنائي</a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="bars"> <fa icon="bars" /></span>
          </button>
          <div
            class="collapse text-center navbar-collapse"
            id="navbarTogglerDemo01"
          >
            <ul class="navbar-nav text-center me-auto mb-3 mt-3 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">
                  الرئيسة
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" tag="a">
                  من نحن
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/product" class="nav-link" tag="a">
                  منتجات
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link" tag="a">
                  أتصل بنا
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {
      AriaExpanded: "true",
    };
  },
};
</script>

<style scoped>
.app-header {
  background-color: #eeeeee;
  position: relative;
  z-index: 2;
}
.navbar-collapse {
  transition: all 0.3s ease;
}
.navbar-nav {
  padding: 0;
}
.navbar-nav > li:not(:last-child) {
  margin: 0 0 0 15px;
}
.brand {
  width: 150px;
  position: relative;
  padding: 5px 0;
  transition: 0.3s all linear;
}
.navbar-light .navbar-brand {
  font-size: 23px;
  font-family: "El Messiri";
  font-weight: 600;
  color: #085aa5;
  pointer-events: none;
}

.navbar-light .navbar-nav .nav-link {
  font-family: "El Messiri";
  font-size: 18px;
  font-weight: 500;
  color: #085aa5;
  transition: 0.1s all linear;
}

.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-light .navbar-toggler {
  border: none;
}
.bars {
  color: #085aa5;
  font-size: 23px;
}
@media (max-width: 990px) {
  .navbar-light .navbar-nav .nav-link:hover {
    box-shadow: 0px 0px 3px 1px white;
    background: #085aa5;
    backdrop-filter: blur(73px);
    color: white;
    border-radius: 10px;
  }
  .navbar-nav > li:not(:last-child) {
    margin: 0 0 0 0px;
  }
}
</style>
