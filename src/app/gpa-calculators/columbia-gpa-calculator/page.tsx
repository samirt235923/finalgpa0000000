import type { Metadata } from 'next';
import Link from 'next/link';
import ColumbiaGPACalculator from '@/components/ColumbiaGPACalculator';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';
import { calculatorData } from '@/data/calculators';
import { jsonLdStringify } from '@/lib/jsonLd';

const calculator = calculatorData.find((calc) => calc.id === 'columbia-gpa-calculator')!;

export const metadata: Metadata = {
  title: calculator.title,
  description: calculator.metaDescription,
  openGraph: {
    title: calculator.title,
    description: calculator.metaDescription,
    url: `https://topgpacalculator.com/gpa-calculators/${calculator.id}`,
    type: 'website',
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
    title: calculator.title,
    description: calculator.metaDescription,
  },
  alternates: {
    canonical: `https://topgpacalculator.com/gpa-calculators/${calculator.id}`,
  },
};

const faqItems = [
  {
    question: 'What is the Columbia GPA scale?',
    answer: 'Columbia uses a standard 4.0 GPA scale where A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D=1.0, and F=0.0. This calculator uses this exact scale for accurate calculations.',
  },
  {
    question: 'How does Columbia calculate GPA?',
    answer: 'Columbia calculates GPA by multiplying each course\'s grade points by its credit hours, then dividing the total grade points by total credit hours attempted. All graded courses typically count toward GPA.',
  },
  {
    question: 'What GPA do I need for Columbia?',
    answer: 'While there\'s no strict GPA cutoff, successful Columbia applicants typically have unweighted GPAs above 3.8 and strong academic records. Most admitted students rank in the top 1-5% of their high school class.',
  },
  {
    question: 'Does Columbia use weighted or unweighted GPA?',
    answer: 'Columbia considers overall academic strength in admissions. They may recalculate GPAs using their own methodology, but performance in rigorous courses (AP, IB, honors) is viewed favorably.',
  },
  {
    question: 'How many credits do Columbia courses have?',
    answer: 'Most Columbia undergraduate courses are worth 3-4 credit hours. Some advanced courses, seminars, or research projects may have different credit values.',
  },
  {
    question: 'What happens if I get a bad grade at Columbia?',
    answer: 'Columbia has policies for handling low grades. Students can sometimes retake courses, and depending on the school, grade replacement policies may apply. All attempts typically count toward GPA.',
  },
  {
    question: 'Can I calculate my Columbia transfer GPA?',
    answer: 'Yes, this calculator works for transfer students too. Enter your courses, grades, and credit hours from your previous institution. Columbia will recalculate your GPA for transfer credit evaluation.',
  },
  {
    question: 'What\'s a good GPA at Columbia?',
    answer: 'A GPA above 3.8 is excellent, 3.5+ is very good, and 3.0+ is satisfactory. Columbia students typically maintain competitive GPAs as the institution maintains rigorous academic standards.',
  },
];

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Calculators', href: '/gpa-calculators' },
  { label: calculator.name, href: `/gpa-calculators/${calculator.id}` },
];

const breadcrumbSchema = [
  { name: 'Home', url: 'https://topgpacalculator.com' },
  { name: 'Calculators', url: 'https://topgpacalculator.com/gpa-calculators' },
  { name: calculator.name, url: `https://topgpacalculator.com/gpa-calculators/${calculator.id}` },
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
  name: calculator.title,
  description: calculator.description,
  url: `https://topgpacalculator.com/gpa-calculators/${calculator.id}`,
  applicationCategory: 'EducationalApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
});

const contentSchema = jsonLdStringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: calculator.title,
  description: calculator.description,
  image: 'https://topgpacalculator.com/logo.svg',
  datePublished: '2024-01-01',
  dateModified: new Date().toISOString(),
  author: {
    '@type': 'Organization',
    name: 'Top GPA Calculator',
    url: 'https://topgpacalculator.com',
  },
});

