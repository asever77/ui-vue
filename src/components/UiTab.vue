<template>
  <div class="ui-tab type-scroll" :data-id="tabData.id">
    <div class="ui-tab-btns">
      <div class="wrap-group">
        <router-link :key='i' v-for="(item, key, i) in tabData.tabs" :to="item.to"  :data-selected="item.current" @click="tabSelect($event, item)"  data-callback="callbackTab1" class="ui-tab-btn">
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
    <div class="ui-tab-pnls">
      <router-view :key="$route.fullPath" :name="tabData.group" :pannel-data="this.pannel" ref="pannel"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'uiTab',
  props: {
    tabData: {
      type: Object
    }
  },
  components: { },
  data() {
    return {
      pannel: this.tabData
    }
  },
  setup() {},
  created() {
    this.tabInit()
  },
  mounted() { },
  unmounted() {},
  methods: {
    tabInit() {
      console.log('tabInit')
      for (const item of this.tabData.tabs) {
        if (item.current) {
          this.pannel = item
        }
      }
    },
    tabSelect(e, item) {
      const tabBtn = e.currentTarget
      const tabBtnWrap = tabBtn.closest('.ui-tab-btns')
      const tabBtnsSelected = tabBtnWrap.querySelector('.ui-tab-btn[data-selected="true"]')
      const tabInfo = item

      tabBtnsSelected.dataset.selected = false
      tabBtn.dataset.selected = true
      window.netive.callback.tab(tabInfo)
      this.pannel = tabInfo
      console.log('pannel: ', this.pannel)
      // tabInfo.callback && this.$emit('tabCallback', tabInfo)
    }
  }
}
</script>
