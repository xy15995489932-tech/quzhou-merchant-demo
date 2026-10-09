(() => {
  const addBanner = () => {
    const filters = document.querySelector('.list .filters')
    if (!filters || document.querySelector('.list-banner')) return
    const banner = document.createElement('section')
    banner.className = 'list-banner'
    banner.innerHTML = '<div><b>发现身边优质服务商家</b><span>严选本地商户 · 安心服务到家</span></div><small>查看推荐 ›</small>'
    filters.after(banner)
  }
  window.addEventListener('hashchange', () => setTimeout(addBanner, 0)); setTimeout(addBanner, 0)
})()
