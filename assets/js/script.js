// ページ読み込み後フェードイン
document.addEventListener("DOMContentLoaded", function () {
  const topElement = document.getElementById("top");
  if (topElement) {
    topElement.style.opacity = 0;
    topElement.style.display = "block";
    let opacity = 0;
    const fadeIn = setInterval(() => {
      opacity += 0.05;
      topElement.style.opacity = opacity;
      if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
  }
});

// ハンバーガーメニュー
$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});

// 押したら閉じる処理
$('.globalMenuSp a[href^="#"]').on('click', function () {
  $('.hamburger').click();
});

new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
  caption: function (trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

AOS.init({
  duration: 1000
});
