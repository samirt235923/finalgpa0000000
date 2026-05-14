import type { Metadata } from 'next';
import Link from 'next/link';
import UCBerkeleyGPACalculator from '@/components/UCBerkeleyGPACalculator';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumb from '@/components/Breadcrumb';
import AdUnit from '@/components/AdUnit';
import FAQ from '@/components/FAQ';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'UC Berkeley GPA Calculator – Calculate Your GPA Accurately',
  description: 'Use our UC Berkeley GPA Calculator to calculate your cumulative GPA using Berkeley\'s grading scale. Understand admission standards, calculate semester GPA, and improve your academic standing.',
  keywords: 'UC Berkeley GPA calculator, calculate Berkeley GPA, University of California Berkeley GPA, Berkeley grading scale, UCOP GPA requirements',
  openGraph: {
    title: 'UC Berkeley GPA Calculator – Calculate Your GPA Accurately',
    description: 'Calculate your UC Berkeley GPA with our accurate calculator. Enter courses, grades, and units to get instant results and understand Berkeley\'s GPA standards.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/uc-berkeley-gpa-calculator',
    images: [
      {
        url: 'https://topgpacalculator.com/logo.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UC Berkeley GPA Calculator',
    description: 'Calculate your UC Berkeley GPA with our accurate calculator and understand admission standards.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/uc-berkeley-gpa-calculator',
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Calculators', href: '/gpa-calculators' },
  { label: 'UC Berkeley GPA Calculator', href: '/gpa-calculators/uc-berkeley-gpa-calculator' },
];

const breadcrumbSchema = [
  { name: 'Home', url: 'https://topgpacalculator.com' },
  { name: 'Calculators', url: 'https://topgpacalculator.com/gpa-calculators' },
  { name: 'UC Berkeley GPA Calculator', url: 'https://topgpacalculator.com/gpa-calculators/uc-berkeley-gpa-calculator' },
];

const breadcrumbJsonLd = jsonLdStringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbSchema.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

const calculatorJsonLd = jsonLdStringify({
  '@context': 'https://schema.org',
  '@type': 'EducationalApplication',
  name: 'UC Berkeley GPA Calculator',
  description: 'Calculate your UC Berkeley GPA using the official grading scale',
  url: 'https://topgpacalculator.com/gpa-calculators/uc-berkeley-gpa-calculator',
  applicationCategory: 'EducationalApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
});

const faqItems = [
  {
    question: 'What is the UC Berkeley GPA scale?',
    answer: 'UC Berkeley uses a 4.0 GPA scale where A/A+ = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, D+ = 1.3, D = 1.0, and F = 0.0. This calculator uses the official Berkeley grading scale for accurate calculations.',
  },
  {
    question: 'Does Berkeley calculate weighted or unweighted GPA?',
    answer: 'UC Berkeley calculates unweighted GPA based on the standard 4.0 scale. However, for admissions purposes, the UC system also looks at course rigor and academic context. Graduate programs may evaluate additional factors like course difficulty and major requirements.',
  },
  {
    question: 'How many units are Berkeley courses worth?',
    answer: 'Most Berkeley undergraduate courses are worth 3 or 4 units. Some lower-division courses may be 1-2 units, while upper-division courses typically range from 3-5 units. Seminars, labs, and special studies may vary. Your course syllabus will specify unit values.',
  },
  {
    question: 'What GPA do I need to get into UC Berkeley?',
    answer: 'For high school applicants, UC Berkeley requires a minimum 3.0 unweighted GPA for California residents and 3.0 for non-residents. However, admitted students typically have higher GPAs (3.8+) along with strong test scores and extracurricular activities. The middle 50% of admitted freshmen have GPAs around 3.89-4.0.',
  },
  {
    question: 'Is a 3.5 GPA good at UC Berkeley?',
    answer: 'A 3.5 GPA at UC Berkeley is above average and demonstrates solid academic performance. This GPA is competitive for many graduate programs and professional opportunities. However, some highly competitive programs (law school, medical school, top-tier PhD programs) may expect 3.7+.',
  },
  {
    question: 'How does Berkeley calculate GPA for transfer students?',
    answer: 'UC Berkeley recalculates GPAs for transfer applicants using the UC Transfer GPA calculation, which includes transfer-level courses taken after high school. Only courses graded A through F count toward the transfer GPA. This may differ from your current institution\'s calculation.',
  },
  {
    question: 'Can I retake courses at Berkeley to improve my GPA?',
    answer: 'Yes, Berkeley allows course repeats. When you retake a course, both grades appear on your transcript, but typically only the most recent grade counts toward your GPA. Check with Berkeley\'s registrar office for specific policies on repeat grading.',
  },
  {
    question: 'What happens if my GPA falls below 2.0 at Berkeley?',
    answer: 'A GPA below 2.0 at Berkeley results in academic probation. Students on probation must meet with an academic advisor and develop an improvement plan. Continued poor performance may result in dismissal or academic disqualification. Immediate intervention is essential.',
  },
];

export default function UCBerkeleyGPACalculatorPage() {
  return (
    <>
      {breadcrumbJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />}
      {calculatorJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: calculatorJsonLd }} />}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Main Content */}
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Title and Description */}
              <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">UC Berkeley GPA Calculator</h1>
                <p className="text-lg text-gray-700">
                  Calculate your UC Berkeley GPA instantly using the official University of California grading scale. Perfect for current students tracking semester performance, incoming freshmen planning their academic goals, and transfer students converting their GPA to Berkeley standards.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="mb-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  <li><Link href="#calculator" className="text-blue-600 hover:underline">GPA Calculator</Link></li>
                  <li><Link href="#understanding-berkeley-gpa" className="text-blue-600 hover:underline">Understanding UC Berkeley's GPA System</Link></li>
                  <li><Link href="#grading-scale" className="text-blue-600 hover:underline">Berkeley's Official Grading Scale</Link></li>
                  <li><Link href="#gpa-formula" className="text-blue-600 hover:underline">GPA Formula & Calculation Method</Link></li>
                  <li><Link href="#example-calculation" className="text-blue-600 hover:underline">Real Example: Calculating Berkeley GPA</Link></li>
                  <li><Link href="#admission-standards" className="text-blue-600 hover:underline">Admission GPA Requirements</Link></li>
                  <li><Link href="#improve-gpa" className="text-blue-600 hover:underline">How to Improve Your Berkeley GPA</Link></li>
                  <li><Link href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</Link></li>
                </ul>
              </div>

              {/* Calculator */}
              <div id="calculator" className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">UC Berkeley GPA Calculator</h2>
                <p className="mb-6 text-gray-700">
                  Enter your courses, grades, and unit values to calculate your cumulative UC Berkeley GPA. The calculator automatically applies Berkeley's official 4.0 scale and shows your academic standing.
                </p>
                <UCBerkeleyGPACalculator />
              </div>

              {/* Understanding Berkeley GPA */}
              <section id="understanding-berkeley-gpa" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Understanding UC Berkeley's GPA System</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  The University of California, Berkeley is one of the world's premier public research universities, known for rigorous academics and competitive grading standards. Understanding how Berkeley calculates and evaluates GPA is essential for prospective students preparing applications, current students managing academic progress, and transfer students converting previous GPAs.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  UC Berkeley uses a standard 4.0 GPA scale that aligns with most American universities. The Berkeley grading system assigns numerical values to letter grades, which are then weighted by course units (credits). Your cumulative GPA represents your overall academic performance and is a key factor in class registration preferences, degree progress, and opportunities like research positions, internships, and graduate school admissions.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  The campus maintains high academic standards, with the average Berkeley student GPA typically around 3.5 for undergraduates. This reflects Berkeley's selective admissions, rigorous coursework, and competitive academic environment where grades are calibrated to university standards and course difficulty.
                </p>
              </section>

              {/* Grading Scale */}
              <section id="grading-scale" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Berkeley's Official Grading Scale</h2>
                <p className="mb-6 text-gray-700">
                  UC Berkeley uses the standard 4.0 grading scale with plus/minus grades for more precise differentiation:
                </p>
                <div className="mb-6 overflow-x-auto bg-gray-50 rounded-lg p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="px-3 py-2 text-left font-semibold text-gray-900">Letter Grade</th>
                        <th className="px-3 py-2 text-center font-semibold text-gray-900">Grade Points</th>
                        <th className="px-3 py-2 text-left font-semibold text-gray-900">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">A+</td>
                        <td className="px-3 py-2 text-center text-gray-700">4.0</td>
                        <td className="px-3 py-2 text-gray-700">97–100%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">A</td>
                        <td className="px-3 py-2 text-center text-gray-700">4.0</td>
                        <td className="px-3 py-2 text-gray-700">93–96%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">A-</td>
                        <td className="px-3 py-2 text-center text-gray-700">3.7</td>
                        <td className="px-3 py-2 text-gray-700">90–92%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">B+</td>
                        <td className="px-3 py-2 text-center text-gray-700">3.3</td>
                        <td className="px-3 py-2 text-gray-700">87–89%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">B</td>
                        <td className="px-3 py-2 text-center text-gray-700">3.0</td>
                        <td className="px-3 py-2 text-gray-700">83–86%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">B-</td>
                        <td className="px-3 py-2 text-center text-gray-700">2.7</td>
                        <td className="px-3 py-2 text-gray-700">80–82%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">C+</td>
                        <td className="px-3 py-2 text-center text-gray-700">2.3</td>
                        <td className="px-3 py-2 text-gray-700">77–79%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">C</td>
                        <td className="px-3 py-2 text-center text-gray-700">2.0</td>
                        <td className="px-3 py-2 text-gray-700">73–76%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">C-</td>
                        <td className="px-3 py-2 text-center text-gray-700">1.7</td>
                        <td className="px-3 py-2 text-gray-700">70–72%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">D+</td>
                        <td className="px-3 py-2 text-center text-gray-700">1.3</td>
                        <td className="px-3 py-2 text-gray-700">67–69%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">D</td>
                        <td className="px-3 py-2 text-center text-gray-700">1.0</td>
                        <td className="px-3 py-2 text-gray-700">63–66%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">F</td>
                        <td className="px-3 py-2 text-center text-gray-700">0.0</td>
                        <td className="px-3 py-2 text-gray-700">Below 60%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700">
                  Berkeley also recognizes satisfactory/unsatisfactory (S/U) grades for certain courses. An S grade does not affect GPA (treated as passing), while a U grade requires course repetition or retake.
                </p>
              </section>

              {/* GPA Formula */}
              <section id="gpa-formula" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">GPA Formula & Calculation Method</h2>
                <p className="mb-4 text-gray-700">
                  UC Berkeley calculates GPA using a weighted formula that accounts for unit values:
                </p>
                <div className="bg-blue-50 border border-blue-300 rounded-lg p-6 mb-6">
                  <p className="text-center font-semibold text-gray-900 mb-2">GPA Formula:</p>
                  <p className="text-center text-lg font-mono text-gray-800">
                    GPA = Σ (Grade Points × Units) ÷ Σ (Total Units)
                  </p>
                </div>
                <p className="mb-4 text-gray-700">
                  Where Grade Points are assigned based on your letter grade and Units represent course credit hours. This formula ensures that larger courses (typically 4 units) have more impact on your GPA than smaller courses (1-2 units).
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>All graded courses count toward your Berkeley GPA</li>
                  <li>Only courses with letter grades (A–F) are included</li>
                  <li>S/U courses do not count toward GPA calculation</li>
                  <li>Transferred units from other institutions may be calculated separately</li>
                  <li>Your cumulative GPA includes all courses from your first semester onward</li>
                </ul>
              </section>

              {/* Example Calculation */}
              <section id="example-calculation" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Real Example: Calculating Berkeley GPA</h2>
                <p className="mb-4 text-gray-700">
                  Let's calculate the GPA for a Berkeley student's typical fall semester:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Sample Semester Courses:</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm mb-6">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="px-3 py-2 text-left font-semibold">Course</th>
                          <th className="px-3 py-2 text-center font-semibold">Grade</th>
                          <th className="px-3 py-2 text-center font-semibold">Points</th>
                          <th className="px-3 py-2 text-center font-semibold">Units</th>
                          <th className="px-3 py-2 text-center font-semibold">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2">Physics 7A (Mechanics)</td>
                          <td className="px-3 py-2 text-center">A</td>
                          <td className="px-3 py-2 text-center">4.0</td>
                          <td className="px-3 py-2 text-center">4</td>
                          <td className="px-3 py-2 text-center font-semibold">16.0</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2">Chemistry 1A</td>
                          <td className="px-3 py-2 text-center">A-</td>
                          <td className="px-3 py-2 text-center">3.7</td>
                          <td className="px-3 py-2 text-center">4</td>
                          <td className="px-3 py-2 text-center font-semibold">14.8</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2">Math 1A (Calculus)</td>
                          <td className="px-3 py-2 text-center">B+</td>
                          <td className="px-3 py-2 text-center">3.3</td>
                          <td className="px-3 py-2 text-center">4</td>
                          <td className="px-3 py-2 text-center font-semibold">13.2</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2">English R1A (Composition)</td>
                          <td className="px-3 py-2 text-center">A</td>
                          <td className="px-3 py-2 text-center">4.0</td>
                          <td className="px-3 py-2 text-center">3</td>
                          <td className="px-3 py-2 text-center font-semibold">12.0</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                          <td className="px-3 py-2">History 5B (American History)</td>
                          <td className="px-3 py-2 text-center">B</td>
                          <td className="px-3 py-2 text-center">3.0</td>
                          <td className="px-3 py-2 text-center">3</td>
                          <td className="px-3 py-2 text-center font-semibold">9.0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-4">
                    <p className="mb-2"><span className="font-semibold">Total Grade Points:</span> 16.0 + 14.8 + 13.2 + 12.0 + 9.0 = <span className="text-lg font-bold">65.0</span></p>
                    <p className="mb-4"><span className="font-semibold">Total Units:</span> 4 + 4 + 4 + 3 + 3 = <span className="text-lg font-bold">18</span></p>
                    <p className="text-center text-xl"><span className="font-semibold">GPA = 65.0 ÷ 18 = </span><span className="text-blue-600 font-bold">3.61</span></p>
                  </div>
                </div>
                <p className="text-gray-700">
                  This example shows a strong Berkeley student with a solid 3.6 GPA combining challenging STEM courses with humanities. Adjust the calculator above to model different grade scenarios and see how they affect your cumulative GPA.
                </p>
              </section>

              {/* Admission Standards */}
              <section id="admission-standards" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">UC Berkeley Admission GPA Requirements</h2>
                <p className="mb-4 text-gray-700">
                  UC Berkeley is highly selective and considers GPA as one component of a comprehensive application review. Here are official standards:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Minimum GPA Requirement</h3>
                    <p className="text-gray-700 text-sm">UC Berkeley requires a minimum 3.0 unweighted GPA for California residents and 3.0 for non-residents (international students). However, this is just the floor, not the competitive threshold.</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4 bg-green-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Typical Admitted Student GPA</h3>
                    <p className="text-gray-700 text-sm">The middle 50% of admitted freshmen have unweighted GPAs between 3.89 and 4.0 (many students achieve 4.0 with weighted courses). The average GPA for admitted students is approximately 3.95.</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4 bg-purple-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">UC GPA Recalculation</h3>
                    <p className="text-gray-700 text-sm">Berkeley uses the UC GPA formula for admissions, which includes a-g courses from 10th and 11th grade. This may differ from your school's reported GPA. The UC Admissions Office provides a GPA calculator on their website.</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  For current students, Berkeley requires a minimum 2.0 GPA to remain in good academic standing. However, many programs and scholarships require 3.0 or higher. Graduate school admissions, honors programs, and research positions typically prefer 3.5+ GPAs.
                </p>
              </section>

              {/* How to Improve GPA */}
              <section id="improve-gpa" className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">How to Improve Your UC Berkeley GPA</h2>
                <p className="mb-6 text-gray-700">
                  Berkeley students can employ several strategic approaches to raise their cumulative GPA:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Focus on High-Unit Courses</h3>
                      <p className="text-gray-700 text-sm">Since 4-unit courses have greater impact on GPA than 1–2 unit courses, prioritize strong performance in these classes. Allocate more study time to major lectures and lab courses.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Use Berkeley's Academic Resources</h3>
                      <p className="text-gray-700 text-sm">Take advantage of the Disabled Students' Program (DSP), Tutoring and Learning Center (TLC), and departmental office hours. Berkeley professors and GSIs are available for academic support.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Take Advantage of Pass/Not Pass</h3>
                      <p className="text-gray-700 text-sm">Use Berkeley's generous P/NP policy (up to 4 courses per semester) for challenging electives outside your major. This allows you to explore subjects without GPA risk.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Manage Your Course Load</h3>
                      <p className="text-gray-700 text-sm">Berkeley students typically take 15 units per semester. If struggling, reduce to 12–13 units and focus on quality. Spreading courses across more semesters allows deeper engagement.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Consider Course Retakes</h3>
                      <p className="text-gray-700 text-sm">Berkeley allows retaking courses. If you received below a B-, consider retaking with more preparation. Typically, the higher grade counts toward GPA.</p>
                    </div>
                  </div>
                </div>
              </section>

              <AdUnit />

              {/* FAQ */}
              <section id="faq" className="mb-10">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <FAQ items={faqItems} />
              </section>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your Berkeley GPA?</h2>
                <p className="mb-6 text-blue-50">
                  Scroll back to the top to use our UC Berkeley GPA Calculator. Input your courses, grades, and units to see your cumulative GPA and understand your academic standing.
                </p>
                <Link href="#calculator" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Use Calculator Now
                </Link>
              </div>

              {/* External Links */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Official UC Berkeley Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://registrar.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UC Berkeley Office of the Registrar</a> – Official registration and grading policies</li>
                  <li><a href="https://admissions.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UC Berkeley Admissions</a> – Application requirements and GPA standards</li>
                  <li><a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UC Berkeley Main Website</a> – University information and resources</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Related Calculators */}
            <div>
              <RelatedCalculators relatedIds={['ucla-gpa-calculator', 'college-gpa-calculator', 'weighted-gpa-calculator']} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
