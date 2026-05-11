import Link from 'next/link';
import { Metadata } from 'next';
import EngineeringGPACalculator from '@/components/EngineeringGPACalculator';
import { FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Engineering GPA Calculator – Calculate Your Engineering GPA Easily',
  description: 'Use our Engineering GPA Calculator to calculate your cumulative engineering GPA instantly. Enter engineering courses, credits, and grades to calculate GPA accurately.',
};

const faqItems = [
  {
    question: 'What GPA is good for engineering?',
    answer: 'A GPA of 3.5 or higher is generally considered strong for engineering programs. Top schools often look for 3.7+. Lower-tier programs may accept around 3.0.',
  },
  {
    question: 'How do you calculate engineering GPA?',
    answer: "Calculate your engineering GPA by multiplying each course's grade value by its credit hours, summing grade points, then dividing by total credits. Use the standard 4.0 scale.",
  },
  {
    question: 'Is engineering GPA harder to maintain?',
    answer: 'Engineering GPA can be more challenging due to rigorous math and science coursework, but with proper study habits many students maintain high GPAs.',
  },
  {
    question: 'Do engineering classes affect GPA differently?',
    answer: 'Some engineering classes are weighted more heavily in GPA calculations, especially advanced design or lab courses, but generally all credits count equally.',
  },
  {
    question: 'What GPA do engineering students usually have?',
    answer: 'Average engineering student GPAs often range from 3.0 to 3.4, depending on the institution and program difficulty.',
  },
];

