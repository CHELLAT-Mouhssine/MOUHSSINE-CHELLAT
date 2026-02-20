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
        // ============ Sidebar Functionality ============
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');

console.log('Menu Toggle:', menuToggle);
console.log('Sidebar:', sidebar);

function openSidebar() {
    if (sidebar) {
        sidebar.classList.add('active');
        console.log('Sidebar opened');
    }
    if (sidebarOverlay) {
        sidebarOverlay.classList.add('active');
    }
    document.body.classList.add('sidebar-open');
}

function closeSidebar() {
    if (sidebar) {
        sidebar.classList.remove('active');
        console.log('Sidebar closed');
    }
    if (sidebarOverlay) {
        sidebarOverlay.classList.remove('active');
    }
    document.body.classList.remove('sidebar-open');
}

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Menu button clicked');
        openSidebar();
    });
}

if (sidebarClose) {
    sidebarClose.addEventListener('click', () => {
        console.log('Close button clicked');
        closeSidebar();
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
        console.log('Overlay clicked');
        closeSidebar();
    });
}

// إغلاق القائمة عند الضغط على Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// منع إغلاق القائمة عند النقر داخلها
if (sidebar) {
    sidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// إغلاق القائمة عند النقر على أي رابط
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(closeSidebar, 300);
    });
});
