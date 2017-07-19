<template>
  <span id="contextMenuTotle" class="vue-contextmenu-wrapper"
        :class="{contextmenuwrapperadd: MenuToggle}">
    <li v-for="item in contextMenuData.menulists" class="context-menu-list">
      <button @click.stop="fnHandler(item)">
        <i :class="item.icoName"></i>
        <span>{{item.btnName}}</span>
      </button>
    </li>
  </span>
</template>
<script>
  export default {
    props: {
      contextMenuData: {
        type: Object,
        requred: false,
        default () {
          return {
            isShowMenu: true,
            axios: {
              x: null,
              y: null
            },
            menulists: [
              {
                fnHandler: 'adddata',
                icoName: 'fa fa-home fa-fw',
                btnName: 'New'
              },
              {
                fnHandler: 'savedata',
                icoName: 'fa fa-home fa-fw',
                btnName: 'Save'
              }
            ]
          }
        }
      }
    },
    data () {
      return {
        MenuToggle: false
      }
    },
    watch: {
      'contextMenuData.axios' (val) {
        var x = val.x
        var y = val.y
        var menu = document.getElementById('contextMenuTotle')
        menu.style.left = x + 'px'
        menu.style.top = y + 'px'
      },
      'contextMenuData.isShowMenu' (val) {
        this.MenuToggle = true
        var _this = this
        document.addEventListener('mouseup', function () {
          _this.MenuToggle = false
        }, false)
      }
    },
    methods: {
      fnHandler (item) {
        this.$emit(item.fnHandler)
      }
    }
  }
</script>
<style>
  .vue-contextmenu-wrapper {
    box-shadow: 2px 2px 2px #cccccc;
    z-index: 999;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
  }
  .contextmenuwrapperadd {
    display: block;
  }
  .context-menu-list {
    width: 150px;
    height: 32px;
    border-radius: 4px;
    background: #F3F3F3;
    text-decoration: none;
    list-style: none;
  }
  .context-menu-list button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: block;
    outline: 0;
    border: 0;
  }
  .context-menu-list button i, span {
    float: left;
  }
  .context-menu-list button i{
    padding: 0 10px 0 10px;
  }
  .context-menu-list button:hover {
    box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
    color: #ffffff;
    border-radius: 4px;
    background: -webkit-linear-gradient(bottom, #5a6a76 , #2e3940); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom, #5a6a76, #2e3940); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom, #5a6a76, #2e3940); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, #5a6a76 , #2e3940); /* 标准的语法 */
  }

</style>
