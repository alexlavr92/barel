import modal from 'Plugs/jquery.modal/jquery.modal.min.js';
import "/src/css/plugins/jquery.modal.min.css"

import "./modal.scss"

export const ModalElem = {
    defaultsOption: {
        modalHash: '',
    },
    blockScroll: function (state) {
        if (state == "open") {
            setTimeout(function () {
                if (!document.body.hasAttribute("data-body-scroll-fix")) {
                    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Получаем позицию прокрутки

                    document.body.setAttribute("data-body-scroll-fix", scrollPosition); // Cтавим атрибут со значением прокрутки
                    document.body.style.overflow = "hidden";
                    document.body.style.position = "fixed";
                    document.body.style.top = "-" + scrollPosition + "px";
                    document.body.style.left = "0";
                    document.body.style.right = "0";
                }
            }, 10);
        }
        if (state == "close") {
            if (document.body.hasAttribute("data-body-scroll-fix")) {
                let scrollPosition = document.body.getAttribute("data-body-scroll-fix"); // Получаем позицию прокрутки из атрибута

                document.body.removeAttribute("data-body-scroll-fix"); // Удаляем атрибут
                document.body.style.overflow = "";
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.left = "";
                document.body.style.right = "";

                window.scroll(0, scrollPosition); // Прокручиваем на полученное из атрибута значение
            }
        }
    },
    init: function (options) {
        var options = $.extend(this.defaultsOptions, options)
        let click_close = true;
        const ThisHash = $('#' + options.modalHash + '')
        // console.log(options)
        ThisHash.modal({
            fadeDuration: 150,
            closeExisting: false, // новое 11.07.2022
            closeClass: "close-custom",
            closeText: '<span class="visually-hidden">Закрыть</span>',
            clickClose: click_close, // новое 28.11.2022
        });
        this.events(ThisHash)
    },
    initModalVideo: function () {
        if ($('#player').length) {
            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            // 3. This function creates an <iframe> (and YouTube player)
            //    after the API code downloads.
            var player;
            const VideoHref = $('#player').attr('video-id')
            // console.log(VideoHref)
            function onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                    height: '100%',
                    width: '100%',
                    videoId: VideoHref,
                    events: {
                        'onReady': onPlayerReady,
                        // 'onStateChange': onPlayerStateChange
                    }
                });
                // console.log(player)
            }
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

            // 4. The API will call this function when the video player is ready.
            function onPlayerReady(event) {
                event.target.playVideo();
            }

            // 5. The API calls this function when the player's state changes.
            //    The function indicates that when playing a video (state=1),
            //    the player should play for six seconds and then stop.
            var done = false;
            function onPlayerStateChange(event) {
                console.log('ок')
                if (event.data == YT.PlayerState.PLAYING && !done) {
                    setTimeout(stopVideo, 6000);
                    done = true;
                }
            }
            function stopVideo() {
                player.stopVideo();
            }
        }
    },
    events: function (modalElem) {
        // console.log(modalElem)
        const $thisObj = this
        $('body').on('modal:open', modalElem, function (event, modal) {
            console.log(event, modal)
            console.log(modal.$elm)
            if (modal.$elm.find('#player').length)
                $thisObj.initModalVideo()
            $thisObj.blockScroll('open')
        })
        $('body').on('modal:close', modalElem, function (event, modal) {
            if (!$('.header-mob-content.show').length)
                $thisObj.blockScroll('close')
        })
    }
}