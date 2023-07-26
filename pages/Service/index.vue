
<template>
  <Header />
  <section class="banner">
    <div class="container">
      <h1>OUR<br><strong>SERVICE</strong></h1>
    </div>
  </section>
  <section class="py-5">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h2>OUR SERVICE</h2>
        <img src="/logo.jpg" class="img-fluid logo" />
      </div>
      <div class="services mt-5">
        <div class="service" v-for="(item, index) in items" :key="index">
          <div class="top">
            <div class="num">01</div>
            <div class="topic">SOLAR FOR BUSINESS</div>
          </div>
          <div class="img-wrapper">
            <nuxt-link to="/Service/detail">
              <img src="/service-arrow.svg" />
            </nuxt-link>
            <!--<img src="/service-placeholder.jpg" class="main-img"/>-->
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
      items: ['/product-01.png', '/product-02.png', '/product-01.png', '/product-02.png'],
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
.logo{
  height: 50px;
}
h1{
  font-size: 85px;
  background-image: linear-gradient(90deg, #00773C 0%, #96C93E 36%, #D6DE25 100%);
  background-clip: text;
  -webkit-background-clip: text; /* For Safari/WebKit */
  color: transparent;
  text-transform: uppercase;
  line-height: 1;
  font-weight: 200;
  @media (max-width: 992px) {
    font-size: 30px;
  }
}

.banner{
  background: url('/service-bg-2.jpg') no-repeat center center;
  background-size: cover;
  padding: 200px 0;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
}

.services{
  display: flex;
  margin: 0 -15px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  > *{
    margin: 0 15px;
  }
}

.service{
  width: 25%;
  height: 532px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 70%;
    height: auto;
    margin-block: 30px;
  }
  &:hover, &:active, &:focus{
    .img-wrapper{
      height: 532px;
      border-bottom: 13px solid #D2DC28;
    }
    .top *{
      color: #00773C;
      font-weight: bold;
    }
  }
  .top{
    display: flex;
    justify-content: space-between;
  }
  .img-wrapper{
    position: relative;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    height: 258px;
    background: url('/service-placeholder.jpg') no-repeat center bottom;
    background-size: cover;
    transition: height 0.3s ease;
    a{
      background: transparent;
      border: 0;
      position: absolute;
      right: 15px;
      top: 15px;
    }
    .main-img{
      width: 100%;
      object-fit: contain;
      object-position: center bottom;
      height: 258px;
    }
  }
}

</style>
