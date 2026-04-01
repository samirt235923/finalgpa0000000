import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-lg">GPA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">GPA Calculator</h3>
                <p className="text-sm text-secondary-400">Free & Accurate</p>
              </div>
            </Link>
            <p className="text-secondary-300 leading-relaxed mb-6">
              Calculate your GPA instantly with our free, accurate calculator. Perfect for college and high school students across the United States.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.pinterest.com/topgpacalculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@TopGpaCalculator"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://x.com/topgpacalculato"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Popular Calculators */}
          <div>
            <p className="text-lg font-semibold mb-6 text-white">Popular Calculators</p>
            <ul className="space-y-3">
              <li>
                <Link href="/gpa-calculators/college-gpa-calculator" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  College GPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/gpa-calculators/high-school-gpa-calculator" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  High School GPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/gpa-calculators/weighted-gpa-calculator" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  Weighted GPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/gpa-calculators/semester-gpa-calculator" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  Semester GPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/gpa-calculators/cumulative-gpa-calculator" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  Cumulative GPA Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-lg font-semibold mb-6 text-white">Resources</p>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  GPA Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-secondary-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-lg font-semibold mb-6 text-white">Stay Updated</p>
            <p className="text-secondary-300 mb-4 leading-relaxed">
              Get GPA tips, calculator updates, and study advice delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-xl text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-secondary-400 mt-3">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm">
              © {currentYear} GPA Calculator. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-secondary-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Forever
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Accurate
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Mobile Friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}





