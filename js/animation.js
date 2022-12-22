/** cursor **/
$(function(){
    const stalker = document.getElementById('stalker'); 
    let hovFlag = false;
    
    document.addEventListener('mousemove', function (e) {
        if (!hovFlag) {
            stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        }
    });

    const linkElem = document.querySelectorAll('a');
    for (let i = 0; i < linkElem.length; i++) {
        linkElem[i].addEventListener('mouseover', function (e) {
            hovFlag = true;
            stalker.classList.add('hov_');
            let rect = e.target.getBoundingClientRect();
            let posX = rect.left + (rect.width / 2);
            let posY = rect.top + (rect.height / 2);

            stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
        });

        linkElem[i].addEventListener('mouseout', function (e) {
            hovFlag = false;
            stalker.classList.remove('hov_');
        });
    }
});

/** menu **/
$(document).ready(function() {
    $(".trigger").click(function() {
        $(".menu").toggleClass("active"); 
    });
});

/** item title border **/
$(window).on('scroll',function(){
    $(".itemTitle").each(function(){
        let position = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll > position - windowHeight + 180){
            $(this).addClass('isActive');
        }
    });
});