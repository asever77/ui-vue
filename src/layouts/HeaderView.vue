<template>
  <header class="base-header">
    <div class="header-wrap">
      <div class="logo">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="42.000000pt" height="43.000000pt"
          viewBox="0 0 42.000000 43.000000" preserveAspectRatio="xMidYMid meet">
          <title>Netive UI</title>
          <g transform="translate(0.000000,43.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M138 410 c-45 -13 -87 -49 -110 -93 -19 -36 -23 -62 -26 -175 l-4
              -132 71 0 71 0 0 115 c0 110 1 117 25 140 27 28 52 31 81 11 16 -12 20 -31 24
              -138 l5 -123 68 -3 67 -3 0 128 c0 103 -4 136 -19 169 -40 87 -154 134 -253
              104z" />
          </g>
        </svg>
        <span class="a11y-hidden">Netive UI</span>
      </div>

      <button type="button" class="fab-menu ui-nav" data-material="arrow_forward" @click="menuToggle" aria-label="all menu"></button>

      <button type="button" class="fab-mode" data-material="light" aria-label="dark/light mode"></button>

      <nav class="header-nav ui-scrollbar" id="uiLNB">
        <p class="ver">{{ version }}</p>
        <ul class="ui-acco dep1" data-id="exeLNB">
          <li class="ui-acco-wrap dep1-item" :key="i" v-for="(name, key, i) in meunMap">
            <div class="ui-acco-tit">
              <button type="button" class="ui-acco-btn dep1-btn">
                <span>{{ key }}</span>
              </button>
            </div>
            <div class="ui-acco-pnl">
              <div class="ui-acco-pnl-wrap">
                <ul class="dep2"  >
                  <li class="dep2-item" :key="i" v-for="(name, key2, i) in meunMap[key]">
                    <router-link class="dep2-btn" :to="name.link">{{ key2 }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      meunMap: {
        convention: {
          introduction: { name: 'introduction', link: '/' },
          naming: { name: 'naming', link: '/naming' },
          units: { name: 'units', link: '/units' }
        },
        contents: {
          typography: { name: 'typography', link: '/typography' },
          color: { name: 'color', link: '/color' },
          gap: { name: 'gap', link: '/gap' },
          icon: { name: 'icon', link: '/icon' },
          table: { name: 'table', link: '/table' },
          list: { name: 'list', link: '/list' },
          layout: { name: 'layout', link: '/layout' },
          button: { name: 'button', link: '/button' }
        },
        components: {
          formLayout: { name: 'formLayout', link: '/formLayout' },
          input: { name: 'input', link: '/input' },
          accordion: { name: 'accordion', link: '/accordion' },
          dropdown: { name: 'dropdown', link: '/dropdown' },
          floating: { name: 'floating', link: '/floating' },
          floatingRange: { name: 'floatingRange', link: '/floatingRange' },
          modal: { name: 'modal', link: '/modal' },
          scrollBar: { name: 'scrollBar', link: '/scrollBar' },
          loading: { name: 'loading', link: '/loading' },
          tab: { name: 'tab', link: '/tab' },
          tableScroll: { name: 'tableScroll', link: '/tableScroll' },
          popup: { name: 'popup', link: '/popup' },
          tooltip: { name: 'tooltip', link: '/tooltip' },
          datePicker: { name: 'datePicker', link: '/datePicker' },
          select: { name: 'select', link: '/select' },
          selection: { name: 'selection', link: '/selection' },
          toast: { name: 'toast', link: '/toast' },
          parallax: { name: 'parallax', link: '/parallax' },
          scrollMove: { name: 'scrollMove', link: '/scrollMove' },
          jsonCodingList: { name: 'jsonCodingList', link: '/jsonCodingList' },
          fileUpload: { name: 'fileUpload', link: '/fileUpload' },
          range: { name: 'range', link: '/range' },
          slide: { name: 'slide', link: '/slide' },
          time: { name: 'time', link: '/time' }
        },
        a11y: {
          a11y: { name: 'a11y', link: '/a11y' },
          a11y1: { name: 'a11y1', link: '/a11y1' },
          a11y2: { name: 'a11y2', link: '/a11y2' },
          a11y3: { name: 'a11y3', link: '/a11y3' },
          a11y4: { name: 'a11y4', link: '/a11y4' }
        },
        memory: {
          issue: { name: 'issue', link: '/issue' }
        }
      },
      navOpen: false,
      version: 'v1.0.7 (2023-01-20)'
    }
  },
  setup() { },
  created() { },
  mounted() { },
  unmounted() { },
  methods: {
    menuToggle() {
      const elBody = document.querySelector('body')

      if (!this.navOpen) {
        elBody.classList.add('nav-open')
        this.navOpen = true
      } else {
        elBody.classList.remove('nav-open')
        this.navOpen = false
      }
    }
  }
}
</script>
<style lang="scss" src="@/assets/scss/_main.scss"></style>
