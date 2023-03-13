((win, doc) => {
  'use strict'

  const global = 'netive'

  window[global] = {}

  const Global = window[global]

  console.log(Global)

  Global.callback = {
    tab(tabInfo) {
      tabInfo.callback && this.tab[tabInfo.callback](tabInfo)
    }
  }
})()
