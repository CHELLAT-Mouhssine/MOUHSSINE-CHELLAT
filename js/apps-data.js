/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  CHELAT STORE - Apps Data Configuration File              ║
 * ║  ملف بيانات التطبيقات - متجر CHELAT STORE                 ║
 * ║  الإصدار: 1.0 | آخر تحديث: 2026                          ║
 * ╚════════════════════════════════════════════════════════════╝
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎨 الهوية البصرية - Visual Identity
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const VISUAL_IDENTITY = {
    primaryColor: 'hsla(219, 28%, 75%, 1)',
    backgroundColor: 'hsla(219, 28%, 75%, 1)',
    textColor: '#333333',
    accentColor: '#ffffff'
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📱 مصفوفة التطبيقات - Apps Array (44 تطبيق)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const appsData = [
    {
        id: 1,
        name: 'WhatsApp',
        image: 'assets/images/icons/whatsapp.webp',
        rating: 5,
        downloadLink: 'https://wa.me/212621681257',
        isSlider: true
    },
    {
        id: 2,
        name: 'TikTok',
        image: 'assets/images/icons/tiktok.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: true
    },
    {
        id: 3,
        name: 'ياسين تي في',
        image: 'assets/images/icons/yacine-tv.png',
        rating: 5,
        downloadLink: '#',
        isSlider: true
    },
    {
        id: 4,
        name: 'أسطورة تي في',
        image: 'assets/images/icons/asatv.png',
        rating: 4,
        downloadLink: '#',
        isSlider: true
    },
    {
        id: 5,
        name: 'Free Fire',
        image: 'assets/images/icons/freefire.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: true
    },
    {
        id: 6,
        name: 'Instagram',
        image: 'assets/images/icons/instagram.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 7,
        name: 'Facebook',
        image: 'assets/images/icons/facebook.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 8,
        name: 'YouTube',
        image: 'assets/images/icons/youtube.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: true
    },
    {
        id: 9,
        name: 'Snapchat',
        image: 'assets/images/icons/snapchat.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 10,
        name: 'Telegram',
        image: 'assets/images/icons/telegram.png',
        rating: 5,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 11,
        name: 'PUBG Mobile',
        image: 'assets/images/icons/pubg.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: true
    },
    {
        id: 12,
        name: 'Netflix',
        image: 'assets/images/icons/netflix.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 13,
        name: 'Spotify',
        image: 'assets/images/icons/spotify.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 14,
        name: 'X (Twitter)',
        image: 'assets/images/icons/twitter-x.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 15,
        name: 'Google Maps',
        image: 'assets/images/icons/google-maps.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 16,
        name: 'Uber',
        image: 'assets/images/icons/uber.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 17,
        name: 'Jumia',
        image: 'assets/images/icons/jumia.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 18,
        name: 'Avito Maroc',
        image: 'assets/images/icons/avito.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 19,
        name: 'Hespresse',
        image: 'assets/images/icons/hespresse.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 20,
        name: 'Le360',
        image: 'assets/images/icons/le360.png',
        rating: 3,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 21,
        name: 'WhatsApp Business',
        image: 'assets/images/icons/whatsapp-business.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 22,
        name: 'Zoom',
        image: 'assets/images/icons/zoom.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 23,
        name: 'Microsoft Teams',
        image: 'assets/images/icons/teams.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 24,
        name: 'Google Chrome',
        image: 'assets/images/icons/chrome.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 25,
        name: 'UC Browser',
        image: 'assets/images/icons/uc-browser.png',
        rating: 3,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 26,
        name: 'SHAREit',
        image: 'assets/images/icons/shareit.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 27,
        name: 'CapCut',
        image: 'assets/images/icons/capcut.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: true
    },
    {
        id: 28,
        name: 'InShot',
        image: 'assets/images/icons/inshot.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 29,
        name: 'Canva',
        image: 'assets/images/icons/canva.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 30,
        name: 'Adobe Express',
        image: 'assets/images/icons/adobe-express.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 31,
        name: 'Truecaller',
        image: 'assets/images/icons/truecaller.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 32,
        name: 'Shazam',
        image: 'assets/images/icons/shazam.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 33,
        name: 'SoundCloud',
        image: 'assets/images/icons/soundcloud.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 34,
        name: 'Twitch',
        image: 'assets/images/icons/twitch.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 35,
        name: 'Discord',
        image: 'assets/images/icons/discord.webp',
        rating: 5,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 36,
        name: 'Reddit',
        image: 'assets/images/icons/reddit.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 37,
        name: 'Pinterest',
        image: 'assets/images/icons/pinterest.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 38,
        name: 'LinkedIn',
        image: 'assets/images/icons/linkedin.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 39,
        name: 'eBay',
        image: 'assets/images/icons/ebay.png',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 40,
        name: 'AliExpress',
        image: 'assets/images/icons/aliexpress.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 41,
        name: 'Shein',
        image: 'assets/images/icons/shein.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 42,
        name: 'Temu',
        image: 'assets/images/icons/temu.png',
        rating: 3,
        downloadLink: '#',
        isSlider: false
    },
    {
        id: 43,
        name: 'Koora Live',
        image: 'assets/images/icons/koora-live.webp',
        rating: 4,
        downloadLink: '#',
        isSlider: true
    },
    {
        id: 44,
        name: 'Yalla Shoot',
        image: 'assets/images/icons/yalla-shoot.png',
        rating: 4,
        downloadLink: '#',
        isSlider: true
    }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📰 بيانات الشريط الجانبي - Sidebar Data
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const sidebarData = {
    news: [
        {
            id: 1,
            name: 'الجزيرة',
            nameEn: 'Al Jazeera',
            url: 'https://www.aljazeera.net',
            icon: 'assets/images/news/aljazeera.webp'
        },
        {
            id: 2,
            name: 'BBC Arabic',
            nameEn: 'BBC Arabic',
            url: 'https://www.bbc.com/arabic',
            icon: 'assets/images/news/bbc-arabic.png'
        },
        {
            id: 3,
            name: 'France 24',
            nameEn: 'France 24',
            url: 'https://www.france24.com/ar',
            icon: 'assets/images/news/france24.webp'
        }
    ],
    contact: {
        whatsapp: 'https://wa.me/212621681257',
        email: 'mailto:Mouhssinechellat@gmail.com',
        phone: '+212 621-681257'
    }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⚙️ دوال مساعدة - Helper Functions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * الحصول على تطبيقات السلايدر العلوي
 * @returns {Array} مصفوفة التطبيقات المميزة
 */
function getSliderApps() {
    return appsData.filter(app => app.isSlider === true);
}

/**
 * البحث عن تطبيق بالاسم
 * @param {string} appName - اسم التطبيق للبحث
 * @returns {Object|null} بيانات التطبيق أو null
 */
function findAppByName(appName) {
    return appsData.find(app => 
        app.name.toLowerCase().includes(appName.toLowerCase())
    ) || null;
}

/**
 * تصفية التطبيقات حسب التقييم
 * @param {number} minRating - الحد الأدنى للتقييم
 * @returns {Array} مصفوفة التطبيقات المصفاة
 */
function filterByRating(minRating) {
    return appsData.filter(app => app.rating >= minRating);
}

/**
 * الحصول على رابط التحميل لتطبيق معين
 * @param {number} appId - معرف التطبيق
 * @returns {string|null} رابط التحميل أو null
 */
function getDownloadLink(appId) {
    const app = appsData.find(app => app.id === appId);
    return app ? app.downloadLink : null;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📤 تصدير البيانات - Module Exports
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        VISUAL_IDENTITY, 
        appsData, 
        sidebarData,
        getSliderApps,
        findAppByName,
        filterByRating,
        getDownloadLink
    };
}

// دعم التحميل في المتصفح
if (typeof window !== 'undefined') {
    window.CHELAT_STORE_DATA = {
        VISUAL_IDENTITY,
        appsData,
        sidebarData,
        utils: {
            getSliderApps,
            findAppByName,
            filterByRating,
            getDownloadLink
        }
    };
}

قم بدراسة هدا الكود و قل لي كيف نستفيد منه
