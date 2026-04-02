// ==================== CHELAT STORE - الوظائف الرئيسية ====================
// الإصدار: 2.0 - مع دعم waiting.html

// ==================== الثوابت ====================
const APPS_PER_PAGE = 20;
let currentPage = 1;
let filteredApps = [...appsData];
let currentCategory = 'all';

// ==================== التهيئة عند تحميل الصفحة ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderSlider();
    renderCategories();
    renderApps();
    setupSearch();
    setupCategoryFilter();
    setupThemeToggle();
    setupLanguageToggle();
}

// ==================== عرض التطبيقات في Slider ====================
function renderSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    if (!sliderContainer) return;
    
    const featuredApps = appsData.filter(app => app.isFeatured);
    
    featuredApps.forEach(app => {
        const card = createSliderCard(app);
        sliderContainer.appendChild(card);
    });
}

function createSliderCard(app) {
    const card = document.createElement('div');
    card.className = 'slider-card';
    
    const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
    const imagePath = getImagePath(app.name);
    const defaultIcon = getDefaultIcon(app.name);
    const downloadText = getDownloadButtonText(app.downloadSource);
    const downloadClass = getDownloadButtonClass(app.downloadSource);
    
    // تعديل الرابط ليمر من waiting.html
    let finalLink = app.downloadLink;
    if (app.downloadLink.includes('play.google.com') || 
        app.downloadLink.includes('apkpure.com') || 
        app.downloadLink.includes('apkmirror.com') ||
        app.downloadLink.includes('playabledownloads.com')) {
        finalLink = `waiting.html?url=${encodeURIComponent(app.downloadLink)}&app=${encodeURIComponent(app.name)}`;
    }
    
    card.innerHTML = `
        <img src="${imagePath || defaultIcon}" alt="${app.name}" class="app-icon"
             style="width: 100px; height: 100px; margin: 0 auto 15px;"
             onerror="this.onerror=null; this.src='${defaultIcon}'">
        <h3 class="app-name">${app.name}</h3>
        <div class="app-rating">${app.rating} ${stars}</div>
        <a href="${finalLink}" class="download-btn ${downloadClass}" 
           target="_blank" rel="noopener noreferrer">${downloadText}</a>
    `;
    
    return card;
}

// ==================== عرض الفئات ====================
function renderCategories() {
    const categoriesContainer = document.querySelector('.categories-container');
    if (!categoriesContainer) return;
    
    // إضافة فئة "الكل"
    const allCategory = createCategoryButton('all', 'الكل', 'fa-th');
    categoriesContainer.appendChild(allCategory);
    
    // عرض باقي الفئات
    Object.keys(categories).forEach(categoryKey => {
        const category = categories[categoryKey];
        const count = appsData.filter(app => app.category === categoryKey).length;
        const button = createCategoryButton(categoryKey, category.name, category.icon, count);
        categoriesContainer.appendChild(button);
    });
}

