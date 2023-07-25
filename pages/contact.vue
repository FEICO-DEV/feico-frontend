<template>
  <Header />
  <section class="py-5">
    <div class="container">
      <h2 class="text-gray">CONTACT US</h2>
      <img src="/contact.jpg" class="img-fluid mt-3" />
      <div class="row mt-4">
        <div class="col-lg-5">
          <h2>
          FIRST ENGINEERING<br>
          INTERNATIONAL CO., LTD</h2>
          <p>
          Address (Headquater)<br>
          3683 Soi Yothinpattana 11 Yak 7, Klongchan, Bangkapi, Bangkok 10240, Thailand</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 offset-lg-6">
          <div class="row">
            <div class="col-lg-6">
              <div class="text-widget line">
                <img src="/icon-gradient-phone.svg" class="img-fluid" />
                <div>
                  <p class="mb-0">TELEPHONE</p>
                  <p class="mb-0">+6689-3168-8888</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="text-widget line hidden-line">
                <img src="/icon-gradient-globe.svg" class="img-fluid" />
                <div>
                  <p class="mb-0">WEBSITE</p>
                  <p class="mb-0">WWW.FEICO.CO.TH</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="text-widget">
                <img src="/icon-gradient-line.svg" class="img-fluid" />
                <div>
                  <p class="mb-0">LINE</p>
                  <p class="mb-0">@feico</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="text-widget">
                <img src="/icon-gradient-facebook.svg" class="img-fluid" />
                <div>
                  <p class="mb-0">FACEBOOK</p>
                  <p class="mb-0">feico</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="text-widget">
                <img src="/icon-gradient-instagram.svg" class="img-fluid" />
                <div>
                  <p class="mb-0">INSTAGRAM</p>
                  <p class="mb-0">feico</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="text-widget">
                <img src="/icon-gradient-envelope.svg" class="img-fluid" />
                <div>
                  <p class="mb-0">E-MAIL</p>
                  <p class="mb-0">feico@feico.co.th</p>
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
.text-widget{
  display: flex;
  padding: 15px 0;
  &.line{
    position: relative;
    padding-top: 30px;
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 60px;
      height: 2px;
      background: transparent linear-gradient(90deg, #D6DE25 0%, #96C93E 36%, #00773C 100%) 0% 0% no-repeat padding-box;
    }
  }
  @media (max-width: 992px) {
    &.hidden-line{
      &:before{
        display: none;
      }
    }
  }
  img{
    margin-right: 15px;
  }
  p + p{
    color: #00773C;
  }
}
</style>
