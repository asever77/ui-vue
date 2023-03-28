<template>
  <main class="base-main">
    <div class="tit-wrap">
      <h1 class="tit-l">Tab</h1>
    </div>
    <div class="box-guide">
      <!-- tab compontent-->
      <UiTab :tab-data="tab1" @tabAction="val => tabAction(val)"/>
      <TabView1 :tab-data="tab1" tab-name="TabView1" :tab-selected="true"/>
      <TabView2 :tab-data="tab1" tab-name="TabView2" :tab-selected="false"/>
      <TabView3 :tab-data="tab1" tab-name="TabView3" :tab-selected="false"/>
      <!-- //tab compontent-->
    </div>
  </main>
</template>
<script>
import UiTab from '@/components/UiTab.vue'
import TabView1 from '@/views/components/TabView_1.vue'
import TabView2 from '@/views/components/TabView_2.vue'
import TabView3 from '@/views/components/TabView_3.vue'

export default {
  name: 'tabView',
  components: {
    UiTab,
    TabView1,
    TabView2,
    TabView3
  },
  data() {
    return {
      tab1: {
        id: 'tab1',
        current: 0,
        tabs: [
          { idx: 0, name: '탭1', panel: 'TabView1', callback: 'callbackTab1' },
          { idx: 1, name: '탭2', panel: 'TabView2', callback: 'callbackTab2' },
          { idx: 2, name: '탭3', panel: 'TabView3', callback: '' }
        ]
      }
    }
  },
  setup() { },
  created() { },
  mounted() {
    // tab callback : window.netive.callback.tab.{{name}}
    window.netive.callback.tab.callbackTab1 = (tabInfo) => {
      console.log('callback1', tabInfo)
    }
    window.netive.callback.tab.callbackTab2 = (tabInfo) => {
      console.log('callback2', tabInfo)
    }
  },
  unmounted() { },
  methods: {}
}
</script>
