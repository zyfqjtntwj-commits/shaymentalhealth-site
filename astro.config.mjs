import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zyfqjtntwj-commits.github.io/shaymentalhealth-site/",
  base: "/shaymentalhealth-site/",
  integrations: [sitemap()],
});

