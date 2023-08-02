<template>
  <header class="main-header">
    <div class="wrapper">
      <div class="logo">
        <nuxt-link :to="localePath('/')"><img src="/logo.jpg" class="img-fluid" /></nuxt-link>
      </div>
      <div class="main-nav d-none d-lg-block">
        <nav>
          <nuxt-link :to="localePath('about')">{{ $t('nav.aboutus') }}</nuxt-link>
          <div class="parent-nav" ref="menu">
            <div class="d-flex align-items-center">
              <nuxt-link :to="localePath('Product')" class="pe-0 me-1">
                {{ $t('nav.product') }}
              </nuxt-link>
              <button class="btn-click" @click="toggleNav">
                <svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  width="123.959px" height="123.958px" viewBox="0 0 123.959 123.958" style="enable-background:new 0 0 123.959 123.958;"
                  xml:space="preserve">
                <g>
                  <path d="M117.979,28.017h-112c-5.3,0-8,6.4-4.2,10.2l56,56c2.3,2.3,6.1,2.3,8.401,0l56-56
                    C125.979,34.417,123.279,28.017,117.979,28.017z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
              </button>
            </div>
            <div class="child-nav" v-if="isHovered" :style="`left: ${left}px;`">
              <div class="child-wrapper">
                <div class="list">
                  <h3><strong>Inverters</strong></h3>
                  <ul>
                    <li>
                      <a href="">Residental</a>
                    </li>
                    <li>
                      <a href="">C&I</a>
                    </li>
                    <li>
                      <a href="">Utilities</a>
                    </li>
                  </ul>
                </div>
                <div class="list">
                  <h3><strong>Energy Storyage Products</strong></h3>
                  <ul>
                    <li>
                      <a href="">Residental</a>
                    </li>
                    <li>
                      <a href="">C&I</a>
                    </li>
                  </ul>
                </div>
                <div class="list">
                  <h3><strong>System Accessories</strong></h3>
                </div>
                <div class="list">
                  <h3><strong>Optimizers</strong></h3>
                </div>
                <div class="list">
                  <h3><strong>EV Charger</strong></h3>
                  <ul>
                    <li>
                      <a href="">AC</a>
                    </li>
                    <li>
                      <a href="">DC</a>
                    </li>
                  </ul>
                </div>
                <div class="list">
                  <h3><strong>Solar PVB Modules</strong></h3>
                </div>
              </div>
            </div>
          </div>
          <nuxt-link :to="localePath('Service')">{{ $t('nav.service') }}</nuxt-link>
          <a href="#">SOLAR BUSINESS ENABLER </a>
          <nuxt-link :to="localePath('News')">{{ $t('nav.press') }}</nuxt-link>
        </nav>
      </div>
      <div class="d-flex align-items-center">
        <img src="/icon-search.svg" class="img-fluid search" />
        <div class="toggle-button-cover">
          <div id="button-3" class="button r">
            <input class="checkbox" type="checkbox" v-model="isChecked" @change="handleCheckboxChange">
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
        </div> 
        <img src="/menu.jpg" class="img-fluid menu" @click="isOpen=!isOpen" v-if="!isOpen"/>
        <img src="/close.svg" class="img-fluid menu close-img" @click="isOpen=!isOpen" v-else/>
      </div>
    </div>
    <sidenav ref="sidenav" @submenuWidth="getWidth" :isShow="isOpen"/>
  </header>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import sidenav from './sidenav.vue';

export default defineComponent({
  components: { sidenav },
  data() {
    return {
      isHovered: false,
      left: '0',
      isChecked: this.$i18n.locale=='en' ? true : false,
      isOpen: false,
    }
      
  },
  mounted() {
    this.calculateLeft()
  },

  methods: {
    handleCheckboxChange() {
      if (this.isChecked) {
        this.$i18n.setLocale('en');
      } else {
        this.$i18n.setLocale('th');
      }

    },
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseOut() {
      this.isHovered = false;
    },
    calculateLeft(){
      const boxElement = this.$refs.menu;
      const rect = null
      if (boxElement && boxElement instanceof HTMLElement) {
          // Get the position of the element using getBoundingClientRect()
          const rect = boxElement.offsetLeft
          this.left = rect;
      }
      console.log( this.$refs.menu.offsetLeft )
    },
    toggleNav(){
      this.isHovered = !this.isHovered
      this.calculateLeft()
    },
    toggleMenu(){
      this.isOpen = !this.isOpen
    }
  },
})
</script>


