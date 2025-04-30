const allJournals = require("./.content-collections/generated/allJournals.js");
const { PrismaClient } = require("./prisma/client");

const prisma = new PrismaClient();

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://thahrav.shop",
	generateRobotsTxt: true,
	changefreq: "daily",
	priority: 0.7,
	sitemapSize: 5000,
	additionalPaths: async (config) => {
		const products = await prisma.product.findMany();

		const productsData = products.map((product) => {
			return {
				loc: `${config.siteUrl}/product/${product.slug}`,
				changefreq: "daily",
				priority: 0.7,
			};
		});

		const journals = allJournals.default.map((journal) => {
			return {
				loc: `${config.siteUrl}/journal/${journal.slug}`,
				changefreq: "daily",
				priority: 0.7,
			};
		});

		const allPaths = [...productsData, ...journals];
		return allPaths; // return an array of objects
	},
};
