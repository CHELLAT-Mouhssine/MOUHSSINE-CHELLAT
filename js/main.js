// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('sliderContainer');
    const appsGrid = document.getElementById('appsGrid');
    const searchInput = document.getElementById('searchInput');

    // دالة لإنشاء مسار الصورة مع تجربة امتدادات مختلفة
    function getImagePath(appName) {
        const extensions = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
        for (let ext of extensions) {
            const path = `assets/images/icons/${appName}.${ext}`;
            // نعود المسار مباشرة، وسنتعامل مع الخطأ في onerror
            if (ext === 'png') return path; // نبدأ بـ PNG كافتراضي
        }
        return `assets/images/icons/${appName}.png`;
    }

    // دالة إنشاء بطاقة التطبيق
    function createAppCard(app) {
        const card = document.createElement('div');
        card.className = 'app-card';
        
        const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
        
        const imagePath = getImagePath(app.name);
        
        card.innerHTML = `
            <img src="${imagePath}" 
                 alt="${app.name}" 
                 class="app-icon"
                 onerror="this.src='https://via.placeholder.com/80?text=${app.name.charAt(0)}'">
            <h3 class="app-name">${app.name}</h3>
            <div class="app-rating">${app.rating} ${stars}</div>
            <a href="${app.downloadLink}" class="download-btn" target="_blank">تحميل</a>
        `;
        
        return card;
    }

    // دالة إنشاء بطاقة السلايدر
    function createSliderCard(app) {
        const card = document.createElement('div');
        card.className = 'slider-card';
        
        const imagePath = getImagePath(app.name);
        
        card.innerHTML = `
            <img src="${imagePath}" 
                 alt="${app.name}" 
                 class="app-icon"
                 style="width: 100px; height: 100px;"
                 onerror="this.src='https://via.placeholder.com/100?text=${app.name.charAt(0)}'">
            <h3 class="app-name">${app.name}</h3>
            <div class="app-rating">${app.rating} ★</div>
            <a href="${app.downloadLink}" class="download-btn" target="_blank">تحميل الآن</a>
        `;
        
        return card;
    }

    // عرض التطبيقات
    function renderApps(apps) {
        sliderContainer.innerHTML = '';
        appsGrid.innerHTML = '';
        
        if (!apps || apps.length === 0) {
            appsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">لا توجد تطبيقات للعرض</p>';
            return;
        }

        apps.forEach(app => {
            if (app.isSlider) {
                sliderContainer.appendChild(createSliderCard(app));
            }
            appsGrid.appendChild(createAppCard(app));
        });
        
        console.log(`تم عرض ${apps.length} تطبيق`);
    }

    // البحث
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const filteredApps = appsData.filter(app => 
            app.name.toLowerCase().includes(searchTerm)
        );
        renderApps(filteredApps);
    });

    // عرض التطبيقات عند التحميل
    try {
        if (typeof appsData !== 'undefined') {
            renderApps(appsData);
        } else {
            console.error('ملف البيانات apps-data.js لم يتم تحميله');
            appsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: red;">خطأ: لم يتم تحميل البيانات</p>';
        }
    } catch (error) {
        console.error('خطأ في عرض التطبيقات:', error);
        appsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: red;">حدث خطأ في تحميل التطبيقات</p>';
    }
});
