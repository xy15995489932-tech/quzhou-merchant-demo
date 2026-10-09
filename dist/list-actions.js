(() => {
  const enhance = () => {
    document.querySelectorAll('.list-card').forEach(card => {
      if (card.querySelector('.list-actions')) return
      const actions = document.createElement('div')
      actions.className = 'list-actions'
      actions.innerHTML = '<button data-list-call title="电话咨询">☎<span>电话</span></button><button data-list-map title="导航到店">⌁<span>导航</span></button>'
      actions.querySelector('[data-list-call]').onclick = event => { event.stopPropagation(); notice('模拟拨号：0570-8888888') }
      actions.querySelector('[data-list-map]').onclick = event => { event.stopPropagation(); notice('模拟打开地图导航') }
      card.append(actions)
    })
  }
  const notice = text => { const el = document.createElement('div'); el.className = 'list-toast'; el.textContent = text; document.body.append(el); setTimeout(() => el.remove(), 1600) }
  document.addEventListener('click', event => {
    const call = event.target.closest('[data-list-call]'), map = event.target.closest('[data-list-map]')
    if (!call && !map) return
    event.preventDefault(); event.stopPropagation()
    notice(call ? '模拟拨号：0570-8888888' : '模拟打开地图导航')
  })
  window.addEventListener('hashchange', () => setTimeout(enhance, 0)); setTimeout(enhance, 0)
})()
