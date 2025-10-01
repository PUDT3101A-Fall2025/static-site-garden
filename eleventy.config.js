export default function (eleventyConfig) {
    // This sets the input directory for our site
	eleventyConfig.setInputDirectory("source");

	// Copy any CSS and Javascript files to the output directory
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("source/**/*.css");
	eleventyConfig.addPassthroughCopy("source/**/*.js");

	eleventyConfig.addGlobalData("layout", "base.html");
};