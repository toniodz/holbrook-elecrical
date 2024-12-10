import type { CaseStudy } from '../types';
import { marked } from 'marked';

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const caseStudies: CaseStudy[] = [];
  const modules = import.meta.glob('../content/case-studies/*.md');

  for (const path of Object.keys(modules)) {
    const mod = await modules[path]();
    const { frontmatter, content } = mod as any;
    
    caseStudies.push({
      slug: path.split('/').pop()?.replace('.md', '') || '',
      title: frontmatter.title,
      sector: frontmatter.sector,
      date: frontmatter.date,
      image: frontmatter.image,
      featured: frontmatter.featured || false,
      content: marked(content)
    });
  }

  return caseStudies.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const modules = import.meta.glob('../content/case-studies/*.md');
    const path = Object.keys(modules).find(p => p.includes(`${slug}.md`));
    
    if (!path) return null;
    
    const mod = await modules[path]();
    const { frontmatter, content } = mod as any;
    
    return {
      slug,
      title: frontmatter.title,
      sector: frontmatter.sector,
      date: frontmatter.date,
      image: frontmatter.image,
      featured: frontmatter.featured || false,
      content: marked(content)
    };
  } catch {
    return null;
  }
}