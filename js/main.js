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
    'Twitter': 'Twitter.jpg',
    'LinkedIn': 'LinkedIn.jpg',
    'Discord': 'Discord.jpg',
    'Reddit': 'Reddit.jpg',
    'Viber': 'Viber.jpg',
    'Call of Duty': 'CD.jpg',
    'Clash of Clans': 'clash.webp',
    'Minecraft': 'Minecraft.jpg',
    'Roblox': 'Roblox.jpg',
    'Among Us': 'AmongUs.jpg',
    'Subway Surfers': 'SubwaySurfers.jpg',
    'Candy Crush': 'CandyCrush.jpg',
    '8 Ball Pool': '8BallPool.jpg',
    'Ludo King': 'LudoKing.jpg',
    'Asphalt 9': 'Asphalt9.jpg',
    'Snake': 'Snake.jpg',
    'Google Translate': 'Google Translate.jpg',
    'Google Chrome': 'GoogleChrome.jpg',
    'Microsoft Office': 'MicrosoftOffice.jpg',
    'Adobe Acrobat': 'AdobeAcrobat.jpg',
    'CamScanner': 'CamScanner.jpg',
    'Dropbox': 'Dropbox.jpg',
    'Google Drive': 'GoogleDrive.jpg',
    'Google Photos': 'GooglePhotos.jpg',
    'Firefox': 'Firefox.jpg',
    'Brave Browser': 'BraveBrowser.jpg',
    'SHAREit': 'SHAREit.jpg',
    'Truecaller': 'Truecaller.jpg',
    'Amazon': 'Amazon.jpg',
    'AliExpress': 'AliExpress.jpg',
    'Noon': 'Noon.jpg',
    'Jumia': 'Jumia.jpg',
    'Temu': 'Temu.jpg',
    'Shopify': 'Shopify.jpg',
    'Uber Eats': 'UberEats.jpg',
    'Talabat': 'Talabat.jpg',
    'Glovo': 'Glovo.jpg',
    'Mrsool': 'Mrsool.jpg',
    'PayPal': 'PayPal.jpg',
    'Binance': 'Binance.jpg',
    'Western Union': 'WesternUnion.jpg',
    'Coinbase': 'Coinbase.jpg',
    'Sky News Arabia': 'SkyNews.jpg',
    'Al Arabiya': 'AlArabiya.jpg',
    'MyFitnessPal': 'MyFitnessPal.jpg',
    'Nike Training': 'NikeTraining.jpg',
    'Strava': 'Strava.jpg',
    'Duolingo': 'Duolingo.jpg',
    'Khan Academy': 'KhanAcademy.jpg',
    'Udemy': 'Udemy.jpg',
    'Canva': 'Canva.jpg',
    'Picsart': 'Picsart.png',
    'Adobe Photoshop': 'AdobePhotoshop.jpg',
    'Google Maps': 'GoogleMaps.jpg',
    'Waze': 'Waze.jpg',
    'Booking.com': 'Booking.jpg',
    'Airbnb': 'Airbnb.jpg',
    'Avast Antivirus': 'Avast.jpg',
    'Norton Security': 'Norton.jpg',
    'Quran': 'quran.png',
    'Khatma': 'Khatma.png',
    'Salaat First': 'salaat_first.jpg',
    'ChatGPT': 'hatgpt.jpg',
    'Google Gemini': 'Google-Gemini.jpg',
    'Microsoft Copilot': 'Copilot.jpg',
    'Google Assistant': 'google_assistant.jpg',
    'Koora': 'Koora.jpg',
    'Ostoura': 'Ostoura.png',
    'Partshisi': 'Partshisi.png',
    'SnapTube': 'snaptube.png',
    'Opera': 'opera.jpeg',
    'HatGPT': 'hatgpt.jpg',
    'Uber': 'Uber.jpg',
    'Fiverr': 'Fiverr - Freelance Service.jpg',
    'Lightroom': 'LightroomideoEditor.png',
    'Google Play': 'google_play.jpg',
    'Shahid': 'Shahid.jpg',
    'OSN+': 'OSN.jpg',
    'Yacine TV': 'yacine-tv.png',
    'beIN CONNECT': 'beIN.jpg',
    'Kooora Live': 'KoooraLive.jpg',
    'SoundCloud': 'SoundCloud.jpg',
    'Deezer': 'Deezer.jpg',
    'VLC Player': 'VLC.jpg',
    'MX Player': 'MXPlayer.jpg',
    'InShot': 'InShot.jpg',
    'KineMaster': 'KineMaster.jpg',
    'Telegram X': 'telegram_x.jpg',
    'Instagram Lite': 'instagram_lite.jpg',
    'TikTok Lite': 'tiktok_lite.jpg',
    'Free Fire MAX': 'freefire_max.jpg',
    'eFootball PES': 'eFootball.jpg',
    'IMO': 'IMO.jpg',
    'Line': 'Line.jpg',
    'WeChat': 'WeChat.jpg',
    'Google Photos': 'GooglePhotos.jpg',
    'Flashlight': 'Flashlight.jpg',
    'Calculator': 'Calculator.jpg',
    'eBay': 'eBay.jpg',
    'Fiver': 'Fiverr.jpg',
    'Google Gemini': 'Google-Gemini.jpg'
};

