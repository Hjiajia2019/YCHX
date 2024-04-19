

   // 初始化 Swiper
   var mySwiper = new Swiper('#comments-carousel', {
    // 设置为水平方向轮播
    direction: 'horizontal',
    // 启用循环模式，可以无限循环轮播
    loop: true,
    // 添加导航按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 自动播放
    autoplay: {
        delay: 5000, // 轮播间隔时间，单位为毫秒
        disableOnInteraction: false, // 用户操作后是否停止自动轮播
    },
});

