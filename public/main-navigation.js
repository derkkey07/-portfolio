// メインナビゲーション用JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const openSidebarBtn = document.getElementById('openSidebar');
    const body = document.body;

    // ハンバーガーメニューの開閉
    hamburger.addEventListener('click', function() {
        toggleSidebar();
    });

    // サイドバーを閉じる
    closeSidebar.addEventListener('click', function() {
        closeSidebarMenu();
    });

    // CTAボタンでサイドバーを開く
    openSidebarBtn.addEventListener('click', function() {
        openSidebarMenu();
    });

    // サイドバー外をクリックして閉じる
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            closeSidebarMenu();
        }
    });

    // ESCキーでサイドバーを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidebarMenu();
        }
    });

    // サイドバーを開く
    function openSidebarMenu() {
        sidebar.classList.add('active');
        hamburger.classList.add('active');
        body.style.overflow = 'hidden';
        
        // オーバーレイを作成
        if (!document.querySelector('.overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.addEventListener('click', closeSidebarMenu);
            body.appendChild(overlay);
        }
        
        setTimeout(() => {
            document.querySelector('.overlay').classList.add('active');
        }, 10);
    }

    // サイドバーを閉じる
    function closeSidebarMenu() {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
        
        // オーバーレイを非表示
        const overlay = document.querySelector('.overlay');
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    }

    // サイドバーの開閉を切り替え
    function toggleSidebar() {
        if (sidebar.classList.contains('active')) {
            closeSidebarMenu();
        } else {
            openSidebarMenu();
        }
    }

    // サイトリンクのクリックイベント
    const siteLinks = document.querySelectorAll('.site-list a');
    siteLinks.forEach(link => {
        link.addEventListener('click', function() {
            // サイドバーを閉じる
            closeSidebarMenu();
            
            // リンク先のサイトを新しいタブで開く
            setTimeout(() => {
                window.open(this.href, '_blank');
            }, 300);
        });
    });

    // スムーススクロール（必要に応じて）
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // アニメーション効果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 統計カードとサイトカードにアニメーションを適用
    const animatedElements = document.querySelectorAll('.stat-card, .site-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ヒーローセクションのアニメーション
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // テーマタグのホバーエフェクト
    const themeTags = document.querySelectorAll('.theme-tag');
    themeTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // パフォーマンス最適化：画像の遅延読み込み
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // タッチデバイス対応
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && sidebar.classList.contains('active')) {
                // 左スワイプでサイドバーを閉じる
                closeSidebarMenu();
            } else if (diff < 0 && !sidebar.classList.contains('active')) {
                // 右スワイプでサイドバーを開く
                openSidebarMenu();
            }
        }
    }

    // ローディング完了後の初期化
    window.addEventListener('load', function() {
        // ページ読み込み完了後の処理
        document.body.classList.add('loaded');
        
        // 統計カウンターのアニメーション
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    });
});