export default function ColumbiGPACalculatorPage() {
  return (
    <>
      {breadcrumbJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />}
      {calculatorJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: calculatorJsonLd }} />}
      {contentSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: contentSchema }} />}
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
                <h1 className="mb-4 text-4xl font-bold text-gray-900">{calculator.h1}</h1>
                <p className="text-lg text-gray-700">{calculator.description}</p>
              </div>

              {/* Calculator */}
              <div className="mb-8">
                <ColumbiaGPACalculator />
              </div>

              {/* Understanding Columbia University's GPA System */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Understanding Columbia University's GPA System</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Columbia University uses a standard 4.0 GPA scale that aligns with most American colleges and universities. Understanding how Columbia calculates and evaluates GPA is essential for current students monitoring their academic progress and prospective students preparing their applications. Columbia's rigorous academic environment demands consistent performance across all coursework, making it crucial to comprehend how grades translate into your cumulative GPA.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  The university calculates GPA by assigning numerical values to letter grades, multiplying each grade by its corresponding credit hours, and then dividing the total grade points by the total credit hours attempted. This weighted calculation method ensures that courses with higher credit values have proportionally greater impact on your final GPA. Our <Link href="/gpa-calculators/weighted-gpa-calculator" className="text-blue-600 hover:text-blue-800 underline">weighted GPA calculator</Link> can help you understand how credit hours affect your academic standing.
                </p>
              </section>

              {/* Columbia's Grade Point Scale */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Columbia's Grade Point Scale</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Columbia uses a plus/minus grading system that provides more granular differentiation between student performance levels. This system recognizes subtle distinctions in academic achievement and allows the university to maintain highly competitive academic standards. The complete scale includes:
                </p>
                <div className="mb-6 overflow-x-auto bg-gray-50 rounded-lg p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="px-3 py-2 text-left font-semibold text-gray-900">Letter Grade</th>
                        <th className="px-3 py-2 text-center font-semibold text-gray-900">Grade Points</th>
                        <th className="px-3 py-2 text-left font-semibold text-gray-900">Performance Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">A</td>
                        <td className="px-3 py-2 text-center text-gray-700">4.0</td>
                        <td className="px-3 py-2 text-gray-700">Excellent</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">A-</td>
                        <td className="px-3 py-2 text-center text-gray-700">3.7</td>
                        <td className="px-3 py-2 text-gray-700">Excellent</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">B+</td>
                        <td className="px-3 py-2 text-center text-gray-700">3.3</td>
                        <td className="px-3 py-2 text-gray-700">Very Good</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">B</td>
                        <td className="px-3 py-2 text-center text-gray-700">3.0</td>
                        <td className="px-3 py-2 text-gray-700">Good</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">B-</td>
                        <td className="px-3 py-2 text-center text-gray-700">2.7</td>
                        <td className="px-3 py-2 text-gray-700">Satisfactory</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">C+</td>
                        <td className="px-3 py-2 text-center text-gray-700">2.3</td>
                        <td className="px-3 py-2 text-gray-700">Passing</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">C</td>
                        <td className="px-3 py-2 text-center text-gray-700">2.0</td>
                        <td className="px-3 py-2 text-gray-700">Passing</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">C-</td>
                        <td className="px-3 py-2 text-center text-gray-700">1.7</td>
                        <td className="px-3 py-2 text-gray-700">Marginal Pass</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">D</td>
                        <td className="px-3 py-2 text-center text-gray-700">1.0</td>
                        <td className="px-3 py-2 text-gray-700">Minimum Pass</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-white">
                        <td className="px-3 py-2 text-gray-700">F</td>
                        <td className="px-3 py-2 text-center text-gray-700">0.0</td>
                        <td className="px-3 py-2 text-gray-700">Failing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Plus/minus grading at Columbia provides nuanced assessment of student performance, particularly benefiting high-achieving students who consistently earn A and B+ grades. This system has been adopted by most prestigious universities to maintain academic rigor and provide detailed feedback on academic performance. For a more detailed comparison between different university systems, check out our <Link href="/gpa-calculators/harvard-gpa-calculator" className="text-blue-600 hover:text-blue-800 underline">Harvard GPA calculator</Link>.
                </p>
              </section>

              {/* How to Use the Columbia GPA Calculator */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">How to Use the Columbia GPA Calculator</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Our Columbia GPA calculator is designed to be intuitive and user-friendly, allowing you to quickly calculate your current GPA and make informed academic planning decisions. The calculator uses Columbia's official grading scale to ensure accuracy and reliability for all your GPA calculations.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Enter Course Information</h3>
                      <p className="text-gray-700 text-sm">Input the course name, letter grade received, and credit hours for each course in your academic record.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Select Grade and Credits</h3>
                      <p className="text-gray-700 text-sm">Choose your letter grade from the dropdown menu and specify the credit hours for each course accurately.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">View Instant Results</h3>
                      <p className="text-gray-700 text-sm">The calculator automatically computes your cumulative GPA and provides academic classification based on Columbia's standards.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Plan Your Academic Future</h3>
                      <p className="text-gray-700 text-sm">Use your calculated GPA to set academic goals and project future performance. Add or remove courses to see how grades impact your overall GPA.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Columbia GPA Requirements and Standards */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Columbia GPA Requirements and Standards</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Columbia University maintains rigorous academic standards to preserve the institution's prestigious reputation and academic excellence. Prospective students should understand that Columbia's admissions are highly competitive, and GPA is just one component of a comprehensive application review process. Current Columbia students should monitor their GPAs to maintain good standing and meet departmental requirements.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  <strong>Admission Standards:</strong> Successful Columbia applicants typically have unweighted high school GPAs of 3.8 or higher. The middle 50% of admitted students have GPA ranges that consistently exceed 3.9. However, Columbia considers the entire application holistically, including test scores, essays, extracurricular activities, and demonstrated interests.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  <strong>Academic Standing:</strong> Columbia students must maintain minimum GPAs to remain in good academic standing. A GPA below 2.0 typically results in academic probation or dismissal. Most scholarship recipients must maintain GPAs above 3.0 to retain their aid. Graduate program applicants should typically have cumulative GPAs of 3.5 or higher to be competitive.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  For students transferring into Columbia, the university recalculates GPA using its own methodology and grading scale. Try our <Link href="/gpa-calculators/transfer-gpa-calculator" className="text-blue-600 hover:text-blue-800 underline">transfer GPA calculator</Link> to understand how your previous institution's grades might translate.
                </p>
              </section>

              {/* Tips for Maintaining and Improving Your Columbia GPA */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Tips for Maintaining and Improving Your Columbia GPA</h2>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Seek Academic Support Early</h3>
                    <p className="text-gray-700 text-sm">Columbia offers extensive tutoring, writing centers, and peer mentoring programs. Use these resources immediately if you struggle with course material rather than waiting until grades suffer.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Engage with Professors</h3>
                    <p className="text-gray-700 text-sm">Attend office hours, participate actively in class discussions, and communicate with professors about assignments and expectations. This demonstrates commitment and can improve your understanding and grades.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Manage Your Course Load</h3>
                    <p className="text-gray-700 text-sm">Columbia allows flexible course selection. If you're struggling, consider taking fewer courses next semester to focus on quality over quantity and improve your grades.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Plan Ahead with Our Calculators</h3>
                    <p className="text-gray-700 text-sm">Use our GPA calculator to project future performance and understand how grades in upcoming courses will impact your cumulative GPA. Set realistic academic goals based on your calculations.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 px-4 rounded-r">
                    <h3 className="font-semibold text-gray-900 mb-2">Retake Courses Strategically</h3>
                    <p className="text-gray-700 text-sm">If Columbia allows course retakes for grade replacement, consider retaking courses where you earned lower grades. Use our calculator to determine if retaking a course will meaningfully improve your cumulative GPA.</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  If you're interested in understanding cumulative academic performance over multiple years, explore our <Link href="/gpa-calculators/cumulative-gpa-calculator" className="text-blue-600 hover:text-blue-800 underline">cumulative GPA calculator</Link> to track your long-term academic progress.
                </p>
              </section>

              {/* Additional Resources */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Additional GPA Resources</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  To complement your Columbia GPA calculations, we offer several specialized calculators for different academic scenarios and institutions:
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li>• <Link href="/gpa-calculators/college-gpa-calculator" className="text-blue-600 hover:text-blue-800 underline">College GPA Calculator</Link> - For general college GPA calculations</li>
                  <li>• <Link href="/gpa-calculators/unweighted-gpa-calculator" className="text-blue-600 hover:text-blue-800 underline">Unweighted GPA Calculator</Link> - For non-weighted grade calculations</li>
                  <li>• <Link href="/gpa-calculators/cumulative-gpa-calculator" className="text-blue-600 hover:text-blue-800 underline">Cumulative GPA Calculator</Link> - For multi-year academic tracking</li>
                  <li>• <Link href="/gpa-calculators/weighted-gpa-calculator" className="text-blue-600 hover:text-blue-800 underline">Weighted GPA Calculator</Link> - For advanced and honors courses</li>
                  <li>• <Link href="/gpa-calculators/harvard-gpa-calculator" className="text-blue-600 hover:text-blue-800 underline">Harvard GPA Calculator</Link> - Compare Columbia's system with Harvard's</li>
                </ul>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  For more information about Columbia University's academic policies and grading system, visit the official <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Columbia University website</a> or contact the Office of the Registrar directly.
                </p>
              </section>

              {/* FAQ Section */}
              <div className="mb-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <FAQ items={faqItems} />
                <FAQSchema faqs={faqItems} />
              </div>
            </div>

            {/* Right Column - Related Calculators */}
            <div>
              <RelatedCalculators relatedIds={calculator.relatedCalculators} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
