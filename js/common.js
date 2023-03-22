$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");

  $('.modal-window').css("display", "flex");
  $('.modal-window').hide();

  
  $('.modal-window__close').on('click', function() {
    $('.modal-window').fadeOut();
    $('html').removeClass('overflow');
    return false;
  })
  
  jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
      var div = $('.modal-window-inner'); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.modal-window').fadeOut();
        $('html').removeClass('overflow');
      }
    });
  });

  $('.map-item__cursor').on('click', function() {
    let index_elem = $('.map-item__cursor').index(this);
    let now_modal = $('.modal-window')[index_elem];
    $('html').addClass('overflow');
    $(now_modal).fadeIn();
  })


  if ($(window).width() < 426) {
     $('.map-item__cursor').on('click', function() {
       let index_elem = $('.map-item__cursor').index(this);
       let elements__arr = $('.map-item');
       let now_element = $(elements__arr)[index_elem];
       $('.map-item').removeClass('visible');
       $(now_element).addClass('visible');
       

       
     })

     $('.map-item__cursor').on('click', function() {
       let title = $(this).data('title');
       $('.map-info-block__title').text(title);
       let top = $(this).position().top;
       let left = $(this).position().left;
       let info_block = $('.map-info-block')[0];
       info_block.style.left = left + 30 +'px'; 
       info_block.style.top = top + 30 +'px';
       $('.map-info-block').addClass('active');
     })
  }
  else {
    function showCoords(evt){
      let info_block = $('.map-info-block')[0];
      info_block.style.left = evt.pageX + 30 +'px'; 
      info_block.style.top = evt.pageY + 30 +'px';
      $('.map-info-block').addClass('active');
    }


    $('.map-item__cursor').on('mouseenter', function() {
      let index_elem = $('.map-item__cursor').index(this);
      let elements__arr = $('.map-item');
      let now_element = $(elements__arr)[index_elem];

      $(now_element).addClass('visible');
      $(this).on('mouseleave', function() {
        $(now_element).removeClass('visible');
      })
    })

    $('.map-item__cursor').on('mouseenter', function() {
      let title = $(this).data('title');
      $('.map-info-block__title').text(title);
      showCoords(event)
      $(this).on('mouseout', function(argument) {
        $('.map-info-block').removeClass('active');
      })
    })
  }


  var outerContent = $('.map-overlay');
  var innerContent = $('.map-scrool');
  $('.map-overlay').scrollLeft((innerContent.width() - outerContent.width()) / 2 - 70); 
})