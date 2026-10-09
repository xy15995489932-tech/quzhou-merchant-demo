(() => {
  const paint = () => {
    const data = window.LocalLifeData || { merchants: [] }
    const merchantFor = el => {
      const href = el.closest('[data-go]')?.dataset.go || ''
      const id = new URLSearchParams(href.split('?')[1] || '').get('id')
      return data.merchants.find(item => item.id === id)
    }
    const label = m => `<b>${Number(m.score) >= 4.8 ? '★★★★★' : '★★★★☆'}</b> ${m.score}<i>👍 ${m.likes}点赞</i>`
    document.querySelectorAll('.score').forEach(el => { const m = merchantFor(el); if (m) el.innerHTML = label(m) })
    document.querySelectorAll('.recommend-row article').forEach(el => { const m = merchantFor(el), target = el.querySelector('small'); if (m && target) target.innerHTML = label(m) + `　${m.distance}` })
    const current = data.merchants.find(item => item.id === new URLSearchParams(location.hash.split('?')[1] || '').get('id'))
    const detail = document.querySelector('.detail-rating')
    if (current && detail) detail.innerHTML = `<b>${Number(current.score) >= 4.8 ? '★★★★★' : '★★★★☆'}</b> ${current.score}<small>　128条评价　👍 ${current.likes}点赞</small>`
  }
  window.addEventListener('hashchange', () => setTimeout(paint, 0)); setTimeout(paint, 0)
})()
