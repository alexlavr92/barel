"use strict";
import { Tabs } from "./components/tabs/tabs";
import Header from "./components/header/header";
import { Buttons } from "./components/buttons/buttons";
// import topSectionImg from "../media/img/top-bg.jpg";
// import AboutUsPicture from "../media/img/about-us1.png"
// import AboutUsPicture2 from "../media/img/about-us2.png"
import { Slider, SliderReviews } from "./components/sliders/sliders";
import { Gallery } from "./components/lightgallery/lightgallery";
import { ModalElem } from "./components/modal/modal";
import inputmask from 'Plugs/inputmask/jquery.inputmask.min.js';
import { Forms } from "./components/forms/forms";

import AOS from 'Plugs/aos-animate/aos.js'
import '../css/plugins/aos.css'


import MapBaloon from "../media/icon/baloon.png"

import "../index.html";

import "scss/style.scss";



// Функционал блокировки скрола при открытии модального окна
const BlockScroll = {
  open: function () {
    setTimeout(function () {

      if (!document.body.hasAttribute('data-body-scroll-fix')) {
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Получаем позицию прокрутки

        document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = '-' + scrollPosition + 'px';
        document.body.style.left = '0';
        document.body.style.right = '0';
        if ($('body').height() < $(window).height()) {
          /*   console.log('меньше') */
          document.body.style.bottom = '0';
        }
        /* if ($('header').) */
      }
      // if (jQuery('.header-menu.open').length && docWidth < 1200) { //новое
      //     menuopen = true
      // }

    }, 10);
  },
  close: function () {
    if (document.body.hasAttribute('data-body-scroll-fix')) {

      let scrollPosition = document.body.getAttribute('data-body-scroll-fix'); // Получаем позицию прокрутки из атрибута

      document.body.removeAttribute('data-body-scroll-fix'); // Удаляем атрибут
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scroll(0, scrollPosition); // Прокручиваем на полученное из атрибута значение
    }
  }
}
// ------------------------------------
export { BlockScroll }



let docWidth
let AboutUsItemsHeight = function () {
  const AboutUsItems = $('.about-us_items').children('.about-us_item')
  AboutUsItems.css({ 'min-height': '' })
  let MaxItemHeight = 0
  $.each(AboutUsItems, function () {
    if ($(this).innerHeight() >= MaxItemHeight) {
      MaxItemHeight = $(this).innerHeight()
    }
  })
  // console.log(MaxItemHeight)
  AboutUsItems.css({ 'min-height': MaxItemHeight + 'px' })
  // const AboutUsPicts = [AboutUsPicture, AboutUsPicture2]
  // const AboutUsPictsWrapp = document.querySelectorAll('.about-us_picture')
  // $.each(AboutUsPictsWrapp, function (i) {
  //   this.style.backgroundImage = "url(" + AboutUsPicts[i] + ")";
  // })
}

