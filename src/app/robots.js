import { absoluteUrl } from "@/helpers/seo";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
