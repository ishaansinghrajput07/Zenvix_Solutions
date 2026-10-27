import { Helmet } from "react-helmet-async";

const SITE_NAME = "Zenvix Solution";

const DEFAULT_TITLE =
  "Zenvix Solution — Learn. Build. Get Hired.";

const DEFAULT_DESCRIPTION =
  "Zenvix Solution helps learners build practical skills through career-focused programs, real-world projects, interview preparation, job preparation and career support.";

const SITE_URL = "https://YOUR-DOMAIN.com";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = "/images/zenvix-og.png",
  noIndex = false,
}) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE;

  const canonicalUrl = `${SITE_URL}${path}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* =====================================================
          PRIMARY SEO
      ====================================================== */}

      <title>{pageTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow"
        }
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* =====================================================
          OPEN GRAPH
      ====================================================== */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      <meta
        property="og:image:alt"
        content={pageTitle}
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      {/* =====================================================
          TWITTER / X
      ====================================================== */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />
    </Helmet>
  );
}