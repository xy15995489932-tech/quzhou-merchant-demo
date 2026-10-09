(() => {
  const improve = () => {
    const hero = document.querySelector('.banner-scene')
    if (hero) hero.src = 'assets/home-hero-hd.png'
    document.querySelectorAll('.category-img').forEach(image => {
      const name = image.src.split('/').pop().replace('.png', '')
      image.src = `assets/categories/${name}-hd.png`
    })
  }
  window.addEventListener('hashchange', () => setTimeout(improve, 0)); setTimeout(improve, 0)
})()
