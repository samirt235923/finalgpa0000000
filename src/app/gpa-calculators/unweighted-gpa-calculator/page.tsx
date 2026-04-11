import type { Metadata } from 'next';
import UnweightedGPACalculator from '@/components/UnweightedGPACalculator';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';
import { calculatorData } from '@/data/calculators';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Unweighted GPA Calculator – Convert Weighted to Unweighted GPA',
  description: 'Two tools in one: calculate your unweighted GPA or convert weighted to unweighted — free, real-time, on a standard 4.0 scale. Perfect for college applications.',
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/unweighted-gpa-calculator',
  },
};

const calculator = calculatorData.find((c) => c.id === 'unweighted-gpa-calculator');

const unweightedFAQs = [
  {
    question: 'How do I calculate unweighted GPA?',
    answer: 'To calculate unweighted GPA, simply add up all your grade points and divide by the number of courses. For example, if you have A (4.0), B (3.0), and A (4.0), your GPA would be (4.0 + 3.0 + 4.0) ÷ 3 = 3.67. This ignores any bonus points from AP or Honors classes.',
  },
  {
    question: 'How do I convert weighted GPA to unweighted?',
    answer: 'To convert weighted GPA to unweighted, subtract the average weight bonus from your weighted GPA. If most of your classes are Honors (+0.5), subtract 0.5. If most are AP (+1.0), subtract 1.0. For example: Weighted 4.5 − 0.5 = 4.0 unweighted.',
  },
  {
    question: 'What is a good unweighted GPA?',
    answer: 'A good unweighted GPA is typically 3.0 or higher. An unweighted GPA of 3.7 or above is considered excellent and will make you competitive for most colleges. Remember, the maximum unweighted GPA is 4.0.',
  },
  {
    question: 'Do colleges look at weighted or unweighted GPA?',
    answer: 'Most colleges consider both weighted and unweighted GPA. Unweighted GPA provides a standard measure across all students, while weighted GPA shows the rigor of your course load. Many colleges use unweighted GPA for initial screening.',
  },
  {
    question: 'Is 4.0 the highest unweighted GPA?',
    answer: 'Yes, 4.0 is the highest possible unweighted GPA. This represents straight A grades (A = 4.0) with no bonus points. Even with AP or Honors classes, your unweighted GPA cannot exceed 4.0.',
  },
];

