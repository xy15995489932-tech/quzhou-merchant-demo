const { merchants } = require('../../services/mock-data')
Page({ data: { merchant: null }, onLoad(q) { this.setData({ merchant: merchants.find(m => m.id === q.id) || merchants[0] }) }, call() { wx.makePhoneCall({ phoneNumber: '0570-8888888' }) }, navigate() { wx.openLocation({ latitude: 28.9359, longitude: 118.8742, name: this.data.merchant.name, address: '浙江省衢州市本地生活服务街区' }) } })
