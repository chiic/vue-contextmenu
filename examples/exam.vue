<template>
  <div style="position: fixed;right:0;">
    <div @contextmenu="showMenu(index)"
         style="width: 100px;height: 100px;background: red;margin-top: 20px;"
         v-for="(n, index) in 4" :key="n" >
         <vue-context-menu :contextMenuData="contextMenuData"
                           :transferIndex="transferIndex"
                           @savedata="savedata(index)"
                           @newdata="newdata"></vue-context-menu>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        transferIndex: null, // Show the menu that was clicked
        contextMenuData: {
          menuName: 'demo',
          axis: {
            x: null,
            y: null
          },
          menulists: [
            {
              fnHandler: 'savedata',
              icoName: '',
              btnName: 'Save'
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
      showMenu (index) {
        this.transferIndex = index // tranfer index to child component
        event.preventDefault()
        var x = event.clientX
        var y = event.clientY
        this.contextMenuData.axis = {
          x, y
        }
      },
      savedata (e) {
        console.log('click:' + e)
      },
      newdata () {
        console.log(2222)
      }
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>