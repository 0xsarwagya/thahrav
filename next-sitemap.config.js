const allJournals = require("./.content-collections/generated/allJournals.js");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://thahrav.shop",
	generateRobotsTxt: true,
	changefreq: "daily",
	priority: 0.7,
	sitemapSize: 5000,
	additionalPaths: async (config) => {
		return allJournals.default.map((journal) => {
			return {
				loc: `${config.siteUrl}/journal/${journal.slug}`,
				changefreq: "daily",
				priority: 0.7,
			};
		});
	},
};
