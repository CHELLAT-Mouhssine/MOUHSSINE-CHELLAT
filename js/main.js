// ==================== خريطة أسماء الملفات ====================
const fileMap = {
    // Slider Apps
    'PUBG Mobile': 'pubg_mobile.jpg',
    'FIFA Mobile': 'Fifa.jpg',
    'Netflix': 'Netflix.png',
    
    // Social Media
    'WhatsApp': 'whatsapp.png',
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
    'GBWhatsApp': 'gbwhatsapp.jpg',
    'FMWhatsApp': 'fmwhatsapp.jpg',
    'Instagram Plus': 'instagram_plus.jpg',
    
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
    'Clash Royale': 'ClashRoyale.jpg',
    'Brawl Stars': 'BrawlStars.jpg',
    'Hay Day': 'HayDay.jpg',
    
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
    'beIN CONNECT': 'beIN.jpg',
    
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
    'UC Browser': 'UCBrowser.jpg',
    'Opera': 'opera.jpeg',
    'Phone': 'Phone.jpg',
    'Messages': 'Messages.jpg',
    'Contacts': 'Contacts.jpg',
    'Clock': 'Clock.jpg',
    'Calendar': 'Calendar.jpg',
    'Gmail': 'Gmail.jpg',
    
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
    'Lightroom': 'Lightroom.jpg',
    
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
    'SnapTube': 'snaptube.png',
    'YouTube Vanced': 'youtube_vanced.jpg',
    'Fiverr': 'Fiverr.jpg',
    'Uber': 'Uber.jpg',
    'HatGPT': 'hatgpt.jpg'
};

// ==================== ألوان التطبيقات ====================
const appColors = {
    'WhatsApp': '25D366',
    'Facebook': '1877F2',
    'Messenger': '00B2FF',
    'Instagram': 'E4405F',
    'Telegram': '0088CC',
    'TikTok': '000000',
    'Snapchat': 'FFFC00',
    'Twitter': '1DA1F2',
    'LinkedIn': '0077B5',
    'Discord': '5865F2',
    'Reddit': 'FF4500',
    'Viber': '665CAC',
    'IMO': '2196F3',
    'Line': '00C300',
    'WeChat': '07C160',
    'PUBG Mobile': 'F4A900',
    'FIFA Mobile': '1E3A8A',
    'Netflix': 'E50914',
    'Free Fire': 'FFA500',
    'Call of Duty': 'FF6B6B',
    'Clash of Clans': 'F1C40F',
    'Minecraft': '5D8C3A',
    'Roblox': 'DE1212',
    'Spotify': '1DB954',
    'YouTube Music': 'FF0000',
    'SoundCloud': 'FF5500',
    'Deezer': 'FF0092',
    'VLC Player': 'FF8800',
    'MX Player': 'FF5722',
    'InShot': 'F53B5C',
    'KineMaster': 'F2B137',
    'Google Chrome': '4285F4',
    'Google Translate': '4285F4',
    'Google Drive': '4285F4',
    'Google Photos': '4285F4',
    'Google Maps': '4285F4',
    'Google Pay': '4285F4',
    'Google Play': '34A853',
    'Google': '4285F4',
    'Amazon': 'FF9900',
    'AliExpress': 'FF4747',
    'Noon': 'FEAD0D',
    'Jumia': 'F68B1E',
    'Temu': 'FB7701',
    'Shopify': '96BF48',
    'eBay': 'E53238',
    'Uber Eats': '06C167',
    'Talabat': 'FF6B00',
    'Glovo': '00A0E3',
    'Mrsool': 'FF6600',
    'PayPal': '003087',
    'Binance': 'F0B90B',
    'Western Union': 'FFDD00',
    'Coinbase': '0052FF',
    'Sky News Arabia': 'E91E63',
    'Al Arabiya': 'FF6600',
    'MyFitnessPal': '53C3F3',
    'Nike Training': '111111',
    'Strava': 'FC5200',
    'Duolingo': '58CC02',
    'Khan Academy': '14BF9B',
    'Udemy': 'A435F0',
    'Canva': '00C4CC',
    'Picsart': 'C209C2',
    'Adobe Photoshop': '31A8FF',
    'Lightroom': '31A8FF',
    'Waze': '33CCFF',
    'Booking.com': '003580',
    'Airbnb': 'FF5A5F',
    'Avast Antivirus': 'FF7800',
    'Norton Security': 'FFE01A',
    'Quran': '006633',
    'Khatma': '0099CC',
    'Salaat First': '00AEEF',
    'ChatGPT': '10A37F',
    'Google Gemini': '8E75F5',
    'Microsoft Copilot': '00A4EF',
    'Google Assistant': '4285F4',
    'SnapTube': 'FF0000',
    'YouTube Vanced': 'FF0000',
    'Fiverr': '1DBF73',
    'Uber': '000000',
    'HatGPT': '10A37F',
    'CamScanner': '00BFA5',
    'SHAREit': '0099FF',
    'Truecaller': '0082EF',
    'Flashlight': 'FFC107',
    'Calculator': '4CAF50',
    'UC Browser': 'FF6600',
    'Opera': 'FF1B2D',
    'Firefox': 'FF7139',
    'Brave Browser': 'FB542B',
    'Dropbox': '0061FF',
    'Microsoft Office': 'D83B01',
    'Adobe Acrobat': 'E91E63',
    'Shahid': '0066CC',
    'OSN+': '00AEEF',
    'beIN CONNECT': 'A1184E',
    'Among Us': 'C61D2D',
    'Subway Surfers': '00BCD4',
    'Candy Crush': 'E91E63',
    '8 Ball Pool': '000000',
    'Ludo King': 'FF5722',
    'Asphalt 9': 'FF6B00',
    'Snake': '4CAF50',
    'Free Fire MAX': 'FFA500',
    'Clash Royale': '0066CC',
    'Brawl Stars': 'FF6B00',
    'Hay Day': 'FFD700',
    'Phone': '2196F3',
    'Messages': '4CAF50',
    'Contacts': '607D8B',
    'Clock': '2196F3',
    'Calendar': '4285F4',
    'Gmail': 'EA4335',
    'Threads': '000000',
    'Pinterest': 'BD081C',
    'Telegram X': '0088CC',
    'Instagram Lite': 'E4405F',
    'TikTok Lite': '000000',
    'eFootball PES': '003399',
    'GBWhatsApp': '25D366',
    'FMWhatsApp': '25D366',
    'Instagram Plus': 'E4405F'
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

function getDownloadButtonText(source) {
    if (source === 'playstore') {
        return '🏪 Google Play';
    } else if (source === 'apk') {
        return '📥 تحميل مباشر';
    }
    return 'تحميل';
}

function getDownloadButtonClass(source) {
    if (source === 'playstore') {
        return 'playstore-btn';
    } else if (source === 'apk') {
        return 'apk-btn';
    }
    return '';
}

function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.setAttribute('data-category', app.category);
    
    const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
    const imagePath = getImagePath(app.name);
    const defaultIcon = getDefaultIcon(app.name);
    const downloadText = getDownloadButtonText(app.downloadSource);
    const downloadClass = getDownloadButtonClass(app.downloadSource);
    
    card.innerHTML = `
        <img src="${imagePath || defaultIcon}" alt="${app.name}" class="app-icon"
             onerror="this.onerror=null; this.src='${defaultIcon}'" loading="lazy">
        <h3 class="app-name">${app.name}</h3>
        <div class="app-rating">${app.rating} ${stars}</div>
        <a href="${app.downloadLink}" class="download-btn ${downloadClass}" 
           target="_blank" rel="noopener noreferrer">${downloadText}</a>
    `;
    
    return card;
}

