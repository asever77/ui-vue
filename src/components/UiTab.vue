<template>
  <div class="ui-tab" :data-id="tabData.id">
    <div class="ui-tab-btns">
      <button type="button" :key='i' v-for="(item, key, i) in tabData.tabs" :data-selected="(tabData.current === key)" @click="tabSelect($event, item)" class="ui-tab-btn">
        <span>{{ item.name }}</span>
      </button>
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
  data() { },
  setup() { },
  created() { },
  mounted() { },
  unmounted() {},
  methods: {
    tabSelect(e, item) {
      const tabInfo = item
      const tabBtn = e.currentTarget
      tabInfo.id = this.tabData.id
      const tabBtnWrap = tabBtn.closest('.ui-tab[data-id="' + tabInfo.id + '"]')
      const tabBtnsSelected = tabBtnWrap.querySelector('.ui-tab-btn[data-selected="true"]')
      const tabPanels = document.querySelectorAll('[data-tab="' + tabInfo.id + '"]')
      const tabPanel = document.querySelector('[data-name="' + tabInfo.panel + '"]')
      tabBtnsSelected.dataset.selected = false
      tabBtn.dataset.selected = true

      for (let i = 0; i < tabPanels.length; i++) {
        tabPanels[i].dataset.selected = false
      }

      tabPanel.dataset.selected = true
      window.netive.callback.tab(tabInfo)
    }
  }
}
</script>
