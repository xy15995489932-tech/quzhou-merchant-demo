const { categories, merchants } = require('../../services/mock-data')
Page({
  data: { categories, merchants, keyword: '' },
  onKeyword(e) { this.setData({ keyword: e.detail.value }) },
  search() { wx.navigateTo({ url: `/pages/list/index?keyword=${encodeURIComponent(this.data.keyword)}` }) },
  openCategory(e) { wx.navigateTo({ url: `/pages/list/index?category=${e.currentTarget.dataset.name}` }) },
  openMerchant(e) { wx.navigateTo({ url: `/pages/detail/index?id=${e.currentTarget.dataset.id}` }) },
  openMore() { wx.navigateTo({ url: '/pages/list/index' }) }
})
