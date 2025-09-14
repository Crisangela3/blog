import Link from 'next/link';

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    summary: string;
    date: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.summary}</p>
      <p className="text-sm text-gray-400 mb-4">Publicado em: {post.date}</p>
      <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
        Ler mais →
      </Link>
    </div>
  );
}