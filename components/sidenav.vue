<template>
  <nav class="bg-white side-nav" ref="submenu" :style="`left: -${width}px;`" v-if="!loading">
    <div class="hidden-menu" >
      <div class="top">
        <img src="/logo.jpg" class="img-fluid w-50" />
        <nav class="mt-lg-5 mt-4">
          <nuxt-link :to="localePath('about')"><h4 class="text-gray font-thin">{{ $t('nav.aboutus') }}</h4></nuxt-link>
          <nuxt-link :to="localePath('Product')"><h4 class="text-gray font-thin">{{ $t('nav.product') }}</h4></nuxt-link>
          <nuxt-link :to="localePath('Service')"><h4 class="text-gray font-thin">{{ $t('nav.service') }}</h4></nuxt-link>
          <h4 class="text-gray font-thin">FEICO ACADEMY</h4>
          <nuxt-link :to="localePath('News')"><h4 class="text-gray font-thin">{{ $t('nav.press') }}</h4></nuxt-link>
          <nuxt-link :to="localePath('success')"><h4 class="text-gray font-thin">SUCCESS STORY</h4></nuxt-link>
          <nuxt-link :to="localePath('contact')"><h4 class="text-gray font-thin">CONTACT US</h4></nuxt-link>
          <nuxt-link :to="localePath('career')"><h4 class="text-gray font-thin">CAREER</h4></nuxt-link>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    isShow: {
      type: Boolean,
    },
  },
  data() {
    return {
      isOpen: false,
      loading: true,
    };
  },
  computed: {
    width() {
      // This computed property calculates a value based on the originalValue
      if( this.isShow ){
        return 0
      } else{
        return this.$refs.submenu.offsetWidth
      }
      
    },
  },
  mounted() {
    //this.width = this.$refs.menu.offsetWidth
    //console.log(this.$refs.submenu.offsetWidth)
    //this.$emit('submenuWidth', this.$refs.submenu.offsetWidth)
    this.loading = false
  },

})
</script>


<style lang="scss" scoped>

.menu-button{
  border: 0;
  background: transparent;
}

.icon-facebook{
  border-radius: 50%;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-nav{
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 10;
  display: flex;
  transition: all .8s ease;
  @media (max-width: 576px) {
    //width: calc( 50% + 60px );
    width: 80vw;
    overflow: hidden;
  }
  .main{
    padding: 45px 30px;
    @media (max-width: 576px) {
      padding: 45px 15px;
      width: 60px;
      .menu-button{
        width: 30px;
        height: 30px;
        img{
          width: 30px;
          height: auto;
        }
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}

.hidden-menu{
  padding: 45px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 576px) {
    width: calc( 70% + 60px );
  }
  nav a{
    text-decoration: none;
    white-space: nowrap;
    display: block;
    flex: 1;
    @media (max-width: 576px) {
      flex: 100%;
      white-space: unset;
    }
  }
  .search-wrapper{
    input{
      background: url('/icon-search.png') no-repeat center left;
      background-size: contain;
      border: 1px solid #fff;
      border-radius: 50px;
      font-size: 13px;
      color: #fff;
      padding: 4px 15px 4px 45px;
      &::placeholder{
        color: #fff;
      }
    }
  }
  button{
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    font-size: 13px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>