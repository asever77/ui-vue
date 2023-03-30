<template>
  <div class="base-wrap">
    <HeaderView/>
    <div class="base-body">
      <router-view/>
    </div>
    <FooterView/>
  </div>
</template>
<script>
import HeaderView from '@/components/layouts/HeaderView.vue'
import FooterView from '@/components/layouts/FooterView.vue'

export default {
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
