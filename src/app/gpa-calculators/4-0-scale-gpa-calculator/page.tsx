import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import FourPointZeroGPACalculator from '@/components/FourPointZeroGPACalculator';
import { FAQSchema } from '@/components/SchemaMarkup';
import AdUnit from '@/components/AdUnit';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: '4.0 GPA Calculator - Calculate GPA on a 4.0 Scale',
  description: 'Use our 4.0 GPA Calculator to calculate your GPA using the standard 4.0 grading scale. Enter courses, credits, and grades to instantly calculate your GPA.',
};

const faqItems = [
  {
    question: 'How do you calculate GPA on a 4.0 scale?',
    answer: 'Multiply grade values by credits, add grade points, divide by total credits using the standard 4.0 scale (A=4.0, etc.).',
  },
  {
    question: 'What is a 3.5 GPA on a 4.0 scale?',
    answer: "A 3.5 GPA indicates mostly As and Bs; it's above average and often meets honors program requirements.",
  },
  {
    question: 'Is 4.0 the highest GPA?',
    answer: 'Yes, on an unweighted 4.0 scale. Weighted scales may allow higher values for advanced courses.',
  },
  {
    question: 'What is a good GPA on a 4.0 scale?',
    answer: 'Generally, 3.5+ is strong; 3.7+ is excellent. Good depends on your goals and institution standards.',
  },
  {
    question: 'How do colleges calculate GPA?',
    answer: 'Colleges convert letter grades to numbers, weight by credits, average all courses. Policies vary on repeats and grade forgiveness.',
  },
];

const gradeScaleRows = [
  { grade: 'A', value: '4.0', meaning: 'Excellent performance' },
  { grade: 'A-', value: '3.7', meaning: 'Excellent, slightly below a solid A' },
  { grade: 'B+', value: '3.3', meaning: 'Very good performance' },
  { grade: 'B', value: '3.0', meaning: 'Good, above average work' },
  { grade: 'B-', value: '2.7', meaning: 'Good, but inconsistent in some areas' },
  { grade: 'C+', value: '2.3', meaning: 'Satisfactory with some strengths' },
  { grade: 'C', value: '2.0', meaning: 'Average or acceptable work' },
  { grade: 'C-', value: '1.7', meaning: 'Below average but still passing in many schools' },
  { grade: 'D', value: '1.0', meaning: 'Minimal passing performance' },
  { grade: 'F', value: '0.0', meaning: 'No credit earned in most grading systems' },
];

const gpaBenchmarks = [
  {
    range: '3.8 - 4.0',
    label: 'Outstanding',
    description: 'Usually reflects mostly A grades and is highly competitive for honors, scholarships, and selective admissions.',
  },
  {
    range: '3.5 - 3.79',
    label: 'Strong',
    description: 'A very good GPA range that keeps many academic opportunities open and signals consistent performance.',
  },
  {
    range: '3.0 - 3.49',
    label: 'Solid',
    description: 'A respectable GPA that often satisfies minimum standards for good academic standing and many programs.',
  },
  {
    range: '2.0 - 2.99',
    label: 'Needs improvement',
    description: 'Often enough to remain in good standing, but it may limit scholarship options or competitive applications.',
  },
  {
    range: 'Below 2.0',
    label: 'At risk',
    description: 'This range may trigger academic warnings or probation depending on school policy and completed credits.',
  },
];

