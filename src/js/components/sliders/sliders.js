import Swiper from 'Plugs/swiper/swiper.min.js';
import "/src/css/plugins/swiper.min.css";
import "./sliders.scss"


const Slider = {
    defaultsOptions: {
        sliderElems: $('.catalog-slider_wrapper'),
        countPerView: 'auto',
        windowWidth: document.body.clientWidth
    },
    renderSize: function (sliderOuter, options) {
        options.windowWidth = document.body.clientWidth
        // console.log(options.windowWidth)
        const slider = sliderOuter.find('.swiper-container'),
            outerMargin = (options.windowWidth - sliderOuter.innerWidth()) / 2
        // console.log(outerMargin)
        slider.css({
            'margin-left': '-' + outerMargin + 'px',
            'margin-right': '-' + outerMargin + 'px',
            'padding-left': outerMargin + 'px',
            'padding-right': outerMargin + 'px'
        })

    },
    renderSizeSlides: function (sliderOuter) {
        const slides = sliderOuter.find('.catalog-slide')
        slides.css({ 'min-height': '' })
        let MaxItemHeight = 0
        $.each(slides, function () {
            if ($(this).innerHeight() >= MaxItemHeight) {
                MaxItemHeight = $(this).innerHeight()
            }
        })
        // console.log(MaxItemHeight)
        slides.css({ 'min-height': MaxItemHeight + 'px' })
    },
    init: function (options) {
        const InitSingle = function (sliderOuter, options) {
            const sliderNavPrev = sliderOuter.find('.button-prev'),
                sliderNavNext = sliderOuter.find('.button-next'),
                slider = sliderOuter.find('.swiper-container'),
                // sliderPag = sliderOuter.find('.swiper-pagination'),
                SpaceBetweenPx = 30
            // countPerView = 4,
            // totallength = 66

            // console.log(SpaceBetween)
            const sliderInit = new Swiper(slider, {
                slidesPerView: options.countPerView,

                // slidesPerGroup: options.countPerView,
                grabCursor: true,
                preloadImages: false,
                // Enable lazy loading
                lazy: true,
                spaceBetween: SpaceBetweenPx,
                observeSlideChildren: true,
                // observeParents: true,
                // observer: true,
                watchOverflow: true,
                watchSlidesVisibility: true,
                touchReleaseOnEdges: true,
                navigation: {
                    nextEl: sliderNavNext,
                    prevEl: sliderNavPrev,
                    disabledClass: "disabled",
                },
                breakpoints: {
                    // when window width is >= 320px
                    767: {
                        // slidesPerView: 'auto',
                        spaceBetween: 10
                    },
                    // when window width is >= 480px
                    1199: {
                        // slidesPerView: 'auto',
                        spaceBetween: 20,
                        //   spaceBetween: 30
                    },
                    // when window width is >= 640px
                    /*  1200: {
                         slidesPerView: 4,
                         slidesPerGroup: options.countPerView,
                         //   spaceBetween: 40
                     } */
                },

            });
            return sliderInit
        }
        const $obj = this
        $obj.sliders = []
        var options = $.extend(this.defaultsOptions, options)
        // console.log(options)
        options.sliderElems.each(function (index) {
            const $this = $(this)
            // spaceBetween = $this.hasClass('icons-wrapper-slider')
            //     ? 2 : 1
            $obj.sliders[index] = InitSingle($this, options)
            $obj.renderSize($this, options)
            $obj.events($this, options)
        })
        // console.log(SlidersElems)
        // console.log($obj.sliders)

    },
    events: function (sliderOuter, options) {
        const $thisObj = this
        $(window).on('resize', function () {
            if (options.windowWidth != document.body.clientWidth) {
                $thisObj.renderSize(sliderOuter, options)
                $thisObj.renderSizeSlides(sliderOuter, options)
            }
        })
        $(window).on('load', function () {
            $thisObj.renderSizeSlides(sliderOuter, options)
        })
    }
}


const SliderReviews = {
    defaultsOptions: {
        sliderElems: $('.reviews-wrapper'),
        countPerView: 1,
        windowWidth: document.body.clientWidth
    },
    init: function (options) {
        const InitSingle = function (sliderOuter, options) {
            const sliderNavPrev = sliderOuter.find('.button-prev'),
                sliderNavNext = sliderOuter.find('.button-next'),
                slider = sliderOuter.find('.swiper-container'),
                SpaceBetweenPx = 20


            // console.log(SpaceBetween)
            const sliderInit = new Swiper(slider, {
                slidesPerView: options.countPerView,
                speed: 800,
                // slidesPerGroup: options.countPerView,
                grabCursor: true,
                // preloadImages: false,
                // // Enable lazy loading
                // lazy: true,
                spaceBetween: SpaceBetweenPx,
                observeSlideChildren: true,
                // observeParents: true,
                // observer: true,
                watchOverflow: true,
                watchSlidesVisibility: true,
                touchReleaseOnEdges: true,
                navigation: {
                    nextEl: sliderNavNext,
                    prevEl: sliderNavPrev,
                    disabledClass: "disabled",
                },
                breakpoints: {
                    // when window width is >= 320px
                    767: {
                        // slidesPerView: 'auto',
                        slidesPerView: 'auto',
                        spaceBetween: 10
                    },
                    // when window width is >= 480px
                    // 1199: {
                    //     slidesPerView: options.countPerView,
                    //     spaceBetween: SpaceBetweenPx,
                    //     //   spaceBetween: 30
                    // },
                    // when window width is >= 640px
                    /*  1200: {
                         slidesPerView: 4,
                         slidesPerGroup: options.countPerView,
                         //   spaceBetween: 40
                     } */
                },
                on: {
                    resize: function () {
                        const $this = this
                        if ($this.size < 688) {
                            // console.log($this)
                            $($this.$el).find('.swiper-slide').css('width', '')
                            $this.updateSize()
                        }
                        setTimeout(function () {
                            $this.update()
                        }, 10);
                        // console.log(this)
                    }
                },

            });
            // return sliderInit
        }
        var options = $.extend(this.defaultsOptions, options)
        options.sliderElems.each(function (index) {
            const $this = $(this)
            InitSingle($this, options)
        })
    }
}

export { Slider, SliderReviews }
