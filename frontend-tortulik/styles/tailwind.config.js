// Tailwind theme (brand colors + font). Loaded right after the Tailwind CDN script.
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#142822',
                    DEFAULT: '#1B362D',
                    light: '#2C4A3E',
                    accent: '#4B7363',
                    bg: '#F3F4F1',
                    card: '#FFFFFF',
                    greenCard: '#1B362D',
                    badge: '#E6EFEA',
                    badgeText: '#1B362D',
                    sand: '#F9F6F0',
                    sandCard: '#F4EFE6'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}
