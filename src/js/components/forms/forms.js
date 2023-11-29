import "./forms.scss"

export const Forms = {
    defaultsOptions: {
        FormsElems: $('.request-form')
    },
    submit: function (options) {
        var options = $.extend(this.defaultsOptions, options)
        // console.log(options)
        options.FormsElems.on('submit', function (e) {
            let EditInputWrapper = function (input, invalidText) {
                if (!input.closest('.input-default-wrapper.invalid').length) {
                    var ItemInputWrapper = input.closest('.input-default-wrapper')
                    ItemInputWrapper.addClass('invalid')
                    if (invalidText) {
                        var InvalidText = "<span class='invalid-text'>" + invalidText + "</span>"
                        $(InvalidText).appendTo(ItemInputWrapper)
                    }
                }
            }

            // console.log('submit')
            let $this = $(this),
                InvalidCount = 0,
                AllRequiredInputs = $this.find('.input-required .input-default')
            const FilesInput = $this.find('.input-files')
            // console.log(AllRequiredInputs)

            $.each(AllRequiredInputs, function (i, input) {
                // console.log(input)
                if ($(input).val() == '') {
                    EditInputWrapper($(input), 'Заполните обязательное поле')
                    InvalidCount += 1
                }
                else {
                    if ($(input).hasClass('input-phone') && !$(input).inputmask("isComplete")) {
                        EditInputWrapper($(input), 'Введите корректный номер')
                        InvalidCount += 1
                    }
                }
            })
            if (FilesInput && FilesInput.closest('.input-default-wrapper.invalid').length) {
                InvalidCount += 1
            }
            if (InvalidCount == 0) {
                const formData = new FormData(),
                    textarea = $this.find('.textarea-default')
                let files
                if (FilesInput.length)
                    files = FilesInput.get(0).files
                if (files && files.length) {
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        formData.append('files[]', file, file.name); // Добавляем каждый файл в объект FormData с его именем
                    }
                }
                if (textarea.val() != '')
                    AllRequiredInputs = AllRequiredInputs.add(textarea)
                $.each(AllRequiredInputs, function () {
                    let $thisVal = this.value
                    if (this.getAttribute('name') == 'input-phone') {
                        $thisVal = $thisVal.replace(/\s+/g, '')
                    }
                    formData.append(this.getAttribute('name'), $thisVal)
                })
                formData.append('form-type', $this.attr('data-type'))
                // for (let [name, value] of formData) {
                //     console.log(`${name} = ${value}`)
                //     // alert(`${name} = ${value}`); // key1=value1, потом key2=value2
                // }

                // Ajax-запрос тут можно написать

                const RequestSuccess = $this.siblings('.request-success-wrapper')
                RequestSuccess.fadeIn({
                    start: function () {
                        $this.hide().remove()
                        $(this).addClass('show').css('display', 'flex')
                    },
                })
            }
            e.preventDefault()
        })
        this.events(options.FormsElems)
    },
    events: function (forms) {
        // Функционал изменения input
        forms.on('input change', '.input-default:not(.input-files)', function (e) {
            var $this = $(this),
                $thisInputWrapper = $this.closest('.input-default-wrapper')
            $thisInputWrapper.find('.invalid-text').remove()
            $thisInputWrapper.removeClass('invalid')
        })
    }
}