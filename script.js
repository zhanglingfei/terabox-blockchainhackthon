// 日期格式配置
const dateFormats = {
    "zh": {
        format: "YYYY年M月D日",
        separator: " - "
    },
    "ja": {
        format: "YYYY年M月D日",
        separator: " - "
    },
    "en": {
        format: "MMM D, YYYY",
        separator: " - "
    }
};

const scheduleData = {
    "schedule-1": {
        startDate: new Date(2025, 2, 1),  // 月份从0开始，所以2是3月
        endDate: new Date(2025, 2, 31)
    },
    "schedule-2": {
        startDate: new Date(2025, 3, 1),
        endDate: new Date(2025, 3, 5)
    },
    "schedule-3": {
        startDate: new Date(2025, 3, 6),
        endDate: new Date(2025, 3, 8)
    },
    "schedule-4": {
        startDate: new Date(2025, 3, 10),
        endDate: new Date(2025, 3, 10)
    }
};

const translations = {
    "zh": {
        // 原有翻译保持不变
        "title": "链动未来 2024",
        "nav-about": "关于大赛",
        "nav-schedule": "比赛日程",
        "nav-prizes": "奖项设置",
        "nav-register": "报名参赛",
        "nav-contact": "联系我们",
        "intro-title": "区块链黑客松：探索 Web3.0 未来",
        "intro-text": "本次黑客松聚焦于 DeFi、NFT、GameFi、DAO 以及 Web3.0 等区块链前沿技术，欢迎全球开发者、创业者、高校师生共同参与！",
        
        // 新增的愿景部分翻译
        "vision-title": "🌍 活动愿景",
        "vision-text": "当前，Web3.0 正在重塑互联网的规则，我们相信区块链技术能够带来去中心化、可信赖、开放协作的新范式。",
        
        // 新增的重点领域翻译
        "defi-title": "构建 DeFi 新生态",
        "defi-text": "让金融服务更加公平、高效、可及。",
        "nft-title": "拓展 NFT 应用",
        "nft-text": "探索艺术、音乐、数字收藏品及元宇宙资产。",
        "gamefi-title": "推动 GameFi 变革",
        "gamefi-text": "打造真正的 P2E 游戏经济系统。",
        
        // 新增的技术支持翻译
        "tech-title": "⚙️ 技术支持",
        "chain-title": "智能合约平台",
        "chain-text": "Ethereum, BSC, Solana, Polygon, Avalanche",
        "layer2-title": "Layer 2 方案",
        "layer2-text": "Optimism, Arbitrum, StarkNet, zkSync",
        
        // 新增的关键挑战翻译
        "challenges-title": "🔥 关键挑战",
        "scale-title": "可扩展性优化",
        "scale-text": "解决高成本和低吞吐量问题",
        "ux-title": "用户体验提升",
        "ux-text": "让 Web3.0 产品更易用",

        // 原有翻译继续保持
        "schedule-title": "比赛日程",
        "schedule-1": "报名阶段",
        "schedule-2": "初审阶段",
        "schedule-3": "黑客松阶段",
        "schedule-4": "颁奖典礼",
        "prizes-title": "奖项设置",
        "prize-1": "一等奖",
        "prize-2": "二等奖",
        "prize-3": "三等奖",
        "prize-1-text": "价值 $10,000 的加密货币",
        "prize-2-text": "价值 $5,000 的加密货币",
        "prize-3-text": "价值 $2,000 的加密货币",
        "register-now": "立即报名",
        "register-text": "填写报名表，参与全球最具影响力的区块链黑客松！",
        "register-button": "报名参赛",
        "contact-us": "联系我们",
        "contact-text": "如有任何问题，请发送邮件至: hackathon.blockchain@terabox.jp ",
        "footer-text": "© 2024 链动未来 | 区块链黑客松"
    },
    "ja": {
        // 原有翻译保持不变
        "title": "未来をつなぐ 2024",
        "nav-about": "大会について",
        "nav-schedule": "スケジュール",
        "nav-prizes": "賞金",
        "nav-register": "登録",
        "nav-contact": "お問い合わせ",
        "intro-title": "ブロックチェーンハッカソン：Web3.0 の未来を探る",
        "intro-text": "このハッカソンは、DeFi、NFT、GameFi、DAO、Web3.0 などのブロックチェーンの最前線技術に焦点を当てています。世界中の開発者、起業家、学生の参加を歓迎します！",
        
        // 新增的愿景部分翻译
        "vision-title": "🌍 ビジョン",
        "vision-text": "現在、Web3.0 はインターネットのルールを再形成しています。ブロックチェーン技術が分散化、信頼性、オープンな協力の新しいパラダイムをもたらすと信じています。",
        
        // 新增的重点领域翻译
        "defi-title": "DeFi エコシステムの構築",
        "defi-text": "より公平で効率的なアクセス可能な金融サービスを実現",
        "nft-title": "NFT アプリケーションの拡大",
        "nft-text": "アート、音楽、デジタルコレクション、メタバース資産の探求",
        "gamefi-title": "GameFi の革新",
        "gamefi-text": "真のP2Eゲーム経済システムの創造",
        
        // 新增的技术支持翻译
        "tech-title": "⚙️ テクニカルサポート",
        "chain-title": "スマートコントラクトプラットフォーム",
        "chain-text": "Ethereum, BSC, Solana, Polygon, Avalanche",
        "layer2-title": "Layer 2 ソリューション",
        "layer2-text": "Optimism, Arbitrum, StarkNet, zkSync",
        
        // 新增的关键挑战翻译
        "challenges-title": "🔥 主要な課題",
        "scale-title": "スケーラビリティの最適化",
        "scale-text": "高コストと低スループットの問題を解決",
        "ux-title": "ユーザー体験の向上",
        "ux-text": "Web3.0製品をより使いやすく",

        // 原有翻译继续保持
        "schedule-title": "スケジュール",
        "schedule-1": "登録フェーズ",
        "schedule-2": "事前審査",
        "schedule-3": "ハッカソンフェーズ",
        "schedule-4": "授賞式",
        "prizes-title": "賞金",
        "prize-1": "🥇 一等賞",
        "prize-2": "🥈 二等賞",
        "prize-3": "🥉 三等賞",
        "prize-1-text": "価値 $10,000 の仮想通貨",
        "prize-2-text": "価値 $5,000 の仮想通貨",
        "prize-3-text": "価値 $2,000 の仮想通貨",
        "register-now": "今すぐ登録",
        "register-text": "登録フォームに記入して、世界で最も影響力のあるブロックチェーンハッカソンに参加しよう！",
        "register-button": "登録する",
        "contact-us": "お問い合わせ",
        "contact-text": "ご質問がございましたら、メールでお問い合わせください：hackathon.blockchain@terabox.jp ",
        "footer-text": "© 2024 未来をつなぐ | ブロックチェーンハッカソン"
    },
    "en": {
        // 原有翻译保持不变
        "title": "Blockchain Future 2024",
        "nav-about": "About",
        "nav-schedule": "Schedule",
        "nav-prizes": "Prizes",
        "nav-register": "Register",
        "nav-contact": "Contact",
        "intro-title": "Blockchain Hackathon: Exploring Web3.0",
        "intro-text": "This hackathon focuses on cutting-edge blockchain technologies such as DeFi, NFT, GameFi, DAO, and Web3.0. We welcome developers, entrepreneurs, and students from around the world to join!",
        
        // 新增的愿景部分翻译
        "vision-title": "🌍 Vision",
        "vision-text": "Currently, Web3.0 is reshaping the rules of the internet. We believe blockchain technology can bring about a new paradigm of decentralization, trust, and open collaboration.",
        
        // 新增的重点领域翻译
        "defi-title": "Building DeFi Ecosystem",
        "defi-text": "Making financial services more fair, efficient, and accessible.",
        "nft-title": "Expanding NFT Applications",
        "nft-text": "Exploring art, music, digital collectibles, and metaverse assets.",
        "gamefi-title": "Driving GameFi Innovation",
        "gamefi-text": "Creating true P2E gaming economies.",
        
        // 新增的技术支持翻译
        "tech-title": "⚙️ Technical Support",
        "chain-title": "Smart Contract Platforms",
        "chain-text": "Ethereum, BSC, Solana, Polygon, Avalanche",
        "layer2-title": "Layer 2 Solutions",
        "layer2-text": "Optimism, Arbitrum, StarkNet, zkSync",
        
        // 新增的关键挑战翻译
        "challenges-title": "🔥 Key Challenges",
        "scale-title": "Scalability Optimization",
        "scale-text": "Solving high cost and low throughput issues",
        "ux-title": "User Experience Enhancement",
        "ux-text": "Making Web3.0 products more user-friendly",

        // 原有翻译继续保持
        "schedule-title": "Schedule",
        "schedule-1": "Registration Phase",
        "schedule-2": "Preliminary Review",
        "schedule-3": "Hackathon Phase",
        "schedule-4": "Award Ceremony",
        "prizes-title": "Prizes",
        "prize-1": "First Prize",
        "prize-2": "Second Prize",
        "prize-3": "Third Prize",
        "prize-1-text": "Worth $10,000 in cryptocurrency",
        "prize-2-text": "Worth $5,000 in cryptocurrency",
        "prize-3-text": "Worth $2,000 in cryptocurrency",
        "register-now": "Register Now",
        "register-text": "Fill out the registration form and join the most influential blockchain hackathon!",
        "register-button": "Register Now",
        "contact-us": "Contact Us",
        "contact-text": "If you have any questions, please send an email to: hackathon.blockchain@terabox.jp",
        "footer-text": "© 2024 Blockchain Future | Blockchain Hackathon"
    }
};

