(function() {
    "use strict";
    var winH = "",
        winW = "",
        hdrH = "",
        topHdr = "",
        ftrH = "",
        st = "";
    winH = $(window).height();



    // Change text value of headEnq-btn on mobile screen
    function headEnq() {
        if (winW <= 991) {
            let SctnHgt = $('.Rcnt-Blgs-Wppr').innerHeight();
            $('.BlgDtl-Img-Wppr').innerHeight(SctnHgt);

        }
        if (winW <= 768) {
            $('.BlgDtl-Img-Wppr').css('height', 'auto');
        }
    }

    // $(window).resize(function() {
    //     winH = $(window).height();
    //     winW = $(window).width();
    //     hdrH = $('header').innerHeight();
    //     ftrH = $('footer').innerHeight();
    //     topHdr = $('.PTM-Txt-Bx').innerHeight()
    //     $('main').css({ 'margin-top': topHdr })
    //     console.log(hdrH)

    //     // Call headEnq() function 
    //     headEnq()
    // });
    // $(window).load(function() {
    //     $(window).trigger('resize');
    // });



    // $(window).scroll(function() {
    //     st = $(this).scrollTop();
    //     if (st > winH) {

    //     } else {

    //     }
    // });


    $(document).ready(function() {

        // Commain all  page js 

        // $('.FrmTxt').focusout(function() {
        //     if ($(this).val() != '') {
        //         $(this).siblings('.PlcHldrTxt').addClass('Focus');
        //     } else {
        //         $(this).siblings('.PlcHldrTxt').removeClass('Focus');
        //     }
        // });

        // $('.FrmTxt').each(function() {
        //     if ($(this).val() != '') {
        //         $(this).siblings('.PlcHldrTxt').addClass('Focus');
        //     } else {
        //         $(this).siblings('.PlcHldrTxt').removeClass('Focus');
        //     }
        // });

        // var HdrHght = $('.TopHdr_wppr').innerHeight();
        // $('main').css({ 'margin-top': HdrHght });


        // if ((window.location.href === location.protocol + "//" + location.host + "/index.html") || (window.location.href === location.protocol + "//" + location.host + "/")) {
        //     $('main').css({ 'margin-top': 0 });
        //     $('.TopHdr_wppr ').addClass('RmvHdrBg');
        //     $('.IndxBnnr-Wppr ').addClass('vh-100');
        // }

        // const path = location.pathname;
        // const par = path.split('/');
        // const plenth = par.length;
        // const page = par[plenth - 1]

        // if(page == ""){
        // $('main').css({ 'margin-top': 0 });
        // $('.TopHdr_wppr ').addClass('RmvHdrBg');
        // $('.IndxBnnr-Wppr ').addClass('vh-100');
        // }

        // $(window).scroll(function() {
        //     if (($(window).scrollTop()) > ($(window).height()) / 100) {
        //         $('.TopHdr_wppr').addClass('HdrBgStrp');

        //     } else {
        //         $('.TopHdr_wppr').removeClass('HdrBgStrp');
        //     }

        // });
        // $('html,body').click(function() {
        //     $('.CtgrySlct-Wppr').find('ul').slideUp('slow');
        // });


        // $('.FrmTxt').focusout(function() {
        //     if ($(this).val() != '') {
        //         $(this).siblings('.PlcHldrTxt').addClass('FcusActv ');
        //     } else {
        //         $(this).siblings('.PlcHldrTxt').removeClass('FcusActv ');
        //     }
        // });

        // $('.FrmTxt').each(function() {
        //     if ($(this).val() != '') {
        //         $(this).siblings('.PlcHldrTxt').addClass('FcusActv ');
        //     } else {
        //         $(this).siblings('.PlcHldrTxt').removeClass('FcusActv ');
        //     }
        // });

        /* **************** Header Section js ****************** */
        // $('.Bugr-Icn').click(function() {
        //     $('.MenuSctn-Wppr').addClass('OpnMenu');
        // });
        // $('.MenuCls').click(function() {
        //     $('.MenuSctn-Wppr').removeClass('OpnMenu');
        //     $('.EnqryFrm-Wppr').removeClass('OpnMenu');
        // });

        // $('.EnqryBtn').click(function() {
        //     $('.EnqryFrm-Wppr').addClass('OpnMenu');
        // });

        /* **************** OUR SERVICES page Section js ****************** */
        // journyOwl();

        /* **************** Our Team page Section js ****************** */

        // var TeamNo = 1
        // $('.OurTeam-Wppr').children('.col-xl-3').each(function() {
        //     $(this).children('.TeamDtl-Wppr').attr('data-sldr', TeamNo);
        //     TeamNo++;
        // });
        // var TeamTxtPop = 1
        // $('.TeamPop-Txt').each(function() {
        //     $(this).attr('data-sldr-pop', TeamTxtPop);
        //     TeamTxtPop++;
        // });
        // $('.TeamPopClsBtn').click(function() {
        //     $('.TeamPop-Txt').removeClass('TeamContct-Pop');
        //     setTimeout(function() { $('.TeamMembr-Img').attr('src', ''); }, 800);
        //     setTimeout(function() { $('.TeamName').text(''); }, 800);
        //     setTimeout(function() { $('.TeamPrfl').text(''); }, 800);
        //     setTimeout(function() { $('.TeamTxt-Pop-Wppr').slideUp('slow') }, 800);
        // });

        // $('.TeamDtl-Wppr').click(function() {
        //     var ThisAttr = $(this).attr('data-sldr');
        //     var TeamImg = $(this).children('.Team-Img').find('img').attr('src');
        //     var TeamName = $(this).children('.TeamDtl-Wppr').find('small').text();
        //     var TeamPrfl = $(this).children('.TeamDtl-Wppr').find('em').text();
        //     $('.TeamMembr-Img').attr('src', TeamImg);
        //     $('.TeamName').text(TeamName);
        //     $('.TeamPrfl').text(TeamPrfl);
        //     $('.TeamTxt-Pop-Wppr').slideDown('slow');
        //     $('.TeamPop-Txt').each(function() {
        //         if ($(this).attr('data-sldr-pop') == ThisAttr) {
        //             if ($(this).hasClass('Curnt')) {

        //             } else {
        //                 //setTimeout(function() { $('.TeamPop-Txt').addClass('TeamContct-Pop'); }, 500);
        //                 $(this).addClass('TeamContct-Pop')
        //             }
        //         }
        //     });
        // });
        /* **************** Career page Section js ****************** */
        // $(".UpldTxt").on("change", function() {
        //     var fileName = $(this).val().split("\\").pop();
        //     $(this).siblings("em").addClass("selected").html(fileName);
        // });
        // $('.AplyFrmBtn').click(function() {
        //     var HdrHgtBx = $('.TopHdr_wppr').innerHeight();
        //     var SctnTop = $('.AplyFrm-Wppr').offset().top
        //     var totlescl = SctnTop - HdrHgtBx - 50
        //     $("html, body").animate({ scrollTop: totlescl }, 1000);
        // });
        // $(".Vlu-Sldr").owlCarousel({
        //     loop: true,
        //     autoplay: false,
        //     margin: 30,
        //     dots: true,
        //     nav: false,
        //     responsiveClass: true,
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         600: {
        //             items: 2
        //         },
        //         1024: {
        //             items: 3
        //         }
        //     }
        // });

        // $('.Jb-Dtl-Itm .title small').click(function() {
        //     $(this).parents('.Jb-Dtl-Itm').siblings().find('.DrpWppr').slideUp('slow')
        //     $(this).parents('.title').find('.DrpWppr').slideToggle('slow');
        // });


        /* **************** OUR SERVICES DETAILS page Section js ****************** */
        // $(".Key-Cpblts-Sldr").owlCarousel({
        //     loop: true,
        //     autoplay: false,
        //     margin: 30,
        //     dots: true,
        //     responsiveClass: true,
        //     nav: false,
        //     navText: ["<img src='asset/icon/prev.png'>", "<img src='asset/icon/next.png'>"],
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         600: {
        //             items: 3
        //         },
        //         1024: {
        //             items: 4
        //         }
        //     }
        // });


        // $(".MrSrvc-Sldr").owlCarousel({
        //     loop: true,
        //     autoplay: false,
        //     margin: 50,
        //     dots: false,
        //     responsiveClass: true,
        //     nav: true,
        //     navText: ["<img src='asset/icon/prev.png'>", "<img src='asset/icon/next.png'>"],
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         600: {
        //             items: 2
        //         },
        //         1024: {
        //             items: 3
        //         }
        //     }
        // });

        /* **************** Projects page Section js ****************** */

        let FutrCount = 0;
        let FutrData = 0;
        $('.Fetur-Tbng-Btn-Wppr .title ul li').each(function() {
            $(this).attr('data-fetrid', FutrCount);
            FutrCount++
        });
        $('.Fetur-Tbng-Itm-Wppr').each(function() {
            $(this).attr('data-fetrdata', FutrData);
            FutrData++
        });

        $('.Fetur-Tbng-Btn-Wppr .title ul li').click(function() {
            let ID = $(this).attr('data-fetrid');
            $('.Fetur-Tbng-Btn-Wppr .title ul li').removeClass('BtnActv')
            $(this).addClass('BtnActv');
            $('.Fetur-Tbng-Itm-Wppr').each(function() {
                if ($(this).attr('data-fetrdata') == ID) {
                    if ($(this).hasClass('ActvTbng')) {} else {
                        $('.Fetur-Tbng-Itm-Wppr').removeClass('ActvTbng');
                        $(this).addClass('ActvTbng');
                    }
                }
            });
        });

        /* **************** About Us page Section js ****************** */

        // $(".Jrny-Sldr").owlCarousel({
        //     loop: false,
        //     autoplay: false,
        //     margin: 50,
        //     dots: false,
        //     responsiveClass: true,
        //     nav: true,
        //     navText: ["<img src='asset/icon/prev.png'>", "<img src='asset/icon/next.png'>"],
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         600: {
        //             items: 2
        //         },
        //         768: {
        //             items: 3
        //         },
        //         1024: {
        //             items: 4
        //         }
        //     }
        // });
        // $(".Dsgn-Sldr, .Lfe-Sldr").owlCarousel({
        //     loop: true,
        //     autoplay: true,
        //     autoplaySpeed: 3000,
        //     autoplayTimeout: 3000,
        //     margin: 0,
        //     items: 1,
        //     dots: false,
        //     nav: false,
        //     animateOut: "fadeOut",
        //     animateIn: "flipInX",
        //     touchDrag: false,
        //     mouseDrag: false

        // });

        /* **************** Contact Us page Section js ****************** */

        // let BtnId = 0;
        // let AdrsCunt = 0;
        // $('.Cntct-Btn-Wppr .title ul li').each(function() {
        //     $(this).attr('data-btnid', BtnId);
        //     BtnId++
        // });
        // $('.CntctAdrs-Itm').each(function() {
        //     $(this).attr('data-adrs-itm', AdrsCunt);
        //     AdrsCunt++
        // });
        // $('.Cntct-Btn-Wppr .title ul li').click(function() {
        //     let thisId = $(this).attr('data-btnid');
        //     $(this).siblings().removeClass('AdrsBtnActv');
        //     $(this).addClass('AdrsBtnActv');
        //     $('.CntctAdrs-Itm').each(function() {
        //         if ($(this).attr('data-adrs-itm') == thisId) {
        //             if ($(this).hasClass('CrntAdrs')) {} else {
        //                 setTimeout(function() { $('.CntctAdrs-Itm').removeClass('CrntAdrs'); }, 100)
        //                 $('.CntctAdrs-Itm').slideUp('3000');
        //                 $(this).slideDown('3000');
        //             }
        //         }
        //     });
        // });


        /* **************** Team page Section js ****************** */

        // $(".OurVlu-Sldr").owlCarousel({
        //     loop: false,
        //     autoplay: false,
        //     margin: 50,
        //     dots: false,
        //     responsiveClass: true,
        //     nav: true,
        //     navText: ["<img src='asset/icon/prev.png'>", "<img src='asset/icon/next.png'>"],
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         600: {
        //             items: 2
        //         },
        //         1024: {
        //             items: 3
        //         }
        //     }
        // });



        /* **************** Index page Section js ****************** */
        // $(".startTyper").typed({
        //     strings: ["An End-to-End Engineering Solutions Company"],
        //     typeSpeed: 200,
        //     backDelay: 400,
        //     loop: false,
        //     loopCount: false,
        // });

        // $('.DrpDwn-BnneStn').click(function() {
        //     var TopPostion = $('.Innovate-Sldr-Wppr').offset().top
        //     var HdrHght = $('.TopHdr_wppr').innerHeight();
        //     var TotalScrl = TopPostion - HdrHght
        //     if ($('.TopHdr_wppr').hasClass('HdrBgStrp')) {
        //         $("html, body").animate({ scrollTop: TotalScrl }, 1000);
        //     } else {
        //         $("html, body").animate({ scrollTop: TotalScrl + 30 }, 1000);
        //     }
        // })

        // var sync1 = $("#sync1");
        // var sync2 = $("#sync2");
        // var slidesPerPage = 4;
        // var syncedSecondary = true;
        // sync1.owlCarousel({
        //     items: 1,
        //     slideSpeed: 2000,
        //     nav: false,
        //     autoplay: false,
        //     loop: true,
        //     animateOut: "fadeOut",
        //     animateIn: "flipInX",
        //     responsiveRefreshRate: 200
        // }).on('changed.owl.carousel', syncPosition);

        // sync2
        //     .on('initialized.owl.carousel', function() {
        //         sync2.find(".owl-item").eq(0).addClass("current");
        //     })
        //     .owlCarousel({
        //         items: slidesPerPage,
        //         dots: false,
        //         nav: true,
        //         margin: 30,
        //         smartSpeed: 200,
        //         slideSpeed: 500,
        //         slideBy: slidesPerPage,
        //         responsiveRefreshRate: 100,
        //         responsive: {
        //             0: {
        //                 items: 2
        //             },
        //             600: {
        //                 items: 3
        //             },
        //             1024: {
        //                 items: slidesPerPage
        //             }
        //         }
        //     }).on('changed.owl.carousel', syncPosition2);

        // function syncPosition(el) {

        //     var count = el.item.count - 1;
        //     var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        //     if (current < 0) {
        //         current = count;
        //     }
        //     if (current > count) {
        //         current = 0;
        //     }
        //     sync2
        //         .find(".owl-item")
        //         .removeClass("current")
        //         .eq(current)
        //         .addClass("current");
        //     var onscreen = sync2.find('.owl-item.active').length - 1;
        //     var start = sync2.find('.owl-item.active').first().index();
        //     var end = sync2.find('.owl-item.active').last().index();

        //     if (current > end) {
        //         sync2.data('owl.carousel').to(current, 100, true);
        //     }
        //     if (current < start) {
        //         sync2.data('owl.carousel').to(current - onscreen, 100, true);
        //     }
        // }

        // function syncPosition2(el) {
        //     if (syncedSecondary) {
        //         var number = el.item.index;
        //         sync1.data('owl.carousel').to(number, 100, true);
        //     }
        // }

        // sync2.on("click", ".owl-item", function(e) {
        //     e.preventDefault();
        //     var number = $(this).index();
        //     sync1.data('owl.carousel').to(number, 300, true);
        // });

        // $('.Qub-Btn').click(function() {
        //     myFunction()
        // });
        // setInterval(function() { myFunction(); }, 3000);

        // var DataAtrbt = 1
        // $('.Sldt-Itm-Bx').each(function() {
        //     $(this).attr('data-id', DataAtrbt)
        //     DataAtrbt++
        // })


    });

//     function myFunction() {
//         var x = Math.floor((Math.random() * 6) + 1);
//         for (var i = 1; i < 7; i++) {
//             if (x == i) {
//                 $('.D3Cube').addClass('D3Cube-' + i)
//             } else {
//                 $('.D3Cube').removeClass('D3Cube-' + i)
//             }
//         }

//     }

    


//     function journyOwl() {
//         var t = $(".Idrsry-SrvcTbng-Sldr"),
//             s = $(".Idrsry-Srvc-Data"),
//             e = 0,
//             n = 0;

//         function l() {
//             s.trigger("to.owl.carousel", [e, 500, !0]), s.find(".owl-item").removeClass("current"), s.find(".owl-item").eq(e).addClass("current");
//         }

//         function a() {
//             t.trigger("to.owl.carousel", [n, 500, !0]), t.find(".owl-item").removeClass("current"), t.find(".owl-item").eq(n).addClass("current");
//         }
//         t.on("initialized.owl.carousel", function(s) {
//                 (e = s.item.index), t.find(".owl-item").eq(e).addClass("current"), l();
//             }),
//             s.on("initialized.owl.carousel", function(t) {
//                 (n = t.item.index), s.find(".owl-item").eq(e).addClass("current"), a();
//             }),
//             t.owlCarousel({
//                 loop: !1,
//                 margin: 10,
//                 nav: !1,
//                 dots: !1,
//                 touchDrag: !0,
//                 mouseDrag: !0,
//                 smartSpeed: 2e3,
//                 autoplaySpeed: 2e3,
//                 autoplayTimeout: 1e4,
//                 animateOut: "fadeOut",
//                 items: 4,
//                 responsive: {
//                     0: {
//                         items: 2
//                     },
//                     767: {
//                         items: 3
//                     },
//                     860: {
//                         items: 4
//                     },
//                     991: {
//                         items: 4
//                     }
//                 },
//             }),
//             s.owlCarousel({
//                 loop: !1,
//                 margin: 0,
//                 dots: !1,
//                 touchDrag: !1,
//                 mouseDrag: !1,
//                 smartSpeed: 2e3,
//                 autoplaySpeed: 2e3,
//                 autoplayTimeout: 1e4,
//                 autoHeight: !0,
//                 animateOut: "fadeOut",
//                 animateIn: "fadeIn",
//                 items: 1,
//                 nav: !0,
//                 navText: ["<img src='asset/icon/prev.png'>", "<img src='asset/icon/next.png'>"],

//             }),
//             t.on("changed.owl.carousel", function(s) {
//                 (e = s.item.index), t.find(".owl-item").removeClass("current"), t.find(".owl-item").eq(e).addClass("current"), l();
//             }),
//             t.find(".owl-item").click(function() {
//                 (e = $(this).index()), $(".owl-item").removeClass("current"), $(this).addClass("current");
//                 var s = $(this).index();
//                 t.trigger("to.owl.carousel", [s, 500, !0]), l();
//             }),
//             s.on("changed.owl.carousel", function(t) {
//                 (n = t.item.index), s.find(".owl-item").removeClass("current"), s.find(".owl-item").eq(n).addClass("current"), a();
//             });
//     }


//     $('.indust_ser-Sldr').owlCarousel({
//         items : 3,
//         autoplay: false,
//         loop: true,
//         margin:25,
//         responsiveClass:true,
//         startPosition: 0,
//         smartSpeed: 1200,
//         dots: false,
//         rewind: false,
//         nav: true,
//         navText: ['<img src="asset/icon/prevg.png" />','<img src="asset/icon/nextg.png" />'],
//         responsive:{
//             0:{
//                 items:1,
//                 margin: 10,
//                 nav: false,
//                 dots: true
//             },
//             676:{
//                 items:3,
//                 margin: 20,
//                 nav: false,
//             },
//             992:{
//                 items:3,
//                 margin: 25,
//                 nav: true,
//             }
//         }
//     })
//     $('.Projects_ser-Sldr').owlCarousel({
//         items : 3,
//         autoplay: false,
//         loop: true,
//         margin:25,
//         responsiveClass:true,
//         startPosition: 0,
//         smartSpeed: 1200,
//         center: true,
//         dots: true,
//         rewind: false,
//         nav: false,
//         responsive:{
//             0:{
//                 items:1,
//                 margin: 10,
//                 nav: false,
//                 dots: true,
//                 center: false,
//             },
//             520:{
//                 items:2,
//                 margin: 20,
//                 nav: false,
//                 dots: true,
//                 center: false,
//             },
//             992:{
//                 items:3,
//                 margin: 25,
//                 dots: true
//             }
//         }
//     })
//     $('.client_i_slider').owlCarousel({
//         items : 5,
//         autoplay: true,
//         loop: true,
//         margin:25,
//         responsiveClass:true,
//         startPosition: 0,
//         smartSpeed: 1200,
//         dots: true,
//         rewind: false,
//         nav: false,
//         responsive:{
//             0:{
//                 items:2,
//                 margin: 10,
//                 nav: false,
//                 dots: false
//             },
//             520:{
//                 items:3,
//                 margin: 20,
//                 nav: false,
//             },
//             992:{
//                 items:5,
//                 margin: 25,
//                 dots: true
//             }
//         }
//     })
// // Check Input field
// $(".form-control").each(function(){
//     if($(this).val() != ""){
//         $(this).addClass("valid")
//     }
//     else{
//         $(this).removeClass("valid")
//     }
// })

// // Form Input 
// $(".form-control").on("focusout",function(){$(this).val()?$(this).addClass("valid"):$(this).removeClass("valid")})

// // File Upload
// $('input[type="file"]').on('change', function(e){
//     $('.upload_file small').text(e.target.files[0].name)
//     $(this).addClass("valid")
// })

// $('.indus_slide').owlCarousel({
//     items : 3,
//     autoplay: false,
//     loop: true,
//     margin:25,
//     center: false,
//     responsiveClass:true,
//     startPosition: 1,
//     smartSpeed: 1200,
//     dots: true,
//     rewind: false,
//     nav: false,
//     responsive:{
//         0:{
//             items:1,
//             margin: 0,
//             nav: false,
//             dots: true
//         },
//         675:{
//             items:2,
//             margin: 20,
//             nav: false,
//             center: false,
//         },
//         992:{
//             items:3,
//             margin: 25,
//             dots: true
//         }
//     }
// })

// var b = 0;
//     var $ClsName = $('.Indx-Abut-Wppr');
//     var TopSctn = $ClsName.offset().top;
//     $(window).scroll(function() {

//         if (b == 0 && $(window).scrollTop() > TopSctn) {
//             $('small.Count-Vlu').each(function() {
//                 var $this = $(this),
//                     countTo = $this.attr('data-count');
//                 $({
//                     countNum: $this.text(0)
//                 }).animate({
//                     countNum: countTo
//                 }, {
//                     duration: 10000,
//                     easing: 'swing',
//                     step: function() {
//                         $this.text(Math.floor(this.countNum) + '+');
//                     },
//                     complete: function() {
//                         $this.text(this.countNum + '+');
//                     }
//                 });
//             });

//             $('.ThosndVlu').each(function() {
//                 var $this = $(this),
//                     countTo = $this.attr('data-count-k');
//                 $({
//                     countNum: $this.text(0)
//                 }).animate({
//                     countNum: countTo
//                 }, {
//                     duration: 10000,
//                     easing: 'swing',
//                     step: function() {
//                         $this.text(Math.floor(this.countNum) + 'k');
//                     },
//                     complete: function() {
//                         $this.text(this.countNum + 'k');
//                     }
//                 });
//             });
//             b = 1;
//         }

//     });
})();




// function animateValue(obj, start, end, duration) {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       obj.innerHTML = Math.floor(progress * (end - start) + start);
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   }
  
//   const obj = document.getElementById("value");
//   animateValue(obj, 0, 20, 5000);
//   const obj1 = document.getElementById("value1");
//   animateValue(obj1, 0, 300, 5000);
//   const obj2 = document.getElementById("value2");
//   animateValue(obj2, 0, 12, 5000);
//   const obj3 = document.getElementById("value3");
//   animateValue(obj3, 0, 6, 5000);



  var b = 0;
    var $ClsName = $('.Indx-Abut-Wppr');
    var TopSctn = $ClsName.offset().top;
    $(window).scroll(function() {

        if (b == 0 && $(window).scrollTop() > TopSctn) {
            $('small.Count-Vlu').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text(0)
                }).animate({
                    countNum: countTo
                }, {
                    duration: 10000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum) + '+');
                    },
                    complete: function() {
                        $this.text(this.countNum + '+');
                    }
                });
            });

            $('.ThosndVlu').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count-k');
                $({
                    countNum: $this.text(0)
                }).animate({
                    countNum: countTo
                }, {
                    duration: 10000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum) + 'k');
                    },
                    complete: function() {
                        $this.text(this.countNum + 'k');
                    }
                });
            });
            b = 1;
        }
    });

    $('.DrpDwn-BnneStn').click(function() {
        var TopPostion = $('.Innovate-Sldr-Wppr').offset().top
        var HdrHght = $('.TopHdr_wppr').innerHeight();
        var TotalScrl = TopPostion - HdrHght
        if ($('.TopHdr_wppr').hasClass('HdrBgStrp')) {
            $("html, body").animate({ scrollTop: TotalScrl }, 1000);
        } else {
            $("html, body").animate({ scrollTop: TotalScrl + 30 }, 1000);
        }
    })


    // $('.client_i_slider').owlCarousel({
    //     items : 5,
    //     autoplay: true,
    //     loop: true,
    //     margin:25,
    //     responsiveClass:true,
    //     startPosition: 0,
    //     smartSpeed: 1200,
    //     dots: true,
    //     rewind: false,
    //     nav: false,
    //     responsive:{
    //         0:{
    //             items:2,
    //             margin: 10,
    //             nav: false,
    //             dots: false
    //         },
    //         520:{
    //             items:3,
    //             margin: 20,
    //             nav: false,
    //         },
    //         992:{
    //             items:5,
    //             margin: 25,
    //             dots: true
    //         }
    //     }
    // })



    $(document).ready(function() {
        $('.logo-carousel').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: true,
          dots: false,
          pauseOnHover: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          }, {
            breakpoint: 520,
            settings: {
              slidesToShow: 2
            }
          }]
        });
      });




      $(document).ready(function(){
        $('#purpose').on('change', function() {
          if ( this.value == '1')
          {
            $("#business").show();
          }
          else
          {
            $("#business").hide();
          }
        });
    });





    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }


//       $("#top100").click(function(){   //id of the link which is being clicked
//         $('html, body').animate({
//                scrollTop: $("#fcc").offset().top   //id of div to be scrolled
//         }, 1000);
//   });