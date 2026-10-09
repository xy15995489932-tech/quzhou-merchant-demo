const { merchants } = require('../../services/mock-data')
Page({ data: { merchants: [] }, onLoad(q) { const keyword = decodeURIComponent(q.keyword || q.category || ''); this.setData({ merchants: merchants.filter(m => !keyword || `${m.name}${m.category}${m.district}`.includes(keyword)), keyword }) }, goDetail(e) { wx.navigateTo({ url: `/pages/detail/index?id=${e.currentTarget.dataset.id}` }) } })
