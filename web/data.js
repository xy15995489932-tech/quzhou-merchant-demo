window.LocalLifeData = {
  categories: [
    ['home','家政保洁','♟','cyan'],['beauty','美容美发','✂','pink'],['auto','汽车服务','▰','blue'],['repair','维修安装','⚒','orange'],
    ['decor','装修装饰','◆','sky'],['edu','教育培训','⌂','green'],['food','餐饮美食','♨','yellow'],['more','更多分类','▦','purple']
  ],
  merchants: [
    {id:'sunshine',name:'阳光家政服务中心',category:'家政保洁',district:'柯城区',score:'4.8',likes:328,distance:'1.2km',tags:['深度保洁','全牛区'],image:'assets/merchant-sunshine-hd.png',intro:'专业家政团队，提供日常保洁、深度保洁和家电清洗服务。'},
    {id:'mingjian',name:'名剪造型',category:'美容美发',district:'衢江区',score:'4.9',likes:516,distance:'2.3km',tags:['美容美发','锦江区'],image:'assets/merchant-mingjian-hd.png',intro:'专注发型设计十余年，拥有专业发型师团队，提供时尚、个性、专业的美发服务。'},
    {id:'carwing',name:'车之翼汽车服务',category:'汽车服务',district:'柯城区',score:'4.7',likes:248,distance:'3.1km',tags:['洗车美容','柯城区'],image:'assets/merchant-carwing-hd.png',intro:'提供洗车美容、维修保养和贴膜改装等专业服务。'},
    {id:'decor',name:'匠心家装装饰',category:'装修装饰',district:'衢江区',score:'4.8',likes:197,distance:'3.6km',tags:['装修装饰','衢江区'],image:'assets/merchant-decor-hd.png',intro:'专注家装设计、旧房改造与工装装修。'}
  ],
  services: [
    {id:1,name:'男士剪发',price:'68',image:'assets/merchant-ceremony.png'}, {id:2,name:'女士剪发',price:'88',image:'assets/merchant-ceremony.png'},
    {id:3,name:'烫发',price:'268',image:'assets/merchant-ceremony.png'}, {id:4,name:'染发',price:'328',image:'assets/merchant-ceremony.png'}, {id:5,name:'头皮护理',price:'128',image:'assets/merchant-ceremony.png'}
  ],
  payments: ['2026年11月','2026年10月','2026年09月','2026年08月','2026年07月'].map((month, i) => ({month, amount:'¥298.00',status:'已确认',date:`2026-${String(11-i).padStart(2,'0')}-01`}))
}