const appColors = {
    'WhatsApp': '25D366', 'Facebook': '1877F2', 'Messenger': '00B2FF',
    'Call of Duty': 'FF6B6B', 'Roblox': 'DE1212', 'Minecraft': '5D8C3A',
    'Uber': '000000', 'Microsoft Copilot': '00A4EF', 'Netflix': 'E50914',
    'Spotify': '1DB954', 'Instagram': 'E4405F', 'Snapchat': 'FFFC00',
    'Telegram': '0088CC', 'TikTok': '000000', 'Pinterest': 'BD081C',
    'YouTube Music': 'FF0000', 'Google Translate': '4285F4',
    'ChatGPT': '10A37F', 'Google Play': '34A853', 'Fiverr': '1DBF73',
    'Shopify': '96BF48', 'Temu': 'FB7701', 'Picsart': 'C209C2',
    'Free Fire': 'FFA500', 'Clash of Clans': 'F1C40F'
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
        <img src="${imagePath || defaultIcon}" alt="${app.name}" class="app-icon"
             onerror="this.onerror=null; this.src='${defaultIcon}'" loading="lazy">
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
        <img src="${imagePath || defaultIcon}" alt="${app.name}" class="app-icon"
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
    const categoriesContainer = document.getElementById('categoriesContainer');
    
    if (!sliderContainer || !categoriesContainer) return;
    
    sliderContainer.innerHTML = '';
    categoriesContainer.innerHTML = '';
    
    if (!apps || apps.length === 0) {
        categoriesContainer.innerHTML = '<p style="text-align: center; padding: 40px;">لا توجد تطبيقات</p>';
        return;
    }
    
    // عرض التطبيقات المميزة في السلايدر
    const featuredApps = apps.filter(app => app.isFeatured);
    featuredApps.forEach(app => {
        sliderContainer.appendChild(createSliderCard(app));
    });
    
    // تجميع التطبيقات حسب الفئات
    const appsByCategory = {};
    apps.forEach(app => {
        if (!app.isFeatured) {
            if (!appsByCategory[app.category]) {
                appsByCategory[app.category] = [];
            }
            appsByCategory[app.category].push(app);
        }
    });
    
    // عرض كل فئة
    for (const [categoryKey, categoryApps] of Object.entries(appsByCategory)) {
        const categoryInfo = categories[categoryKey] || { name: categoryKey, icon: 'fa-box' };
        
        const section = document.createElement('div');
        section.className = 'category-section';
        
        section.innerHTML = `
            <div class="category-header">
                <i class="fas ${categoryInfo.icon}"></i>
                <h2>${categoryInfo.name}</h2>
                <span style="margin-right: auto; color: var(--section-title); font-size: 0.9rem;">${categoryApps.length} تطبيق</span>
            </div>
            <div class="apps-grid" id="category-${categoryKey}"></div>
        `;
        
        categoriesContainer.appendChild(section);
        
        const grid = section.querySelector('.apps-grid');
        categoryApps.forEach(app => {
            grid.appendChild(createAppCard(app));
        });
    }
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    
    if (typeof appsData !== 'undefined' && appsData.length > 0) {
        renderApps(appsData);
    }
    
    // Sidebar
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

    // Dark Mode
    const themeToggle = document.getElementById('themeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
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
    
    if (themeToggle) themeToggle.addEventListener('click', toggleDarkMode);
    if (darkModeToggle) darkModeToggle.addEventListener('change', toggleDarkMode);

    // Language
    const langToggle = document.getElementById('langToggle');
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('lang') || 'ar';
    
    const translations = {
        ar: { searchPlaceholder: 'ابحث عن تطبيق...', featuredTitle: '🔥 الأكثر تميزاً', download: 'تحميل', downloadNow: 'تحميل الآن' },
        en: { searchPlaceholder: 'Search for an app...', featuredTitle: '🔥 Featured Apps', download: 'Download', downloadNow: 'Download Now' },
        fr: { searchPlaceholder: 'Rechercher...', featuredTitle: '🔥 En Vedette', download: 'Télécharger', downloadNow: 'Télécharger Maintenant' }
    };
    
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        const t = translations[lang];
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.placeholder = t.searchPlaceholder;
        
        const heading = document.querySelector('.section-heading');
        if (heading) heading.textContent = t.featuredTitle;
        
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) langText.textContent = lang === 'ar' ? 'EN' : lang === 'en' ? 'FR' : 'AR';
        }
        
        if (langButtons) {
            langButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
        }
        
        document.querySelectorAll('.download-btn').forEach(btn => {
            if (btn.closest('.slider-card')) btn.textContent = t.downloadNow;
            else btn.textContent = t.download;
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
            btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
        });
    }
    
    applyLanguage(currentLang);
    
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const term = e.target.value.toLowerCase().trim();
                const filtered = appsData.filter(app => app.name.toLowerCase().includes(term));
                renderApps(filtered);
            }, 300);
        });
    }
    
    // Stats Animation
    const totalAppsEl = document.getElementById('totalApps');
    if (totalAppsEl && sidebar) {
        sidebar.addEventListener('transitionend', () => {
            if (sidebar.classList.contains('active') && totalAppsEl.textContent === '0+') {
                let count = 0;
                const interval = setInterval(() => {
                    count += 5;
                    if (count >= appsData.length) {
                        totalAppsEl.textContent = appsData.length + '+';
                        clearInterval(interval);
                    } else {
                        totalAppsEl.textContent = count + '+';
                    }
                }, 50);
            }
        }, { once: true });
    }
});
