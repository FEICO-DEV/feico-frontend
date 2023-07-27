<template>
    <Header />
    <section style="background:#F1F1F1" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="sidebar-wrapper mt-5">
              <div>
                <h3><strong>LOREM IPSUM</strong></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
              </div>
            </div>
            <div class="sidebar-wrapper mt-5">
              <div>
                <h3><strong>LOREM IPSUM</strong></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
              </div>
            </div>
            <div class="sidebar-wrapper mt-5">
              <div>
                <h3><strong>LOREM IPSUM</strong></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
              </div>
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1 mt-5">
            <div class="content-wrapper mt-5 pt-5">
              <div class="num">01</div>
              <div class="detail">
                <h2 style="color:#000">Reduce Electricity Cost</h2>
                <p>Electricity Cost Rates tend to increase over 4% every year. Solar Cell is a good alternative to reduce the risk in the future and reduce electricity cost. </p>
                <div class="row">
                  <div class="col-12">
                    <img src="/placeholder.jpg" class="img-fluid my-5" />
                  </div>
                </div>
                <p>Statistics from the Metropolitan Electricity Authority show that the value of FT has increased  dramatically during the last 10 years.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi en im ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi</p>
                
                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

                <div class="row">
                  <div class="col-12">
                    <img src="/placeholder.jpg" class="img-fluid my-5" />
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
  h1{
    font-size: 48px;
    background-image: linear-gradient(90deg, #00773C 0%, #96C93E 36%, #D6DE25 100%);
    background-clip: text;
    -webkit-background-clip: text; /* For Safari/WebKit */
    color: transparent;
    text-transform: uppercase;
    font-weight: bold;
    @media (max-width: 992px) {
      font-size: 30px;
    }
  }
  
  .sidebar-nav{
    a{
      display: block;
      text-decoration: none;
      margin-top: 15px;
    }
  }
  
  .num{
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    flex: 40px;
    min-width: 40px;
    margin-right: 15px;
    font-size: 22px;
  }
  
  .content-wrapper{
    display: flex;
  }
  
  hr{
    background: transparent linear-gradient(30deg, #00773C 0%, #96C93E 66%, #D6DE25 100%) 0% 0% no-repeat padding-box;
    border: 0;
    height: 2px;
    width: 100%;
    display: block;
    margin: 30px 0;
  }
  
  .section{
    position: relative;
  }
  
  .contact{
    position: absolute;
    left: 0;
    bottom: 10%;
    @media (max-width: 992px) {
      position: fixed;
    }
    a{
      background: #00773C;
      display: block;
      padding: 45px 60px 45px 45px;
      border-radius: 0 100px 100px 0;
      color: #fff;
      font-size: 25px;
      @media (max-width: 992px) {
        padding: 15px;
        font-size: 12px;
      }
      &:hover, &:active, &:focus{
        color: #fff;
      }
    }
  }
  </style>
  