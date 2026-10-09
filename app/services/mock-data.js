const categories = [
  { id: 'home', name: '家政保洁', icon: '♟', tone: 'cyan' },
  { id: 'beauty', name: '美容美发', icon: '✂', tone: 'pink' },
  { id: 'auto', name: '汽车服务', icon: '▰', tone: 'blue' },
  { id: 'repair', name: '维修安装', icon: '⚒', tone: 'orange' },
  { id: 'decor', name: '装修装饰', icon: '◆', tone: 'sky' },
  { id: 'edu', name: '教育培训', icon: '⌂', tone: 'green' },
  { id: 'food', name: '餐饮美食', icon: '♨', tone: 'yellow' },
  { id: 'more', name: '更多分类', icon: '▦', tone: 'purple' }
]

const merchants = [
  { id: 'sunshine', name: '阳光家政服务中心', category: '家政保洁', district: '柯城区', score: '4.9', tags: ['深度保洁', '上门服务'], image: '/assets/merchant-sunshine.png', intro: '专业家政团队，为您提供洁净、安心的生活服务。' },
  { id: 'ceremony', name: '名剪造型', category: '美容美发', district: '衢江区', score: '4.8', tags: ['染发烫发', '预约优先'], image: '/assets/merchant-ceremony.png', intro: '专注日常造型与精致护理，提供舒适的一对一咨询。' }
]

module.exports = { categories, merchants }
