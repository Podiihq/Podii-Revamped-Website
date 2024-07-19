// SEO.js
import { Helmet } from 'react-helmet-async';

function SEO({ mainTitle, title, description, keywords, url, image }) {
    return (
        <Helmet prioritizeSeoTags="true">
            <title>{mainTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional Meta Tags */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
}

export default SEO;