export default function FourPointZeroGpaPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://topgpacalculator.com' },
      { '@type': 'ListItem', position: 2, name: 'GPA Calculators', item: 'https://topgpacalculator.com/gpa-calculators' },
      { '@type': 'ListItem', position: 3, name: '4.0 Scale GPA Calculator', item: 'https://topgpacalculator.com/gpa-calculators/4-0-scale-gpa-calculator' },
    ],
  };
  const breadcrumbJsonLd = jsonLdStringify(breadcrumbSchema);

  return (
    <>
      {breadcrumbJsonLd && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
        />
      )}
      <FAQSchema faqs={faqItems} />

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></li>
              <li><Link href="/gpa-calculators" className="hover:text-blue-600">GPA Calculators</Link></li>
              <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></li>
              <li className="text-gray-900 font-medium">4.0 Scale GPA Calculator</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <p className="text-xl font-bold text-gray-900 mb-4">Table of Contents</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#calculator" className="text-blue-600 hover:text-blue-800">Calculator</a></li>
              <li><a href="#what-is-4-0-scale" className="text-blue-600 hover:text-blue-800">What is a 4.0 GPA Scale</a></li>
              <li><a href="#grade-scale-chart" className="text-blue-600 hover:text-blue-800">4.0 Grade Scale Chart</a></li>
              <li><a href="#how-to-calculate" className="text-blue-600 hover:text-blue-800">How to Calculate GPA on a 4.0 Scale</a></li>
              <li><a href="#formula" className="text-blue-600 hover:text-blue-800">Formula Explained</a></li>
              <li><a href="#example" className="text-blue-600 hover:text-blue-800">Example Calculation</a></li>
              <li><a href="#difference" className="text-blue-600 hover:text-blue-800">4.0 vs 5.0 Scale</a></li>
              <li><a href="#what-counts" className="text-blue-600 hover:text-blue-800">What Counts in GPA</a></li>
              <li><a href="#good-gpa" className="text-blue-600 hover:text-blue-800">What is a Good GPA</a></li>
              <li><a href="#improve-gpa" className="text-blue-600 hover:text-blue-800">How to Improve Your GPA</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">FAQ</a></li>
              <li><a href="#related" className="text-blue-600 hover:text-blue-800">Related Calculators</a></li>
            </ul>
          </div>

          <h1 id="calculator" className="text-4xl font-bold text-gray-900 mb-6">4.0 Scale GPA Calculator</h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">Use our <strong>4.0 GPA calculator</strong> to compute your GPA with the standard unweighted 4.0 scale. Enter each course, choose the grade you earned, add the credit value, and the tool calculates your average instantly.</p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">This page is designed for students who want more than a quick number. Whether you are checking your semester GPA, estimating your cumulative GPA, comparing your results with scholarship cutoffs, or planning how future grades could affect your transcript, the sections below explain how the 4.0 system works and how to interpret the result with confidence.</p>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
            <FourPointZeroGPACalculator />
          </div>

          <AdUnit />

          <div className="space-y-12">
            <section id="what-is-4-0-scale">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a 4.0 GPA Scale</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The 4.0 GPA scale is the most common academic grading system used by colleges, universities, and many high schools in the United States. In this system, each letter grade is converted into a number. A is worth 4.0 points, B is worth 3.0 points, C is worth 2.0 points, D is worth 1.0 point, and F is worth 0.0 points. Schools that use plus and minus grading often add more precision with values such as 3.7 for an A- or 3.3 for a B+.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Because the scale is simple and widely recognized, it is used for semester reports, cumulative transcripts, transfer applications, graduation requirements, academic probation reviews, and scholarship screening. A 4.0 on this scale means top-level performance in an unweighted grading system, while lower GPAs reflect a mix of strong and weak results across multiple classes.</p>
              <p className="text-gray-700 leading-relaxed">One detail students often miss is that GPA is not just a plain average of letter grades. It is a <strong>credit-weighted average</strong>. That means a four-credit science course affects your GPA more than a one-credit seminar or lab. Understanding that weighting is the key to reading your GPA accurately and improving it strategically.</p>
            </section>

            <section id="grade-scale-chart">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4.0 Grade Scale Chart</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Most schools that follow the 4.0 system use a grading chart similar to the one below. Exact policies can vary slightly by institution, especially for plus and minus grades, but this table matches the format students most often use when calculating an unweighted GPA.</p>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border px-4 py-2 text-left">Letter Grade</th>
                        <th className="border px-4 py-2 text-center">GPA Value</th>
                        <th className="border px-4 py-2 text-left">Typical Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gradeScaleRows.map((row) => (
                        <tr key={row.grade}>
                          <td className="border px-4 py-2">{row.grade}</td>
                          <td className="border px-4 py-2 text-center">{row.value}</td>
                          <td className="border px-4 py-2">{row.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">If your school does not use plus and minus grading, the process is even simpler because all A grades count as 4.0, all B grades count as 3.0, and so on. If your institution uses a custom scale, always follow the values published by your registrar, academic catalog, or student handbook.</p>
            </section>

            <section id="how-to-calculate">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Calculate GPA on a 4.0 Scale</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li>List every course you want to include, along with the credit hours for each class.</li>
                <li>Convert each letter grade into its matching GPA value on the 4.0 scale.</li>
                <li>Multiply the grade value by the credit hours for that course.</li>
                <li>Add together all grade points from all courses.</li>
                <li>Add together all attempted credits from those same courses.</li>
                <li>Divide total grade points by total credits to get your GPA.</li>
              </ol>
              <p className="text-gray-700 mb-4 leading-relaxed">For example, an A in a 3-credit course gives you 12.0 grade points. A B in a 4-credit course also gives you 12.0 grade points because 3.0 x 4 = 12.0. Once you total all course points, you divide by your total credits to find the final average.</p>
              <p className="text-gray-700 leading-relaxed">The calculator above automates that math for you. It is especially useful when you want to test different outcomes, such as seeing how raising one class from a B to an A- might change your semester result.</p>
            </section>

            <section id="formula">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4.0 GPA Formula Explained</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The standard formula is:</p>
              <p className="text-gray-700 mb-4 leading-relaxed font-mono">GPA = Total Grade Points / Total Credit Hours</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The supporting formula for each class is:</p>
              <p className="text-gray-700 mb-4 leading-relaxed font-mono">Grade Points = Grade Value x Credits</p>
              <p className="text-gray-700 leading-relaxed">This is why GPA is called a weighted average. Higher-credit courses have a larger impact on the final number. A low grade in a course worth four credits can lower your GPA more than a low grade in a one-credit class, while a strong grade in a major course can improve your average faster.</p>
            </section>

            <section id="example">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Example of GPA Calculation on a 4.0 Scale</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Here is a simple semester example showing how grade values and credit hours work together. Using a realistic mix of classes makes it easier to see why GPA is based on more than just counting how many As and Bs you earned.</p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border px-4 py-2 text-left">Course</th>
                        <th className="border px-4 py-2 text-center">Grade</th>
                        <th className="border px-4 py-2 text-center">Grade Value</th>
                        <th className="border px-4 py-2 text-center">Credits</th>
                        <th className="border px-4 py-2 text-center">Grade Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-4 py-2">Math</td><td className="border px-4 py-2 text-center">A</td><td className="border px-4 py-2 text-center">4.0</td><td className="border px-4 py-2 text-center">3</td><td className="border px-4 py-2 text-center">12.00</td></tr>
                      <tr><td className="border px-4 py-2">English</td><td className="border px-4 py-2 text-center">B+</td><td className="border px-4 py-2 text-center">3.3</td><td className="border px-4 py-2 text-center">3</td><td className="border px-4 py-2 text-center">9.90</td></tr>
                      <tr><td className="border px-4 py-2">History</td><td className="border px-4 py-2 text-center">B</td><td className="border px-4 py-2 text-center">3.0</td><td className="border px-4 py-2 text-center">4</td><td className="border px-4 py-2 text-center">12.00</td></tr>
                      <tr className="bg-blue-50"><td className="border px-4 py-2 font-bold" colSpan={4}>TOTALS</td><td className="border px-4 py-2 text-center font-bold">33.90</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">In this example, the student earns 33.9 total grade points across 10 total credits. Dividing 33.9 by 10 gives a final GPA of <strong>3.39</strong>. The A in math helps the average, while the B and B+ in the other classes keep the GPA below 3.5.</p>
              <p className="text-gray-700 leading-relaxed">This is why GPA sometimes feels less intuitive than expected. A transcript is not judged course by course in isolation. Instead, every class contributes to a larger weighted average, and credit-heavy classes can shift the result more than small electives.</p>
            </section>

            <section id="difference">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Difference Between 4.0 and 5.0 GPA Scales</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A 4.0 GPA scale is usually <strong>unweighted</strong>, which means every course is graded on the same ceiling. An A in regular English and an A in an advanced science course are both worth 4.0 points before credits are applied.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">A 5.0 GPA scale is usually <strong>weighted</strong>. In that system, schools award extra points for more difficult coursework such as Honors, AP, IB, or dual-enrollment classes. An A in one of those courses might be worth 4.5 or 5.0 instead of 4.0.</p>
              <p className="text-gray-700 leading-relaxed">Use this calculator when you need the standard unweighted method. If your school reports both weighted and unweighted GPA, compare them carefully because each number answers a slightly different question about your performance.</p>
            </section>

            <section id="what-counts">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Counts in GPA and What Does Not</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Not every class on a transcript always counts the same way. Many schools include most graded academic courses in GPA, but some exclude pass/fail courses, transfer credits, withdrawals, remedial classes, repeated courses with grade replacement, or non-credit activities. The exact policy depends on the institution.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">That means your GPA estimate is only as accurate as the course list you enter. If you are calculating a semester GPA, include only the graded classes from that term. If you are estimating a cumulative GPA, combine all of the graded coursework that your school uses in cumulative reporting.</p>
              <p className="text-gray-700 leading-relaxed">This matters a lot for transfer students and scholarship applicants. Some schools evaluate the GPA listed by your current institution, while others look at all graded work across multiple terms or campuses. The calculator gives you the math, but your school decides which courses belong in the formula.</p>
            </section>

            <section id="good-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Good GPA on a 4.0 Scale</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">A good GPA depends on your goals, but these ranges offer a practical way to interpret where you stand on a standard 4.0 scale.</p>
              <div className="grid gap-4 md:grid-cols-2">
                {gpaBenchmarks.map((item) => (
                  <div key={item.range} className="bg-white border border-gray-200 rounded-lg p-5">
                    <p className="text-sm font-semibold text-blue-700 mb-1">{item.range}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6 leading-relaxed">In general, 3.5 and above is considered strong, 3.7 and above is excellent, and anything above 3.0 is respectable for many students and institutions. The best way to judge your GPA is to compare it with the requirement tied to your next target, such as good standing, dean's list, graduation honors, scholarship eligibility, or admission into a competitive program.</p>
            </section>

            <section id="improve-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Improve Your GPA on a 4.0 Scale</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Improving GPA starts with understanding which classes are affecting it most. Focus first on courses with the highest credit values because they have the greatest influence on the final average. A stronger grade in a four-credit class can do more for your GPA than improving a one-credit elective.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Consistency matters more than short bursts of effort. Keep up with assignments weekly, meet instructors early when you are confused, and use tutoring or study groups before small problems become major grade drops. GPA improvement usually comes from preventing avoidable losses, not just trying to recover at the end of the term.</p>
              <p className="text-gray-700 leading-relaxed">You can also use the calculator as a planning tool. Enter your current classes and test different future outcomes to see how an A-, B+, or retaken course could change your average. That makes academic goal-setting more realistic and helps you focus your time where it will matter most.</p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do you calculate GPA on a 4.0 scale?</h3>
                  <p className="text-gray-700">Multiply each course&apos;s grade value by its credit hours, add all grade points together, then divide by total credits attempted. That gives you a weighted average instead of a simple average of letter grades.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is a 3.5 GPA on a 4.0 scale?</h3>
                  <p className="text-gray-700">A 3.5 GPA usually means a student is earning a mix of A and B grades, with more performance close to the A range than the B range. It is generally considered strong and competitive for many academic opportunities.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is 4.0 the highest GPA?</h3>
                  <p className="text-gray-700">Yes, on a standard unweighted 4.0 scale, 4.0 is the highest possible GPA. Weighted systems can go higher than 4.0 because they give extra points for advanced coursework.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is a good GPA on a 4.0 scale?</h3>
                  <p className="text-gray-700">For many students, 3.5 and above is strong and 3.7 and above is excellent. Still, the most useful benchmark is whether your GPA meets the requirement for your next goal, such as honors, scholarships, or admissions.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do colleges calculate GPA?</h3>
                  <p className="text-gray-700">Most colleges convert letter grades to numeric values, multiply those values by course credits, and divide total grade points by total credits. The exact rules may differ for repeats, withdrawals, pass/fail courses, transfer work, and grade forgiveness.</p>
                </div>
              </div>
            </section>

            <section id="related">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related GPA Calculators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/gpa-calculators/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">College GPA Calculator</h3><p className="text-gray-600 text-sm">General college GPA tool.</p></Link>
                <Link href="/gpa-calculators/weighted-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">Weighted GPA Calculator</h3><p className="text-gray-600 text-sm">Use Honors/AP weighting.</p></Link>
                <Link href="/gpa-calculators/5-0-scale-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">5.0 Scale GPA Calculator</h3><p className="text-gray-600 text-sm">For schools using a 5.0 scale.</p></Link>
                <Link href="/gpa-calculators/high-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">High School GPA Calculator</h3><p className="text-gray-600 text-sm">Track high school grades.</p></Link>
                <Link href="/gpa-calculators/cumulative-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">Cumulative GPA Calculator</h3><p className="text-gray-600 text-sm">Combine multiple semesters.</p></Link>
              </div>
            </section>

            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-gray-700 mb-4">Learn more from these trusted sites:</p>
              <ul className="space-y-2 text-blue-600">
                <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="hover:underline">College Board</a></li>
                <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="hover:underline">NCES</a></li>
                <li><a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Khan Academy</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
