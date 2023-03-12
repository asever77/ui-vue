<template>
  <div class="ui-tab type-scroll" :data-id="tabData.id">
    <div class="ui-tab-btns">
      <div class="wrap-group">
        <button type="button" :key='i' v-for="(item, key, i) in tabData.tabs" :data-tab="item.idx" data-callback="callbackTab1" :class="{ 'ui-tab-btn': true, 'selected': item.current }" @click="sendEvent"><span>{{ item.name }}</span></button>
      </div>
    </div>
    <div class="ui-tab-pnls">
      <section class="ui-tab-pnl" data-tab="1"></section>
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
  components: {},
  data() {
    return {
      dddd: this.tabData
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    sendEvent(e) {
      console.log(this.dddd)
      this.$emit('printsss', this.tabData)
    }
  }
}
</script>
