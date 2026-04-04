'use client';

import { useMemo, useState } from 'react';

type GradeMode = 'letter' | 'percentage';
type CalculationMode = 'no-credits' | 'weighted' | 'percentage';
type CourseType = 'Regular' | 'Honors' | 'Advanced';

interface Subject {
  id: string;
  name: string;
  grade: string;
  percentage: string;
  courseType: CourseType;
}

const letterToGPA: Record<string, number> = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

const percentageToGPA = (pct: number): number => {
  if (pct >= 90) return 4.0;
  if (pct >= 80) return 3.0;
  if (pct >= 70) return 2.0;
  if (pct >= 60) return 1.0;
  return 0.0;
};

const courseWeight: Record<CourseType, number> = {
  Regular: 0,
  Honors: 0.5,
  Advanced: 1.0,
};

const emptySubject = (): Subject => ({
  id: `${Date.now()}-${Math.random()}`,
  name: '',
  grade: 'A',
  percentage: '',
  courseType: 'Regular',
});

export default function MiddleSchoolGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([emptySubject()]);
  const [gradeMode, setGradeMode] = useState<GradeMode>('letter');
  const [calcMode, setCalcMode] = useState<CalculationMode>('no-credits');

  const results = useMemo(() => {
    if (subjects.length === 0) return null;

    let totalGPA = 0;
    let totalPercentage = 0;
    let validCount = 0;

    subjects.forEach((subj) => {
      let gradePoints = 0;
      let pct = 0;

      if (gradeMode === 'letter') {
        gradePoints = letterToGPA[subj.grade] ?? 0;
        if (calcMode === 'weighted') {
          gradePoints = Math.min(gradePoints + courseWeight[subj.courseType], 5.0);
        }
        pct = gradePoints * 25;
      } else {
        pct = parseFloat(subj.percentage) || 0;
        gradePoints = percentageToGPA(pct);
        if (calcMode === 'weighted') {
          gradePoints = Math.min(gradePoints + courseWeight[subj.courseType], 5.0);
        }
      }

      if (gradePoints > 0 || pct > 0) {
        totalGPA += gradePoints;
        totalPercentage += pct;
        validCount++;
      }
    });

    if (validCount === 0) return null;

    const gpa = totalGPA / validCount;
    const avgPercentage = totalPercentage / validCount;

    let classification = '';
    if (gpa >= 3.5) classification = 'Excellent';
    else if (gpa >= 3.0) classification = 'Good';
    else if (gpa >= 2.0) classification = 'Average';
    else classification = 'Needs Improvement';

    return {
      gpa: parseFloat(gpa.toFixed(2)),
      averagePercentage: parseFloat(avgPercentage.toFixed(1)),
      totalSubjects: validCount,
      classification,
    };
  }, [subjects, gradeMode, calcMode]);

  const addSubject = () => {
    if (subjects.length >= 20) return;
    setSubjects((prev) => [...prev, emptySubject()]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length === 1) return;
    setSubjects((prev) => prev.filter((s) => s.id !== id));
  };

  const resetAll = () => setSubjects([emptySubject()]);

  const updateSubject = (id: string, field: keyof Subject, value: string) => {
    setSubjects((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-sm p-4 md:p-6">
      {/* Mode Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-sm font-semibold text-gray-700">Mode:</span>
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          {(['no-credits', 'weighted', 'percentage'] as CalculationMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setCalcMode(mode)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                calcMode === mode
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {mode === 'no-credits' ? 'No Credits' : mode === 'weighted' ? 'Weighted' : 'Number Grades'}
            </button>
          ))}
        </div>
      </div>

      {/* Grade Input Toggle */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-sm font-semibold text-gray-700">Grade Input:</span>
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setGradeMode('letter')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              gradeMode === 'letter'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Letter (A-F)
          </button>
          <button
            onClick={() => setGradeMode('percentage')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              gradeMode === 'percentage'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Percentage (0-100)
          </button>
        </div>
      </div>

      {/* Help Text */}
      <div className="mb-4 p-3 bg-blue-50 rounded-lg text-sm text-gray-700">
        {calcMode === 'no-credits' && 'No Credits Mode: GPA = Average of grade points (simple average)'}
        {calcMode === 'weighted' && 'Weighted Mode: Honors (+0.5) and Advanced (+1.0) boost your GPA'}
        {calcMode === 'percentage' && 'Percentage Mode: Enter 0-100 grades, automatically converted to GPA'}
      </div>

      {/* Subjects Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="px-2 py-2">Subject</th>
              <th className="px-2 py-2">{gradeMode === 'letter' ? 'Grade' : 'Percentage'}</th>
              {calcMode === 'weighted' && <th className="px-2 py-2">Type</th>}
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subj, idx) => (
              <tr key={subj.id} className="border-t border-gray-200">
                <td className="px-2 py-2">
                  <input
                    type="text"
                    value={subj.name}
                    onChange={(e) => updateSubject(subj.id, 'name', e.target.value)}
                    placeholder={`Subject ${idx + 1}`}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-2 py-2 w-32">
                  {gradeMode === 'letter' ? (
                    <select
                      value={subj.grade}
                      onChange={(e) => updateSubject(subj.id, 'grade', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="A">A (4.0)</option>
                      <option value="B">B (3.0)</option>
                      <option value="C">C (2.0)</option>
                      <option value="D">D (1.0)</option>
                      <option value="F">F (0.0)</option>
                    </select>
                  ) : (
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={subj.percentage}
                      onChange={(e) => updateSubject(subj.id, 'percentage', e.target.value)}
                      placeholder="0-100"
                      className="w-full border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </td>
                {calcMode === 'weighted' && (
                  <td className="px-2 py-2 w-36">
                    <select
                      value={subj.courseType}
                      onChange={(e) => updateSubject(subj.id, 'courseType', e.target.value as CourseType)}
                      className="w-full border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Regular">Regular</option>
                      <option value="Honors">Honors (+0.5)</option>
                      <option value="Advanced">Advanced (+1.0)</option>
                    </select>
                  </td>
                )}
                <td className="px-2 py-2 w-20">
                  <button
                    onClick={() => removeSubject(subj.id)}
                    disabled={subjects.length === 1}
                    className="text-red-600 disabled:text-gray-400 text-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        <button
          onClick={addSubject}
          disabled={subjects.length >= 20}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          + Add Subject
        </button>
        <button
          onClick={resetAll}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-200"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      {results && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg p-4 bg-blue-50 border-2 border-blue-200">
            <p className="text-xs text-blue-600 uppercase font-semibold">GPA (4.0)</p>
            <p className="text-3xl font-bold text-blue-900">{results.gpa}</p>
          </div>
          <div className="rounded-lg p-4 bg-green-50 border-2 border-green-200">
            <p className="text-xs text-green-600 uppercase font-semibold">Avg Percentage</p>
            <p className="text-3xl font-bold text-green-900">{results.averagePercentage}%</p>
          </div>
          <div className="rounded-lg p-4 bg-purple-50 border-2 border-purple-200">
            <p className="text-xs text-purple-600 uppercase font-semibold">Total Subjects</p>
            <p className="text-3xl font-bold text-purple-900">{results.totalSubjects}</p>
          </div>
          <div className="rounded-lg p-4 bg-orange-50 border-2 border-orange-200">
            <p className="text-xs text-orange-600 uppercase font-semibold">Performance</p>
            <p className="text-lg font-bold text-orange-900">{results.classification}</p>
          </div>
        </div>
      )}

      {/* Formula Explanation */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
        <p><strong>Formula:</strong> {calcMode === 'no-credits' ? 'GPA = Total Grade Points ÷ Number of Subjects' : calcMode === 'weighted' ? 'GPA = (Grade Points + Weight Bonus) ÷ Subjects' : 'Average = Total Percentage ÷ Subjects'}</p>
      </div>

      {/* Grade Scale Reference */}
      <div className="mt-4 p-4 bg-gray-100 rounded-xl">
        <h4 className="font-semibold text-gray-800 mb-2">Grade Conversion Scale</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs text-gray-600">
          <div><span className="font-bold">A</span> = 4.0 (90-100%)</div>
          <div><span className="font-bold">B</span> = 3.0 (80-89%)</div>
          <div><span className="font-bold">C</span> = 2.0 (70-79%)</div>
          <div><span className="font-bold">D</span> = 1.0 (60-69%)</div>
          <div><span className="font-bold">F</span> = 0.0 (&lt;60%)</div>
        </div>
      </div>
    </div>
  );
}