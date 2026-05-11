import type { Metadata } from 'next';
import Link from 'next/link';
import MITGPACalculator from '@/components/MITGPACalculator';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';
import { calculatorData } from '@/data/calculators';
import { jsonLdStringify } from '@/lib/jsonLd';

const calculator = calculatorData.find((calc) => calc.id === 'mit-gpa-calculator')!;

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
    question: 'What is the MIT GPA scale?',
    answer: 'MIT uses a standard 4.0 GPA scale where A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D=1.0, and F=0.0. This calculator uses this exact scale for accurate calculations.',
  },
  {
    question: 'How does MIT calculate GPA?',
    answer: 'MIT calculates GPA by multiplying each course\'s grade points by its credit hours, then dividing the total grade points by total credit hours attempted. Pass/No Record (P/NR) courses and certain research courses may not count toward GPA.',
  },
  {
    question: 'What GPA do I need for MIT?',
    answer: 'While there\'s no strict GPA cutoff, successful MIT applicants typically have unweighted GPAs above 4.0 (weighted) and strong academic records. Most admitted students rank in the top 1-2% of their high school class.',
  },
  {
    question: 'Does MIT use weighted or unweighted GPA?',
    answer: 'MIT considers both weighted and unweighted GPA in admissions. They recalculate GPAs using their own methodology, but strong performance in advanced courses (AP, IB, honors) is viewed favorably.',
  },
  {
    question: 'How many credits do MIT courses have?',
    answer: 'Most MIT undergraduate courses are worth 3-4 credit hours, though some advanced subjects or research courses may have different credit values. Graduate courses typically range from 3-12 credits.',
  },
  {
    question: 'What happens if I get a bad grade at MIT?',
    answer: 'MIT has grade forgiveness policies for certain courses. First-year students can retake courses for grade replacement. The GPA calculation includes all courses unless specifically excluded by MIT policy.',
  },
  {
    question: 'Can I calculate my MIT transfer GPA?',
    answer: 'Yes, this calculator works for transfer students too. Enter your courses, grades, and credit hours from your previous institution. MIT will recalculate your GPA for transfer credit evaluation.',
  },
  {
    question: 'What\'s a good GPA at MIT?',
    answer: 'A GPA above 4.0 is excellent, 3.5+ is very good, and 3.0+ is satisfactory. Many MIT students maintain GPAs above 4.0 due to the challenging curriculum and grade inflation in technical subjects.',
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
  description: calculator.metaDescription,
  url: `https://topgpacalculator.com/gpa-calculators/${calculator.id}`,
  applicationCategory: 'EducationalApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
});

