Component({
  properties: { active: { type: String, value: 'home' } },
  methods: {
    onTabTap(e) {
      const key = e.currentTarget.dataset.key
      if (key === 'home') wx.reLaunch({ url: '/pages/home/index' })
      else wx.showToast({ title: '该功能将在下一阶段开放', icon: 'none' })
    }
  }
})
