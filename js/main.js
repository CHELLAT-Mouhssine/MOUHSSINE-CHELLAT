// ==================== خريطة أسماء الملفات ====================
const fileMap = {
    // Slider Apps
    'PUBG Mobile': 'pubg_mobile.jpg',
    'FIFA Mobile': 'Fifa.jpg',
    'Netflix': 'Netflix.png',
    // Social Media
 'WhatsApp': 'WhatsApp.jpg',
    'Instagram': 'Instagram.jpg',
    'Telegram': 'Telegram.jpg',
    'Snapchat': 'snapchat.jpg',
    'TikTok': 'tiktok.webp',
    'Facebook': 'Facebook.jpg',
    'Messenger': 'Messenger.jpg',
    'Twitter': 'twitter.png',
    'LinkedIn': 'linkedin.png',
    'Pinterest': 'Pinterest.jpg',
    'Threads': 'Threads.jpg',
    'Discord': 'discord.png',
    'Reddit': 'reddit.png',
    'Viber': 'viber.png',
    'IMO': 'imo.png',
    'Line': 'line.png',
    'WeChat': 'wechat.png',
    'Telegram X': 'telegram_x.jpg',
    'Instagram Lite': 'instagram_lite.jpg',
    'TikTok Lite': 'tiktok_lite.jpg',
'Talabat': 'Talabat.jpg',
'UC Browser': 'UCBrowser.jpg',
'Calculator': 'Calculator.jpg',
'Flashlight': 'Flashlight.jpg',
'Phone': 'Phone.jpg',
'SHAREit': 'SHAREit.jpg',
'AccuBattery': 'AccuBattery.jpg',
'AppTweak': 'AppTweak.jpg',
'Adobe Acrobat': 'AdobeAcrobat.jpg',
'AliExpress': 'AliExpress.jpg',
'CamScanner': 'CamScanner.jpg',
'Glovo': 'Glovo.jpg',
'Google Chrome': 'GoogleChrome.jpg',
'Amazon': 'Amazon.jpg',
'Uber Eats': 'UberEats.jpg',
'Jumia': 'Jumia.jpg',
'eBay': 'eBay.jpg'
    
    // Games
    'Free Fire': 'freefire.jpg',
    'Call of Duty': 'CD.jpg',
    'Clash of Clans': 'clash.webp',
    'Minecraft': 'Minecraft.jpg',
    'Roblox': 'roblox.png',
    'Among Us': 'AmongUs.jpg',
    'Subway Surfers': 'SubwaySurfers.jpg',
    'Candy Crush': 'CandyCrush.jpg',
    'eFootball PES': 'eFootball.jpg',
    '8 Ball Pool': 'pool-balls (1).png',
    'Ludo King': 'LudoKing.jpg',
    'Asphalt 9': 'Asphalt9.jpg',
    'Snake': 'Snake.jpg',
    'Free Fire MAX': 'freefire_max.jpg',
    
    // Music & Video
    'Spotify': 'Spotify.jpg',
    'YouTube Music': 'YouTube.jpg',
    'SoundCloud': 'SoundCloud.jpg',
    'Deezer': 'Deezer.jpg',
    'VLC Player': 'vlc.png',
    'MX Player': 'MXPlayer.jpg',
    'InShot': 'InShot.jpg',
    'KineMaster': 'KineMaster.jpg',
    
    // Streaming
    'Shahid': 'Shahid.jpg',
    'OSN+': 'OSN.jpg',
    'Yacine TV': 'yacine-tv.png',
    'beIN CONNECT': 'beIN.jpg',
    'Kooora Live': 'KoooraLive.jpg',
    
    // Tools & Productivity
    'Google Translate': 'Google Translate.jpg',
    'Google Chrome': 'GoogleChrome.jpg',
    'Microsoft Office': 'MicrosoftOffice.jpg',
    'Adobe Acrobat': 'AdobeAcrobat.jpg',
    'CamScanner': 'CamScanner.jpg',
    'Dropbox': 'dropbox.png',
    'Google Drive': 'google-drive.png',
    'Google Photos': 'google-photos.png',
    'Firefox': 'firefox.png',
    'Brave Browser': 'BraveBrowser.jpg',
    'SHAREit': 'SHAREit.jpg',
    'Truecaller': 'Truecaller.jpg',
    'Flashlight': 'Flashlight.jpg',
    'Calculator': 'Calculator.jpg',
    'Google Play': 'google-play.png',
    'Google': 'google.png',
    'Google Pay': 'google-pay.png',
    'Google Maps': 'google-maps.png',
    
    // Shopping
    'Amazon': 'Amazon.jpg',
    'AliExpress': 'AliExpress.jpg',
    'Noon': 'Noon.jpg',
    'Jumia': 'Jumia.jpg',
    'Temu': 'Temu.jpg',
    'Shopify': 'Shopify.jpg',
    'eBay': 'eBay.jpg',
    
    // Food & Delivery
    'Uber Eats': 'UberEats.jpg',
    'Talabat': 'Talabat.jpg',
    'Glovo': 'Glovo.jpg',
    'Mrsool': 'Mrsool.jpg',
    
    // Finance
    'PayPal': 'paypal.png',
    'Binance': 'binance.png',
    'Western Union': 'western-union.png',
    'Coinbase': 'Coinbase.jpg',
    
    // News
    'Sky News Arabia': 'SkyNews.jpg',
    'Al Arabiya': 'AlArabiya.jpg',
    
    // Health & Fitness
    'MyFitnessPal': 'MyFitnessPal.jpg',
    'Nike Training': 'NikeTraining.jpg',
    'Strava': 'Strava.jpg',
    
    // Education
    'Duolingo': 'Duolingo.jpg',
    'Khan Academy': 'KhanAcademy.jpg',
    'Udemy': 'Udemy.jpg',
    
    // Design & Creativity
    'Canva': 'Canva.jpg',
    'Picsart': 'Picsart.png',
    'Adobe Photoshop': 'AdobePhotoshop.jpg',
    
    // Navigation & Travel
    'Waze': 'Waze.jpg',
    'Booking.com': 'Booking.jpg',
    'Airbnb': 'Airbnb.jpg',
    
    // Security
    'Avast Antivirus': 'Avast.jpg',
    'Norton Security': 'Norton.jpg',
    
    // Religious
    'Quran': 'quran.png',
    'Khatma': 'Khatma.png',
    'Salaat First': 'salaat_first.jpg',
    
    // AI & Assistants
    'ChatGPT': 'hatgpt.jpg',
    'Google Gemini': 'Google-Gemini.jpg',
    'Microsoft Copilot': 'Copilot.jpg',
    'Google Assistant': 'google_assistant.jpg',
    
    // Entertainment
    'Koora': 'Koora.jpg',
    'Ostoura': 'Ostoura.png',
    'Partshisi': 'Partshisi.png',
    'SnapTube': 'snaptube.png',
    'Opera': 'opera.jpeg',
    'HatGPT': 'hatgpt.jpg',
    
    // Other
    'Uber': 'Uber.jpg',
    'Fiverr': 'Fiverr - Freelance Service.jpg',
    'Lightroom': 'LightroomideoEditor.png'
};

