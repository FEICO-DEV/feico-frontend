<template>
  <Header />
  <section class="py-5 hp-slider" style="background:#F9F9F9">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h1>SUCCESS<br><strong>STORY</strong></h1>
        </div>
        <div class="col-lg-7">
          <swiper 
              ref="mySwiper"
              @slideChange="slideChange"
              :modules="modules"
              :slides-per-view="1"
              :loop="true"
              :effect="'creative'"
              :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
              }"
              :creative-effect="{
                prev: {
                  shadow: false,
                  translate: ['-20%', 0, -1],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
            }">
            <swiper-slide v-for="(item, index) in items" :key="index">
              <div class="history">
                <p class="text-primary">PARTNERSHIP FEICO COLLABORATED AS PARTNER WITH HUAWEI FOR THEIR FIRST LAUNCH OF TELECOMMUNICATION PRODUCTS OUTSIDE CHINA, OF WHICH THAILAND IS THE FIRST OVERSEAS MARKET SUCCESSFULLY DEVELOPED</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="slider-nav">
            <button :class="{ 'active' : activeIndex === index}" @click="goto( index)" v-for="(item, index) in items" :key="index">{{ item }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="banner" :style="'background-image:url('+backgroundImg+')'">

  </section>
  <Footer />
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { useSwiper } from 'swiper/vue'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// more module style...
export default defineComponent({
  data() {
    return {
      width: '50',
      items: ['1980', '1990', '1999', '2000', '2018', 'NOW'],
      activeIndex: 0,
      img: [
        '/success-bg.jpg',
        '/success-bg-2.jpg',
        '/success-bg.jpg',
        '/success-bg-2.jpg',
        '/success-bg.jpg',
        '/success-bg-2.jpg',
      ],
      backgroundImg : '/success-bg.jpg'
    };
  },
  components: {
      Swiper,
      SwiperSlide,
    },
  setup() {
    const swiper = useSwiper()
    
    return {
        modules: [Navigation, Pagination, Scrollbar, A11y],
        swiper,
      };
  },
  mounted() {
    console.log( this.width )
  },

  methods: {
    getWidth( submenuWidth) {
      this.width = submenuWidth
    },
    nextSlide(){
      this.$refs.mySwiper.$el.swiper.slideNext()
    },
    prevSlide(){
      this.$refs.mySwiper.$el.swiper.slidePrev()
    },
    goto( index ){
        this.$refs.mySwiper.$el.swiper.slideTo( index )
        this.activeIndex = index
      },
    slideChange(){
      this.activeIndex = this.$refs.mySwiper.$el.swiper.activeIndex
      this.backgroundImg = this.img[ this.$refs.mySwiper.$el.swiper.activeIndex ]
    }
  },
})
</script>

<style lang="scss" scoped>
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

@media (max-width: 992px) {
  .swiper{
    padding-bottom: 0 !important;
  }
}

.slider-nav{
  display: flex;
  position: relative;
  padding-top: 60px;
  @media (max-width: 992px) {
    overflow-x: auto;
  }
  &:before{
    content: '';
    position: absolute;
    left: 0;
    top: 70%;
    width: 100%;
    height: 1px;
    background: #999999;
  }
  button{
    border: 0;
    background: #f9f9f9;
    color: #999999;
    position: relative;
    margin: 0 15px;
    &.active{
      color: #00773C;
      border: 2px solid #999999;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: block;
      background: #f9f9f9;
      position: relative;
      @media (max-width: 992px) {
        min-width: 100px;
      }
      &:before{
        content: '';
        position: absolute;
        left: 50%;
        top: -60px;
        width: 1px;
        height: 60px;
        background: #999;
      }
    }
  }
}

.banner{
  background: url('/success-bg.jpg') no-repeat center center;
  height: 400px;
  background-size: cover;
}

.history{
  position: relative;
  padding-bottom: 15px;
  &:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 100%;
    background: transparent linear-gradient(90deg, #D6DE25 0%, #96C93E 36%, #00773C 100%) 0% 0% no-repeat padding-box;
  }
}
</style>
