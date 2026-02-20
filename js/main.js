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
    'Microsoft Copilot': 'Copilot.jpg',
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

// ألوان مخصصة
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

function getDefaultIcon(appName) {
    const color = appColors[appName] || '2d3748';
    const initial = appName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(initial)}&background=${color}&color=fff&size=80&bold=true`;
}

function getImagePath(appName) {
    const fileName = fileMap[appName];
    if (fileName) {
        return `assets/images/icons/${fileName}`;
    }
    return null;
}

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
        <a href="${app.downloadLink}" class="download-btn" target="_blank">تحميل</a>
    `;
    
    return card;
}

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
             style="width: 100px; height: 100px; margin: 0 auto 15px;"
             onerror="this.onerror=null; this.src='${defaultIcon}'">
        <h3 class="app-name">${app.name}</h3>
        <div class="app-rating">${app.rating} ${stars}</div>
        <a href="${app.downloadLink}" class="download-btn" target="_blank">تحميل الآن</a>
    `;
    
    return card;
}

function renderApps(apps) {
    const sliderContainer = document.getElementById('sliderContainer');
    const appsGrid = document.getElementById('appsGrid');
    
    if (!sliderContainer || !appsGrid) {
        console.error('Containers not found!');
        return;
    }
    
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
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    
    // عرض التطبيقات
    if (typeof appsData !== 'undefined' && appsData.length > 0) {
        renderApps(appsData);
    } else {
        console.error('appsData is not defined or empty');
        const appsGrid = document.getElementById('appsGrid');
        if (appsGrid) {
            appsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px; color: red;">خطأ: لم يتم تحميل البيانات</p>';
        }
    }
    
    // ==================== Sidebar ====================
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
        if (sidebar) sidebar.classList.add('active');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
        document.body.classList.add('sidebar-open');
    }

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('active');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }

    if (menuToggle) menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        openSidebar();
    });

    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // ==================== Dark Mode ====================
    const themeToggle = document.getElementById('themeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // التحقق من الوضع المحفوظ
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        if (darkModeToggle) darkModeToggle.checked = true;
    }
    
    function toggleDarkMode() {
        const isNowDark = !document.body.classList.contains('dark-mode');
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isNowDark);
        
        if (themeToggle) {
            themeToggle.innerHTML = isNowDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
        if (darkModeToggle) {
            darkModeToggle.checked = isNowDark;
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', toggleDarkMode);
    }

    // ==================== Language ====================
    const langToggle = document.getElementById('langToggle');
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('lang') || 'ar';
    
    const translations = {
        ar: {
            searchPlaceholder: 'ابحث عن تطبيق...',
            featuredTitle: 'الأكثر تميزاً',
            allAppsTitle: 'جميع التطبيقات',
            download: 'تحميل',
            downloadNow: 'تحميل الآن'
        },
        en: {
            searchPlaceholder: 'Search for an app...',
            featuredTitle: 'Featured Apps',
            allAppsTitle: 'All Applications',
            download: 'Download',
            downloadNow: 'Download Now'
        },
        fr: {
            searchPlaceholder: 'Rechercher une application...',
            featuredTitle: 'Applications en Vedette',
            allAppsTitle: 'Toutes les Applications',
            download: 'Télécharger',
            downloadNow: 'Télécharger Maintenant'
        }
    };
    
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        const t = translations[lang];
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.placeholder = t.searchPlaceholder;
        
        const headings = document.querySelectorAll('.section-heading');
        if (headings[0]) headings[0].textContent = t.featuredTitle;
        if (headings[1]) headings[1].textContent = t.allAppsTitle;
        
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = lang === 'ar' ? 'EN' : lang === 'en' ? 'FR' : 'AR';
            }
        }
        
        if (langButtons) {
            langButtons.forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
        }
        
        // تحديث أزرار التحميل
        document.querySelectorAll('.download-btn').forEach(btn => {
            if (btn.closest('.slider-card')) {
                btn.textContent = t.downloadNow;
            } else {
                btn.textContent = t.download;
            }
        });
    }
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const langs = ['ar', 'en', 'fr'];
            const nextLang = langs[(langs.indexOf(currentLang) + 1) % langs.length];
            applyLanguage(nextLang);
        });
    }
    
    if (langButtons) {
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                applyLanguage(btn.getAttribute('data-lang'));
            });
        });
    }
    
    // تطبيق اللغة المحفوظة
    applyLanguage(currentLang);
    
    // ==================== Search ====================
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const term = e.target.value.toLowerCase().trim();
                const filtered = appsData.filter(app => 
                    app.name.toLowerCase().includes(term)
                );
                renderApps(filtered);
            }, 300);
        });
    }
    
    // ==================== Stats Animation ====================
    const totalAppsEl = document.getElementById('totalApps');
    if (totalAppsEl && sidebar) {
        sidebar.addEventListener('transitionend', () => {
            if (sidebar.classList.contains('active') && totalAppsEl.textContent === '0+') {
                let count = 0;
                const interval = setInterval(() => {
                    count += 5;
                    if (count >= 44) {
                        totalAppsEl.textContent = '44+';
                        clearInterval(interval);
                    } else {
                        totalAppsEl.textContent = count + '+';
                    }
                }, 50);
            }
        }, { once: true });
    }
});
