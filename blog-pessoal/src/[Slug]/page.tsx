import LikeButton from '@/components/LikeButton';
import { notFound } from 'next/navigation';

// Simulação de conteúdo do post, como se viesse de uma API
const postsContent: Record<string, { title: string; author: string; date: string; content: string }> = {
  'meu-primeiro-post': {
    title: 'Meu Primeiro Post',
    author: 'Seu Nome',
    date: '10 de Setembro, 2025',
    content: `
      <p>Este é o conteúdo completo do meu primeiro post. Ele foi gerado dinamicamente usando a rota <strong>/posts/[slug]</strong>.</p>
      <p>Aqui eu poderia falar sobre como estou aprendendo a usar o Next.js e como estou achando a experiência com Server Components e App Router.</p>
      <p>O botão de curtir abaixo é um <strong>Client Component</strong>, o que permite que ele tenha interatividade e estado, como um contador de likes.</p>
    `,
  },
  'nextjs-app-router': {
    title: 'Next.js App Router: O que é e por que usar?',
    author: 'Seu Nome',
    date: '12 de Setembro, 2025',
    content: `
      <p>O <strong>App Router</strong> é a nova forma de roteamento no Next.js, baseada em diretórios. Ele simplifica a organização do projeto e introduz o conceito de Server Components.</p>
      <p>Com ele, páginas e layouts são definidos de forma intuitiva, e as rotas dinâmicas, como esta, são fáceis de implementar usando a sintaxe <strong>[slug]</strong>.</p>
      <p>Essa abordagem melhora a performance e a experiência de desenvolvimento.</p>
    `,
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = postsContent[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500">
        Por: {post.author} em {post.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-8">
        <LikeButton />
      </div>
    </div>
  );
}