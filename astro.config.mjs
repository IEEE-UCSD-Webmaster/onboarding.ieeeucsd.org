import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "IEEE@UCSD",
            customCss: ["./src/tailwind.css", "./src/global.css"],
            social: {
                github: "https://github.com/IEEE-UCSD-Webmaster/onboarding.ieeeucsd.org",
            },
            sidebar: [
                {
                    label: "Getting Started",
                    autogenerate: {
                        directory: "getting_started",
                    },
                },
                {
                    label: "Officers",
                    autogenerate: {
                        directory: "officers",
                    },
                },
            ],
            expressiveCode: {
                defaultProps: {
                    // Enable word wrap by default
                    wrap: true,
                    // Disable wrapped line indentation for terminal languages
                    overridesByLang: {
                        "bash,ps,sh": { preserveIndent: false },
                    },
                },
            },
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
