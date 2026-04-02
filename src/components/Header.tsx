import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-secondary-200 sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 overflow-hidden">
              <img src="/logo.svg" alt="GPA Calculator Logo" className="w-10 h-10" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-secondary-600 -mt-1">Free & Accurate</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/gpa-calculators"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Calculators
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/blog"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/about"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/gpa-calculators/college-gpa-calculator"
              className="btn-primary text-sm"
            >
              Calculate GPA
            </Link>
          </div>

          <details className="md:hidden group">
            <summary className="cursor-pointer p-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-secondary-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 flex items-center justify-center">
              <span className="sr-only">Toggle menu</span>
              <svg
                className="w-6 h-6 group-open:hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className="hidden w-6 h-6 group-open:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </summary>

            <div className="md:hidden absolute left-0 right-0 top-full px-4 pb-4 z-50">
              <nav className="bg-secondary-50 rounded-xl p-4 mt-2 space-y-2 shadow-lg border border-secondary-200">
                <Link
                  href="/"
                  className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg font-medium transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/gpa-calculators"
                  className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg font-medium transition-all duration-200"
                >
                  Calculators
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg font-medium transition-all duration-200"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-white rounded-lg font-medium transition-all duration-200"
                >
                  About
                </Link>
                <div className="pt-2 border-t border-secondary-200">
                  <Link
                    href="/gpa-calculators/college-gpa-calculator"
                    className="block w-full btn-primary text-center text-sm"
                  >
                    Calculate GPA
                  </Link>
                </div>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
