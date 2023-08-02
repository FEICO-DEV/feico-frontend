<template>
  <Header />
  <section class="py-5 bg-gradient" style="background-color: #02453A;">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="wrapper">
            <a class="btn btn-green d-block mb-3">All products</a>
            <div class="buttons">
              <a href="">Inverter</a>
              <a href="">Optimizers Business</a>
              <a href="">Energy Storage Products</a>
              <a href="">System Accessories </a>
              <a href="">Solar PV Modules</a>
              <a href="">EV Charger</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <img src="/product-banner.png" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <section class="py-5 related">
    <div class="container">
      <div class="related-products">
        <div :class="(index === 0 || index === 5) ? 'big':''" class="product-thumbnail" v-for="(item, index) in items" :key="index">
          <nuxt-link :to="localePath('/Product/detail')">
            <button>
              <img src="/icon-next.png" class="img-fluid" />
            </button>
          </nuxt-link>
          <div class="text p-3">
            <h3 class="font-24">AC003</h3>
            <p>WALLBOX COMMERCIAL AC EV CHARGER</p>
          </div>
          <img :src="item" class="img-fluid zoom" />
        </div>
      </div>
      <div class="pagination mt-5">
        <a>1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
        <a>5</a>
        <a>></a>
        <a>>></a>
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
      items: ['/product-01.png', '/product-02.png', '/product-01.png', '/product-02.png','/product-01.png', '/product-02.png'],
      list: [
        {
          label: 'MODEL	',
          value: 'LUNAA2000-15-S0'
        },
        {
          label: 'POWER MODULE',
          value: 'LUNA2000-5KW-C0'
        },
        {
          label: 'BATTERY MODULE	',
          value: 'LUNA2000-5-E0'
        },
        {
          label: 'BATTERY MODULE ENERGY	',
          value: '5 KWH'
        },
        {
          label: 'NUMBER OF BATTERY MODULES',
          value: '3'
        },
        {
          label: 'WEIGHT',
          value: '163.8 KG'
        },
        {
          label: 'DIMENSION (W X H X D)	 ',
          value: '670 X 150 X 1320 MM (26.4 X 5.9 X 60.0 INCH)'
        },
        {
          label: 'PEAK OUTPUT POWER	',
          value: '7 KW, 10 S'
        },
        {
          label: 'PROTECTION',
          value: 'IP66'
        },
        {
          label: 'WARRANTY	',
          value: '5 YEARS'
        },
      ]
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

.related-products{
  display: flex;
  margin: 0 -15px;
  flex-wrap: wrap;
  > *{
      flex: 3 0 auto;
    }
  @media (max-width: 992px) {
    > *{
      flex: 0 40%;
    }
    .product-thumbnail{
      margin: 15px;
    }
  }
}

@media (max-width: 992px) {
  .related{
    .container{
      padding: 5%;
    }
  }
}
.product-thumbnail{
  background: #E6E6E6;
  border-radius: 20px;
  position: relative;
  width: 25%;
  margin: 15px;
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 992px) {
    min-width: 50%;
    flex: 50%;
  }
  &.big{
    min-width: 50%;
    flex: 50%;
    
  }
  button{
    background: transparent linear-gradient(90deg, #D6DE25 0%, #96C93E 36%, #00773C 100%) 0% 0% no-repeat padding-box;
    border: 0;
    border-radius: 50%;
    padding: 5px;
    width: 54px;
    height: 54px;
    z-index: 8;
    position: absolute;
    left: 15px;
    top: 15px;
  }
  img{

  }
  .text{
    position: absolute;
    left: 5px;
    bottom: 5px;
    margin-right: 20%;
    p{
      margin: 0;
      font-size: 14px;
      line-height: 1;
    }
  }
}

.pagination{
  display: flex;
  justify-content: center;
  a{
    margin: 0 15px;
  }
}

.btn-green{
  border-radius: 15px;
  background: #96C93E;
  color: #02453A;
  font-size: 28px;
  
}

.bg-gradient{
  position: relative;
  &:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('/product-gradient-banner.png') no-repeat right top;
    z-index: 1;
    background-size: cover;
  }
  .container{
    position: relative;
    z-index: 1;
  }
  .wrapper{
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (max-width: 992px) {
      width: 100%;
    }

  }
  .buttons{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    a{
      border: 1px solid #fff;
      font-size: 13px;
      color: #fff;
      flex: 40%;
      margin: 10px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 5px 15px;
      text-align: center;
      border-radius: 30px;
    }
  }
}

.zoom {
  padding: 50px;
  transition: transform .2s; /* Animation */
}

.zoom:hover {
  transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

</style>
