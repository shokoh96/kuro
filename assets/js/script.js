// ハンバーガーメニュー
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

// 押したら閉じる処理
$('.globalMenuSp a[href^="#"]').on('click', function() {
    $('.hamburger').click();
  });

new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

AOS.init({
  duration: 1000
});
