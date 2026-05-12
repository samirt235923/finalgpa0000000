import type { Metadata } from 'next';
import Link from 'next/link';
import OnlineFreeGPACalculator from '@/components/OnlineFreeGPACalculator';
import FAQ from '@/components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';
import AdUnit from '@/components/AdUnit';

const faqItems = [
  { question: 'Is this GPA calculator really free?', answer: 'Yes! Our Online Free GPA Calculator is 100% free to use with no hidden fees, no registration required, and no limits on the number of courses you can add.' },
  { question: 'How accurate is this free GPA calculator?', answer: 'This calculator uses the standard 4.0 GPA scale widely used by universities and colleges. It provides accurate results based on the grades and credit hours you enter.' },
  { question: 'Do I need to create an account to use this calculator?', answer: 'No, absolutely not. Our free GPA calculator works instantly in your browser without any login or registration. Your data stays on your device.' },
  { question: 'Can I use this calculator on my phone?', answer: 'Yes! Our free online GPA calculator is fully responsive and works great on desktop computers, laptops, tablets, and mobile phones.' },
  { question: 'How is GPA calculated?', answer: 'GPA is calculated by multiplying each course grade value by its credit hours, summing all grade points, then dividing by total credit hours. Formula: GPA = Total Grade Points ÷ Total Credit Hours' },
  { question: 'What is a good GPA?', answer: 'A GPA of 3.0 or higher is generally considered good. 3.5+ is very competitive for scholarships, and 3.7+ is excellent. Most graduate programs require a minimum of 3.0.' },
  { question: 'Can I save my GPA calculations?', answer: 'Since this calculator runs entirely in your browser, we recommend taking a screenshot of your results for your records. No data is stored on our servers.' },
  { question: 'What grades does this calculator support?', answer: 'Our calculator supports all standard letter grades: A+, A, A-, B+, B, B-, C+, C, C-, D+, D, D-, and F. Each grade has its corresponding point value on the 4.0 scale.' },
];

export const metadata: Metadata = {
  title: 'Free Online GPA Calculator – Calculate Your GPA Instantly (No Sign-up)',
  description: 'Use our completely free online GPA calculator to calculate your GPA instantly. No registration required. Add unlimited courses, enter grades and credits, and get accurate results on any device.',
  keywords: 'free gpa calculator, online gpa calculator free, gpa calculator no signup, free gpa calculator no registration, calculate gpa free, gpa calculator without account',
  openGraph: {
    title: 'Free Online GPA Calculator – Calculate Your GPA Instantly',
    description: 'Calculate your GPA for free! No registration required. Works on any device. Add unlimited courses and get instant accurate results.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/online-free-gpa-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online GPA Calculator – No Sign-up Required',
    description: 'Calculate your GPA instantly for free. No registration, no fees. Works on desktop and mobile devices.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/online-free-gpa-calculator',
  },
};

const relatedCalculators = [
  { href: '/gpa-calculators/college-gpa-calculator', name: 'College GPA Calculator' },
  { href: '/gpa-calculators/high-school-gpa-calculator', name: 'High School GPA Calculator' },
  { href: '/gpa-calculators/semester-gpa-calculator', name: 'Semester GPA Calculator' },
  { href: '/gpa-calculators/cumulative-gpa-calculator', name: 'Cumulative GPA Calculator' },
  { href: '/gpa-calculators/weighted-gpa-calculator', name: 'Weighted GPA Calculator' },
];