<style lang="scss" scoped>
.main-header{
  padding: 15px 0;
  .wrapper{
    display: flex;
    align-items: center;
    max-width: 90%;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
  }

  .btn-click{
    border: 0;
    background: transparent;
  }

  .logo{
    width: 160px;
  }
  .main-nav{
    margin: 10px 15px 0;
  }
  .menu{
    width: 30px;
    margin-top: 5px;
  }

  .close-img{
    height: 15px;
  }
  .search{
    margin-top: 5px;
  }
  nav{
    display: flex;
    margin: 0 -15px;
    a{
      text-transform: uppercase;
      font-weight: bold;
      text-decoration: none;
      margin: 0 15px;
      color: #666666;
      white-space: nowrap;
      @media (max-width: 1200px) {
        margin: 0 10px;
      }
    }
  }
}

.toggle-button-cover {
  position: relative;
  margin: 0 10px;
  height: 30px;
  margin-top: 15px;
}

.button-cover {
  height: 100px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 10px 20px -8px #c5d6d6;
  border-radius: 4px;
}

.button-cover:before {
  counter-increment: button-counter;
  content: counter(button-counter);
  position: absolute;
  right: 0;
  bottom: 0;
  color: #d7e3e3;
  font-size: 12px;
  line-height: 1;
  padding: 5px;
}

.button-cover,
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 74px;
  height: 30px;
  margin: -20px auto 0 auto;
  overflow: hidden;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background: transparent linear-gradient(90deg, #D6DE25 0%, #96C93E 36%, #00773C 100%) 0% 0% no-repeat padding-box;
  transition: 0.3s ease all;
  z-index: 1;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}

#button-3 .knobs:before {
  content: '';
  position: absolute;
  top: 6px;
  left: 8px;
  width: 20px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

#button-3 .knobs:after {
  content: "TH";
  color: #fff;
  position: absolute;
  width: 100%;
  left: 40px;
  top: 5px;
  font-size: 12px;
}

#button-3 .checkbox:active + .knobs:before {
  width: 46px;
  border-radius: 100px;
}

#button-3 .checkbox:active + .knobs:after {
  width: 46px;
  border-radius: 100px;
}

#button-3 .checkbox:checked:active + .knobs:before {
  margin-left: -26px;
}

#button-3 .checkbox:checked + .knobs:before {
  //content: "EN";
  left: 42px;
  background-color: #fff;
}

#button-3 .checkbox:checked + .knobs:after {
  content: "EN";
  left: 15px;
}

#button-3 .checkbox:checked ~ .layer {
  background-color: #fcebeb;
}

.parent-nav{
  svg{
    width: 10px;
    height: 15px;
  }
}

.main-header{
  position: relative;
}

.child-nav{
  position: absolute;
  left: 0;
  top: 100%;
  background: #0E523D;
  z-index: 8;
  border-radius: 0 0 20px 20px;
  width: auto;
  h3{
    color: #fff;
    font-size: 16px;
    white-space: nowrap;
  }
  li {
    &:before{
      content: '-';
    }
    a{
      color: #fff;
      font-size: 12px;
    }
  }
  ul{
    padding: 0;
    list-style: none;
  }
  .child-wrapper{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    position: relative;
    padding: 30px;
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 12px;
      background: transparent linear-gradient(90deg, #D6DE25 0%, #96C93E 36%, #00773C 100%) 0% 0% no-repeat padding-box;
      top: 0;
    }
    > *{
      flex: 0 30%;
    }
  }
}
</style>