/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nyxidiom.com',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://www.nyxidiom.com/es',
      hreflang: 'es',
    },
    {
      href: 'https://www.nyxidiom.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://www.nyxidiom.com/ja',
      hreflang: 'ja',
    },
  ],
};
