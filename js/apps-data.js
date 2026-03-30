// ==================== CHELAT STORE - تطبيقات المتجر ====================
// الإصدار: 3.0 - 120 تطبيق مع روابط التحميل

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
    { id: 21, name: "Telegram X", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=org.thunderdog.challegram", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 22, name: "Instagram Lite", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.instagram.lite", downloadSource: "playstore", category: "Social", isFeatured: false },
    { id: 23, name: "TikTok Lite", rating: 4.2, downloadLink: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically.go", downloadSource: "playstore", category: "Social", isFeatured: false },
    
    // ==================== GAMES ====================
    { id: 24, name: "Free Fire", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.dts.freefireth", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 25, name: "Call of Duty", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 26, name: "Clash of Clans", rating: 4.8, downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 27, name: "Minecraft", rating: 4.9, downloadLink: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 28, name: "Roblox", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.roblox.client", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 29, name: "Among Us", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 30, name: "Subway Surfers", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 31, name: "Candy Crush", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 32, name: "eFootball PES", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=jp.konami.pesam", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 33, name: "8 Ball Pool", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.miniclip.eightballpool", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 34, name: "Ludo King", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.ludo.king", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 35, name: "Asphalt 9", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 36, name: "Snake", rating: 4.2, downloadLink: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysnake", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 37, name: "Free Fire MAX", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.dts.freefiremax", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 38, name: "Clash Royale", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.clashroyale", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 39, name: "Brawl Stars", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.brawlstars", downloadSource: "playstore", category: "Games", isFeatured: false },
    { id: 40, name: "Hay Day", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.supercell.hayday", downloadSource: "playstore", category: "Games", isFeatured: false },
    
    // ==================== MUSIC & VIDEO ====================
    { id: 41, name: "Spotify", rating: 4.8, downloadLink: "https://play.google.com/store/apps/details?id=com.spotify.music", downloadSource: "playstore", category: "Music", isFeatured: false },
    { id: 42, name: "YouTube Music", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.music", downloadSource: "playstore", category: "Music", isFeatured: false },
    { id: 43, name: "SoundCloud", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.soundcloud.android", downloadSource: "playstore", category: "Music", isFeatured: false },
    { id: 44, name: "Deezer", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=deezer.android.app", downloadSource: "playstore", category: "Music", isFeatured: false },
    { id: 45, name: "VLC Player", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=org.videolan.vlc", downloadSource: "playstore", category: "Video", isFeatured: false },
    { id: 46, name: "MX Player", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.mxtech.videoplayer.ad", downloadSource: "playstore", category: "Video", isFeatured: false },
    { id: 47, name: "InShot", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.camerasideas.instashot", downloadSource: "playstore", category: "Video", isFeatured: false },
    { id: 48, name: "KineMaster", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.nexstreaming.app.kinemasterfree", downloadSource: "playstore", category: "Video", isFeatured: false },
    
    // ==================== STREAMING ====================
    { id: 49, name: "Shahid", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=mbc.shahid", downloadSource: "playstore", category: "Streaming", isFeatured: false },
    { id: 50, name: "OSN+", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.osn.plus", downloadSource: "playstore", category: "Streaming", isFeatured: false },
    { id: 51, name: "beIN CONNECT", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.bein.sports", downloadSource: "playstore", category: "Streaming", isFeatured: false },
    
    // ==================== TOOLS & PRODUCTIVITY ====================
    { id: 52, name: "Google Translate", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.translate", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 53, name: "Google Chrome", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.android.chrome", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 54, name: "Microsoft Office", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.microsoft.office.officehubrow", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 55, name: "Adobe Acrobat", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.adobe.reader", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 56, name: "CamScanner", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.intsig.camscanner", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 57, name: "Dropbox", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.dropbox.android", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 58, name: "Google Drive", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.docs", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 59, name: "Google Photos", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.photos", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 60, name: "Firefox", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=org.mozilla.firefox", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 61, name: "Brave Browser", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.brave.browser", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 62, name: "SHAREit", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 63, name: "Truecaller", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.truecaller", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 64, name: "Flashlight", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.surpax.ledflashlight.panel", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 65, name: "Calculator", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.calculator", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 66, name: "Google Play", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.android.vending", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 67, name: "Google Pay", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 68, name: "Google Maps", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 69, name: "UC Browser", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.UCMobile.intl", downloadSource: "playstore", category: "Tools", isFeatured: false },
    { id: 70, name: "Opera", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.opera.browser", downloadSource: "playstore", category: "Tools", isFeatured: false },
    
    // ==================== SHOPPING ====================
    { id: 71, name: "Amazon", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    { id: 72, name: "AliExpress", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.alibaba.aliexpresshd", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    { id: 73, name: "Noon", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.noon.egypt", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    { id: 74, name: "Jumia", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.jumia.android", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    { id: 75, name: "Temu", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.einnovation.temu", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    { id: 76, name: "Shopify", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.shopify.mobile", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    { id: 77, name: "eBay", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.ebay.mobile", downloadSource: "playstore", category: "Shopping", isFeatured: false },
    
    // ==================== FOOD & DELIVERY ====================
    { id: 78, name: "Uber Eats", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.ubercab.eats", downloadSource: "playstore", category: "Food", isFeatured: false },
    { id: 79, name: "Talabat", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.talabat", downloadSource: "playstore", category: "Food", isFeatured: false },
    { id: 80, name: "Glovo", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.glovo", downloadSource: "playstore", category: "Food", isFeatured: false },
    { id: 81, name: "Mrsool", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.mrsool.consumer", downloadSource: "playstore", category: "Food", isFeatured: false },
    
    // ==================== FINANCE ====================
    { id: 82, name: "PayPal", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.paypal.android.p2pmobile", downloadSource: "playstore", category: "Finance", isFeatured: false },
    { id: 83, name: "Binance", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.binance.dev", downloadSource: "playstore", category: "Finance", isFeatured: false },
    { id: 84, name: "Western Union", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.westernunion.moneytransferr3app.android", downloadSource: "playstore", category: "Finance", isFeatured: false },
    { id: 85, name: "Coinbase", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.coinbase.android", downloadSource: "playstore", category: "Finance", isFeatured: false },
    
    // ==================== NEWS ====================
    { id: 86, name: "Sky News Arabia", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.skynewsarabia.android", downloadSource: "playstore", category: "News", isFeatured: false },
    { id: 87, name: "Al Arabiya", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=net.alarabiya.alarabiya", downloadSource: "playstore", category: "News", isFeatured: false },
    
    // ==================== HEALTH & FITNESS ====================
    { id: 88, name: "MyFitnessPal", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.myfitnesspal.android", downloadSource: "playstore", category: "Health", isFeatured: false },
    { id: 89, name: "Nike Training", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.nike.ntc", downloadSource: "playstore", category: "Health", isFeatured: false },
    { id: 90, name: "Strava", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.strava", downloadSource: "playstore", category: "Health", isFeatured: false },
    
    // ==================== EDUCATION ====================
    { id: 91, name: "Duolingo", rating: 4.8, downloadLink: "https://play.google.com/store/apps/details?id=com.duolingo", downloadSource: "playstore", category: "Education", isFeatured: false },
    { id: 92, name: "Khan Academy", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=org.khanacademy.android", downloadSource: "playstore", category: "Education", isFeatured: false },
    { id: 93, name: "Udemy", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.udemy.android", downloadSource: "playstore", category: "Education", isFeatured: false },
    
    // ==================== DESIGN & CREATIVITY ====================
    { id: 94, name: "Canva", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.canva.editor", downloadSource: "playstore", category: "Design", isFeatured: false },
    { id: 95, name: "Picsart", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.picsart.studio", downloadSource: "playstore", category: "Design", isFeatured: false },
    { id: 96, name: "Adobe Photoshop", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.adobe.psmobile", downloadSource: "playstore", category: "Design", isFeatured: false },
    { id: 97, name: "Lightroom", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.adobe.lrmobile", downloadSource: "playstore", category: "Design", isFeatured: false },
    
    // ==================== NAVIGATION & TRAVEL ====================
    { id: 98, name: "Google Maps", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps", downloadSource: "playstore", category: "Navigation", isFeatured: false },
    { id: 99, name: "Waze", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.waze", downloadSource: "playstore", category: "Navigation", isFeatured: false },
    { id: 100, name: "Booking.com", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.booking", downloadSource: "playstore", category: "Travel", isFeatured: false },
    { id: 101, name: "Airbnb", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.airbnb.android", downloadSource: "playstore", category: "Travel", isFeatured: false },
    
    // ==================== SECURITY ====================
    { id: 102, name: "Avast Antivirus", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.avast.android.mobilesecurity", downloadSource: "playstore", category: "Security", isFeatured: false },
    { id: 103, name: "Norton Security", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.symantec.mobilesecurity", downloadSource: "playstore", category: "Security", isFeatured: false },
    
    // ==================== RELIGIOUS ====================
    { id: 104, name: "Quran", rating: 4.9, downloadLink: "https://play.google.com/store/apps/details?id=com.quran.labs.androidquran", downloadSource: "playstore", category: "Religious", isFeatured: false },
    { id: 105, name: "Khatma", rating: 4.9, downloadLink: "https://play.google.com/store/apps/details?id=com.khatma.app", downloadSource: "playstore", category: "Religious", isFeatured: false },
    { id: 106, name: "Salaat First", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.salaatfirst.app", downloadSource: "playstore", category: "Religious", isFeatured: false },
    
    // ==================== AI & ASSISTANTS ====================
    { id: 107, name: "ChatGPT", rating: 4.8, downloadLink: "https://play.google.com/store/apps/details?id=com.openai.chatgpt", downloadSource: "playstore", category: "AI", isFeatured: false },
    { id: 108, name: "Google Gemini", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.bard", downloadSource: "playstore", category: "AI", isFeatured: false },
    { id: 109, name: "Microsoft Copilot", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.microsoft.copilot", downloadSource: "playstore", category: "AI", isFeatured: false },
    { id: 110, name: "Google Assistant", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.googleassistant", downloadSource: "playstore", category: "AI", isFeatured: false },
    
    // ==================== ENTERTAINMENT ====================
    { id: 111, name: "SnapTube", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.snaptube.premium", downloadSource: "playstore", category: "Entertainment", isFeatured: false },
    { id: 112, name: "Fiverr", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.fiverr.fiverr", downloadSource: "playstore", category: "Entertainment", isFeatured: false },
    { id: 113, name: "Uber", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.ubercab", downloadSource: "playstore", category: "Entertainment", isFeatured: false },
    
    // ==================== OTHER ====================
    { id: 114, name: "Google", rating: 4.7, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox", downloadSource: "playstore", category: "Other", isFeatured: false },
    { id: 115, name: "Phone", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.dialer", downloadSource: "playstore", category: "Other", isFeatured: false },
    { id: 116, name: "Messages", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.messaging", downloadSource: "playstore", category: "Other", isFeatured: false },
    { id: 117, name: "Contacts", rating: 4.3, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.contacts", downloadSource: "playstore", category: "Other", isFeatured: false },
    { id: 118, name: "Clock", rating: 4.5, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.deskclock", downloadSource: "playstore", category: "Other", isFeatured: false },
    { id: 119, name: "Calendar", rating: 4.4, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.calendar", downloadSource: "playstore", category: "Other", isFeatured: false },
    { id: 120, name: "Gmail", rating: 4.6, downloadLink: "https://play.google.com/store/apps/details?id=com.google.android.gm", downloadSource: "playstore", category: "Other", isFeatured: false }
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
