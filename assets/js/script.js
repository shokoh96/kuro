document.addEventListener("DOMContentLoaded", function () {
  // フェードイン処理
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

  // ハンバーガーメニュー
  const hamburger = document.querySelector(".hamburger");
  const globalMenu = document.querySelector(".globalMenuSp");

  if (hamburger && globalMenu) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        globalMenu.classList.add("active");
      } else {
        globalMenu.classList.remove("active");
      }
    });

    // 押したら閉じる処理
    const menuLinks = globalMenu.querySelectorAll('a[href^="#"]');
    menuLinks.forEach(link => {
      link.addEventListener("click", () => hamburger.click());
    });
  }
});

new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
  caption: function (trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

AOS.init({
  duration: 1000
});
