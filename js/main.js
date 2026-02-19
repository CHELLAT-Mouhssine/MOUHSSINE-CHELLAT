// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('sliderContainer');
    const appsGrid = document.getElementById('appsGrid');
    const searchInput = document.getElementById('searchInput');

    // دالة ذكية للتحقق من وجود الصورة بصيغ مختلفة
    // تقوم بمحاولة تحميل الصورة، وإذا لم تنجح، تجرب الصيغة التالية
    function resolveImageExtension(appName, callback) {
        const baseName = `assets/images/icons/${appName}`;
        const extensions = ['.png', '.jpg', '.webp']; // الترتيب حسب الأولوية
        let currentExtIndex = 0;

        function tryNextExtension() {
            if (currentExtIndex >= extensions.length) {
                // إذا فشلت كل المحاولات، نستخدم صورة افتراضية
                callback(`${baseName}.png`); // أو صورة placeholder
                return;
            }

            const img = new Image();
            const src = baseName + extensions[currentExtIndex];
            
            img.onload = () => {
                callback(src); // تم العثور على الصورة
            };
            
            img.onerror = () => {
                currentExtIndex++;
                tryNextExtension(); // تجربة الامتداد التالي
            };
            
            img.src = src;
        }

        tryNextExtension();
    }

    // دالة إنشاء بطاقة التطبيق
    function createAppCard(app) {
        const card = document.createElement('div');
        card.className = 'app-card';

        // إعدادات النجوم للتقييم
        const stars = '★'.repeat(Math.floor(app.rating)) + '☆'.repeat(5 - Math.floor(app.rating));

        // نحتاج لإيجاد مسار الصورة الصحيح قبل عرض البطاقة
        // ملاحظة: بما أننا نستخدم صور وهمية في الكود، سنستخدم اسم التطبيق كاسم للصورة
        // في الواقع، يجب أن تكون الصور في مجلد assets/images/icons/
        
        const imgElement = document.createElement('img');
        imgElement.className = 'app-icon';
        imgElement.alt = app.name;
        
        // استدعاء الدالة الذكية للصور
        resolveImageExtension(app.name, (finalSrc) => {
            imgElement.src = finalSrc;
        });

        card.innerHTML = `
            <h3 class="app-name">${app.name}</h3>
            <div class="app-rating">${app.rating} ${stars}</div>
            <a href="${app.downloadLink}" class="download-btn" target="_blank">تحميل</a>
        `;

        // إدراج الصورة في بداية البطاقة
        card.insertBefore(imgElement, card.firstChild);

        return card;
    }

    // دالة إنشاء بطاقة السلايدر (أكبر قليلاً)
    function createSliderCard(app) {
        const card = document.createElement('div');
        card.className = 'slider-card';
        
        const imgElement = document.createElement('img');
        imgElement.className = 'app-icon';
        imgElement.style.width = "100px"; // أيقونة أكبر في السلايدر
        imgElement.style.height = "100px";
        
        resolveImageExtension(app.name, (finalSrc) => {
            imgElement.src = finalSrc;
        });

        card.innerHTML = `
            <h3 class="app-name">${app.name}</h3>
            <div class="app-rating">${app.rating} ★</div>
            <a href="${app.downloadLink}" class="download-btn" target="_blank">تحميل الآن</a>
        `;
        card.insertBefore(imgElement, card.firstChild);
        return card;
    }

    // عرض البيانات
    function renderApps(apps) {
        sliderContainer.innerHTML = '';
        appsGrid.innerHTML = '';

        apps.forEach(app => {
            if (app.isSlider) {
                sliderContainer.appendChild(createSliderCard(app));
            }
            // عرض جميع التطبيقات في الشبكة (بما فيهم المميزة)
            appsGrid.appendChild(createAppCard(app));
        });
    }

    // البحث
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredApps = appsData.filter(app => 
            app.name.toLowerCase().includes(searchTerm)
        );
        renderApps(filteredApps);
    });

    // التشغيل الأولي
    renderApps(appsData);
});
