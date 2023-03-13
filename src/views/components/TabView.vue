<template>
  <main class="base-main">
    <div class="tit-wrap">
      <h1 class="tit-l">Tab</h1>
    </div>

    <article class="wrap-article">
      <h2 class="tit-m">Examples</h2>
      <div class="box-guide">

        <UiTab :tab-data="tab1" @tabCallback="val => tabCallback(val)"/>

      </div>
    </article>
  </main>
</template>
<script>
import UiTab from '@/components/UiTab.vue'

export default {
  name: 'tabView',
  components: {
    UiTab
  },
  data() {
    return {
      tab1: {
        id: 'tab1',
        group: 'TabPannel',
        tabs: [
          { current: false, callback: 'callbackTab1', name: '탭1', to: 'tab1_1' },
          { current: true, callback: 'callbackTab2', name: '탭2', to: 'tab1_2' },
          { current: false, callback: 'callbackTab3', name: '탭3', to: 'tab1_3' }
        ]
      }
    }
  },
  setup() { },
  created() { },
  mounted() {
    console.log('mounted', window.netive)
    window.netive.callback.tab.callbackTab1 = (v) => {
      console.log('Global callback Tab1', v)
    }
    window.netive.callback.tab.callbackTab2 = (v) => {
      console.log('Global callback Tab2', v)
    }
    window.netive.callback.tab.callbackTab3 = (v) => {
      console.log('Global callback Tab3', v)
    }
  },
  unmounted() {
    console.log('unmounted', window.netive)
  },
  methods: {
    tabCallback(tab) {
      this[tab.callback](tab)
    },
    systempop(v) {
      alert(v)
    },
    callbackTab1(val) {
      console.log('methods callback Tab 1', val)
    },
    callbackTab2(val) {
      console.log('methods callback Tab 2', val)
    },
    callbackTab3(val) {
      console.log('methods callback Tab 3', val)
    }
  }
}
</script>
