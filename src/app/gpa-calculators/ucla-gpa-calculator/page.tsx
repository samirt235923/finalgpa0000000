import type { Metadata } from 'next';
import Link from 'next/link';
import UCLAGPACalculator from '@/components/UCLAGPACalculator';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumb from '@/components/Breadcrumb';
import AdUnit from '@/components/AdUnit';
import FAQ from '@/components/FAQ';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'UCLA GPA Calculator – Calculate Your GPA for UCLA',
  description: 'Calculate your UCLA GPA instantly with our accurate calculator. Enter courses, grades, and units to see your cumulative GPA and understand UCLA\'s academic standards.',
  keywords: 'UCLA GPA calculator, calculate UCLA GPA, University of California Los Angeles GPA, UCLA grading scale, UCLA GPA requirements',
  openGraph: {
    title: 'UCLA GPA Calculator – Calculate Your GPA for UCLA',
    description: 'Calculate your UCLA GPA with our free online calculator. Perfect for current and prospective UCLA students.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/ucla-gpa-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UCLA GPA Calculator',
    description: 'Calculate your UCLA GPA instantly and understand admission standards.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/ucla-gpa-calculator',
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Calculators', href: '/gpa-calculators' },
  { label: 'UCLA GPA Calculator', href: '/gpa-calculators/ucla-gpa-calculator' },
];

const faqItems = [
  {
    question: 'What is UCLA\'s GPA scale?',
    answer: 'UCLA uses a standard 4.0 GPA scale where A/A+ = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, and F = 0.0. This calculator uses UCLA\'s official scale for accurate calculations.',
  },
  {
    question: 'What GPA do I need to get into UCLA?',
    answer: 'UCLA requires a minimum 3.0 GPA for California residents and 3.0 for non-residents. However, the average admitted student has a GPA around 3.93. Admitted freshmen typically have unweighted GPAs in the 3.9-4.0 range, with many achieving 4.0 with honors and AP courses.',
  },
  {
    question: 'How many units are UCLA courses?',
    answer: 'Most UCLA undergraduate courses are 4 units. Some lower-division courses may be 1-3 units, while upper-division courses typically range from 3-5 units. Seminars, labs, and independent studies may have different unit values. Check your course syllabus for specific credit information.',
  },
  {
    question: 'Does UCLA calculate weighted GPA for admissions?',
    answer: 'Yes, UCLA uses UC GPA which includes honors, AP, and IB courses in the admissions calculation. The UC system recalculates GPAs for all applicants using only 10th and 11th grade a-g courses. Visit the UC Admissions website for their official GPA calculator.',
  },
  {
    question: 'Is a 3.5 GPA good at UCLA?',
    answer: 'A 3.5 GPA at UCLA is above average and demonstrates solid academic performance. For current UCLA students, a 3.5 is competitive for graduate school applications. However, for many competitive programs (law, medicine, PhD), 3.7+ is more competitive.',
  },
  {
    question: 'What happens if my GPA drops below 2.0 at UCLA?',
    answer: 'Students with GPAs below 2.0 are placed on academic probation. UCLA requires students on probation to meet with academic advisors and develop an improvement plan. Continued poor performance may result in academic disqualification or dismissal.',
  },
];

