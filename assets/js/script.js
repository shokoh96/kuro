document.addEventListener("DOMContentLoaded", function () {
    // ページ上部をフェードイン表示
    const topElement = document.getElementById("top");
    if (topElement) {
        topElement.style.opacity = 0;
        topElement.style.display = "block";
        let opacity = 0;
        const fade = () => {
            opacity += 0.02;
            topElement.style.opacity = opacity;
            if (opacity < 1) requestAnimationFrame(fade);
        };
        requestAnimationFrame(fade);
    }

    // ハンバーガーメニューの表示/非表示をトグル
    const hamburger = document.querySelector(".hamburger");
    const globalMenu = document.querySelector(".globalMenuSp");

    if (hamburger && globalMenu) {
        const toggleMenu = () => {
            hamburger.classList.toggle("active");
            globalMenu.classList.toggle("active");
        };

        hamburger.addEventListener("click", toggleMenu);

        // メニュー内リンクをクリックしたら閉じる
        const menuLinks = globalMenu.querySelectorAll('a[href^="#"]');
        for (const link of menuLinks) {
            link.addEventListener("click", toggleMenu);
        }
    }

    // ギャラリー画像にライトボックス機能を追加
    new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
        caption: trigger => trigger.querySelector('img').getAttribute('alt')
    });

    // スクロール連動アニメーション(AOS)の初期化
    AOS.init({ duration: 1000 });
});
