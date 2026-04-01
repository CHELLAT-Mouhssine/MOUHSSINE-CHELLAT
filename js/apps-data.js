// ==================== CHELAT STORE - تطبيقات المتجر ====================
const appsData = [
    // SLIDER APPS
    { id: 1, name: "PUBG Mobile", rating: 4.7, downloadLink: "https://playabledownloads.com/1887045", downloadSource: "apk", category: "Games", isFeatured: true },
    { id: 2, name: "FIFA Mobile", rating: 4.9, downloadLink: "https://playabledownloads.com/1887045", downloadSource: "apk", category: "Games", isFeatured: true },
    { id: 3, name: "Netflix", rating: 4.8, downloadLink: "https://play.google.com/store/apps/details?id=com.netflix.mediaclient", downloadSource: "playstore", category: "Entertainment", isFeatured: true },
    
    // SOCIAL MEDIA
    { id: 4, name: "WhatsApp", rating: 4.5, downloadLink: "https://playabledownloads.com/1886833", downloadSource: "apk", category: "Social", isFeatured: false },
    { id: 5, name: "Instagram", rating: 4.6, downloadLink: "https://playabledownloads.com/1886833", downloadSource: "apk", category: "Social", isFeatured: false },
    { id: 6, name: "Telegram", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=org.telegram.messenger", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 7, name: "Snapchat", rating: 4.3, downloadLink: "https://playabledownloads.com/1886833", downloadSource: "apk", category: "Social", isFeatured: false },
    { id: 8, name: "TikTok", rating: 4.4, downloadLink: "https://playabledownloads.com/1886833", downloadSource: "apk", category: "Social", isFeatured: false },
    { id: 9, name: "Facebook", rating: 4.2, downloadLink: "https://playabledownloads.com/1886833", downloadSource: "apk", category: "Social", isFeatured: false },
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
    { id: 21, name: "Telegram X", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=org.thunderdog.challegram", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 22, name: "Instagram Lite", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.instagram.lite", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 23, name: "TikTok Lite", rating: 4.2, downloadLink: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically.go", downloadSource: "playstore", category: "Social", isFeatured: false },
    
    // GAMES
    { id: 24, name: "Free Fire", rating: 4.6, downloadLink: "https://playabledownloads.com/1886833", downloadSource: "apk", category: "Games", isFeatured: false },
    { id: 25, name: "Call of Duty", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 26, name: "Clash of Clans", rating: 4.8, downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 27, name: "Minecraft", rating: 4.9, downloadLink: "https://playabledownloads.com/1886833", downloadSource: "apk", category: "Games", isFeatured: false },
    { id: 28, name: "Roblox", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.roblox.client", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 29, name: "Among Us", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 30, name: "Subway Surfers", rating: 4.6, downloadLink: "https://playabledownloads.com/1886833", downloadSource: "apk", category: "Games", isFeatured: false },
    { id: 31, name: "Candy Crush", rating: 4.5, downloadLink: "https://playabledownloads.com/1886833", downloadSource: "apk", category: "Games", isFeatured: false },
    { id: 32, name: "eFootball PES", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=jp.konami.pesam", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 33, name: "8 Ball Pool", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.miniclip.eightballpool", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 34, name: "Ludo King", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.ludo.king", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 35, name: "Asphalt 9", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 36, name: "Snake", rating: 4.2, downloadLink: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysnake", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 37, name: "Free Fire MAX", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.dts.freefiremax", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 38, name: "Clash Royale", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.clashroyale", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 39, name: "Brawl Stars", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.brawlstars", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 40, name: "Hay Day", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.hayday", downloadSource: "playstore", category: "Games", isFeatured: false }
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
