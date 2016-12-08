$().ready(function(){
    /*header*/
    $('#nav-items').children('.nav-item').hover(function(){
        $('#nav-Menu').addClass('hover');
    },function(){
         $('#nav-Menu').removeClass("hover");
    });
    $('.nav-Menu').hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass("hover");
    });


    /*轮播图*/
    var imgs=$('.banner-imgBoxs').children('.imgbox');
    console.log($('.imgbox').css('opacity'));
    var t=0;
    $('.img-up').click(function(){
        for (var i = 0; i < imgs.length; i++) {
            if(imgs.eq(i).css('opacity')==1){
                imgs.eq(i).css('opacity','0');
                imgs.eq(i>0?i-1:imgs.length-1).css('opacity','1');
            }
        }
    });
     $('.img-do').click(function(){
        for (var i = 0; i < imgs.length; i++) {
            if(imgs.eq(i).css('opacity')==1){
                imgs.eq(i).css('opacity','0');
                imgs.eq(i<imgs.length-1?i+1:0).css('opacity','1');
            }
        }
    });


     /*明星单品滚动*/
     var abtn=$('#star_a a');
     for (var i = 0; i < abtn.length; i++) {
        abtn.eq(i).click(function (){
             if( $(this).css('color')=="rgb(224, 224, 224)"){
                return;
             }
             else{
                play();
             }
        });
     }
     setInterval(play,5000);
     function play() {
       if($('.plist ').css('left')=="0px"){
           $('#au').css('color', '#000');
           $('#ad').css('color', '#e0e0e0');
           $('.plist ').css('left','-992px');
       }else {
           $('#au').css('color', '#e0e0e0');
           $('#ad').css('color', '#000');
           $('.plist ').css('left','0px');
       }
   }



   /*内容*/
    var items=$('.content-box .item')
    var pageul=null;
    var pagewi=296;
    var index=0;
    for(var i=0;i<items.length;i++){
        items.eq(i).hover(function(){
            $(this).addClass('Selected');
        },function(){
            $(this).removeClass('Selected');
        });
    };
    $('.pageup').click(function(){
        var ul=$(this).parent().siblings('.xm-carousel-wrapper').children('ul');
        var pageindex=$(this).parent().siblings('.xm-pagers-wrapper').find('ul li');
        for (var i = 0; i < pageindex.length; i++) {
            if(pageindex.eq(i).find('span').hasClass('pager-active')){
                pageindex.eq(i).find('span').removeClass('pager-active');
                pageindex.eq(i>0?i-1:0).find('span').addClass('pager-active');
                ul.css('margin-left',-((i>0?i-1:0)*pagewi)+'px');
                break;
            }
        }
    });
     $('.pagedo').click(function(){
        var ul=$(this).parent().siblings('.xm-carousel-wrapper').children('ul');
        var pageindex=$(this).parent().siblings('.xm-pagers-wrapper').find('ul li');
        for (var i = 0; i < pageindex.length; i++) {
            if(pageindex.eq(i).find('span').hasClass('pager-active')){
                pageindex.eq(i).find('span').removeClass('pager-active');
                pageindex.eq(i<2?i+1:2).find('span').addClass('pager-active');
                ul.css('margin-left',-((i<2?i+1:2)*pagewi)+'px');
                break;
            }
        }
    });
});



/*


/*.content-box:hover .xm-page-turn a{
 opacity: 0.5;
 }*/
/*function  pagemain() {
    var com=document.getElementById("conul");
    var conitem=getClassName(com,"item");
    var pageul=null;
    var pagewi=296;
    for(var i=0;i<conitem.length;i++){
        conitem[i].onmousemove=function () {
            this.className = "item" + " Selected";
            pageul=this.getElementsByTagName("ul")[0];
        }
        conitem[i].onmouseout=function () {
            this.className="item";
            pageul=null;
        }
        conitem[i].getElementById("pageup").onclick=function () {
            var w=parseInt(pageul.style.marginLeft);
            if(w==0){
                return;
            }else {
                pageul.style.marginLeft=w+pagewi+"px";
            }
        }



    }
}*/