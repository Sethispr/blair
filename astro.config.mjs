// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://sethispr.github.io/blair/',
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
        {
          label: 'Clans',
          autogenerate: { directory: 'clans' },
        },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" }
        }),
      ],
    }),
  ],
});
