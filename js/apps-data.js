// ==================== CHELAT STORE - تطبيقات المتجر ====================
// الإصدار: 3.0 - مع روابط التحميل

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
    { id: 11, name: "Twitter", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.twitter.android", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 12, name: "LinkedIn", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.linkedin.android", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 13, name: "Pinterest", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.pinterest", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 14, name: "Threads", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.instagram.barcelona", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 15, name: "Discord", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.discord", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 16, name: "Reddit", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.reddit.frontpage", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 17, name: "Viber", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.viber.voip", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 18, name: "IMO", rating: 4.2, downloadLink: "https://play.google.com/store/apps/details?id=com.imo.android.imoim", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 19, name: "Line", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=jp.naver.line.android", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 20, name: "WeChat", rating: 4.1, downloadLink: "https://play.google.com/store/apps/details?id=com.tencent.mm", downloadSource: "playstore", category: "Social", isFeatured: false },
    
    // ==================== GAMES ====================
    { id: 21, name: "Free Fire", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.dts.freefireth", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 22, name: "Call of Duty", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 23, name: "Clash of Clans", rating: 4.8, downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 24, name: "Minecraft", rating: 4.9, downloadLink: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 25, name: "Roblox", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.roblox.client", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 26, name: "Among Us", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 27, name: "Subway Surfers", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 28, name: "Candy Crush", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 29, name: "8 Ball Pool", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.miniclip.eightballpool", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 30, name: "Ludo King", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.ludo.king", downloadSource: "playstore", category: "Games", isFeatured: false },
    
    // ==================== MUSIC & VIDEO ====================
    { id: 31, name: "Spotify", rating: 4.8, downloadLink: "https://play.google.com/store/apps/details?id=com.spotify.music", downloadSource: "playstore", category: "Music", isFeatured: false },
    { id: 32, name: "YouTube Music", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.music", downloadSource: "playstore", category: "Music", isFeatured: false },
    { id: 33, name: "SoundCloud", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.soundcloud.android", downloadSource: "playstore", category: "Music", isFeatured: false },
    { id: 34, name: "VLC Player", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=org.videolan.vlc", downloadSource: "playstore", category: "Video", isFeatured: false },
    { id: 35, name: "MX Player", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.mxtech.videoplayer.ad", downloadSource: "playstore", category: "Video", isFeatured: false },
    
    // ==================== TOOLS ====================
    { id: 36, name: "Google Chrome", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.android.chrome", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 37, name: "Google Translate", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.translate", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 38, name: "Google Drive", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.docs", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 39, name: "Google Photos", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.photos", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 40, name: "Google Maps", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 41, name: "CamScanner", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.intsig.camscanner", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 42, name: "SHAREit", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps", downloadSource: "playstore", category: "Tools", isFeatured: false },
    
    // ==================== SHOPPING ====================
    { id: 43, name: "Amazon", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    { id: 44, name: "AliExpress", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.alibaba.aliexpresshd", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    { id: 45, name: "Jumia", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.jumia.android", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    { id: 46, name: "eBay", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.ebay.mobile", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    
    // ==================== FOOD & DELIVERY ====================
    { id: 47, name: "Uber Eats", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.ubercab.eats", downloadSource: "playstore", category: "Food", isFeatured: false },
    { id: 48, name: "Glovo", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.glovo", downloadSource: "playstore", category: "Food", isFeatured: false },
    
    // ==================== FINANCE ====================
    { id: 49, name: "PayPal", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.paypal.android.p2pmobile", downloadSource: "playstore", category: "Finance", isFeatured: false },
    { id: 50, name: "Binance", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.binance.dev", downloadSource: "playstore", category: "Finance", isFeatured: false }
];

// ==================== تصنيفات الفئات ====================
const categories = {
    "Social": { name: "💬 التواصل الاجتماعي", icon: "fa-comments" },
    "Games": { name: "🎮 الألعاب", icon: "fa-gamepad" },
    "Music": { name: "🎵 الموسيقى", icon: "fa-music" },
    "Video": { name: "🎬 الفيديو", icon: "fa-video" },
    "Tools": { name: "🛠️ الأدوات", icon: "fa-tools" },
    "Shopping": { name: "🛒 التسوق", icon: "fa-shopping-cart" },
    "Food": { name: "🍔 الطعام والتوصيل", icon: "fa-utensils" },
    "Finance": { name: "💰 المالية", icon: "fa-coins" },
    "Entertainment": { name: "🎭 الترفيه", icon: "fa-film" },
    "Other": { name: "📦 أخرى", icon: "fa-box" }
};

console.log('✅ CHELAT STORE Loaded:', appsData.length, 'apps');
