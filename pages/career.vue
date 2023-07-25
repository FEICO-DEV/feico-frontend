<template>
  <Header />
  <section class="banner">
    <div class="container">
      <h2 class="mb-5">WELFARE</h2>
      
    </div>
  </section>
  <section class="s2">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="benefit-wrapper">
            <div class="benefit">
              <img src="/career-01.svg" class="img-fluid">
              <h3 class="mb-0">HEATH INSURANCE</h3>
              <p><strong>ประกันสุขภาพ</strong></p>
            </div>
            <div class="benefit">
              <img src="/career-02.svg" class="img-fluid">
              <h3 class="mb-0">PROVIDENT FUND</h3>
              <p><strong>กองทุนสำรองเลี้ยงชีพ</strong></p>
            </div>
            <div class="benefit">
              <img src="/career-03.svg" class="img-fluid">
              <h3 class="mb-0">LIFE INSURANCE</h3>
              <p><strong>ประกันชีวิต</strong></p>
            </div>
            <div class="benefit">
              <img src="/career-04.svg" class="img-fluid">
              <h3 class="mb-0">DENTAL INSURANCE</h3>
              <p><strong>ทำฟัน</strong></p>
            </div>
            <div class="benefit">
              <img src="/career-05.svg" class="img-fluid">
              <h3 class="mb-0">SOCIAL SECURITY</h3>
              <p><strong>ประกันสังคม</strong></p>
            </div>
            <div class="benefit">
              <img src="/career-06.svg" class="img-fluid">
              <h3 class="mb-0">ANNUAL HOLIDAY</h3>
              <p><strong>วันหยุดประจำปี</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pb-5 pt-5 pt-lg-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h2 class="text-center">OPENING POSITIONS</h2>
        </div>
        <div class="col-lg-7">
          <div class="position-wrapper">
            <nav>
              <button>DEVELOPER</button>
              <button>MARKETING</button>
              <button>RESEARCHER</button>
            </nav>
            <div class="">
              <div class="job">
                <div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
                <div class="pos">3 POSITION</div>
                <button><img src="/career-button.png" /></button>
              </div>
              <div class="job">
                <div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
                <div class="pos">3 POSITION</div>
                <button><img src="/career-button.png" /></button>
              </div>
              <div class="job">
                <div>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
                <div class="pos">3 POSITION</div>
                <button><img src="/career-button.png" /></button>
              </div>
            </div>
            <button class="btn btn-gradient d-block w-100 py-3">APPLY NOW</button>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import { defineComponent } from '@vue/composition-api'

// more module style...
export default defineComponent({
  data() {
    return {
      width: '50',
    };
  },
  components: {

  },

  mounted() {
    console.log( this.width )
  },
  methods: {
    getWidth( submenuWidth) {
      this.width = submenuWidth
    },
  },
})
</script>

<style lang="scss" scoped>
.banner{
  background: url("/career-bg.jpg") no-repeat center center;
  background-size: cover;
  min-height: 570px;
  position: relative;
  @media (max-width: 768px) {
    min-height: 170px;
  }
  .container{
    padding-top: 350px;
    @media (max-width: 768px) {
      padding-top: 100px;
    }
  }
}

.s2{
  //margin-top: -150px;
  transform: translateY(-150px);
  position: relative;
  @media (max-width: 768px) {
    transform: translateY(0px);
  }
}

.benefit-wrapper{
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  @media (max-width: 768px) {
    display: block;
  }
  .benefit{
    background: transparent linear-gradient(200deg, #D6DE25 0%, #96C93E 16%, #00773C 100%) 0% 0% no-repeat padding-box;
    padding: 30px;
    border-radius: 30px;
    text-align: center;
    flex: 20%;
    margin:  15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
      margin: 15px 45px;
    }
    > *{
      color: #fff;
    }
    h3{
      font-size: 20px;
    }
    img{
      margin-bottom: 15px;
      height: 70px;
      width: auto;
      @media (max-width: 768px) {
        height: 35px;
      }
    }
  }
}

.position-wrapper{
  background: #F2F2F2;
  padding: 30px;
  border-radius: 34px;
  nav{
    display: flex;
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
    button{
      color: #00773C;
      font-weight: bold;
      border: 0;
      background: transparent;
      flex: 1;
      text-align: left;
      padding: 0;
      position: relative;
      padding-bottom: 10px;
      margin-bottom: 15px;
      &:before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 60px;
        height: 2px;
        background: transparent linear-gradient(90deg, #D6DE25 0%, #96C93E 36%, #00773C 100%) 0% 0% no-repeat padding-box;
      }
    }
  }
  .btn-gradient{
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    border-radius: 15px;
  }
}

.job{
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  h2{
    color: #808080;
    font-size: 20px;
  }
  .pos{
    color: #00773C;
  }
  p{
    font-size: 14px;
  }
  button{
    border: 0;
    background: transparent;
  }
  + .job{
    border-top: 1px solid #666666;
  }
}

</style>