// 监听语言切换按钮
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        switchLanguage(lang);
    });
});

// 切换语言函数保持不变
// 格式化日期的函数
function formatDate(date, format) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // 英文月份缩写
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    return format
        .replace("YYYY", year)
        .replace("MMM", monthNames[date.getMonth()])
        .replace("M", month)
        .replace("D", day);
}

function updateScheduleDates(lang) {
    const format = dateFormats[lang].format;
    const separator = dateFormats[lang].separator;

    Object.entries(scheduleData).forEach(([id, dates]) => {
        const element = document.getElementById(id);
        if (element && element.parentElement) {
            const dateSpan = element.parentElement.nextSibling;
            if (dateSpan) {
                const startFormatted = formatDate(dates.startDate, format);
                const endFormatted = dates.endDate ? formatDate(dates.endDate, format) : "";
                
                if (dates.startDate === dates.endDate) {
                    dateSpan.textContent = startFormatted;
                } else {
                    dateSpan.textContent = startFormatted + separator + endFormatted;
                }
            }
        }
    });
}

// Update the switchLanguage function to properly handle the email
function switchLanguage(lang) {
    // Update text translations
    Object.keys(translations[lang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[lang][id];
            // For timeline items, add transition animation
            if (element.closest('.timeline li')) {
                element.style.transition = 'opacity 0.3s ease';
                element.style.opacity = '0';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 100);
            }
        }
    });

    // Update dates format
    updateScheduleDates(lang);

    // Handle email contact specifically
    const contactTextElement = document.getElementById('contact-text');
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:hackathon.blockchain@terabox.jp';
    emailLink.textContent = 'hackathon.blockchain@terabox.jp';
    
    if (contactTextElement) {
        // Clear existing content
        contactTextElement.textContent = translations[lang]['contact-text'] + ' ';
        // Append the email link
        contactTextElement.appendChild(emailLink);
    }
}

