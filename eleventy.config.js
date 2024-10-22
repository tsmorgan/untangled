import { DateTime } from "luxon";

export default function (eleventyConfig) {

    eleventyConfig.setServerOptions({
        watch: ['_site/**/*.css'],
    });

    eleventyConfig.addPassthroughCopy("_src/images");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("d LLLL yyyy");
    });

    return {
        dir: {
            input: '_src',
        },
    };
};