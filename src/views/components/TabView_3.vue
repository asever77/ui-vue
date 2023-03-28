<template>
  <section class="ui-tab-pnl" :data-tab="tabData.id" :data-name="tabName" :data-selected="tabSelected">
    <h2 class="tit-s ui-tab-tit">title3</h2>
    <a href="#">더보기</a>
  </section>
</template>
<script>

export default {
  name: 'Tab1View',
  props: {
    tabData: {
      type: String
    },
    tabName: String,
    tabSelected: Boolean
  },
  components: { },
  data() {
    return {}
  },
  setup() { },
  created() { },
  mounted() {
    console.log(this.tabData)
  },
  unmounted() { },
  methods: { }
}
</script>