export default function UnweightedGPACalculatorPage() {
  if (!calculator) return null;

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/gpa-calculators' },
    { label: calculator.name, href: `/gpa-calculators/${calculator.id}` },
  ];

  const breadcrumbSchema = [
    { name: 'Home', url: 'https://gpacalculator.com' },
    { name: 'Calculators', url: 'https://gpacalculator.com/gpa-calculators' },
    { name: calculator.name, url: `https://gpacalculator.com/gpa-calculators/${calculator.id}` },
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
    description: calculator.metaDescription,
    url: `https://gpacalculator.com/gpa-calculators/${calculator.id}`,
    applicationCategory: 'EducationalApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  });

  return (
    <>
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: breadcrumbJsonLd,
          }}
        />
      )}

      {calculatorJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: calculatorJsonLd,
          }}
        />
      )}

      <FAQSchema faqs={unweightedFAQs} />

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{calculator.h1}</h1>
            <p className="text-xl text-indigo-100">{calculator.metaDescription}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2">
              {/* Calculator */}
              <div className="mb-12">
                <UnweightedGPACalculator />
              </div>

              {/* Content */}
              <article className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                  <ul className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><a href="#what-is-unweighted" className="text-blue-600 hover:underline">What Is an Unweighted GPA Calculator</a></li>
                    <li><a href="#weighted-vs-unweighted" className="text-blue-600 hover:underline">Weighted vs Unweighted GPA</a></li>
                    <li><a href="#converter-explained" className="text-blue-600 hover:underline">Weighted to Unweighted GPA Calculator Explained</a></li>
                    <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate Unweighted GPA</a></li>
                    <li><a href="#formula-explained" className="text-blue-600 hover:underline">GPA Formula Explained</a></li>
                    <li><a href="#example-calculation" className="text-blue-600 hover:underline">Example Calculations</a></li>
                    <li><a href="#colleges-prefer" className="text-blue-600 hover:underline">Why Colleges Prefer Unweighted GPA</a></li>
                    <li><a href="#tips-maintain" className="text-blue-600 hover:underline">Tips to Maintain a High GPA</a></li>
                    <li><a href="#related-calculators" className="text-blue-600 hover:underline">Related GPA Tools</a></li>
                  </ul>
                </div>

                <h2 id="what-is-unweighted" className="text-3xl font-bold text-gray-800 mb-4">What Is an Unweighted GPA Calculator</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  An <strong>unweighted gpa calculator</strong> computes your GPA on the standard 4.0 scale without giving extra points for challenging courses. Unlike weighted GPA calculators that add bonus points for AP, IB, or Honors classes, this tool treats every grade equally.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our calculator includes two powerful tools: a standard unweighted GPA calculator for computing your 4.0 scale GPA, and a <strong>weighted to unweighted gpa calculator</strong> converter that helps you understand how your grades compare when colleges remove the bonus points.
                </p>

                <h2 id="weighted-vs-unweighted" className="text-3xl font-bold text-gray-800 mb-4">Weighted vs Unweighted GPA</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Understanding the difference between weighted and unweighted GPA is essential for academic planning:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                  <li><strong>Unweighted GPA:</strong> Uses the standard 4.0 scale where A = 4.0, B = 3.0, C = 2.0, etc. Maximum is 4.0.</li>
                  <li><strong>Weighted GPA:</strong> Adds bonus points for challenging courses. Honors classes typically get +0.5, AP/IB classes get +1.0. Maximum can be 5.0 or higher.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  For example, an A in a regular class equals 4.0 in both scales. But an A in an AP class equals 4.0 unweighted but 5.0 weighted.
                </p>

                <h2 id="converter-explained" className="text-3xl font-bold text-gray-800 mb-4">Weighted to Unweighted GPA Calculator Explained</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our <strong>weighted to unweighted gpa calculator</strong> tool helps you understand your true academic standing by converting weighted GPAs back to the standard 4.0 scale. This is useful when:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Applying to colleges that use unweighted GPA for admissions</li>
                  <li>Comparing your GPA to national averages</li>
                  <li>Understanding how your AP/Honors classes affect your academic record</li>
                </ul>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <p className="font-bold text-gray-800">Conversion Formula:</p>
                  <p className="text-gray-700 mt-2">Unweighted GPA ≈ Weighted GPA − Average Weight Bonus</p>
                  <p className="text-gray-600 text-sm mt-2">Where bonus is typically 0.5 for Honors or 1.0 for AP courses.</p>
                </div>

                <h2 id="how-to-calculate" className="text-3xl font-bold text-gray-800 mb-4">How to Calculate Unweighted GPA</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Calculating unweighted GPA is simple. Follow these steps:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>Write down each course grade (A, B, C, D, or F)</li>
                  <li>Convert each letter to grade points: A=4, A-=3.7, B+=3.3, B=3, B-=2.7, C+=2.3, C=2, D=1, F=0</li>
                  <li>Add up all the grade points</li>
                  <li>Divide by the number of courses</li>
                  <li>That's your unweighted GPA!</li>
                </ol>

                <h2 id="formula-explained" className="text-3xl font-bold text-gray-800 mb-4">GPA Formula Explained</h2>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <p className="font-bold text-gray-800">Unweighted GPA = Σ Grade Points ÷ Number of Courses</p>
                </div>
                <p className="text-gray-700 mb-4">
                  If using credits, the formula becomes:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <p className="font-bold text-gray-800">GPA = Σ (Grade Points × Credits) ÷ Total Credits</p>
                </div>
                <p className="text-gray-700 mb-6">
                  Toggle the credit option in our calculator if your school uses credit hours instead of equal course weighting.
                </p>

                <h2 id="example-calculation" className="text-3xl font-bold text-gray-800 mb-4">Example Calculations</h2>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Example 1: Unweighted GPA (No Credits)</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>English: A (4.0)</li>
                  <li>Math: B (3.0)</li>
                  <li>Science: A (4.0)</li>
                  <li>History: B (3.0)</li>
                </ul>
                <p className="text-gray-700 mb-4">Total: 4.0 + 3.0 + 4.0 + 3.0 = 14.0</p>
                <p className="font-semibold text-gray-800 mb-6">GPA = 14.0 ÷ 4 = 3.50</p>

                <h3 className="text-xl font-bold text-gray-800 mb-3">Example 2: Weighted → Unweighted Conversion</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Weighted GPA: 4.5</li>
                  <li>Average bonus: 0.5 (mostly Honors classes)</li>
                </ul>
                <p className="font-semibold text-gray-800 mb-6">Unweighted = 4.5 − 0.5 = 4.0</p>

                <h2 id="colleges-prefer" className="text-3xl font-bold text-gray-800 mb-4">Why Colleges Prefer Unweighted GPA</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Many colleges prefer unweighted GPA for several reasons:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Equal comparison:</strong> Unweighted GPA allows colleges to compare all students on the same scale, regardless of what courses their high school offers</li>
                  <li><strong>Course rigor transparency:</strong> Colleges can see both your unweighted GPA and the weighted version to understand your course load</li>
                  <li><strong>Standard metric:</strong> The 4.0 scale is universal, making it easier to compare applicants from different schools and districts</li>
                  <li><strong>Holistic review:</strong> Admissions officers often look at unweighted GPA first, then consider course rigor separately</li>
                </ul>

                <h2 id="tips-maintain" className="text-3xl font-bold text-gray-800 mb-4">Tips to Maintain a High GPA</h2>
                <p className="text-gray-700 mb-4">Want to keep your GPA high? Try these strategies:</p>
                <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                  <li><strong>Focus on consistency:</strong> Steady effort throughout the semester beats last-minute cramming</li>
                  <li><strong>Balance challenging courses:</strong> Mix rigorous classes with ones you're confident in</li>
                  <li><strong>Seek help early:</strong> Don't wait until you're failing—ask for help as soon as you struggle</li>
                  <li><strong>Complete all assignments:</strong> Even small homework assignments can make a big difference</li>
                  <li><strong>Track your grades:</strong> Use our calculator regularly to monitor your academic progress</li>
                  <li><strong>Set realistic goals:</strong> Aim for specific GPA targets and work toward them each term</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-4" id="related-calculators">Related GPA Calculators</h2>
                <p className="text-gray-700 mb-4">Explore these tools for comprehensive GPA planning:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><a href="/gpa-calculators/online-free-gpa-calculator" className="text-blue-600 hover:underline">GPA Calculator</a></li>
                  <li><a href="/gpa-calculators/weighted-gpa-calculator" className="text-blue-600 hover:underline">Weighted GPA Calculator</a></li>
                  <li><a href="/gpa-calculators/cumulative-gpa-calculator" className="text-blue-600 hover:underline">Cumulative GPA Calculator</a></li>
                  <li><a href="/gpa-calculators/percentage-to-gpa-calculator" className="text-blue-600 hover:underline">GPA Converter</a></li>
                  <li><a href="/gpa-calculators/target-gpa-calculator" className="text-blue-600 hover:underline">GPA Improvement Calculator</a></li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted College Planning Resources</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li><a href="https://www.collegeboard.org" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">College Board</a></li>
                  <li><a href="https://nces.ed.gov" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">National Center for Education Statistics (NCES)</a></li>
                  <li><a href="https://www.ed.gov" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">U.S. Department of Education</a></li>
                </ul>
              </article>

              {/* AdSense Block */}
              <div className="my-12 p-8 bg-gray-100 border-2 border-gray-300 rounded-lg text-center">
                <p className="text-gray-600">Advertisement Space</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Quick Info Box */}
              <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200 mb-8">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>✓ <strong>Standard 4.0 Scale:</strong> No bonus points</li>
                  <li>✓ <strong>Two Tools:</strong> Calculator + Converter</li>
                  <li>✓ <strong>Credit Option:</strong> Toggle on/off</li>
                  <li>✓ <strong>Instant Results:</strong> Real-time calculation</li>
                  <li>✓ <strong>College-Ready:</strong> Standard metric</li>
                </ul>
              </div>

              {/* AdSense Sidebar */}
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300 mb-8 text-center">
                <p className="text-gray-600 text-sm">Advertisement Space</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ items={unweightedFAQs} />

        {/* Related Calculators */}
        <RelatedCalculators relatedIds={calculator.relatedCalculators} />

        {/* Bottom AdSense */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-600">Advertisement Space</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
