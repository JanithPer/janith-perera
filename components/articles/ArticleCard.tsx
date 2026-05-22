import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const ArticleCard = () => {
  return (
    <Link href="/blog">
      <Card className="max-w-[1200px] border-none bg-background shadow-2xl transition-all hover:-translate-y-1.5 hover:bg-[#1a1a1a4d]">
        <CardHeader className="space-y-3">
          <CardTitle className="text-white">
            Why Convex is 10x Better Than Firebase for Modern Apps
          </CardTitle>
          <CardDescription className="text-silverchalice">
            Convex combines a reactive real-time database, serverless
            functions, and built-in TypeScript support out of the box,
            eliminating Firebase's painful scaling surprises, complex security
            rules, and fragmented ecosystem. Here's why Convex is the
            Firebase killer you've been waiting for.
          </CardDescription>
        </CardHeader>
        <CardFooter className="text-gray-400">
          Coming soon
        </CardFooter>
      </Card>
    </Link>
  );
};
export default ArticleCard;




