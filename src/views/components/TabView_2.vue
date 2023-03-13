<template>
  <section class="ui-tab-pnl selected">
    <h2 class="tit-s ui-tab-tit">{{ pannelData.name }} title</h2>
    <p>{{ pannelData.name }} content zz</p>
    <a href="#">더보기</a>
  </section>
</template>
<script>
export default {
  name: 'tabView2',
  props: {
    pannelData: {
      type: Object
    }
  },
  components: { },
  data() {
    return {
      sample: null
    }
  },
  setup() { },
  created() { },
  mounted() {
    console.log('in-pannel2: ', this.pannelData)
  },
  unmounted() { },
  methods: { }
}
</script>