export default function EngineeringGPACalculatorPage() {
  return (
    <>
      
      <FAQSchema faqs={faqItems} />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg></li>
              <li><Link href="/gpa-calculators" className="hover:text-blue-600">GPA Calculators</Link></li>
              <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg></li>
              <li className="text-gray-900 font-medium">Engineering GPA Calculator</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <p className="text-xl font-bold text-gray-900 mb-4">Table of Contents</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#engineering-gpa-calculator" className="text-blue-600 hover:text-blue-800">Engineering GPA Calculator</a></li>
              <li><a href="#what-is-engineering-gpa" className="text-blue-600 hover:text-blue-800">What is an Engineering GPA</a></li>
              <li><a href="#how-to-calculate-engineering-gpa" className="text-blue-600 hover:text-blue-800">How to Calculate Engineering GPA</a></li>
              <li><a href="#gpa-formula" className="text-blue-600 hover:text-blue-800">Engineering GPA Formula Explained</a></li>
              <li><a href="#example-calculation" className="text-blue-600 hover:text-blue-800">Example Engineering GPA Calculation</a></li>
              <li><a href="#good-gpa" className="text-blue-600 hover:text-blue-800">What is a Good GPA</a></li>
              <li><a href="#tips-improve" className="text-blue-600 hover:text-blue-800">Tips to Improve Your GPA</a></li>
              <li><a href="#engineering-courses" className="text-blue-600 hover:text-blue-800">Core Engineering Courses and Their Impact</a></li>
              <li><a href="#gpa-vs-career" className="text-blue-600 hover:text-blue-800">Engineering GPA and Career Opportunities</a></li>
              <li><a href="#common-challenges" className="text-blue-600 hover:text-blue-800">Common Challenges in Engineering GPA</a></li>
              <li><a href="#strategies-success" className="text-blue-600 hover:text-blue-800">Strategies for Long-Term GPA Success</a></li>
              <li><a href="#conclusion" className="text-blue-600 hover:text-blue-800">Final Thoughts</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
              <li><a href="#related-calculators" className="text-blue-600 hover:text-blue-800">Related GPA Calculators</a></li>
            </ul>
          </div>

          <h1 id="engineering-gpa-calculator" className="text-4xl font-bold text-gray-900 mb-6">Engineering GPA Calculator</h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Use our <strong>engineering GPA calculator</strong> to instantly compute your cumulative engineering GPA. Enter your engineering courses, credit hours, and grades below to see your GPA update in real time or by pressing "Calculate GPA" when auto-update is off.
          </p>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
            <EngineeringGPACalculator />
          </div>

          <div className="space-y-12">
            <section>
              <h2 id="what-is-engineering-gpa" className="text-3xl font-bold text-gray-900 mb-6">What is an Engineering GPA</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Engineering GPA refers to the grade point average calculated specifically for engineering coursework. Many universities allow engineering students to compute a separate GPA that includes only their STEM and major-related classes, although the term often just means your overall cumulative GPA while enrolled in an engineering program.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">For acridine students, GPA is a key metric used by employers, graduate schools, and scholarship committees to evaluate academic performance. It provides a standardized measure of success across a rigorous set of technical courses like calculus, physics, and engineering design.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Because engineering programs are challenging, maintaining a high GPA demonstrates mastery of complex concepts and strong problem‑solving abilities—qualities highly valued in the workforce.</p>
            </section>

            <section>
              <h2 id="how-to-calculate-engineering-gpa" className="text-3xl font-bold text-gray-900 mb-6">How to Calculate Engineering GPA</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Follow these steps to calculate GPA:</p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li>Convert letter grades to numerical values using the 4.0 scale.</li>
                <li>Multiply each grade value by its course credit hours to obtain grade points.</li>
                <li>Sum all grade points across courses.</li>
                <li>Sum all credit hours.</li>
                <li>Divide total grade points by total credit hours; the result is your GPA.</li>
              </ol>
              <p className="text-gray-700 mb-4 leading-relaxed">This same formula applies whether calculating overall or engineering‑specific GPA—it’s simply a weighted average of your grades.</p>
            </section>

            <section>
              <h2 id="gpa-formula" className="text-3xl font-bold text-gray-900 mb-6">Engineering GPA Formula Explained</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The GPA formula is:</p>
              <p className="text-gray-700 mb-4 leading-relaxed font-mono">GPA = Total Grade Points ÷ Total Credit Hours</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Where grade points for each course are calculated by:</p>
              <p className="text-gray-700 mb-4 leading-relaxed font-mono">Grade Points = Grade Value × Credit Hours</p>
              <p className="text-gray-700 mb-4 leading-relaxed">For instance, a 4‑credit calculus class with an A (4.0) contributes 16 grade points.</p>
            </section>

            <section>
              <h2 id="example-calculation" className="text-3xl font-bold text-gray-900 mb-6">Example Engineering GPA Calculation</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Here’s a realistic semester of engineering coursework:</p>
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
                      <tr><td className="border px-4 py-2">Calculus</td><td className="border px-4 py-2 text-center">A</td><td className="border px-4 py-2 text-center">4.00</td><td className="border px-4 py-2 text-center">4</td><td className="border px-4 py-2 text-center">16.00</td></tr>
                      <tr><td className="border px-4 py-2">Physics</td><td className="border px-4 py-2 text-center">B+</td><td className="border px-4 py-2 text-center">3.30</td><td className="border px-4 py-2 text-center">4</td><td className="border px-4 py-2 text-center">13.20</td></tr>
                      <tr><td className="border px-4 py-2">Eng. Mechanics</td><td className="border px-4 py-2 text-center">B</td><td className="border px-4 py-2 text-center">3.00</td><td className="border px-4 py-2 text-center">3</td><td className="border px-4 py-2 text-center">9.00</td></tr>
                      <tr><td className="border px-4 py-2">Thermodynamics</td><td className="border px-4 py-2 text-center">C+</td><td className="border px-4 py-2 text-center">2.30</td><td className="border px-4 py-2 text-center">3</td><td className="border px-4 py-2 text-center">6.90</td></tr>
                      <tr><td className="border px-4 py-2">Electrical Circuits</td><td className="border px-4 py-2 text-center">A-</td><td className="border px-4 py-2 text-center">3.70</td><td className="border px-4 py-2 text-center">3</td><td className="border px-4 py-2 text-center">11.10</td></tr>
                      <tr className="bg-blue-50"><td className="border px-4 py-2 font-bold" colSpan={4}>TOTALS</td><td className="border px-4 py-2 text-center font-bold">56.20</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">Total grade points = 56.20, total credits = 17, so GPA = 56.20 ÷ 17 = <strong>3.30</strong>.</p>
            </section>

            <section>
              <h2 id="good-gpa" className="text-3xl font-bold text-gray-900 mb-6">What is a Good GPA for Engineering Students</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A "good" engineering GPA depends on your goals. For competitive internships or grad school, aim for 3.5+. Top‑tier programs often expect 3.7+.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Many students graduate with GPAs in the 3.0–3.4 range; below 3.0 may limit certain opportunities but persistence and strong technical skills can compensate.</p>
            </section>

            <section>
              <h2 id="tips-improve" className="text-3xl font-bold text-gray-900 mb-6">Tips to Improve Your Engineering GPA</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Improving your GPA requires strategy and discipline. Here are some practical tips:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>Focus on foundational math and science courses early; a strong base makes upper-level classes easier.</li>
                <li>Form study groups and attend office hours regularly.</li>
                <li>Balance your course load—mix challenging classes with ones you're more confident in.</li>
                <li>Retake courses where possible to replace low grades.</li>
                <li>Leverage tutoring centers and online resources for difficult subjects.</li>
                <li>Stay organized with a semester planner and give yourself plenty of revision time.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Engineering Grade Scale</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Most engineering schools use the standard 4.0 grading scale, but understanding how each grade translates to quality points is essential for accurate calculations. The typical grade values are: A equals 4.0, A- equals 3.7, B+ equals 3.3, B equals 3.0, B- equals 2.7, C+ equals 2.3, C equals 2.0, C- equals 1.7, D equals 1.0, and F equals 0.0. Some institutions use plus/minus variations while others maintain simpler scales. Always check your specific school's grading policy to ensure you're calculating correctly.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Many engineering programs also use weighted grading for certain courses, particularly lab sections or design courses that require additional work beyond regular lecture classes. Understanding whether your program uses weighted or unweighted GPA calculations will help you set realistic academic goals and track your progress accurately throughout your engineering education.</p>
            </section>

            <section>
              <h2 id="engineering-courses" className="text-3xl font-bold text-gray-900 mb-6">Core Engineering Courses and Their Impact</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Engineering curricula typically include a combination of mathematics, physics, chemistry, and specialized engineering courses. Each category carries significant weight in your GPA and requires different study approaches to succeed.</p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mathematics Courses</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Calculus I, II, and III form the mathematical foundation for all engineering disciplines. These courses typically carry 4 credit hours each and require strong algebraic skills. Differential equations and linear algebra follow calculus and prove essential for understanding engineering concepts in later courses. Because mathematics courses often have high credit values, a single grade can significantly impact your overall GPA. Focus heavily on these foundational courses during your first two years.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Physics and Chemistry</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Physics I and II (mechanics, electricity, and magnetism) and general chemistry provide the scientific principles underlying engineering applications. These courses typically require both lecture and laboratory components, adding to the time investment needed for success. Physics especially tends to challenge students who struggle with abstract concepts and problem-solving under time constraints. Many engineering students find that forming study groups specifically for these courses helps reinforce difficult material through peer discussion and collaborative problem-solving.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engineering Fundamentals</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Introduction to engineering, statics, dynamics, thermodynamics, and circuit analysis represent the core engineering courses that transition you from theoretical science to practical application. These courses often include significant laboratory components where practical skills are assessed alongside theoretical understanding. The difficulty level increases substantially as you progress through these courses, making it essential to build strong study habits early in your academic career.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upper-Division Major Courses</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Your junior and senior years will focus on discipline-specific courses such as structural analysis, fluid mechanics, control systems, or digital signal processing depending on your chosen specialization. These advanced courses often involve substantial project work, presentations, and team collaboration in addition to traditional exams. The grading criteria may include factors beyond written exams, such as design project quality, lab reports, and professional competencies evaluated by industry partners or faculty.</p>
            </section>

            <section>
              <h2 id="gpa-vs-career" className="text-3xl font-bold text-gray-900 mb-6">Engineering GPA and Career Opportunities</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Your engineering GPA significantly influences your career trajectory, particularly during the job search process after graduation. Understanding how employers use GPA can help you set appropriate academic goals and prioritize your efforts effectively.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Internship Applications</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Many engineering employers use GPA as an initial screening criterion for internship positions, especially at competitive Fortune 500 companies. A GPA of 3.0 or higher is typically considered the minimum threshold for most engineering internships, while top-tier companies may prefer candidates with GPAs of 3.5 or above. Internships provide valuable real-world experience and often lead to full-time employment offers, making your GPA indirectly crucial for your long-term career success.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Time Employment</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">For recent graduates, GPA remains an important factor in the hiring process, though its importance typically decreases as you gain professional experience. Entry-level positions at large corporations often require minimum GPA thresholds, while smaller companies and startups may be more flexible. However, remember that GPA is just one factor; relevant projects, internship experience, extracurricular activities, and interview performance also significantly influence hiring decisions.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Graduate School Admissions</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">If you're considering graduate education, your undergraduate GPA becomes even more critical. Most engineering graduate programs require a minimum GPA of 3.0 for admission, with competitive programs expecting 3.5 or higher. For PhD programs, GPA plays a significant role in determining funding decisions and research assistantship opportunities. Additionally, many fellowship applications and scholarship programs have explicit GPA requirements that must be met for consideration.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Licensure</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">While the Fundamentals of Engineering (FE) exam and Professional Engineer (PE) license don't have GPA requirements, your academic performance directly affects your preparation for these crucial career milestones. The FE exam covers fundamental engineering concepts taught in your undergraduate courses—strong performance in these classes translates to better exam preparation. Many engineers pursue PE licensure within their first few years of practice, and passing the exam requires mastery of the foundational knowledge built throughout your education.</p>
            </section>

            <section>
              <h2 id="common-challenges" className="text-3xl font-bold text-gray-900 mb-6">Common Challenges in Engineering GPA</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Engineering students face unique academic challenges that can impact GPA if not properly addressed. Being aware of these challenges allows you to develop strategies to overcome them proactively.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Time Management</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Engineering coursework demands significant time outside of class for problem sets, lab reports, and project work. Balancing this heavy workload with other responsibilities requires excellent time management skills. Many students underestimate the time needed for assignments and find themselves falling behind early in the semester. Creating a detailed schedule that allocates specific time blocks for studying, completing assignments, and personal activities helps prevent the overwhelm that leads to poor performance.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conceptual Depth</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Engineering concepts build upon each other in sequence, meaning difficulties in early courses create gaps that affect performance in subsequent classes. A weak foundation in calculus leads to struggles in differential equations, which then complicates dynamics and other upper-level courses. Addressing conceptual gaps immediately through tutoring, office hours, or supplementary study resources prevents the compounding effect that undermines GPA over multiple semesters.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptation to College</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">The transition from high school to college-level engineering coursework often catches students off guard. The increased independence, faster pace, and higher expectations require adjustment. Many students who excelled in high school mathematics and science find college engineering courses significantly more challenging. Recognizing that this transition period is normal and seeking help early prevents the discouragement that leads to declining performance.</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Workload Fluctuations</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Engineering coursework creates uneven workloads throughout the semester, with periods of relative calm followed by intense periods of multiple assignments, projects, and exams. Learning to anticipate these peaks and plan accordingly helps you distribute your effort more evenly. Starting major projects well before deadlines rather than waiting until the last minute prevents the quality degradation that comes from rushing through complex engineering assignments.</p>
            </section>

            <section>
              <h2 id="strategies-success" className="text-3xl font-bold text-gray-900 mb-6">Strategies for Long-Term GPA Success</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Maintaining a strong GPA throughout your entire engineering education requires consistent effort and smart strategies. Here are approaches that successful engineering students use to achieve academic excellence.</p>

              <p className="text-gray-700 mb-4 leading-relaxed"><strong>1. Start Strong:</strong> The first year sets the foundation for everything that follows. Prioritize your calculus, physics, and introductory engineering courses to build solid fundamentals. A strong start also builds confidence and momentum that carries through more challenging upper-division courses.</p>

              <p className="text-gray-700 mb-4 leading-relaxed"><strong>2. Use Campus Resources:</strong> Most engineering schools offer tutoring centers, study groups, office hours, and academic advising specifically designed to help students succeed. These resources are available precisely because engineering coursework is challenging—taking advantage of them demonstrates maturity rather than weakness.</p>

              <p className="text-gray-700 mb-4 leading-relaxed"><strong>3. Practice Active Learning:</strong> Passive reading and note-taking are insufficient for mastering engineering concepts. Work through practice problems actively, explain concepts to peers, apply theoretical knowledge to real-world scenarios, and engage in hands-on laboratory experiences. Active learning creates deeper understanding that translates to better exam performance.</p>

              <p className="text-gray-700 mb-4 leading-relaxed"><strong>4. Develop Problem-Solving Skills:</strong> Engineering is fundamentally about solving complex problems under constraints. Practice tackling unfamiliar problems by breaking them down into smaller, manageable components. This skill improves with deliberate practice and directly correlates with success in technical courses and professional work.</p>

              <p className="text-gray-700 mb-4 leading-relaxed"><strong>5. Maintain Balance:</strong> While academic dedication is essential, completely sacrificing sleep, exercise, social connections, and relaxation leads to burnout and declining performance. Engineering education is a marathon, not a sprint—maintaining sustainable habits ensures you can perform at your best throughout your entire academic career.</p>

              <p className="text-gray-700 mb-4 leading-relaxed"><strong>6. Track Progress Regularly:</strong> Using our engineering GPA calculator throughout your academic career allows you to monitor your progress and identify areas needing attention before they become serious problems. Regular GPA check-ins help you set realistic goals and make informed decisions about course selection and study priorities.</p>
            </section>

            <section>
              <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Your engineering GPA serves as an important indicator of your academic performance and technical competence throughout your educational journey. While it doesn't define your worth or guarantee career success, it does influence opportunities ranging from internships and first jobs to graduate school admission and professional licensure.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Using tools like our engineering GPA calculator helps you stay informed about your academic standing and plan strategically for the future. Remember that GPA is just one measure of your engineering education—practical skills, project experience, internships, and personal qualities also contribute significantly to your professional success.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The challenges of engineering coursework are significant but manageable with the right approach. Focus on building strong fundamentals, seeking help when needed, maintaining consistent effort, and balancing your academic life with essential self-care. Your dedication will pay off in improved GPA, deeper understanding of engineering principles, and better preparation for your career.</p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What GPA is good for engineering?</h3>
                  <p className="text-gray-700">A GPA of 3.5 or higher is generally considered strong for engineering programs. Top schools often look for 3.7+. Lower-tier programs may accept around 3.0.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do you calculate engineering GPA?</h3>
                  <p className="text-gray-700">Calculate your engineering GPA by multiplying each course's grade value by its credit hours, summing grade points, then dividing by total credits. Use the standard 4.0 scale.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is engineering GPA harder to maintain?</h3>
                  <p className="text-gray-700">Engineering GPA can be more challenging due to rigorous math and science coursework, but with proper study habits many students maintain high GPAs.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do engineering classes affect GPA differently?</h3>
                  <p className="text-gray-700">Some engineering classes are weighted more heavily in GPA calculations, especially advanced design or lab courses, but generally all credits count equally.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What GPA do engineering students usually have?</h3>
                  <p className="text-gray-700">Average engineering student GPAs often range from 3.0 to 3.4, depending on the institution and program difficulty.</p>
                </div>
              </div>
            </section>

            <section id="related-calculators">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related GPA Calculators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/gpa-calculators/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">College GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate your college GPA with our easy-to-use tool.</p>
                </Link>
                <Link href="/gpa-calculators/weighted-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Weighted GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate GPA with Honors and AP course weighting.</p>
                </Link>
                <Link href="/gpa-calculators/high-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">High School GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Perfect for high school students tracking their academic progress.</p>
                </Link>
                <Link href="/gpa-calculators/nursing-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Nursing GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate GPA for nursing school applications.</p>
                </Link>
                <Link href="/gpa-calculators/medical-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Medical School GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Find your science and overall GPA.</p>
                </Link>
                <Link href="/gpa-calculators/law-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Law School GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate LSAC-style GPA with A+ scale.</p>
                </Link>
              </div>
            </section>

            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-gray-700 mb-4">Learn more about engineering education and GPA from these trusted sources:</p>
              <ul className="space-y-2 text-blue-600">
                <li><a href="https://www.engineering.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Engineering.com</a></li>
                <li><a href="https://www.nspe.org" target="_blank" rel="noopener noreferrer" className="hover:underline">NSPE (National Society of Professional Engineers)</a></li>
                <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="hover:underline">College Board - Engineering Info</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}