export default function OnlineFreeGPACalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 text-slate-900">
      <FAQSchema faqs={faqItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="breadcrumb" className="text-sm mb-6">
          <ol className="flex flex-wrap gap-2 text-gray-600">
            <li><Link href="/" className="text-green-600 hover:underline">Home</Link></li>
            <li>›</li>
            <li><Link href="/gpa-calculators" className="text-green-600 hover:underline">GPA Calculators</Link></li>
            <li>›</li>
            <li className="font-semibold text-gray-900">Free Online GPA Calculator</li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-white text-green-600 text-xs font-bold px-3 py-1 rounded-full">100% FREE</span>
            <span className="bg-green-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full">NO SIGN-UP</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Online GPA Calculator</h1>
          <p className="text-lg md:text-xl mb-3">Calculate your GPA instantly without any registration or fees. Our free online GPA calculator works on any device.</p>
          <p className="text-green-100">Add unlimited courses, get accurate results, and track your academic performance – all for free!</p>
        </header>

        <section id="table-of-contents" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-green-600">
            <a href="#calculator" className="hover:underline">Free Calculator</a>
            <a href="#what-is" className="hover:underline">What Is It</a>
            <a href="#how-to-use" className="hover:underline">How to Use</a>
            <a href="#formula" className="hover:underline">GPA Formula</a>
            <a href="#grade-scale" className="hover:underline">Grade Scale</a>
            <a href="#example" className="hover:underline">Example</a>
            <a href="#benefits" className="hover:underline">Benefits</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#related" className="hover:underline">Related Calculators</a>
          </div>
        </section>

        <section id="calculator" className="mb-8">
          <OnlineFreeGPACalculator />
        </section>

        <AdUnit />

        <section id="what-is" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">What Is a Free Online GPA Calculator</h2>
          <p className="text-gray-700 mb-4">
            A free online GPA calculator is a web-based tool that helps students calculate their Grade Point Average (GPA) without downloading software or creating an account. Our calculator allows you to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Add unlimited courses with custom names</li>
            <li>Enter credit hours for each course</li>
            <li>Select letter grades from a comprehensive grade scale</li>
            <li>Calculate weighted GPA automatically</li>
            <li>View performance classifications</li>
            <li>Reset and start fresh anytime</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Best of all, our calculator is completely free to use with no hidden costs, no registration required, and no limits on usage.
          </p>
        </section>

        <section id="how-to-use" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">How to Use This Free GPA Calculator</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Enter Course Names:</strong> Type in the name of each course (optional but helpful for organization).</li>
            <li><strong>Set Credit Hours:</strong> Enter the number of credit hours for each course (typically 1-6 credits).</li>
            <li><strong>Select Your Grade:</strong> Choose your letter grade from the dropdown (A+ through F).</li>
            <li><strong>Add More Courses:</strong> Click "Add Another Course" if you have more courses to enter.</li>
            <li><strong>Get Instant Results:</strong> Your GPA is calculated automatically as you enter data.</li>
            <li><strong>Track Performance:</strong> See your total credits, grade points, and performance classification.</li>
          </ol>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-green-800 font-medium">💡 Pro Tip: Use "Auto-add 4 Courses" to quickly populate the calculator with sample data, then modify as needed.</p>
          </div>
        </section>

        <section id="formula" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">GPA Formula Explained</h2>
          <div className="bg-slate-100 p-4 rounded-xl mb-4">
            <p className="text-xl font-mono text-center text-gray-900">
              <strong>GPA = Total Grade Points ÷ Total Credit Hours</strong>
            </p>
          </div>
          <p className="text-gray-700 mb-2">Where:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Grade Points:</strong> Grade value × Credit hours (e.g., A in a 3-credit course = 4.0 × 3 = 12.0 grade points)</li>
            <li><strong>Total Grade Points:</strong> Sum of all course grade points</li>
            <li><strong>Total Credit Hours:</strong> Sum of all course credits</li>
          </ul>
        </section>

        <section id="grade-scale" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Standard 4.0 Grade Scale</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-3">Letter Grade</th>
                  <th className="border px-4 py-3">GPA Value</th>
                  <th className="border px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50"><td className="border px-4 py-2 font-semibold">A+ / A</td><td className="border px-4 py-2">4.0</td><td className="border px-4 py-2">Excellent</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">A-</td><td className="border px-4 py-2">3.7</td><td className="border px-4 py-2">Very Good</td></tr>
                <tr className="bg-blue-50"><td className="border px-4 py-2 font-semibold">B+</td><td className="border px-4 py-2">3.3</td><td className="border px-4 py-2">Good</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">B</td><td className="border px-4 py-2">3.0</td><td className="border px-4 py-2">Above Average</td></tr>
                <tr className="bg-blue-50"><td className="border px-4 py-2 font-semibold">B-</td><td className="border px-4 py-2">2.7</td><td className="border px-4 py-2">Slightly Below Average</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">C+</td><td className="border px-4 py-2">2.3</td><td className="border px-4 py-2">Average</td></tr>
                <tr className="bg-yellow-50"><td className="border px-4 py-2 font-semibold">C</td><td className="border px-4 py-2">2.0</td><td className="border px-4 py-2">Satisfactory</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">C-</td><td className="border px-4 py-2">1.7</td><td className="border px-4 py-2">Below Satisfactory</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">D+</td><td className="border px-4 py-2">1.3</td><td className="border px-4 py-2">Poor</td></tr>
                <tr className="bg-orange-50"><td className="border px-4 py-2 font-semibold">D</td><td className="border px-4 py-2">1.0</td><td className="border px-4 py-2">Very Poor</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">D-</td><td className="border px-4 py-2">0.7</td><td className="border px-4 py-2">Barely Passing</td></tr>
                <tr className="bg-red-50"><td className="border px-4 py-2 font-semibold">F</td><td className="border px-4 py-2">0.0</td><td className="border px-4 py-2">Fail</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="example" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Example GPA Calculation</h2>
          <p className="text-gray-700 mb-4">Let's calculate the GPA for a student with the following courses:</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Course</th>
                  <th className="border px-3 py-2">Credits</th>
                  <th className="border px-3 py-2">Grade</th>
                  <th className="border px-3 py-2">Grade Points</th>
                  <th className="border px-3 py-2">Calculation</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-3 py-2">Mathematics</td><td className="border px-3 py-2">4</td><td className="border px-3 py-2">A (4.0)</td><td className="border px-3 py-2">16.0</td><td className="border px-3 py-2">4.0 × 4</td></tr>
                <tr><td className="border px-3 py-2">English</td><td className="border px-3 py-2">3</td><td className="border px-3 py-2">B+ (3.3)</td><td className="border px-3 py-2">9.9</td><td className="border px-3 py-2">3.3 × 3</td></tr>
                <tr><td className="border px-3 py-2">Physics</td><td className="border px-3 py-2">4</td><td className="border px-3 py-2">A- (3.7)</td><td className="border px-3 py-2">14.8</td><td className="border px-3 py-2">3.7 × 4</td></tr>
                <tr><td className="border px-3 py-2">History</td><td className="border px-3 py-2">3</td><td className="border px-3 py-2">B (3.0)</td><td className="border px-3 py-2">9.0</td><td className="border px-3 py-2">3.0 × 3</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="text-gray-700"><strong>Total Grade Points:</strong> 16.0 + 9.9 + 14.8 + 9.0 = <strong>49.7</strong></p>
            <p className="text-gray-700"><strong>Total Credit Hours:</strong> 4 + 3 + 4 + 3 = <strong>14</strong></p>
            <p className="text-xl font-bold text-green-700 mt-2">GPA = 49.7 ÷ 14 = <strong>3.55</strong></p>
          </div>
        </section>

        <section id="benefits" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Why Use Our Free Online GPA Calculator?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <h3 className="font-bold text-gray-900 mb-2">✓ 100% Free Forever</h3>
              <p className="text-sm text-gray-600">No hidden fees, no premium tiers, no subscriptions. Use it as much as you want.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">✓ No Registration</h3>
              <p className="text-sm text-gray-600">Start calculating immediately. No account creation, no email verification.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <h3 className="font-bold text-gray-900 mb-2">✓ Unlimited Courses</h3>
              <p className="text-sm text-gray-600">Add as many courses as you need. No limits on usage or calculations.</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
              <h3 className="font-bold text-gray-900 mb-2">✓ Mobile Friendly</h3>
              <p className="text-sm text-gray-600">Works perfectly on smartphones, tablets, and desktop computers.</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
              <h3 className="font-bold text-gray-900 mb-2">✓ Instant Results</h3>
              <p className="text-sm text-gray-600">Get your GPA calculated in real-time as you enter your data.</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl border border-pink-200">
              <h3 className="font-bold text-gray-900 mb-2">✓ Privacy Safe</h3>
              <p className="text-sm text-gray-600">Your data stays in your browser. We don't store or track your information.</p>
            </div>
          </div>
        </section>

        <section id="related" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Related GPA Calculators</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedCalculators.map((item) => (
              <Link key={item.href} href={item.href} className="block p-4 border border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-colors">
                <span className="font-medium text-gray-900">{item.name}</span>
                <span className="text-green-600 ml-2">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">External Authority Resources</h2>
          <ul className="list-disc list-inside text-green-600 space-y-2">
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="hover:underline">College Board – Official SAT and AP Information</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="hover:underline">NCES – National Center for Education Statistics</a></li>
            <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="hover:underline">U.S. Department of Education</a></li>
          </ul>
        </section>

        <section id="faq" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <footer className="text-center text-sm text-gray-500 py-8 border-t border-gray-200">
          <p className="mb-2">© {new Date().getFullYear()} Top GPA Calculator. All rights reserved.</p>
          <p>Our free online GPA calculator is provided for educational purposes. Always verify results with your school's official grading policy.</p>
        </footer>
      </div>
    </div>
  );
}