function createSliderCard(app) {
    const card = document.createElement('div');
    card.className = 'slider-card';
    
    const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
    const imagePath = getImagePath(app.name);
    const defaultIcon = getDefaultIcon(app.name);
    const downloadText = getDownloadButtonText(app.downloadSource);
    const downloadClass = getDownloadButtonClass(app.downloadSource);
    
    card.innerHTML = `
        <img src="${imagePath || defaultIcon}" alt="${app.name}" class="app-icon"
             style="width: 100px; height: 100px; margin: 0 auto 15px;"
             onerror="this.onerror=null; this.src='${defaultIcon}'">
        <h3 class="app-name">${app.name}</h3>
        <div class="app-rating">${app.rating} ${stars}</div>
        <a href="${app.downloadLink}" class="download-btn ${downloadClass}" 
           target="_blank" rel="noopener noreferrer">${downloadText}</a>
    `;
    
    return card;
}

function renderApps(apps) {
    const sliderContainer = document.getElementById('sliderContainer');
    const categoriesContainer = document.getElementById('categoriesContainer');
    
    if (!sliderContainer || !categoriesContainer) {
        console.error('Containers not found!');
        return;
    }
    
    sliderContainer.innerHTML = '';
    categoriesContainer.innerHTML = '';
    
    if (!apps || apps.length === 0) {
        categoriesContainer.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-color);">لا توجد تطبيقات للعرض</p>';
        return;
    }
    
    const featuredApps = apps.filter(app => app.isFeatured);
    featuredApps.forEach(app => {
        sliderContainer.appendChild(createSliderCard(app));
    });
    
    const appsByCategory = {};
    apps.forEach(app => {
        if (!app.isFeatured) {
            if (!appsByCategory[app.category]) {
                appsByCategory[app.category] = [];
            }
            appsByCategory[app.category].push(app);
        }
    });
    
    for (const [categoryKey, categoryApps] of Object.entries(appsByCategory)) {
        const categoryInfo = categories[categoryKey] || { name: categoryKey, icon: 'fa-box' };
        
        const section = document.createElement('div');
        section.className = 'category-section';
        section.setAttribute('data-category', categoryKey);
        
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
    console.log('🚀 CHELAT STORE - Page loaded successfully!');
    console.log('📱 Total apps:', appsData ? appsData.length : 0);
    
    if (typeof appsData !== 'undefined' && appsData.length > 0) {
        renderApps(appsData);
    } else {
        console.error('❌ appsData is not defined or empty');
        const appsGrid = document.getElementById('appsGrid') || document.getElementById('categoriesContainer');
        if (appsGrid) {
            appsGrid.innerHTML = '<p style="text-align: center; padding: 40px; color: red;">⚠️ خطأ: لم يتم تحميل البيانات</p>';
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
                const target = appsData.length;
                const increment = Math.ceil(target / 20);
                const interval = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        totalAppsEl.textContent = target + '+';
                        clearInterval(interval);
                    } else {
                        totalAppsEl.textContent = count + '+';
                    }
                }, 50);
            }
        }, { once: true });
    }
    
    // ==================== Scroll to Top Button ====================
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transition: all 0.3s;
    `;
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'scale(1.1)';
    });
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'scale(1)';
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    console.log('✅ All systems initialized successfully! 🎉');
});
