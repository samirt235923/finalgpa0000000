'use client';

import { useMemo, useState } from 'react';

interface CourseRow {
  id: string;
  courseName: string;
  grade: string;
  credits: number;
}

const gradeMap: Record<string, number> = {
  'A+': 4.0,
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D: 1.0,
  'D-': 0.7,
  F: 0.0,
};

const defaultRows = [
  { id: 'r1', courseName: 'Mathematics', grade: 'A', credits: 3 },
  { id: 'r2', courseName: 'English', grade: 'B+', credits: 3 },
  { id: 'r3', courseName: 'Science', grade: 'A-', credits: 4 },
  { id: 'r4', courseName: 'History', grade: 'B', credits: 3 },
];

export default function OnlineFreeGPACalculator() {
  const [rows, setRows] = useState<CourseRow[]>(defaultRows);
  const [showGradePoints, setShowGradePoints] = useState(true);

  const addRow = () => {
    const id = `r${Date.now()}`;
    setRows((prev) => [...prev, { id, courseName: '', grade: 'A', credits: 3 }]);
  };

  const removeRow = (id: string) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const updateRow = (id: string, field: keyof CourseRow, value: string | number) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: field === 'credits' ? Math.max(0, Math.min(12, Number(value) || 0)) : value,
            }
          : row,
      ),
    );
  };

  const reset = () => {
    setRows(defaultRows);
  };

  const totalGradePoints = useMemo(() => {
    return rows.reduce((sum, row) => {
      const points = gradeMap[row.grade] ?? 0;
      return sum + points * (row.credits || 0);
    }, 0);
  }, [rows]);

  const totalCredits = useMemo(() => {
    return rows.reduce((sum, row) => sum + (row.credits || 0), 0);
  }, [rows]);

  const gpa = totalCredits ? Number((totalGradePoints / totalCredits).toFixed(2)) : 0;

  const getGradeClassification = (gpa: number): { label: string; color: string; description: string } => {
    if (gpa >= 3.7) return { label: 'Excellent', color: 'text-green-600', description: 'Outstanding academic performance' };
    if (gpa >= 3.3) return { label: 'Very Good', color: 'text-blue-600', description: 'Above average performance' };
    if (gpa >= 3.0) return { label: 'Good', color: 'text-indigo-600', description: 'Solid academic standing' };
    if (gpa >= 2.7) return { label: 'Above Average', color: 'text-teal-600', description: 'Satisfactory performance' };
    if (gpa >= 2.0) return { label: 'Average', color: 'text-yellow-600', description: 'Acceptable academic standing' };
    if (gpa >= 1.0) return { label: 'Below Average', color: 'text-orange-600', description: 'Needs improvement' };
    return { label: 'Poor', color: 'text-red-600', description: 'Academic probation may apply' };
  };

  const classification = getGradeClassification(gpa);

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border border-green-200">
      <div className="flex flex-wrap items-center gap-3 justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-900">Free Online GPA Calculator</h2>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">100% FREE</span>
        </div>
        <span className="text-xs rounded-lg bg-emerald-100 text-emerald-800 px-2 py-1">Real-Time Calculation</span>
      </div>

      <p className="text-gray-600 mb-4">
        Calculate your GPA for free! Add your courses, enter grades and credit hours, and get instant results. No registration required.
      </p>

      <div className="mb-4 flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={showGradePoints}
            onChange={(e) => setShowGradePoints(e.target.checked)}
            className="h-4 w-4 text-green-600 rounded"
          />
          Show Grade Points Column
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-700 border-collapse">
          <thead>
            <tr className="bg-white">
              <th className="px-3 py-3 font-semibold">#</th>
              <th className="px-3 py-3 font-semibold">Course Name</th>
              <th className="px-3 py-3 font-semibold">Credits</th>
              <th className="px-3 py-3 font-semibold">Grade</th>
              {showGradePoints && <th className="px-3 py-3 font-semibold">Grade Points</th>}
              <th className="px-3 py-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const points = gradeMap[row.grade] ?? 0;
              const gp = points * (row.credits || 0);
              return (
                <tr key={row.id} className="border-t border-gray-200 hover:bg-white/50">
                  <td className="px-3 py-3">{index + 1}</td>
                  <td className="px-3 py-3">
                    <input
                      type="text"
                      placeholder="Course name"
                      value={row.courseName}
                      onChange={(e) => updateRow(row.id, 'courseName', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="number"
                      min={1}
                      max={12}
                      value={row.credits}
                      onChange={(e) => updateRow(row.id, 'credits', e.target.value)}
                      className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <select
                      value={row.grade}
                      onChange={(e) => updateRow(row.id, 'grade', e.target.value)}
                      className="rounded-lg border border-gray-300 px-2 py-1 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      {Object.entries(gradeMap).map(([grade, value]) => (
                        <option key={grade} value={grade}>
                          {grade} ({value.toFixed(1)})
                        </option>
                      ))}
                    </select>
                  </td>
                  {showGradePoints && (
                    <td className="px-3 py-3 font-medium text-gray-900">{gp.toFixed(2)}</td>
                  )}
                  <td className="px-3 py-3">
                    <button
                      onClick={() => removeRow(row.id)}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50 px-2 py-1 rounded text-xs font-medium"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={addRow}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          + Add Another Course
        </button>
        <button
          onClick={() => setRows([...rows, ...defaultRows.slice(0, 4).map((r) => ({ ...r, id: `r${Date.now() + Math.random()}` }))])}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Auto-add 4 Courses
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm font-medium transition-colors"
        >
          Reset Calculator
        </button>
      </div>

      <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-4 text-white">
            <div className="text-sm font-medium opacity-90">Your GPA</div>
            <div className="text-3xl font-bold">{isNaN(gpa) ? '0.00' : gpa.toFixed(2)}</div>
            <div className={`text-xs mt-1 ${classification.color.replace('text-', 'text-white/')}`}>
              {classification.label}
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white">
            <div className="text-sm font-medium text-gray-600">Total Courses</div>
            <div className="text-2xl font-bold text-gray-900">{rows.length}</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white">
            <div className="text-sm font-medium text-gray-600">Total Credits</div>
            <div className="text-2xl font-bold text-gray-900">{totalCredits}</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white">
            <div className="text-sm font-medium text-gray-600">Total Grade Points</div>
            <div className="text-2xl font-bold text-gray-900">{isNaN(totalGradePoints) ? '0.00' : totalGradePoints.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-2">Performance Classification</h3>
        <p className={`text-lg font-bold ${classification.color}`}>{classification.label}</p>
        <p className="text-sm text-gray-600 mt-1">{classification.description}</p>
      </div>

      <div className="mt-4 p-4 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-700">
        <strong className="text-gray-900">GPA Formula:</strong> GPA = Total Grade Points ÷ Total Credit Hours
        <br />
        <strong className="text-gray-900">Calculation:</strong> {isNaN(totalGradePoints) ? '0.00' : totalGradePoints.toFixed(2)} ÷ {totalCredits} = <span className="font-bold text-green-600">{isNaN(gpa) ? '0.00' : gpa.toFixed(2)}</span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">✓ 100% Free</span>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">✓ No Registration</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">✓ Unlimited Courses</span>
        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">✓ Mobile Friendly</span>
      </div>
    </div>
  );
}
