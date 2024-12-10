import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { getCaseStudyBySlug } from '../utils/markdown';
import { ImageGallery } from '../components/case-studies/ImageGallery';
import { SectionHeader } from '../components/ui/SectionHeader';
import { MetaTags } from '../components/seo/MetaTags';
import type { CaseStudy, PageMeta } from '../types';

export function CaseStudyDetailPage() {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getCaseStudyBySlug(id).then(study => {
        setCaseStudy(study);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Case Study Not Found"
            subtitle="The case study you're looking for doesn't exist or has been moved."
          />
          <Link 
            to="/case-studies"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={20} />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const caseMeta: PageMeta = {
    title: caseStudy.title,
    description: caseStudy.content.split('## Challenge')[1]?.split('##')[0]?.trim().slice(0, 160) || '',
    ogImage: caseStudy.featuredImage || caseStudy.image,
    ogType: 'article',
    keywords: [caseStudy.sector, 'case study', 'electrical project', 'electrical installation']
  };

  return (
    <>
      <MetaTags meta={caseMeta} path={`/case-studies/${caseStudy.slug}`} />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Link 
                  to="/case-studies"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
                >
                  <ArrowLeft size={20} />
                  Back to Case Studies
                </Link>
                
                <SectionHeader 
                  title={caseStudy.title}
                  subtitle={caseStudy.content.split('## Challenge')[1]?.split('##')[0]?.trim()}
                />
                
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {caseStudy.sector}
                </span>
              </div>
              
              <div className="flex flex-col justify-center gap-6">
                <p className="text-scale-xl text-gray-600">
                  Discover how we delivered exceptional results for this project and how we can do the same for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Start Your Project
                    <ArrowLeft size={20} />
                  </Link>
                  
                  <a
                    href="tel:01234567890"
                    className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Phone size={20} />
                    <span>24/7 Emergency: 01234 567890</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <SectionHeader 
                title="Project Gallery"
                subtitle="View the key stages and highlights of this electrical installation project."
              />
              <ImageGallery images={caseStudy.gallery} />
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <article className="prose prose-blue max-w-4xl mx-auto">
              <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
            </article>
          </div>
        </section>
      </div>
    </>
  );
}