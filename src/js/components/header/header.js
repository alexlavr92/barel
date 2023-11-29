import "./header.scss";
import { BlockScroll } from "../..";

// Функционал для хэдера
let docWidth = document.body.clientWidth
// console.log(docWidth)

const Header = {
  defaultsOptions: {
    headerElem: $("body").find("header"),
  },
  headerEdit: function (options) {
    // const headerNav = options.headerElem.find('.header-nav'),
    //   headerInner = options.headerElem.find('.header'),
    //   headerLogo = options.headerElem.find('.header-logo')
    // console.log(headerNav.parent('.header').length)
    if (docWidth < 1200) {
      if (this.headerNav.parent('.header').length) {
        this.headerLogo.prependTo(this.headerInner)
        this.headerNav.prependTo('.header-mob-content_wrapper')
        options.headerElem.removeClass('p-fixed')
        if (options.headerElem.find('.header-mob-content.show').length)
          BlockScroll.open()
      }
    }
    else {
      if (!this.headerNav.parent('.header').length) {
        BlockScroll.close()
        // console.log(docWidth, this.headerNav)
        this.headerNav.prependTo(options.headerElem.find('.header'))
        this.headerLogo.insertAfter(this.headerNav.find('ul:first-child'))
        options.headerElem.addClass('p-fixed')
      }
    }
  },
  init: function (options) {
    var options = $.extend(this.defaultsOptions, options);
    this.headerNav = options.headerElem.find('.header-nav')
    this.headerInner = options.headerElem.find('.header')
    this.headerLogo = options.headerElem.find('.header-logo')
    this.headerEdit(options)
    this.events(options)
  },
  OpenClose: function (headerSwitcher) {
    // headerSwitcher.toggleClass('open')
    let headerMobContent
    headerSwitcher.parent('.header-mob').length
      ? headerMobContent = headerSwitcher.next('.header-mob-content')
      : headerMobContent = headerSwitcher.closest('.header-mob-content')

    if (!headerMobContent.hasClass('show')) {
      headerMobContent.fadeIn({
        duration: 300,
        start: function () {
          $(this).addClass('show slide-right')
          BlockScroll.open()
        },
        complete: function () {
          $(this).css('display', '')
        }
      })
    }
    else {
      headerMobContent.fadeOut({
        duration: 300,
        start: function () {
          BlockScroll.close()
          $(this).removeClass('slide-right')
        },
        complete: function () {
          $(this).removeClass('show').css('display', '')
        }
      })
    }
  },
  events: function (options) {
    const $obj = this;
    // console.log(options)
    let header = options.headerElem;
    /*    headerHeight =  */
    $obj.headerHeight = header.innerHeight();

    $(window).on("scroll", function (e) {
      var $window = $(window),
        scrollTop = $window.scrollTop();
      // console.log(scrollTop)
      if (docWidth >= 1200) {
        if (scrollTop > $obj.headerHeight) {
          header.addClass("header-mini")
        }
        else {
          if (!$('.jquery-modal').length)
            header.removeClass("header-mini");
        }
      }
      else {
        header.removeClass("header-mini")
        if ((scrollTop < options.lastScrollTop && scrollTop != 0)) {
          if (!header.hasClass('sticky'))
            header.addClass('sticky')
        }
        else {
          if ((header.hasClass('sticky') || scrollTop == 0) && !$('.jquery-modal.blocker').length && !$('.header-mob-content.show').length)
            header.removeClass('sticky')
        }
        options.lastScrollTop = scrollTop
      }
    });
    $(window).on('resize', function () {
      if (docWidth != document.body.clientWidth) {
        docWidth = document.body.clientWidth
        $obj.headerHeight = header.innerHeight();
        $obj.headerEdit(options)
      }
    })
    options.headerElem.find('.header-mob-switcher').on('click', function (e) {
      e.preventDefault()
      $obj.OpenClose($(this))
    })
    options.headerElem.find('.header-mob-overlay').on('click', function (e) {
      e.preventDefault()
      const HeaderSwitcher = $(this).closest('.header-mob-content').find('.header-mob-switcher')
      HeaderSwitcher.trigger('click')
    })
  },
};

export default Header;
// module.exports = Header;
