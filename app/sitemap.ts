import type { MetadataRoute } from "next";
import { siteConfig, industries } from "@/lib/constants";
import { US_STATE_ORDER, stateSlug } from "@/lib/us-states";
import { costEstimator } from "@/lib/cost-estimator";
import { guides } from "@/lib/guides";
import { stateArticles } from "@/lib/state-articles";

const routes = [
  "",
  "/warm-transfers",
  "/inbound-calls",
  "/webform-leads",
  "/revenue-share",
  "/industries",
  "/coverage",
  "/sitemap",
  "/learning-center",
  "/tactical-wisdom",
  "/compliance",
  "/case-studies",
  "/about",
  "/partners",
  "/contact",
  "/talk-to-sales",
  "/privacy-policy",
  "/terms",
  "/tcpa",
  "/aba-disclaimer",
  "/ccpa",
  "/dnc",
  "/do-not-sell-my-info",
  "/lead-credit-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const industryHubEntries: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${siteConfig.url}/coverage/${industry.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const stateEntries: MetadataRoute.Sitemap = industries.flatMap((industry) =>
    US_STATE_ORDER.map((abbr) => ({
      url: `${siteConfig.url}/coverage/${industry.slug}/${stateSlug(abbr)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  const learningCenterIndustryEntries: MetadataRoute.Sitemap = costEstimator.map((section) => ({
    url: `${siteConfig.url}/learning-center/${section.industrySlug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const learningCenterCategoryEntries: MetadataRoute.Sitemap = costEstimator.flatMap((section) =>
    section.categories.map((category) => ({
      url: `${siteConfig.url}/learning-center/${section.industrySlug}/${category.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    }))
  );

  const learningCenterArticleEntries: MetadataRoute.Sitemap = costEstimator.flatMap((section) =>
    section.categories.flatMap((category) =>
      category.articles.map((article) => ({
        url: `${siteConfig.url}/learning-center/${section.industrySlug}/${category.slug}/${article.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      }))
    )
  );

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteConfig.url}/tactical-wisdom/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const stateArticleEntries: MetadataRoute.Sitemap = stateArticles.flatMap((set) => {
    const slug = stateSlug(set.stateAbbr);
    return [...set.b2b, ...set.consumer].map((article) => ({
      url: `${siteConfig.url}/coverage/${set.industrySlug}/${slug}/${article.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));
  });

  return [
    ...staticEntries,
    ...industryHubEntries,
    ...stateEntries,
    ...learningCenterIndustryEntries,
    ...learningCenterCategoryEntries,
    ...learningCenterArticleEntries,
    ...guideEntries,
    ...stateArticleEntries,
  ];
}