// Add these new translations to your existing translations object
const defiTranslations = {
    "zh": {
        "defi-page-title": "构建 DeFi 新生态",
        "defi-header": "构建 DeFi 新生态",
        "nav-back": "返回主页",
        "core-title": "核心构建要素",
        "layer-title": "底层技术架构",
        "protocol-title": "智能合约与协议层",
        "governance-title": "治理机制与安全",
        "applications-title": "金融服务应用",
        "future-title": "未来发展方向",
        // ... other Chinese translations ...
    },
    "ja": {
        "defi-page-title": "DeFi エコシステムの構築",
        "defi-header": "DeFi エコシステムの構築",
        "nav-back": "ホームに戻る",
        "core-title": "コア構成要素",
        "layer-title": "基盤技術アーキテクチャ",
        "protocol-title": "スマートコントラクトとプロトコル層",
        "governance-title": "ガバナンスとセキュリティ",
        "applications-title": "金融サービスアプリケーション",
        "future-title": "今後の展開",
        // ... other Japanese translations ...
    },
    "en": {
        "defi-page-title": "Building DeFi Ecosystem",
        "defi-header": "Building DeFi Ecosystem",
        "nav-back": "Back to Home",
        "core-title": "Core Building Elements",
        "layer-title": "Base Technology Architecture",
        "protocol-title": "Smart Contracts & Protocol Layer",
        "governance-title": "Governance & Security",
        "applications-title": "Financial Services Applications",
        "future-title": "Future Development",
        // ... other English translations ...
    }
};

