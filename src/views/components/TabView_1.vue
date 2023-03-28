<template>
  <section class="ui-tab-pnl" :data-tab="tabData.id" :data-name="tabName" :data-selected="tabSelected">
    <h2 class="tit-s ui-tab-tit">title1</h2>
    <a href="#">더보기</a>

    <UiTab :tab-data="tab2" @tabAction="val => tabAction(val)"/>
    <TabView1s1 :tab-data="tab2" tab-name="TabView1_1" :tab-selected="false"/>
    <TabView1s2 :tab-data="tab2" tab-name="TabView1_2" :tab-selected="true"/>
    <TabView1s3 :tab-data="tab2" tab-name="TabView1_3" :tab-selected="false"/>
  </section>
</template>
<script>
import UiTab from '@/components/UiTab.vue'
import TabView1s1 from '@/views/components/TabView_1_1.vue'
import TabView1s2 from '@/views/components/TabView_1_2.vue'
import TabView1s3 from '@/views/components/TabView_1_3.vue'

export default {
  name: 'Tab1View',
  props: {
    tabData: {
      type: String
    },
    tabName: String,
    tabSelected: Boolean
  },
  components: {
    UiTab,
    TabView1s1,
    TabView1s2,
    TabView1s3
  },
  data() {
    return {
      tab2: {
        id: 'tab2',
        current: 0,
        tabs: [
          { idx: 0, name: '탭1-1', panel: 'TabView1_1', callback: 'callbackTab1_1' },
          { idx: 1, name: '탭1-2', panel: 'TabView1_2', callback: 'callbackTab1_2' },
          { idx: 2, name: '탭1-3', panel: 'TabView1_3', callback: '' }
        ]
      }
    }
  },
  setup() { },
  created() { },
  mounted() {
    // tab callback : window.netive.callback.tab.{{name}}
    window.netive.callback.tab.callbackTab1_1 = (tabInfo) => {
      console.log('callback1', tabInfo)
    }
    window.netive.callback.tab.callbackTab1_2 = (tabInfo) => {
      console.log('callback2', tabInfo)
    }
  },
  unmounted() { },
  methods: { }
}
</script>
