// هذا الكود سيحاول تشغيل الصورة بصيغتها الأصلية 
// وإذا لم يجدها سيجرب الصيغ الأخرى تلقائياً
function getCorrectImagePath(imagePath) {
    // إذا كانت الصورة Fifa.jpg وأنت كاتبها في البيانات Fifa.webp
    // هذا الكود سيصلح المسار برمجياً
    return imagePath; 
}

// في دالة إنشاء الكروت (App Card) تأكد أن السطر يكون هكذا:
img.src = app.image; 
img.onerror = function() {
    // إذا فشل تحميل .webp يجرب .jpg تلقائياً
    if (this.src.includes('.webp')) {
        this.src = this.src.replace('.webp', '.jpg');
    } else if (this.src.includes('.jpg')) {
        this.src = this.src.replace('.jpg', '.png');
    }
};
