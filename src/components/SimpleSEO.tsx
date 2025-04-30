
import { useEffect } from "react";

interface SimpleSEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

export const SimpleSEO = ({
  title,
  description,
  keywords,
  ogImage = "/og-image.png",
  ogType = "website"
}: SimpleSEOProps) => {
  const siteName = "Калининград Тревел";
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Обновляем title
    document.title = fullTitle;
    
    // Обновляем meta-теги
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', description);
    
    // Обновляем keywords если переданы
    if (keywords) {
      let keywordsTag = document.querySelector('meta[name="keywords"]');
      if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsTag);
      }
      keywordsTag.setAttribute('content', keywords);
    }
    
    // Open Graph мета-теги
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:type': ogType,
      'og:url': window.location.href,
      'og:image': new URL(ogImage, window.location.origin).href,
      'og:site_name': siteName
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    });

    // Добавляем канонический URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', window.location.href);
    
    // Twitter Card мета-теги
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': new URL(ogImage, window.location.origin).href
    };
    
    Object.entries(twitterTags).forEach(([name, content]) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    });
    
    // Очистка при размонтировании компонента не требуется,
    // так как SEO-теги должны сохраняться
  }, [title, fullTitle, description, keywords, ogImage, ogType]);
  
  return null; // Этот компонент не рендерит видимый контент
};