// ==================== ألوان التطبيقات ====================
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
    'YouTube Music': 'FF0000',
    'Google Translate': '4285F4',
    'ChatGPT': '10A37F',
    'Google Play': '34A853',
    'Fiverr': '1DBF73',
    'Shopify': '96BF48',
    'Temu': 'FB7701',
    'Picsart': 'C209C2',
    'Free Fire': 'FFA500',
    'Clash of Clans': 'F1C40F',
    'Twitter': '1DA1F2',
    'LinkedIn': '0077B5',
    'Discord': '5865F2',
    'Reddit': 'FF4500',
    'Viber': '665CAC',
    'WeChat': '07C160',
    'Line': '00C300',
    'IMO': '2196F3',
    'VLC Player': 'FF8800',
    'Firefox': 'FF7139',
    'Google Maps': '4285F4',
    'Google Drive': '4285F4',
    'Google Photos': '4285F4',
    'Google Pay': '4285F4',
    'Google': '4285F4',
    'Dropbox': '0061FF',
    'PayPal': '003087',
    'Binance': 'F0B90B',
    'Western Union': 'FFDD00',
    '8 Ball Pool': '000000',
    'Amazon': 'FF9900',
    'YouTube Music': 'FF0000',
    'Shahid': '0066CC',
    'Duolingo': '58CC02',
    'Canva': '00C4CC',
    'Airbnb': 'FF5A5F',
    'Waze': '33CCFF',
    'Uber Eats': '06C167',
    'Talabat': 'FF6B00',
    'Coinbase': '0052FF',
    'Avast Antivirus': 'FF7800',
    'Opera': 'FF1B2D'
    // ألوان التطبيقات الجديدة
'Talabat': 'FF6B00',
'UC Browser': 'FF6600',
'Calculator': '4CAF50',
'Flashlight': 'FFC107',
'Phone': '2196F3',
'SHAREit': '0099FF',
'AccuBattery': 'FFEB3B',
'AppTweak': '00BCD4',
'Adobe Acrobat': 'E91E63',
'AliExpress': 'FF4747',
'CamScanner': '00BFA5',
'Glovo': '00A0E3',
'Google Chrome': '4285F4',
'Amazon': 'FF9900',
'Uber Eats': '06C167',
'Jumia': 'F68B1E',
'eBay': 'E53238'
};

// ==================== الدوال الأساسية ====================

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
        categoriesContainer.innerHTML = '<p style="text-align: center; padding: 40px;">لا توجد تطبيقات للعرض</p>';
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

// ==================== التهيئة عند تحميل الصفحة ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    console.log('Total apps:', appsData ? appsData.length : 0);
    
    // عرض التطبيقات
    if (typeof appsData !== 'undefined' && appsData.length > 0) {
        renderApps(appsData);
    } else {
        console.error('appsData is not defined or empty');
        const appsGrid = document.getElementById('appsGrid');
        if (appsGrid) {
            appsGrid.innerHTML = '<p style="text-align: center; padding: 40px; color: red;">خطأ: لم يتم تحميل البيانات</p>';
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
        e.stopPropagation();
        openSidebar();
    });

    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // إغلاق القائمة عند النقر على أي رابط
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeSidebar, 300);
        });
    });

    // ==================== Dark Mode ====================
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

    // ==================== Language ====================
    const langToggle = document.getElementById('langToggle');
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('lang') || 'ar';
    
    const translations = {
        ar: { 
            searchPlaceholder: 'ابحث عن تطبيق...', 
            featuredTitle: '🔥 الأكثر تميزاً', 
            download: 'تحميل', 
            downloadNow: 'تحميل الآن' 
        },
        en: { 
            searchPlaceholder: 'Search for an app...', 
            featuredTitle: '🔥 Featured Apps', 
            download: 'Download', 
            downloadNow: 'Download Now' 
        },
        fr: { 
            searchPlaceholder: 'Rechercher...', 
            featuredTitle: '🔥 En Vedette', 
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
                const filtered = appsData.filter(app => app.name.toLowerCase().includes(term));
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
    
    console.log('All systems initialized successfully! 🚀');
});
