'use client';

import { useMemo, useState, useRef } from 'react';

type Course = {
  id: string;
  name: string;
  grade: string;
  creditHours: number;
  level: 'Regular' | 'Honors' | 'AP';
};

const gradeValues: Record<string, number> = {
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  D: 1.0,
  F: 0.0,
};

const courseLevels = ['Regular', 'Honors', 'AP'] as const;

const initialRow = (id: string): Course => ({
  id,
  name: '',
  grade: 'A',
  creditHours: 3,
  level: 'Regular',
});

const INITIAL_ROW: Course = initialRow('course-1');

export default function JuniorGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([INITIAL_ROW]);

  const totals = useMemo(() => {
    const summary = courses.reduce(
      (acc, course) => {
        const credits = Number(course.creditHours) || 0;
        const base = gradeValues[course.grade] ?? 0;
        const bonus = course.level === 'Honors' ? 0.5 : course.level === 'AP' ? 1.0 : 0;
        const gradePoints = base * credits;
        const weightedPoints = Math.min(base + bonus, 5.0) * credits;

        return {
          totalCredits: acc.totalCredits + credits,
          totalGradePoints: acc.totalGradePoints + gradePoints,
          totalWeightedPoints: acc.totalWeightedPoints + weightedPoints,
        };
      },
      { totalCredits: 0, totalGradePoints: 0, totalWeightedPoints: 0 }
    );

    const juniorGPA = summary.totalCredits > 0 ? summary.totalGradePoints / summary.totalCredits : 0;
    const weightedGPA = summary.totalCredits > 0 ? summary.totalWeightedPoints / summary.totalCredits : 0;

    const roundedGPA = Number(juniorGPA.toFixed(3));
    const roundedWeightedGPA = Number(weightedGPA.toFixed(3));

    const label = () => {
      if (roundedWeightedGPA >= 3.8) return 'Excellent';
      if (roundedWeightedGPA >= 3.4) return 'Very Good';
      if (roundedWeightedGPA >= 3.0) return 'Good';
      if (roundedWeightedGPA >= 2.5) return 'Average';
      return 'Needs Improvement';
    };

    return {
      totalCredits: summary.totalCredits,
      totalGradePoints: Number(summary.totalGradePoints.toFixed(2)),
      totalWeightedPoints: Number(summary.totalWeightedPoints.toFixed(2)),
      juniorGPA: roundedGPA,
      weightedGPA: roundedWeightedGPA,
      performance: label(),
    };
  }, [courses]);

  const addCourse = () => setCourses((prev) => [...prev, initialRow(`course-${prev.length + 1}-${Date.now()}`)]);

  const removeCourse = (id: string) => {
    setCourses((prev) => (prev.length > 1 ? prev.filter((course) => course.id !== id) : prev));
  };

  const resetCalculator = () => setCourses([INITIAL_ROW]);

  const calculatorRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContent = calculatorRef.current;
    if (!printContent) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Junior GPA Calculator Results</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f3f4f6; }
            .result-box { margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px; }
            .result-item { margin: 10px 0; }
          </style>
        </head>
        <body>
          <h1>Junior GPA Calculator Results</h1>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleDownloadPDF = async () => {
    const canvas = await import('html2canvas').then((mod) => mod.default);
    const jsPDFModule = await import('jspdf');
    const jsPDF = jsPDFModule.default;
    if (!calculatorRef.current) return;
    const canvasEl = await canvas(calculatorRef.current, { useCORS: true });
    const imgData = canvasEl.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvasEl.height * pdfWidth) / canvasEl.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('junior-gpa-calculator.pdf');
  };

  const updateCourse = <K extends keyof Course>(id: string, key: K, value: Course[K]) => {
    setCourses((prev) =>
      prev.map((course) => (course.id === id ? { ...course, [key]: value } : course))
    );
  };

  const invalidInput = courses.some((course) => Number(course.creditHours) <= 0);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 md:p-5" ref={calculatorRef}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Junior GPA Calculator</h3>
          <p className="text-sm text-gray-600">Enter courses, credit hours, and grades to compute junior year GPA instantly.</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="px-2 py-2">Course Name</th>
              <th className="px-2 py-2">Credit Hours</th>
              <th className="px-2 py-2">Grade</th>
              <th className="px-2 py-2">Course Level</th>
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={course.id} className="bg-slate-50 rounded-xl">
                <td className="px-2 py-2">
                  <input
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder={`Course ${idx + 1}`}
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                  />
                </td>
                <td className="px-2 py-2 w-24">
                  <input
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    min={1}
                    max={12}
                    value={course.creditHours}
                    onChange={(e) => updateCourse(course.id, 'creditHours', Number(e.target.value) || 0)}
                  />
                </td>
                <td className="px-2 py-2 w-28">
                  <select
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  >
                    {Object.keys(gradeValues).map((grade) => (
                      <option key={grade} value={grade}>
                        {grade} ({gradeValues[grade].toFixed(1)})
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-2 py-2 w-32">
                  <select
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={course.level}
                    onChange={(e) => updateCourse(course.id, 'level', e.target.value as Course['level'])}
                  >
                    {courseLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-2 py-2 w-24">
                  <button
                    onClick={() => removeCourse(course.id)}
                    disabled={courses.length === 1}
                    className="text-red-600 disabled:text-gray-300 hover:text-red-800"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={addCourse}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
        >
          + Add Course
        </button>
        <button
          onClick={resetCalculator}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200"
        >
          Reset
        </button>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
        >
          Print
        </button>
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700"
        >
          Download as PDF
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="bg-blue-50 rounded-xl border border-blue-100 p-3">
          <p className="text-xs text-gray-600 uppercase font-bold tracking-wide">Total Credits</p>
          <p className="text-2xl font-bold">{totals.totalCredits}</p>
        </div>
        <div className="bg-green-50 rounded-xl border border-green-100 p-3">
          <p className="text-xs text-gray-600 uppercase font-bold tracking-wide">Total Grade Points</p>
          <p className="text-2xl font-bold">{totals.totalGradePoints}</p>
        </div>
        <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-3">
          <p className="text-xs text-gray-600 uppercase font-bold tracking-wide">Junior Year GPA</p>
          <p className="text-2xl font-bold">{invalidInput ? 'Invalid' : totals.juniorGPA.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <div className="bg-violet-50 rounded-xl border border-violet-100 p-3">
          <p className="text-xs text-gray-600 uppercase font-bold">Weighted GPA</p>
          <p className="text-2xl font-bold">{invalidInput ? 'Invalid' : totals.weightedGPA.toFixed(2)}</p>
        </div>
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-3">
          <p className="text-xs text-gray-600 uppercase font-bold">Performance Label</p>
          <p className="text-xl font-semibold text-gray-800">{totals.performance}</p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          Formula: <strong>GPA = Total Grade Points ÷ Total Credit Hours</strong>
        </p>
        <p>
          Grade Points = Grade Value × Credit Hours. Honors adds +0.5, AP adds +1.0 to grade value (capped at 5.0).
        </p>
        <p className="text-red-600 mt-2">{invalidInput && 'Please enter credit hours greater than 0 for all courses.'}</p>
      </div>
    </div>
  );
}
