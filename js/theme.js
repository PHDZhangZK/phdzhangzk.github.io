const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
let theme = 'system';

function updateIcon() {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-moon'; // 月亮图标
    } else if (theme === 'light') {
        themeIcon.className = 'fas fa-sun'; // 太阳图标
    } else {
        themeIcon.className = 'fas fa-adjust'; // 系统跟随图标
    }
}

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
    localStorage.setItem('theme', theme);
    setTheme(theme);
});

function setTheme(mode) {
    document.body.classList.remove('dark-mode', 'system-mode');
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (mode === 'system') {
        document.body.classList.add('system-mode');
    }
    updateIcon();
}
