'use client';

import { useState, useEffect, useMemo } from 'react';
import { Icon } from '@iconify/react';
import { SectionTitle } from '../../ui/SectionTitle';
import { SimplePDFViewer } from './SimplePDFViewer';
import { getPosts } from '../../../lib/api';

interface Post {
  id: number;
  title: string;
  file: string;
  thumbnail: string;
  pageCount: number;
  createdAt: string;
  published: boolean;
  newsImage: string;
  description: string;
}

export function NewsFilter() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Buscar posts do banco de dados
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const result = await getPosts();
        
        if (result.success && result.data) {
          // Filtrar apenas posts publicados e pegar os 4 primeiros
          const publishedPosts = result.data
            .filter((post: Post) => post.published)
            .slice(0, 4);
          setPosts(publishedPosts);
        } else {
          setError(result.error || 'Erro ao carregar posts');
        }
      } catch (err) {
        setError('Erro ao carregar posts');
        console.error('Erro ao buscar posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Post mais recente para o PDF viewer
  const latestPost = useMemo(() => {
    console.log('Posts disponíveis:', posts);
    const post = posts[0] || {
      id: 1,
      title: 'Teste PDF',
      file: 'https://res.cloudinary.com/dlykmt2r4/image/upload/v1770643668/CLODONEWS_001_fjx1fj.pdf',
      thumbnail: '',
      pageCount: 2,
      createdAt: new Date().toISOString(),
      published: true
    };
    // Garantir que pageCount não seja undefined
    if (!post.pageCount || post.pageCount === 0) {
      post.pageCount = 2; // fallback padrão
    }
    return post;
  }, [posts]);
  
  // Posts 2-4 para as notícias
  const newsCards = posts;

  // Formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  console.log('Latest post:', latestPost);
  console.log('PDF URL:', latestPost?.file);
  console.log('Page count:', latestPost?.pageCount);
  console.log('News cards:', newsCards.length);

  if (loading) {
    return (
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex items-center justify-center">
            <Icon icon="eos-icons:loading" className="w-12 h-12 text-primary" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 md:px-0">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-8">
          <div className='w-2xl'>
            <SectionTitle title="Fique atualizado e confira as últimas" subtitle="Fique por dentro das novidades">notícias e conteúdos</SectionTitle>


          </div>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2">
            Ver todas
            <Icon icon="mdi:chevron-right" className="w-4 h-4" />
          </button>
        </div>

        {/* Layout duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna PDF - 1/3 */}
          <div className="lg:col-span-1">
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <SimplePDFViewer
              pdfUrl={latestPost.file}
              totalPages={latestPost.pageCount}
            />
          </div>

          {/* Coluna notícias - 2/3 */}
          <div className="lg:col-span-2 space-y-4 mt-10">
            {newsCards.map((post) => (
              <div key={post.id} className="flex items-start space-x-3">
                <div className="w-24 h-24 bg-gray-200 rounded shrink-0 overflow-hidden">
                  <img 
                    src={post.newsImage} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="bg-primary text-white text-xs px-2 py-1 rounded mb-2 inline-block">
                    {formatDate(post.createdAt)}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 leading-tight w-sm">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}