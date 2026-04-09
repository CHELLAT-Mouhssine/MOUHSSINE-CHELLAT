// ==================== CHELAT STORE - Main JavaScript ====================

const APPS_PER_PAGE = 20;
let currentPage = 1;
let filteredApps = [];
let currentCategory = 'all';

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ CHELAT STORE Starting...');
    
    // Check if appsData is loaded
    if (typeof appsData === 'undefined') {
        console.error('❌ apps-data.js not loaded!');
        alert('Error: apps-data.js not loaded!');
        return;
    }
    
    console.log('✅ appsData loaded:', appsData.length, 'apps');
    
    filteredApps = [...appsData];
    initializeApp();
});

function initializeApp() {
    console.log('🚀 Initializing app...');
    renderSlider();
    renderCategories();
    renderApps();
    setupSearch();
    console.log('✅ CHELAT STORE Loaded Successfully!');
}

// Render Slider
function renderSlider() {
    const sliderContainer = document.getElementById('sliderContainer');
    if (!sliderContainer) {
        console.error('❌ sliderContainer not found!');
        return;
    }
    
    const featuredApps = appsData.filter(app => app.isFeatured);
    console.log('🌟 Featured apps:', featuredApps.length);
    
    featuredApps.forEach(app => {
        const card = createSliderCard(app);
        sliderContainer.appendChild(card);
    });
}

function createSliderCard(app) {
    const card = document.createElement('div');
    card.className = 'slider-card';
    
    const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
    const finalLink = getFinalLink(app);
    const downloadText = app.downloadSource === 'playstore' ? '🏪 Google Play' : '📥 تحميل مباشر';
    const btnClass = app.downloadSource === 'playstore' ? 'playstore-btn' : 'apk-btn';
    
    card.innerHTML = `
        <div style="text-align:center; padding:20px;">
            <div style="font-size:60px; margin-bottom:10px;">📱</div>
            <h3 style="margin:10px 0;">${app.name}</h3>
            <div style="color:#ffa500; margin:10px 0;">${app.rating} ${stars}</div>
            <a href="${finalLink}" class="download-btn ${btnClass}" 
               target="_blank" rel="noopener noreferrer"
               style="display:inline-block; padding:10px 20px; border-radius:5px; 
                      text-decoration:none; color:white; margin:10px 0;">
                ${downloadText}
            </a>
        </div>
    `;
    
    return card;
}

// Render Categories
function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    const categories = {
        'all': 'الكل',
        'Social': 'التواصل الاجتماعي',
        'Games': 'الألعاب',
        'Music': 'الموسيقى',
        'Video': 'الفيديو',
        'Tools': 'الأدوات',
        'Shopping': 'التسوق',
        'Food': 'الطعام',
        'Finance': 'المالية',
        'News': 'الأخبار',
        'Health': 'الصحة',
        'Education': 'التعليم',
        'Entertainment': 'الترفيه',
        'Other': 'أخرى'
    };
    
    // All button
    const allBtn = createCategoryButton('all', 'الكل');
    container.appendChild(allBtn);
    
    // Other categories
    Object.keys(categories).forEach(key => {
        if (key !== 'all') {
            const count = appsData.filter(app => app.category === key).length;
            if (count > 0) {
                const btn = createCategoryButton(key, categories[key], count);
                container.appendChild(btn);
            }
        }
    });
}

function createCategoryButton(key, name, count = 0) {
    const btn = document.createElement('button');
    btn.className = 'category-btn' + (key === currentCategory ? ' active' : '');
    btn.setAttribute('data-category', key);
    btn.innerHTML = `${name} ${count > 0 ? `(${count})` : ''}`;
    btn.onclick = () => filterByCategory(key);
    return btn;
}

function filterByCategory(category) {
    currentCategory = category;
    
    // Update buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter apps
    if (category === 'all') {
        filteredApps = [...appsData];
    } else {
        filteredApps = appsData.filter(app => app.category === category);
    }
    
    currentPage = 1;
    const appsContainer = document.getElementById('appsContainer');
    if (appsContainer) {
        appsContainer.innerHTML = '';
    }
    renderApps();
}

// Render Apps
function renderApps() {
    const container = document.getElementById('appsContainer');
    if (!container) return;
    
    const start = (currentPage - 1) * APPS_PER_PAGE;
    const end = start + APPS_PER_PAGE;
    const appsToShow = filteredApps.slice(start, end);
    
    appsToShow.forEach(app => {
        const card = createAppCard(app);
        container.appendChild(card);
    });
    
    updateLoadMoreButton();
}

function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    
    const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));
    const finalLink = getFinalLink(app);
    const downloadText = app.downloadSource === 'playstore' ? '🏪 Google Play' : '📥 تحميل مباشر';
    const btnClass = app.downloadSource === 'playstore' ? 'playstore-btn' : 'apk-btn';
    
    card.innerHTML = `
        <div style="text-align:center; padding:15px;">
            <div style="font-size:50px; margin-bottom:10px;">📱</div>
            <h3 style="margin:10px 0; font-size:16px;">${app.name}</h3>
            <div style="color:#ffa500; margin:10px 0;">${app.rating} ${stars}</div>
            <div style="color:#888; font-size:12px; margin:5px 0;">${app.category}</div>
            <a href="${finalLink}" class="download-btn ${btnClass}" 
               target="_blank" rel="noopener noreferrer"
               style="display:inline-block; padding:8px 15px; border-radius:5px; 
                      text-decoration:none; color:white; margin:10px 0; font-size:14px;">
                ${downloadText}
            </a>
        </div>
    `;
    
    return card;
}

// Get Final Link (with waiting.html redirect)
function getFinalLink(app) {
    let finalLink = app.downloadLink;
    
    if (app.downloadLink.includes('play.google.com') || 
        app.downloadLink.includes('apkpure.com') || 
        app.downloadLink.includes('apkmirror.com') ||
        app.downloadLink.includes('playabledownloads.com')) {
        finalLink = `waiting.html?url=${encodeURIComponent(app.downloadLink)}&app=${encodeURIComponent(app.name)}`;
    }
    
    return finalLink;
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

// Search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
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
        const appsContainer = document.getElementById('appsContainer');
        if (appsContainer) {
            appsContainer.innerHTML = '';
        }
        renderApps();
    });
}

console.log('✅ main.js loaded!');
