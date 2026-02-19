import appsData from './apps-data.js';

// دالة بناء بطاقة التطبيق الاحترافية
const createAppCard = (app) => `
    <div class="app-card" data-id="${app.id}">
        <div class="rating-badge">★ ${app.rating}</div>
        <img src="${app.image}" alt="${app.name}" loading="lazy" onerror="this.src='assets/images/placeholder.png'">
        <h3>${app.name}</h3>
        <a href="${app.downloadLink}" class="download-btn">تحميل الآن</a>
    </div>
`;

// عرض التطبيقات في الشبكة
const renderApps = (apps) => {
    const grid = document.getElementById('appsGrid');
    if (grid) {
        grid.innerHTML = apps.map(app => createAppCard(app)).join('');
    }
};

// تشغيل المتجر وتطبيق الهوية البصرية من كود Qwen
document.addEventListener('DOMContentLoaded', () => {
    // تطبيق لون الخلفية الذي اخترته في ملف البيانات
    document.body.style.backgroundColor = 'hsla(219, 28%, 75%, 1)';
    
    // عرض الـ 44 تطبيقاً
    renderApps(appsData);

    // تفعيل البحث الذكي
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = appsData.filter(app => 
                app.name.toLowerCase().includes(term)
            );
            renderApps(filtered);
        });
    }
});
