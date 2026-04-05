import type { Metadata } from 'next';
import MiddleSchoolGPACalculator from '@/components/MiddleSchoolGPACalculator';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';
import { calculatorData } from '@/data/calculators';
import { jsonLdStringify } from '@/lib/jsonLd';
const calculator = calculatorData.find(
  (calc) => calc.id === 'middle-school-gpa-calculator'
);

export const metadata: Metadata = calculator
  ? {
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
    }
  : {};

const middleSchoolFAQs = [
  {
    question: 'How do I calculate middle school GPA without credits?',
    answer: 'In middle school, GPA is calculated simply by adding up all your grade points and dividing by the number of subjects. For example, if you have A (4.0), B (3.0), and C (2.0), your GPA would be (4.0 + 3.0 + 2.0) ÷ 3 = 3.0. No credit hours are needed.',
  },
  {
    question: 'What is weighted GPA in middle school?',
    answer: 'Weighted GPA in middle school adds bonus points for challenging courses. Honors classes typically get +0.5 and Advanced or Pre-AP classes get +1.0. So an A in an Advanced class would be 5.0 instead of 4.0.',
  },
  {
    question: 'How do number grades (percentages) convert to GPA?',
    answer: 'Percentage grades convert to GPA on a 4.0 scale: 90-100% = A (4.0), 80-89% = B (3.0), 70-79% = C (2.0), 60-69% = D (1.0), below 60% = F (0.0).',
  },
  {
    question: 'What is a good GPA in middle school?',
    answer: 'A good middle school GPA is typically 3.0 or higher. A GPA of 3.5 or above is considered excellent and shows strong academic performance. Remember, middle school GPA sets the foundation for high school.',
  },
  {
    question: 'Can I improve my GPA fast in middle school?',
    answer: 'Yes! Focus on improving grades in upcoming subjects. Even one or two better grades can raise your average. Also, try to maintain consistent study habits and ask for help when needed.',
  },
];

