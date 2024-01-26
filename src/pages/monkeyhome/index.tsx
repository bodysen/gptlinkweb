import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Monkeyhome() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <header className="bg-white dark:bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-800 dark:text-white">
                monkey software
              </span>
            </div>
            <div>
              <Link to="/monkeyhome" className="mr-4 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
                About
              </Link>
              <Link to="/chat" className="mr-4 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
                Services
              </Link>
              <Link to="/chat" className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Welcome to monkey software
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis leo eu sem laoreet, sit amet tempus odio facilisis.
            </p>
            <Button variant={'destructive'} className="mt-2">
              <Link to="/chat">Get Started</Link>
            </Button>
          </div>
          <div className="bg-gray-300 rounded-lg"></div>
        </div>
      </main>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-gray-300">
          &copy; {new Date().getFullYear()} Monkey Software. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
