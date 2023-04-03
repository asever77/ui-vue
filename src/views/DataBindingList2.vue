<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product,i) in productList">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      productList: []
    }
  },
  setup() {},
  created() {
    this.getList()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getList() {
      this.proudctList = await this.$api('https://54b2d755-8747-4866-a76a-e23d99e41def.mock.pstmn.io/list', 'get')
    }
  }
}
</script>
