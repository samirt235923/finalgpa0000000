'use client';

import { useMemo, useState } from 'react';

type CalculationMode = 'unweighted' | 'converter';

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
}

const gradePoints: Record<string, number> = {
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'D': 1.0,
  'F': 0.0,
};

const emptyCourse = (): Course => ({
  id: `${Date.now()}-${Math.random()}`,
  name: '',
  grade: 'A',
  credits: 1,
});

export default function UnweightedGPACalculator() {
  const [mode, setMode] = useState<CalculationMode>('unweighted');
  const [useCredits, setUseCredits] = useState(false);
  
  // Unweighted calculator state
  const [courses, setCourses] = useState<Course[]>([emptyCourse()]);
  
  // Converter state
  const [weightedGPA, setWeightedGPA] = useState('');
  const [totalCourses, setTotalCourses] = useState('');
  const [avgWeightBonus, setAvgWeightBonus] = useState('0.5');

  const unweightedResult = useMemo(() => {
    if (courses.length === 0) return null;

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const gradeValue = gradePoints[course.grade] ?? 0;
      const creds = useCredits ? Math.max(0, course.credits) : 1;
      totalPoints += gradeValue * creds;
      totalCredits += creds;
    });

    if (totalCredits === 0) return null;

    const gpa = totalPoints / totalCredits;

    let classification = '';
    if (gpa >= 3.7) classification = 'Excellent';
    else if (gpa >= 3.0) classification = 'Good';
    else if (gpa >= 2.0) classification = 'Average';
    else classification = 'Low';

    return {
      gpa: parseFloat(gpa.toFixed(2)),
      totalCredits: totalCredits,
      classification,
    };
  }, [courses, useCredits]);

  const converterResult = useMemo(() => {
    const wGPA = parseFloat(weightedGPA);
    const courses = parseInt(totalCourses);
    const bonus = parseFloat(avgWeightBonus);

    if (!wGPA || !courses || wGPA <= 0 || courses <= 0) return null;

    // Reverse calculation: if weighted = unweighted + bonus
    // Then: unweighted = weighted - (weighted_courses * bonus / total_courses)
    // Simplified: unweighted ≈ weighted - avg_bonus
    const unweighted = wGPA - bonus;
    const clampedUnweighted = Math.max(0, Math.min(4.0, unweighted));

    let classification = '';
    if (clampedUnweighted >= 3.7) classification = 'Excellent';
    else if (clampedUnweighted >= 3.0) classification = 'Good';
    else if (clampedUnweighted >= 2.0) classification = 'Average';
    else classification = 'Low';

    return {
      unweightedGPA: parseFloat(clampedUnweighted.toFixed(2)),
      weightedGPA: wGPA,
      totalCourses: courses,
      classification,
    };
  }, [weightedGPA, totalCourses, avgWeightBonus]);

  // Unweighted calculator functions
  const addCourse = () => {
    if (courses.length >= 20) return;
    setCourses([...courses, emptyCourse()]);
  };

  const removeCourse = (id: string) => {
    if (courses.length === 1) return;
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const resetCourses = () => setCourses([emptyCourse()]);

  const resetConverter = () => {
    setWeightedGPA('');
    setTotalCourses('');
    setAvgWeightBonus('0.5');
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-sm p-4 md:p-6">
      {/* Mode Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-sm font-semibold text-gray-700">Calculator:</span>
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setMode('unweighted')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              mode === 'unweighted'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Unweighted GPA
          </button>
          <button
            onClick={() => setMode('converter')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              mode === 'converter'
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Weighted → Unweighted
          </button>
        </div>
      </div>

      {mode === 'unweighted' && (
        <>
          {/* Credits Toggle */}
          <div className="flex items-center gap-2 mb-4">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={useCredits}
                onChange={() => setUseCredits(!useCredits)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              Use credit hours (toggle ON)
            </label>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700">
                  <th className="px-2 py-2">Course</th>
                  <th className="px-2 py-2">Grade</th>
                  {useCredits && <th className="px-2 py-2">Credits</th>}
                  <th className="px-2 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, idx) => (
                  <tr key={course.id} className="border-t border-gray-200">
                    <td className="px-2 py-2">
                      <input
                        type="text"
                        value={course.name}
                        onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                        placeholder={`Course ${idx + 1}`}
                        className="w-full border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-2 py-2 w-36">
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {Object.entries(gradePoints).map(([grade, points]) => (
                          <option key={grade} value={grade}>
                            {grade} ({points})
                          </option>
                        ))}
                      </select>
                    </td>
                    {useCredits && (
                      <td className="px-2 py-2 w-24">
                        <input
                          type="number"
                          min="1"
                          max="12"
                          value={course.credits}
                          onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value) || 1)}
                          className="w-full border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                    )}
                    <td className="px-2 py-2 w-20">
                      <button
                        onClick={() => removeCourse(course.id)}
                        disabled={courses.length === 1}
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

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={addCourse}
              disabled={courses.length >= 20}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              + Add Course
            </button>
            <button
              onClick={resetCourses}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-200"
            >
              Reset
            </button>
          </div>

          {/* Results */}
          {unweightedResult && (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg p-4 bg-blue-50 border-2 border-blue-200">
                <p className="text-xs text-blue-600 uppercase font-semibold">Unweighted GPA</p>
                <p className="text-3xl font-bold text-blue-900">{unweightedResult.gpa}</p>
              </div>
              <div className="rounded-lg p-4 bg-green-50 border-2 border-green-200">
                <p className="text-xs text-green-600 uppercase font-semibold">Total {useCredits ? 'Credits' : 'Courses'}</p>
                <p className="text-3xl font-bold text-green-900">{unweightedResult.totalCredits}</p>
              </div>
              <div className="rounded-lg p-4 bg-purple-50 border-2 border-purple-200">
                <p className="text-xs text-purple-600 uppercase font-semibold">Performance</p>
                <p className="text-xl font-bold text-purple-900">{unweightedResult.classification}</p>
              </div>
            </div>
          )}

          {/* Formula */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
            <p><strong>Formula:</strong> GPA = Σ Grade Points ÷ {useCredits ? 'Total Credits' : 'Number of Courses'}</p>
          </div>
        </>
      )}

      {mode === 'converter' && (
        <>
          <div className="mb-4 p-3 bg-blue-50 rounded-lg text-sm text-gray-700">
            Convert your weighted GPA to unweighted (4.0 scale) by subtracting the average bonus from honors/AP courses.
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Weighted GPA</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.01"
                value={weightedGPA}
                onChange={(e) => setWeightedGPA(e.target.value)}
                placeholder="e.g., 4.5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Total Courses</label>
              <input
                type="number"
                min="1"
                value={totalCourses}
                onChange={(e) => setTotalCourses(e.target.value)}
                placeholder="e.g., 6"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Avg Weight Bonus</label>
              <select
                value={avgWeightBonus}
                onChange={(e) => setAvgWeightBonus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="0.5">0.5 (Mostly Honors)</option>
                <option value="0.75">0.75 (Mix)</option>
                <option value="1.0">1.0 (Mostly AP)</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={resetConverter}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-200"
            >
              Reset
            </button>
          </div>

          {/* Results */}
          {converterResult && (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg p-4 bg-blue-50 border-2 border-blue-200">
                <p className="text-xs text-blue-600 uppercase font-semibold">Unweighted GPA</p>
                <p className="text-3xl font-bold text-blue-900">{converterResult.unweightedGPA}</p>
              </div>
              <div className="rounded-lg p-4 bg-green-50 border-2 border-green-200">
                <p className="text-xs text-green-600 uppercase font-semibold">Original Weighted</p>
                <p className="text-3xl font-bold text-green-900">{converterResult.weightedGPA}</p>
              </div>
              <div className="rounded-lg p-4 bg-purple-50 border-2 border-purple-200">
                <p className="text-xs text-purple-600 uppercase font-semibold">Performance</p>
                <p className="text-xl font-bold text-purple-900">{converterResult.classification}</p>
              </div>
            </div>
          )}

          {/* Formula */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
            <p><strong>Formula:</strong> Unweighted GPA ≈ Weighted GPA − Average Weight Bonus</p>
            <p className="mt-1 text-gray-500">Example: 4.5 − 0.5 = 4.0 unweighted</p>
          </div>
        </>
      )}

      {/* Grade Scale Reference */}
      <div className="mt-6 p-4 bg-gray-100 rounded-xl">
        <h4 className="font-semibold text-gray-800 mb-2">Unweighted Grade Scale (4.0)</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs text-gray-600">
          <div><span className="font-bold">A</span> = 4.0</div>
          <div><span className="font-bold">A-</span> = 3.7</div>
          <div><span className="font-bold">B+</span> = 3.3</div>
          <div><span className="font-bold">B</span> = 3.0</div>
          <div><span className="font-bold">C</span> = 2.0</div>
          <div><span className="font-bold">D</span> = 1.0</div>
          <div><span className="font-bold">F</span> = 0.0</div>
        </div>
      </div>
    </div>
  );
}