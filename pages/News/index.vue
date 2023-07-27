<template>
    <Header />
      <section class="py-5">
        <div class="container">
          <div class="d-flex">
            <h1 class="mb-0 gray">PRESS</h1>
            <img src="/service-arrow.svg" class="img-fluid ms-4" />
          </div>
          <h1 class="mb-4"><strong>NEWS & EVENTS</strong></h1>
          <div class="news-slider">
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
                <img src="/news.jpg" class="img-fluid">
              </swiper-slide>
            </swiper>
            <button @click="nextSlide" class="btn-slider-next">
              <img src="/arrow-next.svg" class="img-fluid" />
            </button>
            <button @click="prevSlide" class="btn-slider-prev">
              <img src="/arrow-prev.svg" class="img-fluid" />
            </button>
          </div>
        </div>
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
    font-size: 88px;
    background-image: linear-gradient(90deg, #00773C 0%, #96C93E 36%, #D6DE25 100%);
    background-clip: text;
    -webkit-background-clip: text; /* For Safari/WebKit */
    color: transparent;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
    @media (max-width: 992px) {
      font-size: 30px;
    }
  }

  h1.gray{
    background: none;
    color: #999;
    font-weight: normal;
  }

  .news-slider{
    
  }
  
  </style>
  