const themeToggle = document.getElementById('theme-toggle');
let theme = 'system'; // 默认跟随系统主题

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
    document.body.classList.remove('dark-mode', 'light-mode', 'system-mode', 'system-dark', 'system-light');

    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (mode === 'light') {
        document.body.classList.add('light-mode');
    } else {
        // 如果是系统跟随，根据系统的当前主题添加不同的类
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkScheme) {
            document.body.classList.add('system-dark');
        } else {
            document.body.classList.add('system-light');
        }
    }
}
