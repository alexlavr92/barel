export const Buttons = {
  // $('body').on("DOMNodeInserted", function (event) {
  //     if ($(event.target).hasClass('btn')) {
  //         var NewBtn = $(event.target)
  //         // console.log(NewBtn)
  //         // options.btnElems.off('mouseenter')
  //         options.btnElems = options.btnElems.add(NewBtn)
  //         // console.log(addElems)
  //         console.log(options.btnElems)

  //     }

  // });
  defaultsOptions: {
    delay: 5000,
    newRound: '<div class="circle"></div>',
    btnClass: "btn",
  },
  init: function (options) {
    var options = $.extend(this.defaultsOptions, options);
    let docWidth = window.innerWidth;
    this.events(options);
  },
  events: function (options) {
    $("body").on("mouseenter", "." + options.btnClass + "", function (e) {
      let $this = $(this),
        o = options;
      // console.log($this)
      $(o.newRound).appendTo($this);
      let newRound = $this.find(".circle"),
        x = e.pageX - $this.offset().left,
        y = e.pageY - $this.offset().top;
      newRound.css({
        left: x + "px",
        top: y + "px",
      });
      newRound.addClass("anim");
      setTimeout(function () {
        newRound.remove();
      }, o.delay);
    });
    $("body").on("click", ".btn-animate", function (e) {
      const docWidth = document.body.clientWidth
      e.preventDefault();
      if ($(this).closest('.header-mob-content_inner').length) {
        $(this).closest('.header-mob-content_inner').find('.header-mob-switcher').trigger('click')
      }
      let header_offset = 0,
        $thisHash = $(this.hash),
        $thisHashOffset = $thisHash.offset().top,
        $duration = 1000
      // console.log($(window).scrollTop())
      if (docWidth > 1200) {
        header_offset = $('header').innerHeight();
        // console.log(header_offset)
      } else {
        $('header.sticky').length || $(window).scrollTop()
          ? header_offset = $('header').innerHeight()
          : header_offset = 0;

      }
      // console.log(header_offset)
      let $scrollTop = $thisHashOffset - header_offset
      // console.log($scrollTop)

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $scrollTop,
          },
          {
            duration: $duration, // продолжительность анимации
            easing: "linear", // скорость анимации
            complete: function () { // callback
              if (docWidth >= 1200) {
                const ScrollHeight = ($thisHash.offset().top - $('header').innerHeight()) - $scrollTop
                // console.log(ScrollHeight)
                if (ScrollHeight > 1) {
                  const NewDuration = ScrollHeight * $duration / $(window).scrollTop()
                  // console.log(ScrollHeight, NewDuration, $(window).scrollTop(), $thisHash.offset().top)
                  $('html, body').stop().animate({
                    scrollTop: $thisHash.offset().top - $('header').innerHeight()
                  }, NewDuration)
                }
              }
            },
            queue: false // не ставим в очередь
          }
        );
      // e.preventDefault();
      return false;
    });
    $(window).on("scroll", function (e) {
      var $window = $(window),
        scrollTop = $window.scrollTop();
      // console.log(scrollTop)
      scrollTop > $('.top-section').innerHeight()
        ? $('.btn-up').addClass('show')
        : $('.btn-up').removeClass('show')
    });
  },
};

// module.exports = Buttons;
