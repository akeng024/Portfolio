$(window).on('scroll',function(){
    $(".itemTitle").each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + 180){
        $(this).addClass('isActive');
      }
    });
  });