export default function MiddleSchoolGPACalculatorPage() {
  if (!calculator) {
    return null;
  }

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

      <FAQSchema faqs={middleSchoolFAQs} />

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{calculator.h1}</h1>
            <p className="text-xl text-green-100">{calculator.metaDescription}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2">
              {/* Calculator */}
              <div className="mb-12">
                <MiddleSchoolGPACalculator />
              </div>

              {/* Content */}
              <article className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                  <ul className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><a href="#what-is-gpa-calculator" className="text-blue-600 hover:underline">What Is a Middle School GPA Calculator</a></li>
                    <li><a href="#no-credits-explained" className="text-blue-600 hover:underline">GPA Calculator Middle School No Credits Explained</a></li>
                    <li><a href="#weighted-gpa" className="text-blue-600 hover:underline">Weighted GPA Calculator Middle School</a></li>
                    <li><a href="#number-grades" className="text-blue-600 hover:underline">GPA Calculator Middle School Number Grades</a></li>
                    <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate GPA Without Credits</a></li>
                    <li><a href="#formula-explained" className="text-blue-600 hover:underline">GPA Formula Explained Simply</a></li>
                    <li><a href="#examples" className="text-blue-600 hover:underline">Example Calculations</a></li>
                    <li><a href="#why-matters" className="text-blue-600 hover:underline">Why GPA Matters in Middle School</a></li>
                    <li><a href="#tips-improve" className="text-blue-600 hover:underline">Tips to Improve Your GPA</a></li>
                    <li><a href="#related-calculators" className="text-blue-600 hover:underline">Related GPA Tools</a></li>
                  </ul>
                </div>

                <h2 id="what-is" className="text-3xl font-bold text-gray-800 mb-4">What Is a Middle School GPA Calculator</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A <strong>gpa calculator middle school</strong> tool helps students in grades 6-8 track their academic performance. Unlike high school or college GPA calculators that use credit hours, our calculator works without credits—perfect for middle school students who take a standard set of classes each term.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This calculator supports multiple modes: basic GPA calculation, weighted GPA for honors/advanced courses, and percentage-based grading. Whether your school uses letter grades or number grades, this tool makes it easy to calculate your GPA quickly and accurately.
                </p>

                <h2 id="no-credits-explained" className="text-3xl font-bold text-gray-800 mb-4">GPA Calculator Middle School No Credits Explained</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The <strong>gpa calculator middle school no credits</strong> mode is the simplest way to calculate your GPA. In middle school, every class typically counts equally—you don't have different credit hours for math versus English. This means your GPA is simply the average of all your grade points.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For example, if you have 6 classes and get A, B, A, C, B, A, your grade points would be: 4.0 + 3.0 + 4.0 + 2.0 + 3.0 + 4.0 = 20.0. Divide by 6 classes = 3.33 GPA. That's it! No complicated credit calculations needed.
                </p>

                <h2 id="weighted-gpa" className="text-3xl font-bold text-gray-800 mb-4">Weighted GPA Calculator Middle School</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Some middle schools offer honors or advanced classes that can boost your GPA. Our <strong>weighted gpa calculator middle school</strong> mode adds bonus points to your grades:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Regular classes:</strong> No change (A = 4.0)</li>
                  <li><strong>Honors classes:</strong> +0.5 boost (A = 4.5)</li>
                  <li><strong>Advanced/Pre-AP classes:</strong> +1.0 boost (A = 5.0)</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Check with your school to see if they offer weighted GPA for challenging courses. This can help you stand out when applying to competitive high schools!
                </p>

                <h2 id="number-grades" className="text-3xl font-bold text-gray-800 mb-4">GPA Calculator Middle School Number Grades</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Many middle schools use percentage grades instead of letter grades. Our <strong>gpa calculator middle school number grades</strong> mode automatically converts your percentages to GPA:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Percentage</th>
                        <th className="text-left py-2">Letter Grade</th>
                        <th className="text-left py-2">GPA Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-1">90-100%</td><td>A</td><td>4.0</td></tr>
                      <tr><td className="py-1">80-89%</td><td>B</td><td>3.0</td></tr>
                      <tr><td className="py-1">70-79%</td><td>C</td><td>2.0</td></tr>
                      <tr><td className="py-1">60-69%</td><td>D</td><td>1.0</td></tr>
                      <tr><td className="py-1">Below 60%</td><td>F</td><td>0.0</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mb-6">
                  Simply enter your percentage grades (0-100), and the calculator will automatically convert them to the 4.0 GPA scale.
                </p>

                <h2 id="how-to-calculate" className="text-3xl font-bold text-gray-800 mb-4">How to Calculate GPA Without Credits</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Learning to calculate GPA manually helps you understand how your grades affect your overall academic standing. Here's the simple <strong>gpa calculator middle school without credits</strong> formula:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>Write down all your class grades (A, B, C, D, or F)</li>
                  <li>Convert each letter to grade points: A=4, B=3, C=2, D=1, F=0</li>
                  <li>Add up all the grade points</li>
                  <li>Divide by the number of classes you have</li>
                  <li>That's your GPA!</li>
                </ol>

                <h2 id="formula-explained" className="text-3xl font-bold text-gray-800 mb-4">GPA Formula Explained Simply</h2>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <p className="font-bold text-gray-800">GPA = Total Grade Points ÷ Number of Subjects</p>
                </div>
                <p className="text-gray-700 mb-4">
                  For <strong>weighted GPA</strong>, add the bonus before averaging:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <p className="font-bold text-gray-800">Weighted GPA = (Grade Points + Weight Bonus) ÷ Subjects</p>
                </div>
                <p className="text-gray-700 mb-6">
                  For <strong>percentage mode</strong>, calculate your average percentage first:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <p className="font-bold text-gray-800">Average Percentage = Total Percentage ÷ Number of Subjects</p>
                </div>

                <h2 id="examples" className="text-3xl font-bold text-gray-800 mb-4">Example Calculations</h2>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Example 1: Letter Grades (No Credits)</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Math: A (4.0)</li>
                  <li>Science: B (3.0)</li>
                  <li>English: A (4.0)</li>
                  <li>History: C (2.0)</li>
                  <li>Art: B (3.0)</li>
                </ul>
                <p className="text-gray-700 mb-4">Total: 4.0 + 3.0 + 4.0 + 2.0 + 3.0 = 16.0</p>
                <p className="font-semibold text-gray-800 mb-6">GPA = 16.0 ÷ 5 = 3.20</p>

                <h3 className="text-xl font-bold text-gray-800 mb-3">Example 2: Percentage Grades</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Math: 95% (A = 4.0)</li>
                  <li>Science: 88% (B = 3.0)</li>
                  <li>English: 92% (A = 4.0)</li>
                </ul>
                <p className="text-gray-700 mb-4">Average: (95 + 88 + 92) ÷ 3 = 91.67%</p>
                <p className="font-semibold text-gray-800 mb-6">GPA = (4.0 + 3.0 + 4.0) ÷ 3 = 3.67</p>

                <h3 className="text-xl font-bold text-gray-800 mb-3">Example 3: Weighted GPA</h3>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Advanced Math: A (4.0 + 1.0 = 5.0)</li>
                  <li>Honors Science: B (3.0 + 0.5 = 3.5)</li>
                  <li>Regular English: A (4.0)</li>
                </ul>
                <p className="text-gray-700 mb-4">Total: 5.0 + 3.5 + 4.0 = 12.5</p>
                <p className="font-semibold text-gray-800 mb-6">Weighted GPA = 12.5 ÷ 3 = 4.17</p>

                <h2 id="why-matters" className="text-3xl font-bold text-gray-800 mb-4">Why GPA Matters in Middle School</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  You might wonder why GPA matters in middle school when you're not applying to college yet. Here's why it matters:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>High school placement:</strong> Many high schools use middle school GPA to place students in honors, AP, or standard classes</li>
                  <li><strong>Building habits:</strong> Learning to track your GPA early helps build good academic habits for high school and college</li>
                  <li><strong>Scholarships:</strong> Some middle school scholarships and programs consider GPA</li>
                  <li><strong>Self-awareness:</strong> Understanding your academic standing helps you set goals and improve</li>
                </ul>

                <h2 id="tips-improve" className="text-3xl font-bold text-gray-800 mb-4">Tips to Improve Your GPA</h2>
                <p className="text-gray-700 mb-4">Want to boost your GPA? Try these strategies:</p>
                <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                  <li><strong>Focus on upcoming tests:</strong> Your GPA for a new term starts fresh—focus on doing well in future assignments</li>
                  <li><strong>Ask for help:</strong> If you're struggling in a subject, talk to your teacher or get a tutor</li>
                  <li><strong>Study consistently:</strong> Regular study sessions are more effective than cramming</li>
                  <li><strong>Complete all assignments:</strong> Even small homework assignments add up</li>
                  <li><strong>Stay organized:</strong> Keep track of due dates and prioritize difficult subjects</li>
                  <li><strong>Set realistic goals:</strong> Aim to improve one grade point at a time</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-4" id="related-calculators">Related GPA Calculators</h2>
                <p className="text-gray-700 mb-4">Explore these tools for comprehensive GPA planning:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><a href="/gpa-calculators/online-free-gpa-calculator" className="text-blue-600 hover:underline">GPA Calculator</a></li>
                  <li><a href="/gpa-calculators/simple-gpa-calculator" className="text-blue-600 hover:underline">Simple GPA Calculator</a></li>
                  <li><a href="/gpa-calculators/weighted-gpa-calculator" className="text-blue-600 hover:underline">Weighted GPA Calculator</a></li>
                  <li><a href="/gpa-calculators/gpa-average-calculator" className="text-blue-600 hover:underline">GPA Average Calculator</a></li>
                  <li><a href="/gpa-calculators/high-school-gpa-calculator" className="text-blue-600 hover:underline">High School GPA Calculator</a></li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted Learning Resources</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li><a href="https://www.ed.gov" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">U.S. Department of Education</a></li>
                  <li><a href="https://nces.ed.gov" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">National Center for Education Statistics (NCES)</a></li>
                  <li><a href="https://www.khanacademy.org" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Khan Academy</a></li>
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
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200 mb-8">
                <h3 className="text-xl font-bold text-green-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>✓ <strong>No Credits Needed:</strong> Perfect for middle school</li>
                  <li>✓ <strong>Multiple Modes:</strong> Letter, percentage, weighted</li>
                  <li>✓ <strong>Instant Results:</strong> Real-time GPA calculation</li>
                  <li>✓ <strong>Mobile Friendly:</strong> Works on all devices</li>
                  <li>✓ <strong>For Grades 6-8</strong></li>
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
        <FAQ items={middleSchoolFAQs} />

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
