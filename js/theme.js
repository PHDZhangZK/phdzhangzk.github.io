const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
let theme = 'system'; // 默认跟随系统主题

function updateIcon() {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-moon'; // 月亮图标
    } else if (theme === 'light') {
        themeIcon.className = 'fas fa-sun'; // 太阳图标
    } else {
        themeIcon.className = 'fas fa-adjust'; // 系统跟随图标
    }
}

// 检查 localStorage 中是否存有用户选择的主题
if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
    setTheme(theme);
} else {
    setTheme('system');
}

themeToggle.addEventListener('click', () => {
    if (theme === 'dark') {
        theme = 'light';
    } else if (theme === 'light') {
        theme = 'system';
    } else {
        theme = 'dark';
    }
    // 保存到 localStorage 中
    localStorage.setItem('theme', theme);
    setTheme(theme);
});

function setTheme(mode) {
    document.body.classList.remove('dark-mode', 'light-mode', 'system-dark', 'system-light');

    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        removeSystemListener(); // 移除系统主题监听
    } else if (mode === 'light') {
        document.body.classList.add('light-mode');
        removeSystemListener(); // 移除系统主题监听
    } else {
        // 如果是系统跟随，根据系统的当前主题添加不同的类
        applySystemTheme();
        addSystemListener();
    }
    updateIcon();
}

// 检测并应用系统主题
function applySystemTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.remove('system-dark', 'system-light');
    if (prefersDarkScheme) {
        document.body.classList.add('system-dark');
    } else {
        document.body.classList.add('system-light');
    }
}

// 监听系统主题变化
function addSystemListener() {
    removeSystemListener(); // 先确保没有旧的监听器
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', systemThemeChange);
}

// 移除系统主题变化监听器
function removeSystemListener() {
    window.matchMedia("(prefers-color-scheme: dark)").removeEventListener('change', systemThemeChange);
}

// 响应系统主题变化
function systemThemeChange() {
    if (theme === 'system') {
        applySystemTheme();
    }
}

function toggleAbstract() {
    const abstract = document.getElementById("abstract");
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block"; // 展开摘要
    } else {
        abstract.style.display = "none"; // 收起摘要
    }
}
