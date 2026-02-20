// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('sliderContainer');
    const appsGrid = document.getElementById('appsGrid');
    const searchInput = document.getElementById('searchInput');

    // خريطة أسماء الملفات
    const fileMap = {
        'Netflix': 'Netflix.png',
        'FIFA Mobile': 'Fifa.jpg',
        'PUBG Mobile': 'pubg_mobile.jpg',
        'Free Fire': 'freefire.jpg',
        'WhatsApp': 'WhatsApp.jpg',
        'Instagram': 'Instagram.jpg',
        'Telegram': 'Telegram.jpg',
        'Snapchat': 'snapchat.jpg',
        'TikTok': 'tiktok.webp',
        'YouTube Music': 'YouTube.jpg',
        'Spotify': 'Spotify.jpg',
        'Facebook': 'Facebook.jpg',
        'Messenger': 'Messenger.jpg',
        'Pinterest': 'Pinterest.jpg',
        'Threads': 'Threads.jpg',
        'Call of Duty': 'CD.jpg',
        'Google Translate': 'Google Translate.jpg',
        'Google Gemini': 'Google-Gemini.jpg',
        'ChatGPT': 'hatgpt.jpg',
        'Microsoft Copilot': 'Microsoft-Copilot AI Assistant.jpg',
        'Google Assistant': 'google_assistant.jpg',
        'Google Play': 'google_play.jpg',
        'Uber': 'Uber.jpg',
        'Fiverr': 'Fiverr - Freelance Service.jpg',
        'Shopify': 'Shopify.jpg',
        'Temu': 'Temu.jpg',
        'Picsart': 'Picsart.png',
        'Lightroom': 'LightroomideoEditor.png',
        'Snake': 'Snake.jpg',
        'Clash of Clans': 'clash.webp',
        'Khatma': 'Khatma.png',
        'Koora': 'Koora.jpg',
        'Ostoura': 'Ostoura.png',
        'Partshisi': 'Partshisi.png',
        'SnapTube': 'snaptube.png',
        'Quran': 'quran.png',
        'Salaat First': 'salaat_first.jpg',
        'Opera': 'opera.jpeg',
        'HatGPT': 'hatgpt.jpg',
        'Telegram X': 'telegram_x.jpg',
        'Instagram Lite': 'instagram_lite.jpg',
        'TikTok Lite': 'tiktok_lite.jpg',
        'Free Fire MAX': 'freefire_max.jpg',
        'Roblox': 'Roblox.jpg',
        'Minecraft': 'Minecraft.jpg'
    };

    // ألوان مخصصة لكل تطبيق
    const appColors = {
        'WhatsApp': '25D366',
        'Facebook': '1877F2',
        'Messenger': '00B2FF',
        'Call of Duty': 'FF6B6B',
        'Roblox': 'DE1212',
        'Minecraft': '5D8C3A',
        'Uber': '000000',
        'Microsoft Copilot': '00A4EF',
        'Netflix': 'E50914',
        'Spotify': '1DB954',
        'Instagram': 'E4405F',
        'Snapchat': 'FFFC00',
        'Telegram': '0088CC',
        'TikTok': '000000',
        'Pinterest': 'BD081C',
        'Threads': '000000',
        'YouTube Music': 'FF0000',
        'Google Translate': '4285F4',
        'Google Gemini': '8E75F5',
        'ChatGPT': '10A37F',
        'Google Assistant': '4285F4',
        'Google Play': '34A853',
        'Fiverr': '1DBF73',
        'Shopify': '96BF48',
        'Temu': 'FB7701',
        'Picsart': 'C209C2',
        'Free Fire': 'FFA500',
        'Clash of Clans': 'F1C40F'
    };

    // دالة للحصول على أيقونة افتراضية
    function getDefaultIcon(appName) {
        const color = appColors[appName] || '2d3748';
        const initial = appName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(initial)}&background=${color}&color=fff&size=80&bold=true`;
    }

    // دالة للحصول على مسار الصورة
    function getImagePath(appName) {
        const fileName = fileMap[appName];
        if (fileName) {
            return `assets/images/icons/${fileName}`;
        }
        return null;
    }

    // دالة إنشاء بطاقة التطبيق
    function createAppCard(app) {
        const card = document.createElement('div');
        card.className = 'app-card';
        
        const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
        const imagePath = getImagePath(app.name);
        const defaultIcon = getDefaultIcon(app.name);
        
        card.innerHTML = `
            <img src="${imagePath || defaultIcon}" 
                 alt="${app.name}" 
                 class="app-icon"
                 onerror="this.onerror=null; this.src='${defaultIcon}'"
                 loading="lazy">
            <h3 class="app-name">${app.name}</h3>
            <div class="app-rating">${app.rating} ${stars}</div>
            <a href="${app.downloadLink}" class="download-btn" target="_blank" data-key="download">تحميل</a>
        `;
        
        return card;
    }

    // دالة إنشاء بطاقة السلايدر
    function createSliderCard(app) {
        const card = document.createElement('div');
        card.className = 'slider-card';
        
        const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
        const imagePath = getImagePath(app.name);
        const defaultIcon = getDefaultIcon(app.name);
        
        card.innerHTML = `
            <img src="${imagePath || defaultIcon}" 
                 alt="${app.name}" 
                 class="app-icon"
                 style="width: 100px; height: 100px; margin: 10px auto 15px;"
                 onerror="this.onerror=null; this.src='${defaultIcon}'">
            <h3 class="app-name">${app.name}</h3>
            <div class="app-rating">${app.rating} ${stars}</div>
            <a href="${app.downloadLink}" class="download-btn" target="_blank" data-key="downloadNow">تحميل الآن</a>
        `;
        
        return card;
    }

    // عرض التطبيقات
    function renderApps(apps) {
        sliderContainer.innerHTML = '';
        appsGrid.innerHTML = '';
        
        if (!apps || apps.length === 0) {
            appsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px; color: var(--text-color);">لا توجد تطبيقات للعرض</p>';
            return;
        }

        apps.forEach(app => {
            if (app.isSlider) {
                sliderContainer.appendChild(createSliderCard(app));
            }
            appsGrid.appendChild(createAppCard(app));
        });
        
        // تحديث نصوص الأزرار حسب اللغة الحالية
        updateLanguageTexts();
    }

    // البحث
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const filteredApps = appsData.filter(app => 
                app.name.toLowerCase().includes(searchTerm)
            );
            renderApps(filteredApps);
        }, 300);
    });

    // عرض التطبيقات
    if (typeof appsData !== 'undefined') {
        renderApps(appsData);
    } else {
        appsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #e53e3e; padding: 40px;">خطأ في تحميل البيانات</p>';
    }

    // ============ Sidebar Functionality ============
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.classList.add('sidebar-open');
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            openSidebar();
        });
    }

    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    if (sidebar) {
        sidebar.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // ============ Dark Mode & Language Switcher ============
    const translations = {
        ar: {
            darkMode: 'الوضع الليلي',
            language: 'اللغة',
            searchPlaceholder: 'ابحث عن تطبيق...',
            featuredTitle: 'الأكثر تميزاً',
            allAppsTitle: 'جميع التطبيقات',
            download: 'تحميل',
            downloadNow: 'تحميل الآن',
            newsSection: 'أخبار التقنية',
            contactSection: 'تواصل معنا',
            settingsSection: 'الإعدادات',
            statsSection: 'إحصائيات المتجر',
            totalApps: 'تطبيق',
            avgRating: 'متوسط التقييم',
            footer: 'جميع الحقوق محفوظة',
            whatsapp: 'واتساب',
            email: 'البريد الإلكتروني',
            phone: 'اتصل بنا',
            closeMenu: 'إغلاق القائمة',
            openMenu: 'فتح القائمة'
        },
        en: {
            darkMode: 'Dark Mode',
            language: 'Language',
            searchPlaceholder: 'Search for an app...',
            featuredTitle: 'Featured Apps',
            allAppsTitle: 'All Applications',
            download: 'Download',
            downloadNow: 'Download Now',
            newsSection: 'Tech News',
            contactSection: 'Contact Us',
            settingsSection: 'Settings',
            statsSection: 'Store Statistics',
            totalApps: 'Apps',
            avgRating: 'Average Rating',
            footer: 'All Rights Reserved',
            whatsapp: 'WhatsApp',
            email: 'Email',
            phone: 'Call Us',
            closeMenu: 'Close Menu',
            openMenu: 'Open Menu'
        },
        fr: {
            darkMode: 'Mode Sombre',
            language: 'Langue',
            searchPlaceholder: 'Rechercher une application...',
            featuredTitle: 'Applications en Vedette',
            allAppsTitle: 'Toutes les Applications',
            download: 'Télécharger',
            downloadNow: 'Télécharger Maintenant',
            newsSection: 'Actualités Tech',
            contactSection: 'Contactez-nous',
            settingsSection: 'Paramètres',
            statsSection: 'Statistiques du Magasin',
            totalApps: 'Applications',
            avgRating: 'Note Moyenne',
            footer: 'Tous Droits Réservés',
            whatsapp: 'WhatsApp',
            email: 'Email',
            phone: 'Appelez-nous',
            closeMenu: 'Fermer le Menu',
            openMenu: 'Ouvrir le Menu'
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ar';
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const langButtons = document.querySelectorAll('.lang-btn');

    function initThemeAndLanguage() {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            if (themeToggle) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
            if (darkModeToggle) {
                darkModeToggle.checked = true;
            }
        }
        
        applyLanguage(currentLang);
        animateStats();
    }

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        
        if (themeToggle) {
            themeToggle.innerHTML = isDarkMode ? 
                '<i class="fas fa-sun"></i>' : 
                '<i class="fas fa-moon"></i>';
        }
        
        if (darkModeToggle) {
            darkModeToggle.checked = isDarkMode;
        }
    }

    function updateLanguageTexts() {
        const t = translations[currentLang];
        
        document.querySelectorAll('.download-btn').forEach(btn => {
            if (btn.closest('.slider-card')) {
                btn.textContent = t.downloadNow;
            } else {
                btn.textContent = t.download;
            }
        });
        
        if (searchInput) {
            searchInput.placeholder = t.searchPlaceholder;
        }
        
        const h2Elements = document.querySelectorAll('h2');
        if (h2Elements[0]) h2Elements[0].textContent = t.featuredTitle;
        if (h2Elements[1]) h2Elements[1].textContent = t.allAppsTitle;
        
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = currentLang === 'ar' ? 'EN' : currentLang === 'en' ? 'FR' : 'AR';
            }
        }
    }

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        const t = translations[lang];
        
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (t[key]) {
                el.textContent = t[key];
            }
        });
        
        updateLanguageTexts();
        
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    function switchLanguage() {
        const langs = ['ar', 'en', 'fr'];
        const currentIndex = langs.indexOf(currentLang);
        const nextLang = langs[(currentIndex + 1) % langs.length];
        applyLanguage(nextLang);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }

    if (langToggle) {
        langToggle.addEventListener('click', switchLanguage);
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', toggleDarkMode);
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });

    function animateStats() {
        const totalAppsEl = document.getElementById('totalApps');
        if (!totalAppsEl) return;
        
        const target = 44;
        let current = 0;
        const increment = Math.ceil(target / 20);
        
        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                totalAppsEl.textContent = target + '+';
            } else {
                totalAppsEl.textContent = current + '+';
                requestAnimationFrame(updateCounter);
            }
        };
        
        if (sidebar && !sidebar.dataset.animated) {
            sidebar.addEventListener('transitionend', (e) => {
                if (sidebar.classList.contains('active') && current === 0) {
                    sidebar.dataset.animated = 'true';
                    updateCounter();
                }
            }, { once: true });
        }
    }

    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeSidebar, 200);
        });
    });

    // Initialize
    initThemeAndLanguage();
});
