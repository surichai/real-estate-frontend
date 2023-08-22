export default defineNuxtConfig({
    target: 'static',
    ssr: true,
    nitro: {
        prerender: {
          crawlLinks: true,
          failOnError: false, 
        },
    },
    css: ['@/assets/scss/app.scss'],
    app: {
        head: {
            link: [
                {
                    href: 'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
                    rel: 'stylesheet',
                },
                {
                    href: 'https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&amp;display=swap',
                    rel: 'stylesheet',
                },
                {
                    href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap',
                    rel: 'stylesheet',
                },
            ],

            script: [
                {
                    src: 'https://www.paypal.com/sdk/js?client-id=test&currency=USD',
                },
                { src: 'https://checkout.stripe.com/checkout.js' },
            ],
        },
    },
    // alias: {
    //     pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
    //     },
    modules: [
        '@nuxtjs/i18n',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
    ],
    // debug: false,
    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        locales: [
            {
                icon: 'flag-icon-us',
                code: 'en',
                name: 'English',
                short: '(US)',
            },
            {
                icon: 'flag-icon-fr',
                code: 'fr',
                name: 'Français',
            },
            {
                icon: 'flag-icon-es',
                code: 'es',
                name: 'Español',
            },
            {
                icon: 'flag-icon-pt',
                short: '(BR)',
                code: 'pt',
                name: 'Português',
            },
        ],
        vueI18n: './i18n.config.ts',
    },
    plugins: [
        { src: '~/plugins/plugins.js', mode: 'client' },
        { src: './plugins/useBootstrap.client.ts', mode: 'client' },
        
    ],
});
