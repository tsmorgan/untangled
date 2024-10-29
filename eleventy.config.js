import { DateTime } from "luxon";
import striptags from "striptags";

export default function (eleventyConfig) {

    eleventyConfig.setServerOptions({
        watch: ['_site/**/*.css'],
    });

    eleventyConfig.addPassthroughCopy("_src/images");

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addFilter("excerpt", (content) => extractExcerpt(content));   

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("d LLLL yyyy");
    });

    return {
        dir: {
            input: '_src',
        },
    };
};


function extractExcerpt(content) {    
  
    let excerpt = null;
    // const content = article.templateContent;
  
    excerpt = striptags(content)
      .substring(0, 150) // Cap at 200 characters
      .replace(/^\\s+|\\s+$|\\s+(?=\\s)|\n/g, " ")
      .trim()
      .concat("...");

    return excerpt;
  }