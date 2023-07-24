<template>
  <Header />
  <section class="product-detail">
    <div class="container">
      <div class="main-product">
        <div class="social">
          <a href=""><img src="/line.png" class="img-fluid" /></a>
          <a href=""><img src="/facebook.png" class="img-fluid" /></a>
        </div>
        <img src="/product-main.png" class="img-fluid" />
      </div>
      <div class="main-product-detail">
        <div class="tag">
          <button>Home</button>
          <button>Energy Storage Products</button>
          <button>Residential</button>
          <button>LUNA-2000-15-S0</button>
        </div>
        <h2 class="mt-4"><strong>LUNA-2000-15-S0</strong></h2>
        <div class="list" v-for="(item, index) in list" :key="index">
          <div class="label">{{ item.label }}</div>
          <div class="value">{{ item.value }}</div>
        </div>
        <a href="#" class="btn btn-gradient rounded-0 px-5 mt-4">DATA SHEET</a>
      </div>
    </div>
  </section>
  <section class="py-5 related">
    <div class="container">
      <h2 class="text-gray mb-4">RELATED PRODUCTS</h2>
      <div class="related-products">
        <div class="product-thumbnail" v-for="(item, index) in items" :key="index">
          <button>
            <img src="/icon-next.png" class="img-fluid" />
          </button>
          <div class="text p-3">
            <h3 class="font-24">AC003</h3>
            <p>WALLBOX COMMERCIAL AC EV CHARGER</p>
          </div>
          <img :src="item" class="img-fluid" />
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
  @media (max-width: 992px) {
    flex-wrap: wrap;
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
  margin: 0 15px;
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

.product-detail{
  display: flex;
}

.main-product{
  background: #F1F1F1;
  flex: 50%;
}

.product-detail{
  position: relative;
  &:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: #F1F1F1;
    z-index: -1;
    @media (max-width: 992px) {
      display: none;
    }
  }
  .social{
    background: #0D463D;
    position: absolute;
    left: 0;
    top: 5%;
    padding: 15px 15px;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    a + a{
      margin-top: 10px;
    }
  }
  .container{
    display: flex;
    @media (max-width: 992px) {
      display: block;
      padding: 0;
    }
  }
  .main-product-detail{
    padding-left: 5%;
    flex: 50%;
    padding-top: 5%;
    padding-bottom: 5%;
    @media (max-width: 992px) {
      padding-right: 5%;
    }
    .list{
      display: flex;
      border-bottom: 1px solid #989898;
      padding: 5px 0;
      .label{
        flex: 0 40%;
      }
      .value{
        flex: 0 60%;
        padding-left: 15px;
      }
    }
  }
  .tag{
    display: flex;
    margin: 0 -5px;
    flex-wrap: wrap;
    button{
      background: #fff;
      color: #666666;
      border: 1px solid #666;
      border-radius: 30px;
      padding: 5px 15px;
      margin: 5px;
    }
  }
}
</style>
