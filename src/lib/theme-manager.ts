// 主题管理器 - 独立的 TypeScript 模块

const THEME_KEY = 'theme';

interface ThemeToggleElements {
  button: HTMLButtonElement;
  sunIcon: HTMLImageElement;
  moonIcon: HTMLImageElement;
}

type Theme = 'light' | 'dark';

class ThemeManager {
  private elements: ThemeToggleElements | null = null;
  private initialized = false;

  private getElements(): ThemeToggleElements | null {
    const button = document.getElementById('theme-toggle') as HTMLButtonElement;
    const sunIcon = document.getElementById('theme-icon-sun') as HTMLImageElement;
    const moonIcon = document.getElementById('theme-icon-moon') as HTMLImageElement;

    if (!button || !sunIcon || !moonIcon) {
      console.error('ThemeToggle: Required elements not found', {
        button: !!button,
        sunIcon: !!sunIcon,
        moonIcon: !!moonIcon
      });
      return null;
    }

    return { button, sunIcon, moonIcon };
  }

  private getCurrentTheme(): Theme {
    return document.documentElement.hasAttribute('data-theme') &&
           document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  private setTheme(theme: Theme): void {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  private updateIcons(theme: Theme): void {
    if (!this.elements) return;

    const { sunIcon, moonIcon } = this.elements;

    if (theme === 'dark') {
      sunIcon.classList.remove('active');
      moonIcon.classList.add('active');
    } else {
      sunIcon.classList.add('active');
      moonIcon.classList.remove('active');
    }
  }

  private toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';

    console.info('ThemeToggle: Toggling theme', { from: currentTheme, to: newTheme });

    this.setTheme(newTheme);
    this.updateIcons(newTheme);

    try {
      localStorage.setItem(THEME_KEY, newTheme);
    } catch (e) {
      console.warn('ThemeToggle: Could not save theme to localStorage', e);
    }
  }

  private initializeTheme(): void {
    let savedTheme: Theme | null = null;

    try {
      savedTheme = localStorage.getItem(THEME_KEY) as Theme;
    } catch (e) {
      console.warn('ThemeToggle: Could not read from localStorage', e);
    }

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme: Theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    console.info('ThemeToggle: Initializing theme', {
      savedTheme,
      systemPrefersDark,
      initialTheme
    });

    this.setTheme(initialTheme);
    this.updateIcons(initialTheme);
  }

  private setupEventListeners(): void {
    if (!this.elements) return;

    // 主题切换按钮事件
    this.elements.button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleTheme();
    });

    // 系统主题变化监听
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem(THEME_KEY)) {
          const newTheme: Theme = e.matches ? 'dark' : 'light';
          this.setTheme(newTheme);
          this.updateIcons(newTheme);
        }
      } catch (err) {
        console.warn('ThemeToggle: Error handling system theme change', err);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemThemeChange);
    }
  }

  public init(): void {
    if (this.initialized) {
      console.info('ThemeToggle: Already initialized, skipping');
      return;
    }

    console.info('ThemeToggle: Initializing...');

    this.elements = this.getElements();
    if (!this.elements) {
      console.error('ThemeToggle: Failed to get required elements');
      return;
    }

    this.initializeTheme();
    this.setupEventListeners();
    this.initialized = true;

    console.info('ThemeToggle: Initialization complete');
  }
}

// 导出初始化函数
export function initThemeManager(): void {
  const themeManager = new ThemeManager();

  // 确保 DOM 准备就绪后初始化
  function attemptInit() {
    if (document.getElementById('theme-toggle')) {
      themeManager.init();
    } else {
      // 如果元素还没准备好，稍后重试
      setTimeout(attemptInit, 10);
    }
  }

  // 立即尝试初始化
  attemptInit();

  // 全局暴露以便调试
  (window as any).themeManager = themeManager;
}