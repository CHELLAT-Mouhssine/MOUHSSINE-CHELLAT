// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('sliderContainer');
    const appsGrid = document.getElementById('appsGrid');
    const searchInput = document.getElementById('searchInput');

    // دالة ذكية لتحويل اسم التطبيق إلى اسم الملف
    function getImageFileName(appName) {
        // قائمة التطابقات بين أسماء التطبيقات وأسماء الملفات
        const fileMap = {
            'Netflix': 'Netflix.png',
            'FIFA Mobile': 'Fifa.jpg',
            'PUBG Mobile': 'pubg_mobile.jpg',
            'Free Fire': 'freefire.jpg',
            'Call of Duty': 'call_of_duty.jpg',
            'Instagram': 'Instagram.jpg',
            'Telegram': 'Telegram.jpg',
            'Snapchat': 'snapchat.jpg',
            'TikTok': 'tiktok.webp',
            'YouTube Music': 'YouTube.jpg',
            'Spotify': 'Spotify.jpg',
            'Messenger': 'Messenger.jpg',
            'Google Translate': 'Google Translate.jpg',
            'Google Gemini': 'Google-Gemini.jpg',
            'Google Assistant': 'google_assistant.jpg',
            'Google Play': 'google_play.jpg',
            'ChatGPT': 'hatgpt.jpg',
            'Pinterest': 'Pinterest.jpg',
            'Shopify': 'Shopify.jpg',
            'Fiverr': 'Fiverr - Freelance Service.jpg',
            'Telegram X': 'telegram_x.jpg',
            'Instagram Lite': 'instagram_lite.jpg',
            'TikTok Lite': 'tiktok_lite.jpg',
            'Free Fire MAX': 'freefire_max.jpg',
            'Snake': 'Snake.jpg',
            'Temu': 'Temu.jpg',
            'Threads': 'Threads.jpg',
            'Khatma': 'Khatma.png',
            'Koora': 'Koora.jpg',
            'Ostoura': 'Ostoura.png',
            'Partshisi': 'Partshisi.png',
            'Picsart': 'Picsart.png',
            'Lightroom': 'LightroomideoEditor.png',
            'SnapTube': 'snaptube.png',
            'Quran': 'quran.png',
            'Salaat First': 'salaat_first.jpg',
            'Opera': 'opera.jpeg',
            'HatGPT': 'hatgpt.jpg'
        };

        return fileMap[appName] || null;
    }

    // دالة للتحقق من وجود الصورة
    function checkImageExists(fileName, callback) {
        if (!fileName) {
            callback(null);
            return;
        }
        
        const img = new Image();
        const path = `assets/images/icons/${fileName}`;
        
        img.onload = () => callback(path);
        img.onerror = () => callback(null);
        
        img.src = path;
    }

    // دالة إنشاء بطاقة التطبيق
    function createAppCard(app, callback) {
        const card = document.createElement('div');
        card.className = 'app-card';
        
        const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
        const defaultIcon = `https://ui-avatars.com/api/?name=${encodeURIComponent(app.name)}&background=2d3748&color=fff&size=80`;
        
        const fileName = getImageFileName(app.name);
        
        checkImageExists(fileName, (imagePath) => {
            const finalPath = imagePath || defaultIcon;
            
            card.innerHTML = `
                <img src="${finalPath}" 
                     alt="${app.name}" 
                     class="app-icon"
                     onerror="this.src='${defaultIcon}'">
                <h3 class="app-name">${app.name}</h3>
                <div class="app-rating">${app.rating} ${stars}</div>
                <a href="${app.downloadLink}" class="download-btn" target="_blank">تحميل</a>
            `;
            
            if (callback) callback();
        });
        
        return card;
    }

    // دالة إنشاء بطاقة السلايدر
    function createSliderCard(app) {
        const card = document.createElement('div');
        card.className = 'slider-card';
        
        const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
        const defaultIcon = `https://ui-avatars.com/api/?name=${encodeURIComponent(app.name)}&background=2d3748&color=fff&size=100`;
        
        const fileName = getImageFileName(app.name);
        
        checkImageExists(fileName, (imagePath) => {
            const finalPath = imagePath || defaultIcon;
            
            card.innerHTML = `
                <img src="${finalPath}" 
                     alt="${app.name}" 
                     class="app-icon"
                     style="width: 100px; height: 100px; margin: 0 auto 15px;"
                     onerror="this.src='${defaultIcon}'">
                <h3 class="app-name">${app.name}</h3>
                <div class="app-rating">${app.rating} ${stars}</div>
                <a href="${app.downloadLink}" class="download-btn" target="_blank">تحميل الآن</a>
            `;
        });
        
        return card;
    }

    // عرض التطبيقات
    function renderApps(apps) {
        sliderContainer.innerHTML = '';
        appsGrid.innerHTML = '';
        
        if (!apps || apps.length === 0) {
            appsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px;">لا توجد تطبيقات للعرض</p>';
            return;
        }

        let loadedCount = 0;
        const totalApps = apps.length;

        apps.forEach(app => {
            if (app.isSlider) {
                sliderContainer.appendChild(createSliderCard(app));
            }
            
            const card = createAppCard(app, () => {
                loadedCount++;
                if (loadedCount === totalApps) {
                    console.log('تم تحميل جميع التطبيقات');
                }
            });
            appsGrid.appendChild(card);
        });
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

    // عرض التطبيقات عند التحميل
    if (typeof appsData !== 'undefined') {
        renderApps(appsData);
    } else {
        console.error('ملف البيانات لم يتم تحميله');
        appsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #e53e3e; padding: 40px;">خطأ: لم يتم تحميل البيانات</p>';
    }
});
