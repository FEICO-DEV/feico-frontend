<template>
  <Header />
  <section style="background:#F1F1F1" class="py-5 section">
    <div class="contact">
      <a href="#">CONTACT US</a>
    </div>
    <div class="container">
      <h1 class="my-lg-5 mb-4">Solar for home use</h1>
      <div class="row">
        <div class="col-lg-4">
          <div class="sidebar-wrapper">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
              <nav class="sidebar-nav">
                <a href="">Reduce Electricity Cost</a>
                <a href="">Increasing in FT</a>
                <a href="">What Is Efficient Solar Cell</a>
                <a href="">Why FEICO</a>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1 mt-5">
          <div class="content-wrapper">
            <div class="num">01</div>
            <div class="detail">
              <h3>REDUCE ELECTRICITY COST</h3>
              <p>Electricity Cost Rates tend to increase over 4% every year. Solar Cell is a good alternative to reduce the risk in the future and reduce electricity cost. </p>
              <div class="row">
                <div class="col-6">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </div>
                <div class="col-6">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="content-wrapper">
            <div class="num">02</div>
            <div class="detail">
              <h3>INCREASING IN FT</h3>
              <p>Statistics from the Metropolitan Electricity Authority show that the value of FT has increased  dramatically during the last 10 years.</p>
              <div class="row">
                <div class="col-6">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </div>
                <div class="col-6">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="content-wrapper">
            <div class="num">03</div>
            <div class="detail">
              <h3>WHAT IS EFFICIENT SOLAR CELL </h3>
              <p>Statistics from the Metropolitan Electricity Authority show that the value of FT has increased  dramatically during the last 10 years.</p>
              <div class="row">
                <div class="col-6">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </div>
                <div class="col-6">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="content-wrapper">
            <div class="num">04</div>
            <div class="detail">
              <h3>WHY FEICO</h3>
              <p>Statistics from the Metropolitan Electricity Authority show that the value of FT has increased  dramatically during the last 10 years.</p>
              <div class="row">
                <div class="col-6">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </div>
                <div class="col-6">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
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
h1{
  font-size: 48px;
  background-image: linear-gradient(90deg, #00773C 0%, #96C93E 36%, #D6DE25 100%);
  background-clip: text;
  -webkit-background-clip: text; /* For Safari/WebKit */
  color: transparent;
  text-transform: uppercase;
  font-weight: bold;
  @media (max-width: 992px) {
    font-size: 30px;
  }
}

.sidebar-nav{
  a{
    display: block;
    text-decoration: none;
    margin-top: 15px;
  }
}

.num{
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent linear-gradient(30deg, #00773C 0%, #96C93E 66%, #D6DE25 100%) 0% 0% no-repeat padding-box;
  border-radius: 50%;
  color: #fff;
  flex: 40px;
  min-width: 40px;
  margin-right: 15px;
}

.content-wrapper{
  display: flex;
}

hr{
  background: transparent linear-gradient(30deg, #00773C 0%, #96C93E 66%, #D6DE25 100%) 0% 0% no-repeat padding-box;
  border: 0;
  height: 2px;
  width: 100%;
  display: block;
  margin: 30px 0;
}

.section{
  position: relative;
}

.contact{
  position: absolute;
  left: 0;
  bottom: 10%;
  @media (max-width: 992px) {
    position: fixed;
  }
  a{
    background: #00773C;
    display: block;
    padding: 45px 60px 45px 45px;
    border-radius: 0 100px 100px 0;
    color: #fff;
    font-size: 25px;
    @media (max-width: 992px) {
      padding: 15px;
      font-size: 12px;
    }
    &:hover, &:active, &:focus{
      color: #fff;
    }
  }
}
</style>
