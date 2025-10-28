// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
  site: 'https://sethispr.github.io/blair',
  base: '/blair',
  integrations: [
    starlight({
      title: 'Blair Docs',
      editLink: {
        baseUrl: 'https://github.com/Sethispr/blair/edit/main/',
      },
      lastUpdated: true,
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/sethispr/blair/' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/' },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Welcome!',
          autogenerate: { directory: 'intro' },
        },
        {
          label: 'User Customization',
          autogenerate: { directory: 'user customization' },
        },
        {
          label: 'Server Setup',
          autogenerate: { directory: 'server setup' },
        },
        {
          label: 'General',
          autogenerate: { directory: 'general' },
        },
      ],
      plugins: [
        starlightThemeRapide(),
        starlightImageZoom(),
      ],
    }),
  ],
});
