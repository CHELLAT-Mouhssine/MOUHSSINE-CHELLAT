// ==================== CHELAT STORE - تطبيقات المتجر ====================
const appsData = [
    // ==================== SLIDER APPS ====================
    { id: 1, name: "PUBG Mobile", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.tencent.ig", downloadSource: "playstore", category: "Games", isFeatured: true },
    { id: 2, name: "FIFA Mobile", rating: 4.9, downloadLink: "https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile", downloadSource: "playstore", category: "Games", isFeatured: true },
    { id: 3, name: "Netflix", rating: 4.8, downloadLink: "https://play.google.com/store/apps/details?id=com.netflix.mediaclient", downloadSource: "playstore", category: "Entertainment", isFeatured: true },
    
    // ==================== SOCIAL MEDIA ====================
    { id: 4, name: "WhatsApp", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.whatsapp", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 5, name: "Instagram", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.instagram.android", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 6, name: "Telegram", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=org.telegram.messenger", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 7, name: "Snapchat", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.snapchat.android", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 8, name: "TikTok", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 9, name: "Facebook", rating: 4.2, downloadLink: "https://play.google.com/store/apps/details?id=com.facebook.katana", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 10, name: "Messenger", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.facebook.orca", downloadSource: "playstore", category: "Social", isFeatured: false },
    
    // أكمل باقي التطبيقات كما أرسلت لك سابقاً...
    // (اختصاراً للرسالة، حط جميع التطبيقات الـ 120)
];

// ==================== تصنيفات الفئات ====================
const categories = {
    "Social": { name: "💬 التواصل الاجتماعي", icon: "fa-comments" },
    "Games": { name: "🎮 الألعاب", icon: "fa-gamepad" },
    "Music": { name: "🎵 الموسيقى", icon: "fa-music" },
    "Video": { name: "🎬 الفيديو", icon: "fa-video" },
    "Streaming": { name: "📺 البث المباشر", icon: "fa-tv" },
    "Tools": { name: "🛠️ الأدوات", icon: "fa-tools" },
    "Shopping": { name: "🛒 التسوق", icon: "fa-shopping-cart" },
    "Food": { name: "🍔 الطعام والتوصيل", icon: "fa-utensils" },
    "Finance": { name: "💰 المالية", icon: "fa-coins" },
    "News": { name: "📰 الأخبار", icon: "fa-newspaper" },
    "Health": { name: "💪 الصحة واللياقة", icon: "fa-heartbeat" },
    "Education": { name: "📚 التعليم", icon: "fa-graduation-cap" },
    "Design": { name: "🎨 التصميم", icon: "fa-palette" },
    "Navigation": { name: "🗺️ الملاحة", icon: "fa-map-marked-alt" },
    "Travel": { name: "✈️ السفر", icon: "fa-plane" },
    "Security": { name: "🔒 الأمان", icon: "fa-shield-alt" },
    "Religious": { name: "🕌 ديني", icon: "fa-kaaba" },
    "AI": { name: "🤖 الذكاء الاصطناعي", icon: "fa-robot" },
    "Entertainment": { name: "🎭 الترفيه", icon: "fa-film" },
    "Other": { name: "📦 أخرى", icon: "fa-box" }
};

console.log('✅ CHELAT STORE Loaded:', appsData.length, 'apps');
