import appsData from './apps-data.js';

// المحرك الرئيسي لعرض التطبيقات
const displayApps = (apps) => {
    const appsGrid = document.getElementById('appsGrid');
    appsGrid.innerHTML = apps.map(app => `
        <div class="app-card">
            <img src="${app.image}" alt="${app.name}" onerror="this.src='assets/images/placeholder.png'">
            <h3>${app.name}</h3>
            <p>${app.category}</p>
            <a href="${app.link}" class="download-btn">تحميل الآن</a>
        </div>
    `).join('');
};

// نظام البحث المتطور
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredApps = appsData.filter(app => 
        app.name.toLowerCase().includes(searchTerm)
    );
    displayApps(filteredApps);
});

// تشغيل المتجر عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    displayApps(appsData);
});

