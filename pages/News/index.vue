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
                <div class="slide" style="background-image: url('/news.jpg');">
                  <div class="text">
                    <h2 class="mb-0">LOREM IPSUM</h2>
                    <p>LOREM IPSUM</p>
                    <p>By LOREM IPSUM</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <button @click="nextSlide" class="btn-slider-next">
              <img src="/arrow-next.svg" class="img-fluid" />
            </button>
            <button @click="prevSlide" class="btn-slider-prev">
              <img src="/arrow-prev.svg" class="img-fluid" />
            </button>
          </div>
          <div class="row mt-5">
            <div class="col-md-6 mb-4 mb-md-0" v-for="(item, index) in news" :key="index">
              <div class="news">
                <a href="" class="img-wrapper d-block">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </a>
                <h2>Meinergy Signs Agreement with Huawei on a 1 GW and 500 MWh Project to Facilitate Green Development of Ghana</h2>
                <p>[Barcelona, Spain] Huawei Digital Power Technologies Co., Ltd. (hereinafter referred to as Huawei Digital Power) signed a strategic cooperation agreement with Meinergy Technology Co., Ltd (hereinafter referred to as Meinergy),...</p>
                <a class="btn btn-gradient">See more</a>
              </div>
            </div>
          </div>
          <h1 class="my-5"><strong>KNOWLEDGE</strong></h1>
          <div class="row mt-5">
            <div class="col-md-4 mb-4 mb-md-0" v-for="(item, index) in knowledge" :key="index">
              <div class="news small">
                <a href="" class="img-wrapper d-block">
                  <img src="/placeholder.jpg" class="img-fluid" />
                </a>
                <h2>ทำไมต้อง Huawei inverter</h2>
                <p>เชื่อว่าหลายธุรกิจอุตสาหกรรม โรงงาน รวมถึงบ้านครัวเรือนในประเทศไทยช่วงนี้ คงกำลังพบเจอกับปัญหาค่าไฟที่พุ่งสูงขึ้นมากกว่าปกติ จนทำให้หลายๆ องค์กรธุรกิจ </p>
                <a class="btn btn-gradient">See more</a>
              </div>
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
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

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
        news: ['1980', '1990'],
        knowledge: ['1980', '1990','111'],
      };
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const swiper = useSwiper()
      
      return {
          modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
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
    position: relative;
    button{
      border: 0;
      background: none;
      position: absolute;
      top: 50%;
      z-index: 8;
      transform: translateY(-50%);
      @media (max-width: 767px) {
        width: 30px;
      }
    }
    .btn-slider-next{
      right: 45px;
      @media (max-width: 767px) {
        right: 15px;
      }
    }
    .btn-slider-prev{
      left: 45px;
      @media (max-width: 767px) {
        left: 15px;
      }
    }
  }

  .slide{
    position: relative;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 30px;
    &:before{
      content: '';
      position: absolute;
      background: rgba(0,0,0,0.5);
      width: 100%;
      height: 100%;
      border-radius: 25px;
    }
    .text{
      position: absolute;
      z-index: 3;
      left: 150px;
      top: 50%;
      transform: translateY(-50%);
      @media (max-width: 767px) {
        left: 70px;
      }
      *{
        color: #fff;
      }
    }
  }

  .news{
    &.small{
      h2{
        position: relative;
        padding-bottom: 15px;
        margin-block: 15px;
        &:before{
          content: '';
          width: 50%;
          height: 3px;
          background: transparent linear-gradient(90deg, #D6DE25 0%, #96C93E 36%, #00773C 100%) 0% 0% no-repeat padding-box;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
    h2{
      font-size: 20px;
      color: #666;
      margin-top: 15px;
    }
    .btn{
      border-radius: 0;
      &:hover, &:active, &:focus{
        color: #fff;
      }
    }
    .img-wrapper{
      position: relative;
      &:before{
        content: '';
        position: absolute;
        width: 60px;
        height: 60px;
        background: url('/news-next.svg');
        background-size: contain;
        left: 15px;
        top: 15px;
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

  
  </style>
  