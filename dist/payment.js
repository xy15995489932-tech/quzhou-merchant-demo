document.addEventListener('click', event => {
  if (!event.target.closest('[data-online-pay]')) return
  const modal = document.createElement('div')
  modal.className = 'pay-modal'
  modal.innerHTML = '<div><button class="pay-close" aria-label="关闭">×</button><h2>在线缴费</h2><p>续费 1 个月</p><strong>¥298.00</strong><label><input type="radio" name="method" checked> 微信支付</label><label><input type="radio" name="method"> 支付宝</label><button class="pay-confirm">确认支付</button><small>演示环境：不会发起真实扣款</small></div>'
  document.body.append(modal)
  modal.querySelector('.pay-close').onclick = () => modal.remove()
  modal.querySelector('.pay-confirm').onclick = () => { modal.remove(); alert('支付成功，服务有效期已延长 30 天') }
})