$(document).ready(function ($) {
  docWidth = document.body.clientWidth
  // console.log(docWidth)
  AOS.init({
    once: true,
  });

  document.addEventListener('aos:in', ({ detail }) => {
    if ($(detail).hasClass('contacts-wrapper')) {
      InitedMap()
    }
  });


  // Header.initScroll();
  Header.init();

  if ($(".btn").length) {
    Buttons.init();
    // console.log(BtnsInit)
  }

  // if (topSectionImg) {
  //   const topSection = document.querySelector(".top-section");
  //   topSection.style.backgroundImage = "url(" + topSectionImg + ")";
  // }
  if ($('.catalog-slider_wrapper').length)
    Slider.init()

  if ($('.reviews-wrapper').length)
    SliderReviews.init()


  if ($('.about-us_items').length) {
    AboutUsItemsHeight()
  }
  if ($('.lightgallery-wrapper').length) {
    $.each($('.lightgallery-wrapper'), function () {
      Gallery.init({
        GalleryWrapper: $(this)
      })
    })
  }
  $('.lightgallery_btn').on('click', function (e) {
    e.preventDefault()
    Gallery.events($(this))
  })

  $('.modal-open').on('click', function (e) {
    // console.log($(this))
    e.preventDefault()
    ModalElem.init({
      modalHash: $(this).attr('data-id')
    })
  })


  const InitedMap = function () {
    if ($('#map').length) {
      ymaps.ready(initYandexMap);
      function initYandexMap() {
        var setImageSize, setImageOffset
        /*  if (docWidth >= 768) {
           setImageSize = [55, 56]
           setImageOffset = [0, -70]
         }
         else {
           setImageSize = [35, 36]
           setImageOffset = [10, -40]
         } */
        // Создание карты.
        var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.9930360687509, 92.79720850000002],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 17,
          controls: ['zoomControl', 'fullscreenControl']
        }, {
          searchControlProvider: 'yandex#search'
        }),
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            /* hintContent: 'Собственный значок метки', */
            /* balloonContent: 'Это красивая метка' */
          }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: MapBaloon,
            // Размеры метки.
            iconImageSize: [60, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            // iconImageOffset: setImageOffset
          });

        let SetMapCenter = function (map) {
          let pixelCenter = map.getGlobalPixelCenter();
          const contactContentWidth = document.querySelector('.contacts-content').offsetWidth

          // console.log(pixelCenter, contactContentWidth)
          const docWidthMap = document.body.clientWidth
          let mapOffset = 0
          if (docWidthMap >= 1200)
            mapOffset = document.querySelector('.contacts-content').offsetWidth / 2

          // console.log(mapOffset)
          pixelCenter = [
            pixelCenter[0] + mapOffset,
            pixelCenter[1]
          ];
          // console.log(pixelCenter)
          const geoCenter = map.options.get('projection').fromGlobalPixels(pixelCenter, map.getZoom());
          map.setCenter(geoCenter);
        }
        SetMapCenter(myMap)

        const ResizePlaceMark = function () {
          const MapSize = myMap.container.getSize()
          // console.log(MapSize)
          if (MapSize[0] <= 768) {
            myPlacemark.options.set({
              'iconImageSize': [40, 40]
            })
          }
          else {
            myPlacemark.options.set({
              'iconImageSize': [60, 60]
            })
          }
        }
        ResizePlaceMark()

        myMap.geoObjects
          .add(myPlacemark)

        myMap.container.events.add("sizechange", function (event) {
          // const MapSize = myMap.container.getSize()
          // SetMapCenter(myMap)

          SetMapCenter(myMap)
          ResizePlaceMark()
          // console.log(myMap.container.getSize())
        });

      }
    }
  }

  // console.log($('.contacts-wrapper.aos-animate').length)
  if ($('.contacts-wrapper.aos-animate').length) {
    InitedMap()
  }

  if ($('.tabs-wrapper').length)
    $.each($('.tabs-wrapper'), function () {
      Tabs.init({
        tabsElems: $(this)
      })
      // console.log('init')
    })


  // Обработка загрузки файлов в инпут для отправки на сервер //
  let fields = document.querySelectorAll(".input-files");
  // console.log(fields)
  Array.prototype.forEach.call(fields, function (input) {
    let label = input.nextElementSibling.querySelector("div"),
      labelVal = label.innerText;
    // console.log(label, labelVal);

    input.addEventListener("change", function (e) {
      let countFiles = "";
      if (this.files && this.files.length >= 1) countFiles = this.files.length;

      if (countFiles) {
        label.innerText = "Выбрано файлов: " + countFiles;
        const close = document.createElement("span");
        label.appendChild(close);
        if ($(input).hasClass("input-img")) {
          for (var i = 0; i < this.files.length; i++) {
            var nowFile = this.files[i];
            if (!nowFile.type.match(/(.png)|(.jpeg)|(.jpg)$/i)) {
              console.log(nowFile.type)
              var InvalidText = "<span class='invalid-text'>Загрузите файлы в формате png, jpeg, jpg</span>";
              $(label).closest(".input-default_label").siblings(".invalid-text").remove();
              $(InvalidText).insertAfter($(label).closest(".input-default_label"));
              $(label).closest(".input-default-wrapper").addClass("invalid");
            }
          }
        }
      } else {
        label.innerText = labelVal;
        $(label).closest(".input-default-wrapper").removeClass("invalid");
        $(label).closest(".input-default_label").siblings(".invalid-text").remove();
      }
    });
    $("body").on("click", "#" + $(input)[0].id + "+.input-default_label span", function (e) {
      e.preventDefault();
      if (input.files.length >= 1) {
        console.log(input.files.length)
        $(input).val("").removeClass("active");
        label.innerText = labelVal;
        $(label).closest(".input-default-wrapper").removeClass("invalid");
        $(label).closest(".input-default_label").siblings(".invalid-text").remove();
      }
    });

  });
  //----------------------//


  // Инициализация бибилиотеки валидности номера телефона //
  function InitMaskPhone() {
    if ($(".input-phone").length > 0) {
      $(".input-phone").inputmask({
        mask: "+7   (999) 999-99-99",
      });
    }
  }
  //----------------------//
  InitMaskPhone();

  function InitMaskName() {
    if ($('.input-name').length > 0) {
      $(".input-name").inputmask({
        mask: "z{*} ",
        // greedy: false,
        definitions: {
          'z': {
            validator: "[A-Za-zА-Яа-яЁё\u0020\-]",
          }
        }
      });
    }
  }
  InitMaskName()

  if ($('.footer-copyright').length) {
    let DateYear = $('.footer-copyright').find('.date-year')
    const currentYear = new Date().getFullYear()
    DateYear.text(currentYear)
    // console.log(currentYear);
  }

  if ($('.request-form').length) {
    Forms.submit({
      FormsElems: $('.request-form')
    })
  }

}); // конец ready

$(window).on('resize', function (e) {
  if (docWidth != document.body.clientWidth) {
    docWidth = document.body.clientWidth
    AboutUsItemsHeight()
  }
})
