import "./tabs.scss";

export const Tabs = {
    defaultsOptions: {
        tabsElems: $('.tabs-wrapper'),
        activeClass: 'active',
        tabs_content: 'tabs-content'
    },
    init: function (options) {
        var options = $.extend(this.defaultsOptions, options)
        this.events(options.tabsElems)
    },
    events: function (tabs) {
        // console.log(tabs)
        const NotActiveTab = tabs.find('.tabs-switcher')
        // console.log(NotActiveTab)
        NotActiveTab.on('click', function (e) {
            e.preventDefault()
            // console.log($(this))
            if (!$(this).hasClass('active')) {
                // console.log($(this))
                const $this = $(this),
                    $thisIndex = $this.index()
                $this.siblings('.active').removeClass('active')
                $this.addClass('active')
                tabs.find('.tabs-content.active').removeClass('active').attr('style', '')
                tabs.find('.tabs-content:nth-child(' + ($thisIndex + 1) + ')').fadeIn({
                    duration: 200,
                    complete: function () {
                        $(this).addClass('active')
                    }
                })
                // tabs.find('.tabs-content:nth-child(' + ($thisIndex + 1) + ')').addClass('active')
            }
        })
    }
}


// module.exports = Tabs;