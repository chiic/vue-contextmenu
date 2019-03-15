<template>
  <div style="position: fixed;left:0px;top:0;">
    <div
      @contextmenu="showMenu(index)"
      style="width: 100px;height: 100px;background: red;margin-top: 20px;"
      v-for="(n, index) in 4"
      :key="n"
    >
      <vue-context-menu
        :contextMenuData="contextMenuData"
        :transferIndex="transferIndex"
        @Handler1="Handler_A(index)"
        @Handler2="Handler_B(index)"
        @Handler3="Handler_C(index)"
        @Handler4="Handler_D(index)"
        @Handler5="Handler_E(index)"
      ></vue-context-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      transferIndex: null, // Show the menu that was clicked
      contextMenuData: {
        menuName: "demo",
        axis: {
          x: null,
          y: null
        },
        menulists: [
          {
            btnName: "选项1",
            icoName: "fa fa-home fa-fw",
            children: [
              {
                icoName: "fa fa-home fa-fw",
                btnName: "选项1-1",
                children: [
                  {
                    icoName: "fa fa-home fa-fw",
                    fnHandler: "Handler1",
                    btnName: "选项1-1-1"
                  },
                  {
                    icoName: "fa fa-home fa-fw",
                    fnHandler: "Handler2",
                    btnName: "选项1-1-2"
                  }
                ]
              },
              {
                icoName: "",
                btnName: "选项1-2",
                children: [
                  {
                    icoName: "",
                    fnHandler: "Handler3",
                    btnName: "选项1-2-1"
                  },
                  {
                    icoName: "fa fa-home fa-fw",
                    fnHandler: "Handler4",
                    btnName: "选项1-2-2"
                  }
                ]
              }
            ]
          },
          {
            btnName: "选项2",
            children: [
              {
                fnHandler: "Handler5",
                icoName: "",
                btnName: "选项2-1"
              }
            ]
          },
          {
            btnName: "选项3",
            fnHandler: "Handler4"
          },
          {
            btnName: "选项4",
            disabled: true
          }
        ]
      }
    };
  },
  methods: {
    showMenu(index) {
      this.transferIndex = index; // tranfer index to child component
      event.preventDefault();
      var x = event.clientX;
      var y = event.clientY;
      this.contextMenuData.axis = {
        x,
        y
      };
    },
    Handler_A (index) {
      console.log('index:', index, '选项1-1-1绑定事件执行');
    },
    Handler_B (index) {
      console.log('index:', index, '选项1-1-2绑定事件执行');
    },
    Handler_C (index) {
      console.log('index:', index, '选项1-2-1绑定事件执行');
    },
    Handler_D (index) {
      console.log('index:', index, '选项1-2-2绑定事件执行');
    },
    Handler_E (index) {
      console.log('index:', index, '选项2-1绑定事件执行');
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>