/**
 * Created by Administrator on 2016/11/13.
 */
$(document).ready(function () {
    $('#seach').click(function () {
        $('.t').addClass('an');
        $('.A').addClass('fuck')
    })
    $('.A').click(function () {
        $('.t').removeClass('an');
        $('.A').removeClass('fuck')
    })
    $('.fl .but').click(function () {
        var left=$('.imagsBox').position().left
        var  width =parseInt($('.imgA').width());
        console.log(parseInt(left));
        if(parseInt(left)>=0) {
            $('.imagsBox').css('left', "-200%")
        }else {
            $('.imagsBox').css('left', left+width>=-200 ? 0 : left+width)
        }

    })
    $('.fr .but').click(function () {
        var left=$('.imagsBox').position().left
        var  width =parseInt($('.imgA').width());
        if(parseInt(left)<=-2000) {
            $('.imagsBox').css('left', "-"+0+"px")
        }else if(parseInt(left)>=0){
            $('.imagsBox').css('left', "-100%")
        }else {
            $('.imagsBox').css('left', "-200%")
        }

    })
})

