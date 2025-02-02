// nft.js
const nftTranslations = {
    "zh": {
        "nft-page-title": "拓展 NFT 应用",
        "nft-header": "拓展 NFT 应用",
        "showcase-title": "NFT 创新应用展示",
        "guide-title": "NFT 开发指南",
        "use-cases-title": "应用场景",
        "digital-art-title": "数字艺术市场",
        "music-nft-title": "音乐产业革新",
        "game-assets-title": "游戏资产互通",
        // Guide sections
        "prep-section": "准备工作",
        "contract-section": "智能合约开发",
        "frontend-section": "前端开发",
        "security-section": "安全与优化",
        // Additional NFT-specific translations
        "nft-intro": "探索NFT的无限可能",
        "gallery-section": "创新展示",
        "development-section": "开发指南",
        "case-studies": "应用案例"
    },
    "ja": {
        "nft-page-title": "NFT アプリケーションの拡大",
        "nft-header": "NFT アプリケーションの拡大",
        "showcase-title": "NFT イノベーション展示",
        "guide-title": "NFT 開発ガイド",
        "use-cases-title": "活用シーン",
        "digital-art-title": "デジタルアート市場",
        "music-nft-title": "音楽産業革新",
        "game-assets-title": "ゲーム資産の相互運用",
        // Guide sections
        "prep-section": "準備作業",
        "contract-section": "スマートコントラクト開発",
        "frontend-section": "フロントエンド開発",
        "security-section": "セキュリティと最適化",
        // Additional NFT-specific translations
        "nft-intro": "NFTの無限の可能性を探る",
        "gallery-section": "イノベーション展示",
        "development-section": "開発ガイド",
        "case-studies": "活用事例"
    },
    "en": {
        "nft-page-title": "Expanding NFT Applications",
        "nft-header": "Expanding NFT Applications",
        "showcase-title": "NFT Innovation Showcase",
        "guide-title": "NFT Development Guide",
        "use-cases-title": "Use Cases",
        "digital-art-title": "Digital Art Market",
        "music-nft-title": "Music Industry Innovation",
        "game-assets-title": "Game Asset Interoperability",
        // Guide sections
        "prep-section": "Preparation",
        "contract-section": "Smart Contract Development",
        "frontend-section": "Frontend Development",
        "security-section": "Security & Optimization",
        // Additional NFT-specific translations
        "nft-intro": "Explore the Infinite Possibilities of NFTs",
        "gallery-section": "Innovation Showcase",
        "development-section": "Development Guide",
        "case-studies": "Case Studies"
    }
};

class NFTLanguageManager {
    constructor() {
        this.currentLang = 'zh'; // Default language
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Initialize language switcher buttons
        document.querySelectorAll(".lang-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const lang = btn.getAttribute("data-lang");
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        
        // Update page title
        document.title = nftTranslations[lang]["nft-page-title"];
        
        // Update elements with IDs
        Object.keys(nftTranslations[lang]).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                this.updateElementWithTransition(element, nftTranslations[lang][key]);
            }
        });

        // Update elements with data-trans-key
        document.querySelectorAll('[data-trans-key]').forEach(element => {
            const key = element.getAttribute('data-trans-key');
            if (nftTranslations[lang][key]) {
                this.updateElementWithTransition(element, nftTranslations[lang][key]);
            }
        });

        // Update active state of language buttons
        this.updateLanguageButtons(lang);
    }

    updateElementWithTransition(element, newText) {
        // Add transition effect for headers and titles
        if (element.tagName === 'H1' || element.tagName === 'H2') {
            element.style.transition = 'opacity 0.3s ease';
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = newText;
                element.style.opacity = '1';
            }, 150);
        } else {
            element.textContent = newText;
        }
    }

    updateLanguageButtons(activeLang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === activeLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Method to get current language
    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize the NFT language manager when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.nftLanguageManager = new NFTLanguageManager();
});

// Export for use in other modules if needed
export { NFTLanguageManager, nftTranslations };