// Merge with existing translations
Object.keys(defiTranslations).forEach(lang => {
    translations[lang] = { ...translations[lang], ...defiTranslations[lang] };
});

// Add click handler for DeFi ecosystem section
document.getElementById('defi-title').addEventListener('click', () => {
    window.location.href = 'defi.html';
});

// 添加到现有的 script.js 文件末尾

// 为时间线添加动画序列
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline li');
    timelineItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
        
        // 添加 Intersection Observer 来控制动画
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        observer.observe(item);
    });
}

// 为奖项卡片添加动画效果
function initializePrizeAnimations() {
    const prizes = document.querySelectorAll('.prize');
    prizes.forEach(prize => {
        prize.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        prize.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 为注册按钮添加波纹效果
function initializeButtonEffects() {
    const registerBtn = document.querySelector('.btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
}

// 更新日期格式化函数，添加更多本地化支持
function formatDate(date, format, lang) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // 月份名称本地化
    const monthNames = {
        "zh": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        "ja": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        "en": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    };
    
    return format
        .replace("YYYY", year)
        .replace("MMM", monthNames[lang][date.getMonth()])
        .replace("M", month)
        .replace("D", day);
}

// 优化切换语言函数
function switchLanguage(lang) {
    // 原有的语言切换逻辑保持不变
    Object.keys(translations[lang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[lang][id];
            // 为时间线项添加过渡动画
            if (element.closest('.timeline li')) {
                element.style.transition = 'opacity 0.3s ease';
                element.style.opacity = '0';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 100);
            }
        }
    });

    // 更新日期格式
    updateScheduleDates(lang);

    // 更新邮件地址显示
    const emailElement = document.querySelector("#contact-text a");
    if (emailElement) {
        emailElement.textContent = "hackathon.blockchain@terabox.jp";
    }
}

// 页面加载完成后初始化所有效果
document.addEventListener('DOMContentLoaded', function() {
    initializeTimelineAnimations();
    initializePrizeAnimations();
    initializeButtonEffects();
    
    // 初始化语言（默认使用中文）
    switchLanguage('zh');
});

// 添加页面滚动动画
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75) && (rect.bottom >= 0);
        
        if (isVisible) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Add to translations object in script.js
const guideTranslations = {
    "zh": {
        "guide-title": "NFT 开发指南",
        "prep-title": "准备工作",
        "contract-title": "智能合约开发",
        "frontend-title": "前端开发",
        "security-title": "安全与优化"
    },
    "ja": {
        "guide-title": "NFT 開発ガイド",
        "prep-title": "準備作業",
        "contract-title": "スマートコントラクト開発",
        "frontend-title": "フロントエンド開発",
        "security-title": "セキュリティと最適化"
    },
    "en": {
        "guide-title": "NFT Development Guide",
        "prep-title": "Preparation",
        "contract-title": "Smart Contract Development",
        "frontend-title": "Frontend Development",
        "security-title": "Security & Optimization"
    }
};

// Merge with existing translations
Object.keys(guideTranslations).forEach(lang => {
    translations[lang] = { ...translations[lang], ...guideTranslations[lang] };
});

// Add to script.js
function initializeGuideInteractions() {
    document.querySelectorAll('.guide-header').forEach(header => {
        header.addEventListener('click', () => {
            const details = header.parentElement;
            const icon = header.querySelector('.expand-icon');
            
            // Add animation for smooth transition
            if (details.open) {
                icon.style.transform = 'rotate(0deg)';
                icon.textContent = '+';
            } else {
                icon.style.transform = 'rotate(45deg)';
                icon.textContent = '−';
            }
        });
    });
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTimelineAnimations();
    initializePrizeAnimations();
    initializeButtonEffects();
    initializeGuideInteractions();
    
    // Initialize with default language (Chinese)
    switchLanguage('zh');
});


// Add to the existing translations object
const lotteryTranslations = {
    "zh": {
        "lottery-title": "抽奖环节",
        "lottery-subtitle": "点击了解更多关于硬件钱包的详情"
    },
    "ja": {
        "lottery-title": "抽選会",
        "lottery-subtitle": "ハードウェアウォレットの詳細はこちら"
    },
    "en": {
        "lottery-title": "Lucky Draw",
        "lottery-subtitle": "Click to learn more about hardware wallets"
    }
};

// Add this to the existing translations in each language section
Object.keys(translations).forEach(lang => {
    translations[lang] = {
        ...translations[lang],
        ...lotteryTranslations[lang]
    };
});