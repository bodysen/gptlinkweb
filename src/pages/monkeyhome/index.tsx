import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Monkeyhome() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="my-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              首页
            </p>
            <Button variant={'destructive'} className="mt-2">
              <Link to="/chat">试试AI问答</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
