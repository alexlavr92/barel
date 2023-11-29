import 'Plugs/lightgallery/lightgallery-all.min.js';
import "/src/css/lightgallery.min.css"


import "./lightgallery.scss"

export const Gallery = {
    optionsDefault: {
        GalleryWrapper: $('.lightgallery-wrapper')
    },
    init: function (options) {
        var options = $.extend(this.defaultsOptions, options)
        /* LightGallery */
        // console.log(options)
        options.GalleryWrapper.lightGallery({
            selector: '.lightgallery-item',
            share: false,
            videojs: false,
            autoplayFirstVideo: false,
            download: false,
            thumbnail: false,
        });

    },
    events: function (eventElement) {
        // console.log(eventElement)
        let OpenGallery = function (elem) {
            elem.find('.lightgallery-item:first-child').trigger('click')
        }
        if (eventElement.closest('.catalog-slide').length) {
            OpenGallery(eventElement.closest('.catalog-slide'))
        }
        if (eventElement.closest('.review-photos').length) {
            OpenGallery(eventElement.closest('.review-photos'))
        }
        // LightGalleryElem.find('.lightgallery-item:first-child').trigger('click')
    }
    //----------------------//
}