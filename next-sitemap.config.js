/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.shankhlogistics.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/api/*"],
};
