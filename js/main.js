// الانتظار حتى تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const data = window.CHELAT_STORE_DATA;
    
    // 1. تطبيق لون الهوية البصرية تلقائياً
    document.body.style.backgroundColor = data.VISUAL_IDENTITY.backgroundColor;
    
    // 2. عرض التطبيقات في الشبكة
    const appsGrid = document.getElementById('appsGrid');
    if(appsGrid) {
        appsGrid.innerHTML = data.appsData.map(app => `
            <div class="app-card">
                <div class="rating">★ ${app.rating}</div>
                <img src="${app.image}" alt="${app.name}" onerror="this.src='assets/images/placeholder.png'">
                <h3>${app.name}</h3>
                <a href="${app.downloadLink}" class="download-btn">تحميل</a>
            </div>
        `).join('');
    }
});
