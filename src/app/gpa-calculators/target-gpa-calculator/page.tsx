'use client';

import React, { useMemo, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import FAQ from '@/components/FAQ';
import { FAQSchema, ArticleSchema } from '@/components/SchemaMarkup';

interface PlannedCourse {
  id: number;
  credits: number;
}

const roundTwo = (value: number) => Math.round(value * 100) / 100;

const formatGPA = (value: number) => {
  if (!Number.isFinite(value)) return '--';
  return roundTwo(value).toFixed(2);
};

const getLetterGrade = (value: number) => {
  if (!Number.isFinite(value)) return 'N/A';
  const scale = [
    { grade: 'A', points: 4.0 },
    { grade: 'A-', points: 3.7 },
    { grade: 'B+', points: 3.3 },
    { grade: 'B', points: 3.0 },
    { grade: 'B-', points: 2.7 },
    { grade: 'C+', points: 2.3 },
    { grade: 'C', points: 2.0 },
    { grade: 'C-', points: 1.7 },
    { grade: 'D', points: 1.0 },
    { grade: 'F', points: 0.0 },
  ];

  const match = scale.find((item) => value >= item.points - 0.001);
  return match ? match.grade : 'F';
};

export default function TargetGPACalculator() {
  const [currentGPA, setCurrentGPA] = useState<string>('');
  const [completedCredits, setCompletedCredits] = useState<string>('');
  const [targetGPA, setTargetGPA] = useState<string>('');
  const [plannedCourses, setPlannedCourses] = useState<PlannedCourse[]>([
    { id: 1, credits: 3 }
  ]);

  const gradeScaleTable = [
    { grade: 'A', points: 4.0, description: 'Excellent' },
    { grade: 'A-', points: 3.7, description: 'Very Good' },
    { grade: 'B+', points: 3.3, description: 'Good Plus' },
    { grade: 'B', points: 3.0, description: 'Good' },
    { grade: 'B-', points: 2.7, description: 'Satisfactory' },
    { grade: 'C+', points: 2.3, description: 'Adequate Plus' },
    { grade: 'C', points: 2.0, description: 'Adequate' },
    { grade: 'C-', points: 1.7, description: 'Below Average' },
    { grade: 'D', points: 1.0, description: 'Poor' },
    { grade: 'F', points: 0.0, description: 'Failing' },
  ];

  const faqData = [
    {
      question: 'How do I calculate my target GPA?',
      answer: 'Use a target GPA calculator by entering your current GPA, completed credits, target GPA, and planned course credits. The tool calculates the average GPA you need in upcoming courses to reach your goal.'
    },
    {
      question: 'What GPA do I need in upcoming courses to reach 3.5?',
      answer: 'The answer depends on your current GPA, completed credits, and how many credits you plan to take. This calculator shows exactly what GPA you need in your upcoming courses to reach 3.5.'
    },
    {
      question: 'Can I achieve my target GPA in one semester?',
      answer: 'It depends on your current GPA and how many credits you take. If the required GPA is above 4.0, you will likely need more credits or additional semesters.'
    },
    {
      question: 'How many courses do I need to meet my GPA goal?',
      answer: 'The number of courses depends on your current GPA and target GPA. Adding more credits often makes a target more achievable because the required GPA per course can drop.'
    },
    {
      question: 'What is a realistic target GPA?',
      answer: 'A realistic target GPA depends on your starting point and course load. Many students aim to raise their GPA by 0.2 to 0.5 per term with consistent effort.'
    }
  ];

  const calculation = useMemo(() => {
    const completed = Number(completedCredits);
    const target = Number(targetGPA);
    let current = Number(currentGPA);

    if (!Number.isFinite(completed) || !Number.isFinite(target)) return null;
    if (completed < 0 || target < 0) return null;
    if (!Number.isFinite(current)) current = completed === 0 ? 0 : NaN;
    if (!Number.isFinite(current) || current < 0) return null;

    const totalPlannedCredits = plannedCourses.reduce((sum, course) => sum + course.credits, 0);
    if (totalPlannedCredits <= 0) return null;
    if (plannedCourses.some((course) => !Number.isFinite(course.credits) || course.credits <= 0)) return null;

    const requiredGPA = (target * (completed + totalPlannedCredits) - current * completed) / totalPlannedCredits;
    const projectedGPA = (current * completed + requiredGPA * totalPlannedCredits) / (completed + totalPlannedCredits);

    return {
      requiredGPA,
      projectedGPA,
      totalPlannedCredits,
      requiredLetter: getLetterGrade(requiredGPA),
      perCourse: plannedCourses.map((course) => ({
        ...course,
        requiredGPA
      }))
    };
  }, [currentGPA, completedCredits, targetGPA, plannedCourses]);

  const addCourse = () => {
    const newId = plannedCourses.length > 0 ? Math.max(...plannedCourses.map((c) => c.id)) + 1 : 1;
    setPlannedCourses([...plannedCourses, { id: newId, credits: 3 }]);
  };

  const removeCourse = (id: number) => {
    if (plannedCourses.length > 1) {
      setPlannedCourses(plannedCourses.filter((course) => course.id !== id));
    }
  };

  const updateCourseCredits = (id: number, credits: number) => {
    setPlannedCourses(plannedCourses.map((course) =>
      course.id === id ? { ...course, credits } : course
    ));
  };

  const clearCalculator = () => {
    setCurrentGPA('');
    setCompletedCredits('');
    setTargetGPA('');
    setPlannedCourses([{ id: 1, credits: 3 }]);
  };

  return (
    <>
      <SEOHead
        title="Target GPA Calculator \u2013 Set and Achieve Your Goal"
        description="Use our Target GPA Calculator to determine the grades you need in upcoming courses to reach your target GPA. Enter your current GPA, completed credits, and planned courses for instant calculation."
        canonical="https://topgpacalculator.com/gpa-calculators/target-gpa-calculator"
      />

      <ArticleSchema
        headline="Target GPA Calculator \u2013 Set and Achieve Your Goal"
        description="Learn how to calculate what GPA you need to achieve your academic goals. Includes target GPA formulas, examples, and strategies for reaching your desired GPA."
        author="GPA Calculator Team"
        datePublished="2024-01-15"
        dateModified="2026-03-23"
      />

      <FAQSchema faqs={faqData} />

      <div className="min-h-screen bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'GPA Calculators', href: '/gpa-calculators' },
              { label: 'Target GPA Calculator', href: '/gpa-calculators/target-gpa-calculator' }
            ]}
          />

          <header className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">
              Target GPA calculator
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Target GPA Calculator
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Use this target GPA calculator to calculate target GPA goals, compare scenarios, and answer the
              question students ask most: what GPA do I need next term? Enter your current GPA, completed credits,
              and upcoming course credits to see the average GPA required to achieve target GPA goals quickly.
            </p>
          </header>

          <div className="grid lg:grid-cols-5 gap-6 mb-10">
            <section className="lg:col-span-3 bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Plan Your Target GPA</h2>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700 mb-2">Current GPA</span>
                  <input
                    type="number"
                    value={currentGPA}
                    onChange={(e) => setCurrentGPA(e.target.value)}
                    placeholder="e.g., 3.2"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="4.0"
                    step="0.01"
                    inputMode="decimal"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-slate-700 mb-2">Completed Credits</span>
                  <input
                    type="number"
                    value={completedCredits}
                    onChange={(e) => setCompletedCredits(e.target.value)}
                    placeholder="e.g., 30"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="1"
                    inputMode="numeric"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-slate-700 mb-2">Target GPA</span>
                  <input
                    type="number"
                    value={targetGPA}
                    onChange={(e) => setTargetGPA(e.target.value)}
                    placeholder="e.g., 3.5"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="4.0"
                    step="0.01"
                    inputMode="decimal"
                  />
                </label>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Planned Course Credits</h3>
                  <button
                    onClick={addCourse}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add Course
                  </button>
                </div>

                <div className="space-y-3">
                  {plannedCourses.map((course, index) => (
                    <div key={course.id} className="flex flex-wrap items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-sm font-semibold text-slate-700">Course {index + 1}</span>
                      <label className="flex items-center gap-2">
                        <input
                          type="number"
                          value={course.credits}
                          onChange={(e) => updateCourseCredits(course.id, parseFloat(e.target.value) || 0)}
                          className="w-24 px-2 py-1 border border-slate-300 rounded text-sm"
                          min="0.5"
                          max="6"
                          step="0.5"
                          inputMode="decimal"
                        />
                        <span className="text-sm text-slate-600">credits</span>
                      </label>
                      {plannedCourses.length > 1 && (
                        <button
                          onClick={() => removeCourse(course.id)}
                          className="px-3 py-1 text-sm bg-slate-200 text-slate-700 rounded hover:bg-slate-300 transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={clearCalculator}
                  className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors"
                >
                  Clear All
                </button>
                <div className="text-sm text-slate-500 self-center">
                  Calculations update instantly as you type.
                </div>
              </div>
            </section>

            <aside className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Results</h2>

              {!calculation && (
                <p className="text-slate-600">
                  Enter your current GPA, completed credits, target GPA, and planned credits to see the required GPA
                  for each upcoming course and your projected GPA after planned courses.
                </p>
              )}

              {calculation && (
                <div className="space-y-5">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">Required Average GPA</p>
                    <p className="text-3xl font-bold text-slate-900">{formatGPA(calculation.requiredGPA)}</p>
                    <p className="text-sm text-slate-600 mt-2">
                      Approximate letter grade needed: <strong>{calculation.requiredLetter}</strong>
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Total planned credits: {calculation.totalPlannedCredits}</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4">
                    <p className="text-sm uppercase tracking-wide text-slate-500 mb-2">Projected GPA After Planned Courses</p>
                    <p className="text-2xl font-semibold text-slate-900">{formatGPA(calculation.projectedGPA)}</p>
                    <p className="text-sm text-slate-600 mt-2">
                      This projection assumes you earn the required GPA across all planned courses.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4">
                    <p className="text-sm uppercase tracking-wide text-slate-500 mb-3">Required GPA Per Planned Course</p>
                    <ul className="divide-y divide-slate-100">
                      {calculation.perCourse.map((course, index) => (
                        <li key={course.id} className="flex items-center justify-between py-2 text-sm text-slate-700">
                          <span>Course {index + 1} ({course.credits} credits)</span>
                          <span className="font-semibold">{formatGPA(course.requiredGPA)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate-500 mt-2">
                      Each course shows the same average GPA needed across your planned credits.
                    </p>
                  </div>

                  {calculation.requiredGPA > 4.0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <p className="font-semibold text-amber-900 mb-2">Target may not be achievable on a 4.0 scale</p>
                      <p className="text-sm text-amber-800">
                        The required GPA exceeds 4.0. Consider adding more planned credits, aiming for a lower target,
                        or spreading the goal across additional semesters.
                      </p>
                    </div>
                  )}

                  {calculation.requiredGPA <= 4.0 && calculation.requiredGPA >= 3.7 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="font-semibold text-blue-900 mb-2">Stretch goal</p>
                      <p className="text-sm text-blue-800">
                        You will need mostly A or A- grades. Build a study plan early and track progress weekly.
                      </p>
                    </div>
                  )}

                  {calculation.requiredGPA < 3.7 && calculation.requiredGPA >= 2.0 && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                      <p className="font-semibold text-emerald-900 mb-2">Achievable target</p>
                      <p className="text-sm text-emerald-800">
                        This target is realistic with consistent effort and solid grades in your planned courses.
                      </p>
                    </div>
                  )}

                  {calculation.requiredGPA < 2.0 && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="font-semibold text-slate-900 mb-2">You are already above the target</p>
                      <p className="text-sm text-slate-700">
                        The required GPA is very low, which means your current GPA already positions you above the
                        target. Maintain steady progress to keep your GPA safe.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </aside>
          </div>

          <nav aria-label="Table of contents" className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-slate-700">
              <li><a href="#what-is-target-gpa" className="text-blue-600 hover:text-blue-800">What is a Target GPA Calculator</a></li>
              <li><a href="#how-to-calculate" className="text-blue-600 hover:text-blue-800">How to Calculate Your Target GPA</a></li>
              <li><a href="#grade-scale" className="text-blue-600 hover:text-blue-800">GPA to Letter Grade Reference</a></li>
              <li><a href="#example-calculation" className="text-blue-600 hover:text-blue-800">Example Target GPA Calculation</a></li>
              <li><a href="#tips-reach-target" className="text-blue-600 hover:text-blue-800">Tips to Reach Your Target GPA</a></li>
              <li><a href="#gpa-importance" className="text-blue-600 hover:text-blue-800">How Target GPA Affects College, Scholarships, and Academic Goals</a></li>
              <li><a href="#related-calculators" className="text-blue-600 hover:text-blue-800">Related GPA Calculators</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </nav>

          <div className="space-y-10">
            <section id="what-is-target-gpa" className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What is a Target GPA Calculator</h2>
              <p className="text-slate-700 mb-4">
                A target GPA calculator is a planning tool that shows the average GPA you need in upcoming courses to
                reach a goal by the end of a term or semester. Think of it as a GPA goal calculator that connects where
                you are today with where you want to be next. Students use it to calculate target GPA outcomes before
                registering for classes, deciding how many credits to take, or setting a realistic GPA goal.
              </p>
              <p className="text-slate-700 mb-4">
                The calculator blends your current GPA, completed credits, and planned credits into one equation that
                answers a simple but powerful question: what GPA do I need to achieve target GPA results? When your
                target is ambitious, the tool makes the path clear by showing whether you need mostly A grades or if
                a balanced mix of A and B grades can still get you there. It is especially useful for scholarship
                planning, academic probation recovery, and competitive program applications.
              </p>
            </section>

            <section id="how-to-calculate" className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Calculate Your Target GPA</h2>
              <p className="text-slate-700 mb-4">
                To calculate target GPA requirements, you need three pieces of information: your current GPA, the
                number of credits already completed, and your desired target GPA. Then you add the total credits you
                plan to take. The formula below calculates the average GPA required in those new courses to reach your
                target. Our calculator performs this instantly, but understanding the logic helps you plan smarter.
              </p>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Target GPA Formula</h3>
                <p className="text-slate-700 mb-2"><strong>Required Grade per Course:</strong></p>
                <p className="text-slate-700 mb-4 font-mono bg-white p-2 rounded">
                  Required Grade per Course = (Target GPA * (Completed Credits + Planned Credits) - Current GPA * Completed Credits) / Planned Credits
                </p>

                <p className="text-slate-700 mb-2"><strong>Projected GPA:</strong></p>
                <p className="text-slate-700 mb-4 font-mono bg-white p-2 rounded">
                  Projected GPA = (Current GPA * Completed Credits + Sum(Planned Course Grade * Planned Credits)) / (Completed Credits + Total Planned Credits)
                </p>

                <p className="text-slate-700">Where:</p>
                <ul className="text-slate-700 ml-6 mt-2 space-y-1">
                  <li>Current GPA = GPA before new courses</li>
                  <li>Completed Credits = total credits already finished</li>
                  <li>Target GPA = desired GPA goal</li>
                  <li>Planned Credits = credits for upcoming courses</li>
                  <li>Planned Course Grade = expected GPA in each upcoming course</li>
                </ul>
              </div>

              <p className="text-slate-700 mb-4">
                Step by step, the calculator first multiplies your current GPA by completed credits to get your total
                grade points to date. It then compares that against the grade points you need to reach your target after
                adding new credits. The difference becomes the GPA you must average in planned courses. This approach
                ensures the required GPA reflects your full academic history, not just the next semester.
              </p>

              <p className="text-slate-700">
                Because the calculation uses planned credits, even small changes in course load can shift the required
                GPA. If the required GPA is above 4.0, the target is likely too aggressive for one term, and you may
                need additional credits or time to achieve target GPA results.
              </p>
            </section>

            <section id="grade-scale" className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">GPA to Letter Grade Reference</h2>
              <p className="text-slate-700 mb-6">
                A target GPA is easier to plan when you know how letter grades convert to GPA points. Use this standard
                4.0 scale to translate the required GPA into a grade target for each class. For example, a required GPA
                of 3.7 typically means A- work, while a 3.0 aligns with solid B grades.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Letter Grade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        GPA Points
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {gradeScaleTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">
                          {row.grade}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          {row.points}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="example-calculation" className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Example Target GPA Calculation</h2>
              <p className="text-slate-700 mb-4">
                Here is a realistic example that mirrors how students use a target GPA calculator to map out a plan.
                Suppose you have a 3.2 GPA after 30 credits and you want to reach a 3.5 GPA. You are planning two courses
                worth 3 credits each, for a total of 6 planned credits.
              </p>

              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-4">
                <ul className="text-blue-800 space-y-1 mb-3">
                  <li>Current GPA = 3.2</li>
                  <li>Completed Credits = 30</li>
                  <li>Target GPA = 3.5</li>
                  <li>Planned Course Credits = 6</li>
                </ul>
                <p className="text-blue-900 font-mono">
                  Required GPA = (3.5 * (30 + 6) - 3.2 * 30) / 6
                </p>
                <p className="text-blue-900 font-mono">
                  Required GPA = (126 - 96) / 6 = 5.0
                </p>
                <p className="text-blue-800 font-semibold">
                  Result: You would need a 5.0 GPA, which is above the 4.0 scale.
                </p>
              </div>

              <p className="text-slate-700 mb-4">
                With only 6 planned credits, the required GPA is too high. Increasing planned credits lowers the
                required GPA, so consider a heavier load or multiple terms to make the target realistic.
              </p>
            </section>

            <section id="tips-reach-target" className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Tips to Reach Your Target GPA</h2>
              <p className="text-slate-700 mb-4">
                Once you know the GPA you need, the next step is building a plan to achieve target GPA outcomes.
                Treat your target as a measurable goal and align your study routine, course choices, and support
                resources around that number. The ideas below help students turn the calculator result into real
                academic progress.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Academic Strategies</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Choose courses that match your strengths and long-term goals.</li>
                    <li>Use weekly study blocks to prevent last-minute cramming.</li>
                    <li>Meet instructors early to clarify grading expectations.</li>
                    <li>Track assignments with a planner and avoid late penalties.</li>
                    <li>Join study groups for accountability and faster feedback.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Planning With the Calculator</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Run multiple scenarios to see how credits affect the required GPA.</li>
                    <li>Keep targets realistic to avoid burnout and frustration.</li>
                    <li>Balance difficult courses with classes where you can earn A grades.</li>
                    <li>Update the calculator mid-semester as grades come in.</li>
                    <li>Use the output to build a weekly grade goal for each course.</li>
                  </ul>
                </div>
              </div>

            </section>

            <section id="gpa-importance" className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How Target GPA Affects College, Scholarships, and Academic Goals</h2>
              <p className="text-slate-700 mb-4">
                Target GPA planning is not just about a number on a transcript. GPA impacts eligibility for honors
                programs, competitive majors, scholarships, and internships. A target GPA calculator aligns daily
                effort with future opportunities and helps you decide whether you need to raise your GPA quickly or
                improve steadily across multiple terms.
              </p>
              <p className="text-slate-700 mb-4">
                Scholarship requirements often include GPA thresholds, and many awards require maintaining a minimum
                GPA each semester to renew funding. The calculator shows what GPA you must earn to stay eligible and
                whether a heavier credit load makes the goal more realistic.
              </p>
              <p className="text-slate-700">
                Finally, GPA can shape future options such as graduate school, professional programs, and first jobs.
                When you calculate target GPA outcomes early, you can adjust your plan before deadlines approach. A
                clear target and steady progress are the best way to keep doors open for academic and career goals.
              </p>
            </section>

            <section id="related-calculators" className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Related GPA Calculators</h2>
              <p className="text-slate-700 mb-4">
                Explore these tools to compare results, track improvement, and model different GPA scenarios.
              </p>
              <ul className="space-y-2">
                <li><a href="/gpa-improvement-calculator" className="text-blue-600 hover:text-blue-800">GPA Improvement Calculator</a></li>
                <li><a href="/required-gpa-calculator" className="text-blue-600 hover:text-blue-800">Required GPA Calculator</a></li>
                <li><a href="/college-gpa-calculator" className="text-blue-600 hover:text-blue-800">College GPA Calculator</a></li>
                <li><a href="/high-school-gpa-calculator" className="text-blue-600 hover:text-blue-800">High School GPA Calculator</a></li>
                <li><a href="/weighted-gpa-calculator" className="text-blue-600 hover:text-blue-800">Weighted GPA Calculator</a></li>
              </ul>
            </section>

            <section id="faq" className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <FAQ items={faqData} />
            </section>

            <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Additional Resources</h2>
              <p className="text-slate-700 mb-4">
                These trusted organizations provide guidance on academics, planning, and study skills.
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    College Board - College planning and admissions resources
                  </a>
                </li>
                <li>
                  <a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    National Center for Education Statistics - Educational data and research
                  </a>
                </li>
                <li>
                  <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Khan Academy - Free educational resources and study help
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
