<template>
    <footer class="py-5 main-footer">
        <div class="container mt-5">
          <div class="row mx-3 mx-lg-0">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-4">
                  <img src="/logo-white.png" class="img-fluid" />
                </div>
                <div class="col-8">
                  <p class="text-white">We are leading solar cell solution provider distributing world standardequipments and official distributor of world's leading electric vehicle charger brands.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5 mx-3 mx-lg-0">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-4 col-6">
                  <ul class="nav">
                    <li><a href="">About Us</a></li>
                    <li>
                      <a href="">Our Service</a>
                      <ul>
                        <li><a href="">Solar for business</a></li>
                        <li><a href="">Solar for home use</a></li>
                        <li><a href="">EV Charger</a></li>
                        <li><a href="">Installing Solar free</a></li>
                        <li><a href="">Solar Business Enabler</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-6">
                  <ul class="nav">
                    <li><a href="">Our Products</a></li>
                    <ul>
                        <li><a href="">Inverters</a></li>
                        <li><a href="">Optimizers</a></li>
                        <li><a href="">Energy Storage</a></li>
                        <li><a href="">EV Charger</a></li>
                        <li><a href="">System Accessories</a></li>
                        <li><a href="">Solar PV Modules</a></li>
                      </ul>
                  </ul>
                </div>
                <div class="col-lg-4 mt-3 mt-lg-0">
                  <ul class="nav">
                    <li><a href="">ผลงานของเรา</a></li>
                    <li><a href="">Articles & News</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">ร่วมงาน</a></li>
                    <li><a href="">ธุรกิจโซล่า</a></li>
                  </ul>
                </div>
              </div>

            </div>
            <div class="col-lg-5 offset-lg-1 mt-3 mt-lg-0">
              <div class="row">
                <div class="col-lg-6">
                  <div class="icon-text">
                    <img src="/icon-phone.svg" />
                    <span>093-168-8888</span>
                  </div>
                </div>
                <div class="col-lg-6 ">
                  <div class="icon-text">
                    <img src="/icon-globe.svg" />
                    <span>feico.co.th</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="icon-text">
                    <img src="/icon-facebook.svg" />
                    <span>feico</span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="icon-text">
                    <img src="/icon-envelope.svg" />
                    <span>feico@feico.co.th</span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="icon-text">
                    <img src="/icon-line.svg" />
                    <span>@feico</span>
                  </div>
                </div>
                <div class="col-lf-6">
                  <div class="icon-text">
                    <img src="/icon-pin.svg" />
                    <span>3683 Soi Yothinpattana 11 Yak 7, Klongchan, Bangkapi, Bangkok, 10240, Thailand</span>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>


          <div class="d-lg-flex justify-content-between align-items-center mt-5 mx-4 mx-lg-0">
            <p class="text-white text-xs m-0">Copyright © 2023 First Engineering International Co., Ltd.</p>
            <div class="bottom-links">
              <a href="#" class="text-white text-xs">Privacy Policy</a>
              <a href="#" class="text-white text-xs">Cookies Policy</a>
            </div>
          </div>
        </div>
  
      </footer>
</template>

<style lang="scss" scoped>
 .main-footer{
    background: #0D463D;
    position: relative;
    &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 12px;
      background: transparent linear-gradient(90deg, #D6DE25 0%, #96C93E 36%, #00773C 100%) 0% 0% no-repeat padding-box;
      top: 0;
    }
    a{
      text-decoration: none;
      color: #fff;
    }
  }

  .nav{
    list-style: none;
    padding: 0;
    display: block;
    > li{
      a{
        font-weight: bold;
      }
    }
    ul{
      list-style: none;
      padding: 0;
      li{
        position: relative;
        padding-left: 15px;
        &:before{
          content: '-';
          position: absolute;
          left: 0;
        }
      }
    }
    ul a{
      font-weight: normal;
    }
  }

  .icon-text{
    color: #fff;
    margin-bottom: 5px;
    img{
      margin-right: 15px;
      width: 15px;
      height: 15px;
    }
  }
  
</style>