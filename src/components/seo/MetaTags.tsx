import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { PageMeta } from '../../types';

interface MetaTagsProps {
  meta: PageMeta;
  path: string;
}

export function MetaTags({ meta, path }: MetaTagsProps) {
  const baseUrl = 'https://holbrook-electrical.com'; // Replace with your actual domain
  const fullUrl = `${baseUrl}${path}`;
  
  return (
    <Helmet>
      <title>{meta.title} | Holbrook Electrical</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={meta.ogType || 'website'} />
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.ogImage && <meta name="twitter:image" content={meta.ogImage} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={meta.canonical || fullUrl} />
    </Helmet>
  );
}