export default function UCLAGPACalculatorPage() {
  const breadcrumbJsonLd = jsonLdStringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: 'https://topgpacalculator.com' + item.href,
    })),
  });

  return (
    <>
      {breadcrumbJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1 className="mb-4 text-4xl font-bold text-gray-900">UCLA GPA Calculator</h1>
              <p className="text-lg text-gray-700 mb-8">
                Calculate your UCLA GPA instantly with our accurate calculator. UCLA, one of the top public universities in America, uses a standard 4.0 grading scale. Whether you're tracking semester performance, planning your academic future, or evaluating transfer credits, our UCLA GPA Calculator provides instant, accurate results.
              </p>

              <div className="mb-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
                <ul className="space-y-2">
                  <li><Link href="#calculator" className="text-blue-600 hover:underline">GPA Calculator</Link></li>
                  <li><Link href="#about-ucla" className="text-blue-600 hover:underline">About UCLA's GPA System</Link></li>
                  <li><Link href="#grading-scale" className="text-blue-600 hover:underline">Grading Scale</Link></li>
                  <li><Link href="#admission-gpa" className="text-blue-600 hover:underline">Admission GPA Requirements</Link></li>
                  <li><Link href="#improve-gpa" className="text-blue-600 hover:underline">Improve Your GPA</Link></li>
                  <li><Link href="#faq" className="text-blue-600 hover:underline">FAQs</Link></li>
                </ul>
              </div>

              <section id="calculator" className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">UCLA GPA Calculator</h2>
                <p className="mb-6 text-gray-700">
                  Enter your UCLA courses, grades, and unit values to calculate your cumulative GPA. The calculator automatically applies UCLA's 4.0 grading scale.
                </p>
                <UCLAGPACalculator />
              </section>

              <section id="about-ucla" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Understanding UCLA's GPA System</h2>
                <p className="mb-4 text-gray-700">
                  UCLA, located in Los Angeles, is one of the premier public research universities in the United States. Known for rigorous academics and competitive grading, UCLA maintains high academic standards across all schools and colleges. The university's GPA calculation system is essential for current students managing academic progress, prospective students understanding admission standards, and transfer students converting credits.
                </p>
                <p className="mb-4 text-gray-700">
                  UCLA uses a standard 4.0 GPA scale aligned with most American universities. Your cumulative GPA is weighted by course units, meaning larger courses (typically 4 units) have more impact than smaller courses (1-3 units). This weighted calculation reflects your overall academic performance across all graded courses from your first semester through the present.
                </p>
                <p className="text-gray-700">
                  Understanding your UCLA GPA is crucial for degree progress, class registration priority, scholarship eligibility, and graduate school applications. This calculator provides immediate GPA calculations and helps you forecast how different grades affect your academic standing.
                </p>
              </section>

              <section id="grading-scale" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">UCLA's Official Grading Scale</h2>
                <p className="mb-6 text-gray-700">UCLA uses this standard 4.0 scale with plus/minus grades:</p>
                <div className="mb-6 overflow-x-auto bg-gray-50 rounded-lg p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="px-3 py-2 text-left font-semibold">Grade</th>
                        <th className="px-3 py-2 text-center font-semibold">Points</th>
                        <th className="px-3 py-2 text-left font-semibold">Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['A+/A', '4.0', 'Excellent'],
                        ['A-', '3.7', 'Excellent'],
                        ['B+', '3.3', 'Very Good'],
                        ['B', '3.0', 'Good'],
                        ['B-', '2.7', 'Good'],
                        ['C+', '2.3', 'Satisfactory'],
                        ['C', '2.0', 'Satisfactory'],
                        ['C-', '1.7', 'Satisfactory'],
                        ['D+', '1.3', 'Passing'],
                        ['D', '1.0', 'Passing'],
                        ['F', '0.0', 'Failing'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-b border-gray-200 hover:bg-white">
                          <td className="px-3 py-2 text-gray-700">{row[0]}</td>
                          <td className="px-3 py-2 text-center text-gray-700">{row[1]}</td>
                          <td className="px-3 py-2 text-gray-700">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="admission-gpa" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">UCLA Admission GPA Requirements</h2>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Minimum Requirement</h3>
                    <p className="text-sm text-gray-700">UCLA requires a minimum 3.0 unweighted GPA for both California residents and international students. However, this is the floor—most admitted students have significantly higher GPAs.</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4 bg-green-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Competitive GPA</h3>
                    <p className="text-sm text-gray-700">The middle 50% of admitted freshmen have unweighted GPAs between 3.88 and 4.0. The average GPA for admitted students is approximately 3.93, reflecting UCLA's highly selective admissions process.</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4 bg-purple-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Transfer Students</h3>
                    <p className="text-sm text-gray-700">UCLA recalculates GPAs for transfer applicants using only transfer-level courses. The university primarily considers courses completed after high school for transfer GPA calculation.</p>
                  </div>
                </div>
              </section>

              <section id="improve-gpa" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">How to Improve Your UCLA GPA</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                    <span><strong>Focus on Major Courses:</strong> High-unit courses have greater impact on your cumulative GPA. Prioritize strong performance in 4-unit courses and major requirements.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                    <span><strong>Use Academic Resources:</strong> UCLA offers tutoring, writing centers, and peer learning programs. Take advantage of these free services early in the semester.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                    <span><strong>Manage Course Load:</strong> Taking fewer courses (12-13 units instead of 16) allows deeper engagement and better grades. Spread challenging courses across semesters.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                    <span><strong>Course Retakes:</strong> UCLA allows retaking courses. If you received below a B-, consider retaking with more preparation. The higher grade typically counts toward your GPA.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
                    <span><strong>P/NP Grading:</strong> Use UCLA's Pass/No Pass option for challenging electives outside your major to explore subjects without GPA risk.</span>
                  </li>
                </ul>
              </section>

              <AdUnit />

              <section id="faq" className="mb-10">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <FAQ items={faqItems} />
              </section>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Start Calculating Your UCLA GPA Today</h2>
                <p className="mb-6 text-blue-50">Use our UCLA GPA Calculator above to input your courses and see your cumulative GPA instantly.</p>
                <Link href="#calculator" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Use Calculator
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">UCLA Official Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://registrar.ucla.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UCLA Registrar's Office</a> – Official GPA policies</li>
                  <li><a href="https://admissions.ucla.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UCLA Admissions</a> – GPA requirements and standards</li>
                  <li><a href="https://www.itsupportportal.ucla.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UCLA AcademicSuccess</a> – Academic support resources</li>
                </ul>
              </div>
            </div>

            <div>
              <RelatedCalculators relatedIds={['uc-berkeley-gpa-calculator', 'college-gpa-calculator', 'weighted-gpa-calculator']} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
