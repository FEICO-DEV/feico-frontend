<template>
  <Header />
  <section class="banner">
    <div class="container">
      <h1 class="text-center"><strong>OUR STORY</strong></h1>
      <div class="col-8 offset-2 text-center">
        <p class="text-primary">We are dedicated in providing telecommunication equipment and solar inverter to major players in Thailand such as AIS, True Corp, TOT, CAT and SCG Group.</p>
        <p class="text-primary">FEICO IS HUAWEI’S PARTNER IN THAILAND SINCE 1999</p>
      </div>
    </div>
  </section>
  <section class="py-5">
    <div class="container">
      <h1 class="text-center">THE PATH OF SUCCESS</h1>
      <div class="col-10 offset-1 text-center mt-3">
        <p>We are composed by a team of professional sales representatives, creating a combined network that allow us to serve as a one-stop service platform to our clients.</p>
      </div>
      <div class="timeline my-5">
        <div class="item first">
          <img src="/path-1.jpg" class="img-fluid" />
          <div class="year">
            <h3><strong>1980</strong></h3>
          </div>
          <p>FEICO was founded as a trading company supplying materials and equipments for steel industry to SISCO (under Siam Cement Group) and GS steel.</p>
        </div>
        <div class="item">
          <img src="/path-2.jpg" class="img-fluid" />
          <div class="year">
            <h3><strong>1990</strong></h3>
          </div>
          <p>FEICO entered telecommunication industry by representing NK Cables (Finland) and RFS (Germany).</p>
        </div>
        <div class="item">
          <img src="/path-3.jpg" class="img-fluid" />
          <div class="year">
            <h3 class="mb-0"><strong>1999</strong></h3>
            <p class="small"><strong>PARTNERSHIP</strong></p>
          </div>
          <p>FEICO collaborated as partner with HUAWEI for their first launch of telecommunication products 
          outside CHINA, of which THAILAND is the first overseas market 
          successfully developed.</p>
        </div>
        <div class="item">
          <img src="/path-4.jpg" class="img-fluid" />
          <div class="year">
            <h3 class="mb-0"><strong>2000</strong></h3>
            <p class="small"><strong>ONWARD</strong></p>
          </div>
          <p>We have confidence and belief in a culture of mutual trust and respect that would benefit to all.</p>
        </div>
        <div class="item last">
          <img src="/path-5.jpg" class="img-fluid" />
          <div class="year">
            <h3 class="mb-0"><strong>2018</strong></h3>
            <p class="small"><strong>CUSTOMER FOCUS</strong></p>
          </div>
          <p>We have confidence and belief in a culture of mutual trust and respect that would benefit to all.</p>
        </div>
        <div class="item">
          <img src="/path-5.jpg" class="img-fluid" />
          <div class="year">
            <h3 class="mb-0"><strong>2022</strong></h3>
            <p class="small"><strong>CUSTOMER FOCUS</strong></p>
          </div>
          <p>We have confidence and belief in a culture of mutual trust and respect that would benefit to all.</p>
        </div>
      </div>
      <div class="banner-2">
        <div class="row">
          <div class="col-md-6">
            <h2><strong>VISION</strong></h2>
            <p>We are dedicated in providing telecommunication equipment and solar inverter to major players in Thailand such as AIS, True Corp, TOT, CAT and SCG Group.</p>
          </div>
          <div class="col-md-6">
            <h2><strong>MISSION</strong></h2>
            <p> Servicing our customers’ and vendors’ needs while exceeding their expectations. Differentiating ourselves by providing the best customer service to quality customers. Creating an environment which motivates employees to achieve maximum sales potential. Valuing long-term relationships with suppliers and customers. <a>See More...</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-lg-5 core-section">
    <div class="container">
      <div class="core-text">
        <h2><strong>CORE VALUE</strong></h2>
        <p>We are composed by a team of professional sales representatives, creating a combined network that allows us to serve as a one-stop service platform to our clients.</p>
        <div class="d-flex justify-content-end">
          <button class="mt-lg-5 mb-5  mb-lg-0d-inline next-btn" @click="nextSlide"><img src="/core-next.svg" class="img-fluid" /></button>
        </div>
      </div>
      <div class="slider-wrapper">
        <swiper 
          ref="mySwiper"
          @slideChange="slideChange"
          :modules="modules"
          :slides-per-view="2.5"
          :loop="true"
          :spaceBetween="20"
          :effect="'creative'"
          :autoplay="{
              delay: 2000, // Adjust the delay as needed
          }"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            '992': {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
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
          <swiper-slide>
            <div class="core-item">
              <img src="/core-1.jpg" class="img-fluid" />
              <div class="d-flex justify-content-between">
                <h3>01</h3>
                <h3>Family & Friends</h3>
              </div>
              <p>We treat our people as a family while we treat our business partners as friends.  </p>
              <div class="line"></div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="core-item">
              <img src="/core-2.jpg" class="img-fluid" />
              <div class="d-flex justify-content-between">
                <h3>02</h3>
                <h3>Intergrity</h3>
              </div>
              <p>We work with highest quality of being sincere, faithful and truthful. </p>
              <div class="line"></div>
            </div>
          </swiper-slide>
          <swiper-slide v-for="(item, index) in items" :key="index">
            <div class="core-item">
              <img src="/core-3.jpg" class="img-fluid" />
              <div class="d-flex justify-content-between">
                <h3>03</h3>
                <h3>Responsibility</h3>
              </div>
              <p>We are responsible for our actions and decisions.</p>
              <div class="line"></div>
            </div>
          </swiper-slide>
      </swiper>
      </div>
    </div>
  </section>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <img src="/about-3.jpg" class="img-fluid" />
        </div>
        <div class="col-lg-6 offset-lg-1 mt-4 mt-lg-0">
          <h2><strong>PRODUCTS AND SERVICES</strong></h2>
          <p>Through strong relationship with Huawei, FEICO has been providing equipment and services for network coverage 2G/3G/4G in Thailand. We also works closely with Huawei to focus on 5G network covering all 77 provinces in Thailand. Moreover, since 2016, we further incorporated with Huawei introducing new advanced FusionSolar Inverter for smart PV solution to Thai renewable energy market</p>
          <div class="line"></div>
          <div class="service">
            <div class="icon">
              <img src="/about-icon-1.svg" class="img-fluid" />
            </div>
            <div class="text">
              <h3>Connectivity</h3>
              <p>Providing latest networking equipment and services  for telecommunication business </p>
            </div>
          </div>
          <div class="line"></div>
          <div class="service">
            <div class="icon">
              <img src="/about-icon-2.svg" class="img-fluid" />
            </div>
            <div class="text">
              <h3>Cloud & Computing</h3>
              <p>Offering leading cloud service, which brings Huawei’s 30-plus years of expertise together in ICT infrastructure products and solutions</p>
            </div>
          </div>
          <div class="line"></div>
          <div class="service">
            <div class="icon">
              <img src="/about-icon-3.svg" class="img-fluid" />
            </div>
            <div class="text">
              <h3>Green Energy</h3>
              <p>Supplying the most advanced FusionSolar Inverter with AI technology guaranteed with the world’s largest Inverter market share for 5 years consecutively.</p>
            </div>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </section>
  <h1 class="text-center py-5">BUSINESS PARTNER</h1>
  <section>
    <div class="partners">
      <div class="item">
        <img src="/logo-huawei.jpg" class="img-fluid" />
        <div class="hover-text">
          <h3>LOXLEY</h3>
          <p>The company that has been working for over 80 years, and has expanded its business areas, products, and services in 5 business lines; including technologies and informations, trading, energy, network and solutions, and services.</p>
        </div>
      </div>
      <div class="item">
        <img src="/logo-ais.jpg" class="img-fluid" />
        <div class="hover-text">
          <h3>LOXLEY</h3>
          <p>The company that has been working for over 80 years, and has expanded its business areas, products, and services in 5 business lines; including technologies and informations, trading, energy, network and solutions, and services.</p>
        </div>
      </div>
      <div class="item">
        <img src="/logo-cat.jpg" class="img-fluid small" />
        <div class="hover-text">
          <h3>LOXLEY</h3>
          <p>The company that has been working for over 80 years, and has expanded its business areas, products, and services in 5 business lines; including technologies and informations, trading, energy, network and solutions, and services.</p>
        </div>
      </div>
      <div class="item">
        <img src="/logo-scg.jpg" class="img-fluid" />
        <div class="hover-text">
          <h3>LOXLEY</h3>
          <p>The company that has been working for over 80 years, and has expanded its business areas, products, and services in 5 business lines; including technologies and informations, trading, energy, network and solutions, and services.</p>
        </div>
      </div>
      <div class="item">
        <img src="/logo-nt.jpg" class="img-fluid" />
        <div class="hover-text">
          <h3>LOXLEY</h3>
          <p>The company that has been working for over 80 years, and has expanded its business areas, products, and services in 5 business lines; including technologies and informations, trading, energy, network and solutions, and services.</p>
        </div>
      </div>
      <div class="item">
        <img src="/logo-ekarat.jpg" class="img-fluid" />
        <div class="hover-text">
          <h3>LOXLEY</h3>
          <p>The company that has been working for over 80 years, and has expanded its business areas, products, and services in 5 business lines; including technologies and informations, trading, energy, network and solutions, and services.</p>
        </div>
      </div>
      <div class="item">
        <img src="/logo-tot.jpg" class="img-fluid small" />
        <div class="hover-text">
          <h3>LOXLEY</h3>
          <p>The company that has been working for over 80 years, and has expanded its business areas, products, and services in 5 business lines; including technologies and informations, trading, energy, network and solutions, and services.</p>
        </div>
      </div>
      <div class="item">
        <img src="/logo-jas.jpg" class="img-fluid" />
        <div class="hover-text">
          <h3>LOXLEY</h3>
          <p>The company that has been working for over 80 years, and has expanded its business areas, products, and services in 5 business lines; including technologies and informations, trading, energy, network and solutions, and services.</p>
        </div>
      </div>
      <div class="item">
        <img src="/logo-huawei.jpg" class="img-fluid" />
        <div class="hover-text">
          <h3>LOXLEY</h3>
          <p>The company that has been working for over 80 years, and has expanded its business areas, products, and services in 5 business lines; including technologies and informations, trading, energy, network and solutions, and services.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-7">
          <h2 class="text-center mb-5"><strong>AWARDS AND RECOGNITION</strong></h2>
          <img src="/about-award.jpg" class="img-fluid" />
        </div>
        <div class="col-lg-5 text-center">
          <div class="award">
            <h3>ELITE RESELLER AWARD 2022</h3>
            <p>
            HUAWEI FUSIONSOLAR ECOSYSTEM 
            PARTNER SUMMIT 2022, SPAIN</p>
          </div>
          <div class="award">
            <h3>ELITE RESELLER AWARD 2022</h3>
            <p>
            HUAWEI FUSIONSOLAR ECOSYSTEM 
            PARTNER SUMMIT 2022, SPAIN</p>
          </div>
          <div class="award">
            <h3>ELITE RESELLER AWARD 2022</h3>
            <p>
            HUAWEI FUSIONSOLAR ECOSYSTEM 
            PARTNER SUMMIT 2022, SPAIN</p>
          </div>
          <div class="award">
            <h3>ELITE RESELLER AWARD 2022</h3>
            <p>
            HUAWEI FUSIONSOLAR ECOSYSTEM 
            PARTNER SUMMIT 2022, SPAIN</p>
          </div>
          <div class="social mt-4">
            <a href="#"><img src="/line.svg" class="img-fluid" /></a>
            <a href="#" class="btn btn-gradient mx-2">สอบถามเพิ่มเติม</a>
            <a href="#"><img src="/chat.svg" class="img-fluid" /></a>
          </div>
        </div>
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
    font-size: 45px;
    background-image: linear-gradient(90deg, #00773C 0%, #96C93E 86%, #D6DE25 100%);
    background-clip: text;
    -webkit-background-clip: text; /* For Safari/WebKit */
    color: transparent;
    text-transform: uppercase;
    line-height: 1;
    font-weight: 600;
    @media (max-width: 992px) {
      font-size: 30px;
    }
  }

  .timeline{
    display: flex;
    margin: 0 -15px;
    position: relative;
    @media (max-width: 992px) {
      display: block;
    }
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 128px;
      height: 2px;
      width: 100%;
      background: transparent linear-gradient(45deg, #D6DE25 0%, #96C93E 16%, #00773C 100%) 0% 0% no-repeat padding-box;
      @media (max-width: 992px) {
        display: none;
      }
    }
    .item{
      text-align: center;
      flex: 1;
      padding: 0 15px;
      @media (max-width: 992px) {
        position: relative;
        &:before{
          content: '';
          position: absolute;
          left: 0;
          top: 128px;
          height: 2px;
          width: 100%;
          background: transparent linear-gradient(45deg, #D6DE25 0%, #96C93E 16%, #00773C 100%) 0% 0% no-repeat padding-box;
        }
      }
      img{
        filter: grayscale(100%);
        //width: 80px;
        height: 80px;
        object-fit: contain;
      }
      p{
        font-size: 13px;
      }
    }
    .year{
      color: #00773C;
      position: relative;
      padding-top: 55px;
      margin-top: 30px;
      height: 130px;
      &:before{
        content: '';
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: transparent linear-gradient(45deg, #D6DE25 0%, #96C93E 16%, #00773C 100%) 0% 0% no-repeat padding-box;
        display: block;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
      }
    }
  }
  .banner{
    background: url('/aboutus-bg.jpg') no-repeat center center;
    background-size: cover;
    padding-bottom: 250px;
    padding-top: 100px;
  }

  .banner-2{
    background: url('/about-us-2.jpg') no-repeat center center;
    background-size: cover;
    border-radius: 20px;
    padding: 35px;
    padding-top: 150px;
     * {
      color: #fff;
    }
    a{
      color: #B5D333;
      text-decoration: underline;
    }
  }

  .service{
    display: flex;
    .icon{
      flex: 0 30%;
      margin-right: 30px;
    }
    .text{
      flex: 0 90%;
    }
    h3{
      color: #999;
    }
  }

  .award{
    padding: 0 30px;
    background: url('/right.svg') no-repeat center right;
    position: relative;
    margin-block: 30px;
    &:before{
      content: '';
      width: 100%;
      background: url('/left.svg') no-repeat center left;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
    }
  }

  .line{
    background: transparent linear-gradient(45deg, #D6DE25 0%, #96C93E 86%, #00773C 100%) 0% 0% no-repeat padding-box;
    height: 5px;
    margin: 30px 0;
  }

  .partners{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 1px solid #00773C;
    > *{
      flex: 1 30%;
      @media (max-width: 768px) {
        flex: 100%;
      }
    }
    .item{
      padding: 30px;
      overflow: hidden;
      position: relative;
      display: flex;
      height: 315px;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      border-right: 1px solid #00773C;
      border-bottom: 1px solid #00773C;
      @media (max-width: 768px) {
        border:  1px solid #00773C !important
      }
      &:nth-child(3n){
        border-right: 0;
      }
      &:hover, &:active, &:focus{
        img{
          opacity: 0;
        }
        .hover-text{
          transform: translateY(0);
        }
      }
      img{
        max-height: 57px;
        margin: 0 auto;
        opacity: 1;
        transition: 0.3s ease-in;
        &.small{
          max-height: 30px;
        }
      }
      .hover-text{
        transform: translateY(-350px);
        position: absolute;
        left: 0;
        top: 0;
        transition: 0.3s ease-in;
        padding: 30px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: transparent linear-gradient(45deg, #00773C 0%, #96C93E 86%, #D6DE25 100%) 0% 0% no-repeat padding-box;
        > *{
          color: #fff;
        }
      }
    }
  }

  .next-btn{
    border: 0;
    background: none;
  }

  .core-section{
    position: relative;
    min-height: 450px;
    @media (min-width: 1200px) {
      margin-bottom: 100px;
      margin-top: 100px;
    }
    
    .slider-wrapper{
      position: absolute;
      left: 40%;
      top: 0;
      width: 60%;
      @media (max-width: 992px) {
        width: 100%;
        position: static;
      }
    }
  }

  .core-item{
    h3{
      font-weight: 400;
      margin: 15px 0;
    }
    p{
      min-height: 100px;
    }
  }

  .core-text{
    width: 30%;
    @media (max-width: 992px) {
      width: 100%;
    }
  }

  @media (max-width: 992px) {
    .swiper{
      padding-bottom: 0 !important;
    }
  }


</style>
