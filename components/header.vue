<template>
  <header class="main-header">
    <div class="wrapper">
      <div class="logo">
        <a><img src="/logo.jpg" class="img-fluid" /></a>
      </div>
      <div class="main-nav d-none d-lg-block">
        <nav>
          <a href="#">ABOUT US</a>
          <a href="#">PRODUCTS</a>
          <a href="#">SERVICES</a>
          <a href="#">SOLAR BUSINESS ENABLER </a>
        </nav>
      </div>
      <div class="d-flex align-items-center">
        <img src="/icon-search.svg" class="img-fluid search" />
        <div class="toggle-button-cover">
          <div id="button-3" class="button r">
            <input class="checkbox" type="checkbox">
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
        </div> 
        <img src="/menu.jpg" class="img-fluid menu" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.main-header{
  padding: 15px 0;
  .wrapper{
    display: flex;
    align-items: center;
    max-width: 90%;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
  }

  .logo{
    width: 160px;
  }
  .main-nav{
    margin: 10px 15px 0;
  }
  .menu{
    width: 30px;
    margin-top: 5px;
  }
  .search{
    margin-top: 5px;
  }
  nav{
    display: flex;
    margin: 0 -15px;
    a{
      text-transform: uppercase;
      font-weight: bold;
      text-decoration: none;
      margin: 0 15px;
      color: #666666;
      white-space: nowrap;
    }
  }
}

.toggle-button-cover {
  position: relative;
  margin: 0 10px;
  height: 30px;
  margin-top: 15px;
}

.button-cover {
  height: 100px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 10px 20px -8px #c5d6d6;
  border-radius: 4px;
}

.button-cover:before {
  counter-increment: button-counter;
  content: counter(button-counter);
  position: absolute;
  right: 0;
  bottom: 0;
  color: #d7e3e3;
  font-size: 12px;
  line-height: 1;
  padding: 5px;
}

.button-cover,
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 74px;
  height: 30px;
  margin: -20px auto 0 auto;
  overflow: hidden;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background: transparent linear-gradient(90deg, #D6DE25 0%, #96C93E 36%, #00773C 100%) 0% 0% no-repeat padding-box;
  transition: 0.3s ease all;
  z-index: 1;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}

#button-3 .knobs:before {
  content: '';
  position: absolute;
  top: 6px;
  left: 8px;
  width: 20px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

#button-3 .knobs:after {
  content: "TH";
  color: #fff;
  position: absolute;
  width: 100%;
  left: 40px;
  top: 5px;
  font-size: 12px;
}

#button-3 .checkbox:active + .knobs:before {
  width: 46px;
  border-radius: 100px;
}

#button-3 .checkbox:active + .knobs:after {
  width: 46px;
  border-radius: 100px;
}

#button-3 .checkbox:checked:active + .knobs:before {
  margin-left: -26px;
}

#button-3 .checkbox:checked + .knobs:before {
  //content: "EN";
  left: 42px;
  background-color: #fff;
}

#button-3 .checkbox:checked + .knobs:after {
  content: "EN";
  left: 15px;
}

#button-3 .checkbox:checked ~ .layer {
  background-color: #fcebeb;
}
</style>