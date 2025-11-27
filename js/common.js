$(document).ready(function(){

    // ====== gnb start ====== //   
    
        // let headerLine = $('.header')
        let gnbTag = $('.gnb');
        let depth1Box = $('.gnb > .depth1-box');
        let gnbBg = $('.gnb-bg');
        let depth2Wrap = $('.depth2-wrap');
        var lastLst =   $('.gnb > li:last-child .depth2-inbox > li:last-child li:last-child');
    
        depth1Box.each(function(){
            var tagDepth01 = $(this).find('.a-depth1');
            tagDepth01.on('mouseenter , focusin',function(){
                var thisList = $(this).siblings('.depth2-wrap');
                depth2Wrap.removeClass('over');
                gnbBg.addClass('over');
                thisList.addClass('over');
                // headerLine.addClass('over'); 
            });
        });
        lastLst.on('focusout',function(){
            depth2Wrap.removeClass('over');
            // headerLine.removeClass('over'); 
            gnbBg.removeClass('over'); 
        });
        gnbTag.on('mouseleave',function(){
            depth2Wrap.removeClass('over');
            // headerLine.removeClass('over');
            gnbBg.removeClass('over'); 
        });
    // ====== gnb end ====== //  
    
    // ====== all-menu start ====== //
        let menuIcon = $('.btn-all-menu');
        let menuBox = $('.all-menu-box');
        let linkBox = $('.h-right-link');
    
        menuIcon.on('click', function(){
            if (menuBox.hasClass('active')) {
                menuBox.removeClass('active');
                menuIcon.removeClass('active');
                gnbTag.removeClass('active');
                linkBox.removeClass('active');
                $('html').css("overflow-y","unset");
                
            } else {
                menuBox.addClass('active');
                menuIcon.addClass('active');
                gnbTag.addClass('active');
                linkBox.addClass('active');
                $('html').css("overflow-y","hidden");
            }    
        });
    // ====== all-menu end ====== //  
    
    // ====== quick-menu start ====== //
        let quickTab = $('.btn-quick-toggle');
        let quickMenu = $('.quick-ul');
        quickTab.on('click', function(){
            $(this).toggleClass('open');
            if($(this).hasClass('open')) {
                quickMenu.slideToggle(300);
            } else {
                quickMenu.slideToggle(300);
            }
        });
    
        $('.btn-goUp').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 300);
        });
    
    
        // 특정 스크롤 위치부터 탑 버튼 노출
        // $(window).scroll(function () {
        //     if ($(this).scrollTop() >= 100) {
        //         $('.btn-goUp').fadeIn(200);
        //     } else {
        //         $('.btn-goUp').fadeOut(200);
        //     }
        // });
    // ====== quick-menu end ====== //
    
    
    // ====== bar-type-tab start ====== // 
    
    barTypeTab();
    function barTypeTab() {
        let barTabBtn = $('.tab01-ul > .tab01-li');
        let barTabLi = $('.tab01-ul > .tab01-li');
        let tagVisualBox = $('.barTab-wrap > .content-tab01-box');
        barTabBtn.each(function(){
            var tagBtn01 = $(this);
            tagBtn01.on('click', function(){
                let btnIdx = $(this).index();
                // console.log(btnIdx);
                barTabLi.removeClass('tagTabOn');
                tagBtn01.addClass('tagTabOn');
                tagVisualBox.removeClass('tagTabOn');
                tagVisualBox.eq(btnIdx).addClass('tagTabOn');
            });
        });
    }
    
    // ====== bar-type-tab end ====== // 
    
    // ====== pill-type-tab start ====== // 
    pillTypeTab();
    function pillTypeTab() {
        let pillTabBtn = $('.tab02-ul > .tab02-li');
        let pillTabLi = $('.tab02-ul > .tab02-li');
        let tagVisualBox = $('.pillTab-wrap > .content-tab02-box');
        pillTabBtn.each(function(){
            var tagBtn02 = $(this);
            tagBtn02.on('click', function(){
                let btnIdx = $(this).index();
                // console.log(btnIdx);
                pillTabLi.removeClass('tabOn');
                tagBtn02.addClass('tabOn');
                tagVisualBox.removeClass('tagTabOn');
                tagVisualBox.eq(btnIdx).addClass('tagTabOn');
            });
        });
    }
    pillTypeTab02();
    function pillTypeTab02() {
        let pillTabBtn02 = $('.tab02-ul > .tab03-li');
        let pillTabLi02 = $('.tab02-ul > .tab03-li');
        let tagVisualBox02 = $('.pillTab-wrap > .content-tab03-box');
        pillTabBtn02.each(function(){
            var tagBtn02 = $(this);
            tagBtn02.on('click', function(){
                let btnIdx02 = $(this).index();
                // console.log(btnIdx);
                pillTabLi02.removeClass('tabOn');
                tagBtn02.addClass('tabOn');
                tagVisualBox02.removeClass('tagTabOn');
                tagVisualBox02.eq(btnIdx02).addClass('tagTabOn');
            });
        });
    }
    // ====== pill-type-tab end ====== // 
    
    // ====== select-box-custom start ====== // 
    
    selectCus();
    function selectCus() {
        $('.d-select-cus').each(function() {
            const $select = $(this);
            const $selectTrigger = $select.find('.d-trigger');
            const $options = $select.find('.d-option');
            const $hiddenInput = $select.find('.opt_val');
    
            //select option 열기
            $selectTrigger.click(function() {
                console.log('test');
                $options.toggle();
                $select.toggleClass('active');
                $('.d-select-cus').not($select).find('.d-option').hide();
                $('.d-select-cus').not($select).removeClass('active');
            });
    
            //option 선택
            $options.find('li').click(function() {
                const value = $(this).data('value');
                const text = $(this).text();
                $select.find('.d-trigger_txt').text(text);
                $options.hide();
                $select.removeClass('active');
                //옵션 선택했을 때 클래스 추가
                if (value != '') {
                    $select.addClass('select')
                } else {
                    $select.removeClass('select')
                }
                // hidden 필드에 선택한 값을 설정
                $hiddenInput.val(value);
            });
        });
    
        //select 영역 외 다른곳을 누르면 select 닫힘
        $(document).click(function(e) {
            if (!$(e.target).closest('.d-select-cus').length) {
                $('.d-select-cus .d-option').hide();
                $('.d-select-cus').removeClass('active');
            }
        });
    }
    selectTab();
    function selectTab() {
        $('.d-select-tab').each(function() {
            const $select = $(this);
            const $selectTrigger = $select.find('.d-trigger');
            const $options = $select.find('.d-option');
            const $hiddenInput = $select.find('.opt_val');
    
            //select option 열기
            $selectTrigger.click(function() {
                $options.toggle();
                $select.toggleClass('active');
                $('.d-select-tab').not($select).find('.d-option').hide();
                $('.d-select-tab').not($select).removeClass('active');
            });
    
            //option 선택
            $options.find('li').click(function() {
                const value = $(this).data('value');
                const text = $(this).text();
                $select.find('.d-trigger_txt').text(text);
                $options.hide();
                $select.removeClass('active');
                //옵션 선택했을 때 클래스 추가
                if (value != '') {
                    $select.addClass('select')
                } else {
                    $select.removeClass('select')
                }
                // hidden 필드에 선택한 값을 설정
                $hiddenInput.val(value);
            });
        });
    
        //select 영역 외 다른곳을 누르면 select 닫힘
        $(document).click(function(e) {
            if (!$(e.target).closest('.d-select-tab').length) {
                $('.d-select-tab .d-option').hide();
                $('.d-select-tab').removeClass('active');
            }
        });
    }
    // ====== select-box-custom end ====== //
    
    // ====== pop-up start ====== //
    boxPopOpen();
    function boxPopOpen() {
        let popBox = $('.pop-up');
        let popUpBg = $('.popup-bg');
        let popClose = $('.btn-pop-close');
        $('.btn-popup').click(function() {
            popBox.addClass('on');
            popUpBg.addClass('over');
            $('html').css("overflow-y","hidden");
        });
    }
    boxPopClose();
    function boxPopClose() {
        let popBox = $('.pop-up');
        let popUpBg = $('.popup-bg');
    
        $('.btn-pop-close').click(function() {
            popBox.removeClass('on');
            popUpBg.removeClass('over');
            $('html').css("overflow-y","unset");
        });
    
    }
    
    // ====== pop-up end ====== // 
    // ====== pop-up start ====== //
    boxPopOpen02();
    function boxPopOpen02() {
        let popBox02 = $('.pop-up02');
        let popUpBg02 = $('.popup-bg');
        let popClose = $('.btn-pop-close');
        $('.btn-popup02').click(function() {
            popBox02.addClass('on');
            popUpBg02.addClass('over');
            $('html').css("overflow-y","hidden");
        });
    }
    boxPopClose02();
    function boxPopClose02() {
        let popBox02 = $('.pop-up02');
        let popUpBg02 = $('.popup-bg');
    
        $('.btn-pop-close').click(function() {
            popBox02.removeClass('on');
            popUpBg02.removeClass('over');
            $('html').css("overflow-y","unset");
        });
    
    }
    
    // ====== pop-up end ====== // 
    
    
    });