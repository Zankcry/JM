export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                theme: {
                    bg: 'rgb(var(--theme-bg) / <alpha-value>)',
                    'bg-elevated': 'rgb(var(--theme-bg-elevated) / <alpha-value>)',
                    surface: 'rgb(var(--theme-surface) / <alpha-value>)',
                    'surface-alt': 'rgb(var(--theme-surface-alt) / <alpha-value>)',
                    border: 'rgb(var(--theme-border) / <alpha-value>)',
                    'border-strong': 'rgb(var(--theme-border-strong) / <alpha-value>)',
                    text: 'rgb(var(--theme-text) / <alpha-value>)',
                    'text-muted': 'rgb(var(--theme-text-muted) / <alpha-value>)',
                    'text-subtle': 'rgb(var(--theme-text-subtle) / <alpha-value>)',
                    accent: 'rgb(var(--theme-accent) / <alpha-value>)',
                    'accent-strong': 'rgb(var(--theme-accent-strong) / <alpha-value>)',
                    link: 'rgb(var(--theme-link) / <alpha-value>)',
                    focus: 'rgb(var(--theme-focus) / <alpha-value>)',
                    'on-accent': 'rgb(var(--theme-on-accent) / <alpha-value>)',
                },
            },
            boxShadow: {
                soft: '0 20px 60px rgb(var(--theme-shadow) / 0.14)',
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
                inter: ['"JetBrains Mono"', 'sans-serif'],
                sans: ['"JetBrains Mono"', 'sans-serif'],
            },
            letterSpacing: {
                snug: '-0.03em',
            },
        },
    },
    plugins: [],
};