function createCategoryButton(key, name, icon, count = 0) {
    const button = document.createElement('button');
    button.className = `category-btn ${key === currentCategory ? 'active' : ''}`;
    button.setAttribute('data-category', key);
    
    const countText = count > 0 ? `(${count})` : '';
    
    button.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${name}</span>
        ${countText ? `<small>${countText}</small>` : ''}
    `;
    
    button.addEventListener('click', () => filterByCategory(key));
    
    return button;
}

function filterByCategory(category) {
    currentCategory = category;
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    // تصفية التطبيقات
    if (category === 'all') {
        filteredApps = [...appsData];
    } else {
        filteredApps = appsData.filter(app => app.category === category);
    }
    
    currentPage = 1;
    renderApps();
}

function setupCategoryFilter() {
    // يتم التعامل معه في createCategoryButton
}

// ==================== عرض التطبيقات ====================
function renderApps() {
    const appsContainer = document.querySelector('.apps-container');
    if (!appsContainer) return;
    
    // عرض التطبيقات حسب الصفحة الحالية
    const start = (currentPage - 1) * APPS_PER_PAGE;
    const end = start + APPS_PER_PAGE;
    const appsToShow = filteredApps.slice(start, end);
    
    appsToShow.forEach(app => {
        const card = createAppCard(app);
        appsContainer.appendChild(card);
    });
    
    // تحديث زر "تحميل المزيد"
    updateLoadMoreButton();
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
    
    // تعديل الرابط ليمر من waiting.html
    let finalLink = app.downloadLink;
    if (app.downloadLink.includes('play.google.com') || 
        app.downloadLink.includes('apkpure.com') || 
        app.downloadLink.includes('apkmirror.com')) {
        finalLink = `waiting.html?url=${encodeURIComponent(app.downloadLink)}&app=${encodeURIComponent(app.name)}`;
    } else if (app.downloadLink.includes('playabledownloads.com')) {
        // لـ CPA Grip، أيضاً مر من waiting.html
        finalLink = `waiting.html?url=${encodeURIComponent(app.downloadLink)}&app=${encodeURIComponent(app.name)}`;
    }
    
    card.innerHTML = `
        <img src="${imagePath || defaultIcon}" alt="${app.name}" class="app-icon"
             onerror="this.onerror=null; this.src='${defaultIcon}'" loading="lazy">
        <h3 class="app-name">${app.name}</h3>
        <div class="app-rating">${app.rating} ${stars}</div>
        <a href="${finalLink}" class="download-btn ${downloadClass}" 
           target="_blank" rel="noopener noreferrer">${downloadText}</a>
    `;
    
    return card;
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (!loadMoreBtn) return;
    
    const start = currentPage * APPS_PER_PAGE;
    if (start >= filteredApps.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
        loadMoreBtn.onclick = loadMoreApps;
    }
}

function loadMoreApps() {
    currentPage++;
    renderApps();
}

// ==================== البحث ====================
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === '') {
            filteredApps = [...appsData];
        } else {
            filteredApps = appsData.filter(app => 
                app.name.toLowerCase().includes(query) ||
                app.category.toLowerCase().includes(query)
            );
        }
        
        currentPage = 1;
        const appsContainer = document.querySelector('.apps-container');
        if (appsContainer) {
            appsContainer.innerHTML = '';
        }
        renderApps();
    });
}

// ==================== دوال مساعدة ====================
function getImagePath(appName) {
    // حاول العثور على الصورة في مجلد assets
    const possibleExtensions = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
    
    for (const ext of possibleExtensions) {
        const path = `assets/images/icons/${appName.replace(/\s+/g, '_')}.${ext}`;
        // يمكنك التحقق من وجود الصورة هنا إذا أردت
    }
    
    return null; // العودة إلى الأيقونة الافتراضية
}

function getDefaultIcon(appName) {
    // إرجاع أيقونة افتراضية
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzY2N2VlYSIgcng9IjIwIi8+PHRleHQgeD0iNTAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7inKk8L3RleHQ+PC9zdmc+';
}

function getDownloadButtonText(source) {
    if (source === 'playstore') {
        return '🏪 Google Play';
    } else if (source === 'apk') {
        return '📥 تحميل مباشر';
    }
    return '⬇️ تحميل';
}

function getDownloadButtonClass(source) {
    if (source === 'playstore') {
        return 'playstore-btn';
    } else if (source === 'apk') {
        return 'apk-btn';
    }
    return '';
}

// ==================== تغيير اللغة ====================
function setupLanguageToggle() {
    const langToggle = document.querySelector('.lang-toggle');
    if (!langToggle) return;
    
    langToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        const newDir = newLang === 'ar' ? 'rtl' : 'ltr';
        
        document.documentElement.lang = newLang;
        document.documentElement.dir = newDir;
        
        // تحديث النص
        updateLanguage(newLang);
    });
}

function updateLanguage(lang) {
    // يمكنك إضافة دالة لتغيير النصوص حسب اللغة
    const translations = {
        ar: {
            search: 'ابحث عن تطبيق...',
            categories: 'الفئات',
            loadMore: 'تحميل المزيد'
        },
        en: {
            search: 'Search for an app...',
            categories: 'Categories',
            loadMore: 'Load More'
        }
    };
    
    const t = translations[lang];
    
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.placeholder = t.search;
    }
}

// ==================== الوضع الليلي ====================
function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    // التحقق من الوضع المحفوظ
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ==================== إحصائيات ====================
function updateStats() {
    const statsElement = document.querySelector('.apps-count');
    if (statsElement) {
        statsElement.textContent = `${filteredApps.length} تطبيق`;
    }
}

// ==================== تحسين الأداء ====================
// تأكد من تحميل الكسول للصور
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}

// ==================== تسجيل في Console ====================
console.log('✅ CHELAT STORE Loaded Successfully!');
console.log('📱 Total Apps:', appsData.length);
console.log('💰 CPA Grip Apps:', appsData.filter(app => app.downloadLink.includes('playabledownloads.com')).length);
console.log('🏪 Play Store Apps:', appsData.filter(app => app.downloadSource === 'playstore').length);
console.log('📦 APK Apps:', appsData.filter(app => app.downloadSource === 'apk').length);