export default function MITGPACalculatorPage() {
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

      <FAQSchema faqs={faqItems} />

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MIT GPA Calculator 2026
            </h1>
            <p className="text-lg md:text-xl text-red-100 max-w-2xl leading-relaxed">
              Calculate your MIT GPA instantly and accurately. Perfect for current students, prospective applicants, and transfer students planning their academic journey at MIT.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2">
              {/* Calculator */}
              <div className="mb-12">
                <MITGPACalculator />
              </div>

              {/* Content */}
              <article className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                  <ul className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><a href="#what-is-mit-gpa" className="text-red-600 hover:underline">What Is MIT GPA Calculator</a></li>
                    <li><a href="#how-to-use" className="text-red-600 hover:underline">How to Use the MIT GPA Calculator</a></li>
                    <li><a href="#mit-grading-system" className="text-red-600 hover:underline">MIT Grading System Explained</a></li>
                    <li><a href="#gpa-requirements" className="text-red-600 hover:underline">MIT GPA Requirements</a></li>
                    <li><a href="#transfer-students" className="text-red-600 hover:underline">For Transfer Students</a></li>
                    <li><a href="#academic-policies" className="text-red-600 hover:underline">MIT Academic Policies</a></li>
                    <li><a href="#tips-success" className="text-red-600 hover:underline">Tips for Academic Success at MIT</a></li>
                    <li><a href="#related-calculators" className="text-red-600 hover:underline">Related GPA Calculators</a></li>
                  </ul>
                </div>

                <h2 id="what-is-mit-gpa" className="text-3xl font-bold text-gray-800 mb-4">What Is MIT GPA Calculator 2026</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The MIT GPA Calculator 2026 is a specialized tool designed specifically for Massachusetts Institute of Technology students and applicants. Unlike generic GPA calculators, this tool uses MIT's exact grading scale and calculation methodology to provide precise GPA estimates. Whether you're a current student tracking your academic progress, a prospective applicant estimating your competitiveness, or a transfer student planning your MIT journey, this calculator delivers accurate results you can trust.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  MIT's academic environment is uniquely challenging, with courses that push the boundaries of human knowledge. The GPA calculator above uses the same mathematical formulas that MIT's registrar uses, ensuring your calculations match what would appear on your official transcript. This precision is crucial for making informed academic decisions that could impact your future opportunities.
                </p>

                <h2 id="how-to-use" className="text-3xl font-bold text-gray-800 mb-4">How to Use the MIT GPA Calculator</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Using the MIT GPA Calculator is straightforward and takes just minutes. Start by adding your courses using the "+ Add Course" button. For each course, enter the course name (optional but helpful for organization), select the letter grade you received or expect to receive, and input the credit hours for that course. The calculator automatically updates your GPA as you make changes.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Step-by-Step Guide:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Click "Add Course" to create input fields for each class</li>
                    <li>Enter course names for easy identification (optional)</li>
                    <li>Select letter grades from the dropdown (A, A-, B+, B, etc.)</li>
                    <li>Enter credit hours (most MIT courses are 3-4 credits)</li>
                    <li>Watch your GPA calculate automatically in real-time</li>
                    <li>Add or remove courses as needed to experiment with different scenarios</li>
                  </ol>
                </div>

                <h2 id="mit-grading-system" className="text-3xl font-bold text-gray-800 mb-4">MIT Grading System Explained</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  MIT uses a standard 4.0 grading scale, but with some unique characteristics. The institute employs plus/minus grading, which provides more granular assessment of student performance. Unlike some schools that round grades, MIT maintains the precision of plus/minus distinctions throughout GPA calculations.
                </p>

                <table className="w-full border-collapse mb-6">
                  <thead>
                    <tr className="bg-red-100">
                      <th className="border border-red-300 px-4 py-2 text-left">Letter Grade</th>
                      <th className="border border-red-300 px-4 py-2 text-left">GPA Value</th>
                      <th className="border border-red-300 px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-red-300 px-4 py-2">A</td><td className="border border-red-300 px-4 py-2">4.0</td><td className="border border-red-300 px-4 py-2">Excellent work</td></tr>
                    <tr><td className="border border-red-300 px-4 py-2">A-</td><td className="border border-red-300 px-4 py-2">3.7</td><td className="border border-red-300 px-4 py-2">Very good work</td></tr>
                    <tr><td className="border border-red-300 px-4 py-2">B+</td><td className="border border-red-300 px-4 py-2">3.3</td><td className="border border-red-300 px-4 py-2">Good work</td></tr>
                    <tr><td className="border border-red-300 px-4 py-2">B</td><td className="border border-red-300 px-4 py-2">3.0</td><td className="border border-red-300 px-4 py-2">Satisfactory work</td></tr>
                    <tr><td className="border border-red-300 px-4 py-2">B-</td><td className="border border-red-300 px-4 py-2">2.7</td><td className="border border-red-300 px-4 py-2">Adequate work</td></tr>
                    <tr><td className="border border-red-300 px-4 py-2">C+</td><td className="border border-red-300 px-4 py-2">2.3</td><td className="border border-red-300 px-4 py-2">Minimally acceptable</td></tr>
                    <tr><td className="border border-red-300 px-4 py-2">C</td><td className="border border-red-300 px-4 py-2">2.0</td><td className="border border-red-300 px-4 py-2">Below average</td></tr>
                    <tr><td className="border border-red-300 px-4 py-2">C-</td><td className="border border-red-300 px-4 py-2">1.7</td><td className="border border-red-300 px-4 py-2">Poor work</td></tr>
                    <tr><td className="border border-red-300 px-4 py-2">D</td><td className="border border-red-300 px-4 py-2">1.0</td><td className="border border-red-300 px-4 py-2">Very poor work</td></tr>
                    <tr><td className="border border-red-300 px-4 py-2">F</td><td className="border border-red-300 px-4 py-2">0.0</td><td className="border border-red-300 px-4 py-2">Failing work</td></tr>
                  </tbody>
                </table>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  One unique aspect of MIT's grading system is the absence of grade inflation in the way some other institutions practice it. While MIT students often achieve high GPAs due to the caliber of students and teaching, the grading standards remain rigorous. An A at MIT represents truly exceptional work that demonstrates mastery of complex material.
                </p>

                <h2 id="gpa-requirements" className="text-3xl font-bold text-gray-800 mb-4">MIT GPA Requirements</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  While MIT doesn't publish strict GPA cutoffs for admissions, the admitted class typically represents the most academically accomplished students in the world. Understanding GPA expectations can help you assess your competitiveness and set realistic academic goals.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">MIT Admissions GPA Statistics</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Unweighted GPA:</strong> Most admitted students have unweighted GPAs of 4.0 or very close to it</li>
                    <li><strong>Weighted GPA:</strong> Many students have weighted GPAs above 4.5 due to advanced coursework</li>
                    <li><strong>Class Rank:</strong> The vast majority rank in the top 1-2% of their high school class</li>
                    <li><strong>Grade Trend:</strong> MIT values upward grade trends and strong senior year performance</li>
                  </ul>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  For current MIT students, maintaining academic standing requires different GPA thresholds. The minimum GPA for good academic standing varies by program, but generally falls between 3.0 and 3.5. Students falling below these thresholds may face academic probation or other interventions designed to support their success.
                </p>

                <h2 id="transfer-students" className="text-3xl font-bold text-gray-800 mb-4">For Transfer Students</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Transfer students to MIT bring diverse academic backgrounds and experiences. The GPA calculator above works perfectly for transfer applicants who want to understand how their current coursework translates to MIT's system. When applying to MIT as a transfer student, your GPA from previous institutions will be carefully evaluated.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  MIT typically admits transfer students at the end of their first year or beginning of their second year. Transfer applicants need to demonstrate exceptional academic performance at their current institution. While GPA is important, MIT also considers the rigor of coursework, research experience, and personal achievements.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Transfer Student Tips:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Maintain a GPA above 4.0 in challenging coursework</li>
                    <li>Pursue research opportunities and independent projects</li>
                    <li>Build relationships with professors for strong recommendations</li>
                    <li>Demonstrate leadership in extracurricular activities</li>
                    <li>Consider courses that align with MIT's curriculum</li>
                  </ul>
                </div>

                <h2 id="academic-policies" className="text-3xl font-bold text-gray-800 mb-4">MIT Academic Policies</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  MIT has several academic policies that can affect GPA calculations. Understanding these policies helps students make informed decisions about their academic planning and understand how different courses contribute to their overall GPA.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pass/No Record (P/NR) Option</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  MIT allows students to take some courses Pass/No Record, meaning the course doesn't affect GPA. This option is typically available for elective courses and can be a strategic choice for exploring new subjects without GPA risk.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Grade Forgiveness</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  First-year students can retake courses for grade replacement. The original grade is replaced in GPA calculations, though both grades appear on the transcript. This policy allows students to recover from difficult first-semester experiences.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Research and Independent Study</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Research courses (6.xxx subjects) and independent study may have variable credit hours and grading patterns. Some research courses are graded Pass/No Record to encourage exploration without GPA pressure.
                </p>

                <h2 id="tips-success" className="text-3xl font-bold text-gray-800 mb-4">Tips for Academic Success at MIT</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Success at MIT requires more than just intelligence—it demands effective study habits, time management, and utilization of available resources. The GPA calculator can help you track progress, but these strategies will help you achieve the strong GPA that opens doors to research opportunities, fellowships, and career advancement.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Study Strategies</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Join study groups for problem sets</li>
                      <li>• Attend office hours regularly</li>
                      <li>• Start assignments early</li>
                      <li>• Use peer tutoring services</li>
                      <li>• Practice active learning techniques</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Time Management</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Use the syllabus for planning</li>
                      <li>• Break large assignments into smaller tasks</li>
                      <li>• Schedule study time like classes</li>
                      <li>• Balance academics with wellness</li>
                      <li>• Know when to ask for help</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  MIT's academic culture emphasizes collaboration over competition. Students who actively participate in study groups, help their peers, and engage with professors often find greater success. The institute's resources—from the Teaching and Learning Lab to peer tutoring—exist specifically to support student achievement.
                </p>

                <h2 id="related-calculators" className="text-3xl font-bold text-gray-800 mb-4">Related GPA Calculators</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  While the MIT GPA Calculator is specialized for Institute students, you might also find these related tools helpful for comprehensive academic planning:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Link href="/gpa-calculators/harvard-gpa-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition">
                    <h3 className="font-semibold text-gray-800">Harvard GPA Calculator</h3>
                    <p className="text-sm text-gray-600">Calculate GPA using Harvard's grading system</p>
                  </Link>

                  <Link href="/gpa-calculators/stanford-gpa-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition">
                    <h3 className="font-semibold text-gray-800">Stanford GPA Calculator</h3>
                    <p className="text-sm text-gray-600">GPA calculations for Stanford students</p>
                  </Link>

                  <Link href="/gpa-calculators/college-gpa-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition">
                    <h3 className="font-semibold text-gray-800">College GPA Calculator</h3>
                    <p className="text-sm text-gray-600">Standard 4.0 scale calculator</p>
                  </Link>

                  <Link href="/gpa-calculators/weighted-gpa-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition">
                    <h3 className="font-semibold text-gray-800">Weighted GPA Calculator</h3>
                    <p className="text-sm text-gray-600">For honors and AP courses</p>
                  </Link>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">External Resources</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><a href="https://mit.edu" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Official MIT Website</a> - Academic policies and resources</li>
                    <li><a href="https://registrar.mit.edu" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">MIT Registrar</a> - Official grading information</li>
                    <li><a href="https://oge.mit.edu" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Office of the General Counsel</a> - Academic rules and regulations</li>
                    <li><a href="https://studentlife.mit.edu" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">MIT Student Life</a> - Academic support services</li>
                  </ul>
                </div>
              </article>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <RelatedCalculators relatedIds={calculator.relatedCalculators} />

              <FAQ items={faqItems.slice(0, 3)} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}