import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "IEEE@UCSD",

            social: {
                github: "https://github.com/IEEE-UCSD-Webmaster/docs.ieeeucsd.org",
            },
            sidebar: [
                {
                    label: "Getting Started",
                    autogenerate: {
                        directory: "getting_started",
                    },
                },
            ],
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
