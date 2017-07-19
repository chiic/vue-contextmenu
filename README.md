# vue

> Contextmenu component for vue2

## Use Setup

# install vue-contextmenu
npm install vue-contextmenu --save

# Vue mount
	// mount with component
	import VueContextMenu form 'vue-contextmenu'
	import from 'vue-context/style/css/font-awesome.min.css' // use font-awesome icon (http://fontawesome.io/)

	export default {
		components: {
			VueContextMenu
		}
	}
# Use in SPA
	<template>
	  <div id="app" @contextmenu="showMenu" style="width: 100px;height: 100px;background: red;">
	    <vue-context-menu :contextMenuData="contextMenuData" 
		                  @savedata="savedata"
		                  @newdata="newdata">
	    </vue-context-menu>
	  </div>
	</template>
	<script>
	  import VueContextMenu from 'vue-contextmenu'
	  import 'vue-contextmenu/style/css/font-awesome.min.css'
	  export default {
	    name: 'app',
	    components: {
	      VueContextMenu
	    },
	    data () {
	      return {
	      	// contextmenu data (菜单数据)
	        contextMenuData: {
	        // show or not (是否显示)
	          isShowMenu: false,
	        // The coordinates of the display(菜单显示的位置)
	          axios: {
	            x: null,
	            y: null
	          },
	        // Menu options (菜单选项)
	          menulists: [
	            {
	              fnHandler: 'savedata', // Binding events(绑定事件)
	              icoName: 'fa fa-home fa-fw', // icon (icon图标 )
	              btnName: 'Save' // The name of the menu option (菜单名称)
	            }, 
	            {
	              fnHandler: 'newdata', 
	              icoName: 'fa fa-home fa-fw', 
	              btnName: 'New'
	            }
	          ]
	        }
	      }
	    },
	    methods: {
	      showMenu (e) {
	        e.preventDefault()
	        var x = e.pageX
	        var y = e.pageY
	        // Get the current location
	        this.contextMenuData.axios = {
	          x, y
	        }
	        this.contextMenuData.isShowMenu = !this.contextMenuData.isShowMenu
	      },
	      savedata () {
	      	console.log('save successfully!')
	      },
	      newdata () {
	      	console.log('newdata!')
	      }
	    }
	  }
	</script>
# Email
    xxnmiss@163.com
# Test demo
![Image text](https://raw.githubusercontent.com/chIIC/vue-contextmenu/master/test.gif)





