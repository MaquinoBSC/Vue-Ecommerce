<template>
  <div class="menu">
      <div class="container">
          <b-row>
              <b-col>
                  <div class="left-menu">
                    <router-link class="row categories item" to="/">
                        <b-img 
                            :src="require('../assets/logo.jpg')" 
                            fluid 
                            alt="fluid image"
                            class="image"
                        ></b-img>
                        <p class="text-menu">Categorias</p>
                    </router-link>
                </div>
              </b-col>
              <b-col>
                    <div class="right-menu">
                        <router-link class="item" to="/login">
                            <p class="text-menu">Iniciar Sesion</p>
                        </router-link>
                    </div>
              </b-col>
          </b-row>
      </div>
  </div>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style lang="scss" scoped>
    .menu{
        background-color: #16202b;
    }
    .left-menu, .right-menu {
        display: flex;
        justify-content: center;
        align-items: center;

        .item {
            color: #fff;
            &:hover {
                color: #1fa1fa;
            }

            .text-menu{
                padding-top: 20px;
            }
        }
    }

    .image {
        width: 100px;
        border-radius: 15px;
    }

    .text-menu {

    }
</style>