'use client';

import { useMemo, useState } from 'react';

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
}

const columbiaGradePoints: Record<string, number> = {
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D': 1.0,
  'F': 0.0,
};

const emptyCourse = (id: string): Course => ({
  id,
  name: '',
  grade: 'A',
  credits: 3,
});

const INITIAL_COURSE: Course = emptyCourse('course-1');

export default function ColumbiaGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([INITIAL_COURSE]);
  const [useCredits, setUseCredits] = useState(true);

  const results = useMemo(() => {
    if (courses.length === 0) return null;

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const gradeValue = columbiaGradePoints[course.grade] ?? 0;
      const creds = useCredits ? Math.max(0, course.credits) : 1;
      totalPoints += gradeValue * creds;
      totalCredits += creds;
    });

    if (totalCredits === 0) return null;

    const gpa = totalPoints / totalCredits;

    let classification = '';
    if (gpa >= 3.8) classification = 'Distinction';
    else if (gpa >= 3.5) classification = 'Honors';
    else if (gpa >= 2.0) classification = 'Satisfactory';
    else classification = 'Below Standard';

    return {
      gpa: parseFloat(gpa.toFixed(2)),
      totalCredits: totalCredits,
      totalPoints: parseFloat(totalPoints.toFixed(2)),
      classification,
    };
  }, [courses, useCredits]);

  const addCourse = () => {
    setCourses((currentCourses) => {
      if (currentCourses.length >= 20) return currentCourses;
      return [...currentCourses, emptyCourse(`course-${currentCourses.length + 1}-${Date.now()}`)];
    });
  };

  const removeCourse = (id: string) => {
    setCourses((currentCourses) => {
      if (currentCourses.length === 1) return currentCourses;
      return currentCourses.filter((course) => course.id !== id);
    });
  };

  const resetCourses = () => setCourses([INITIAL_COURSE]);

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) => (course.id === id ? { ...course, [field]: value } : course))
    );
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-sm p-4 md:p-6">
      {/* Header with Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-xl font-bold text-gray-900">Columbia GPA Calculator</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
      </div>

      {/* Credits Toggle */}
      <div className="flex items-center gap-2 mb-4">
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={useCredits}
            onChange={() => setUseCredits(!useCredits)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          Use credit hours (toggle OFF for equal weighting)
        </label>
      </div>

      {/* Help Text */}
      <div className="mb-4 p-3 bg-red-50 rounded-lg text-sm text-gray-700">
        Enter your courses and grades using Columbia's grading scale. The calculator uses standard Columbia grade points (A=4.0, A-=3.7, etc.)
      </div>

      {/* Courses Table */}
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
                    {Object.entries(columbiaGradePoints).map(([grade, points]) => (
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

      {/* Action Buttons */}
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
      {results && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg p-4 bg-blue-50 border-2 border-blue-200">
            <p className="text-xs text-blue-600 uppercase font-semibold">Columbia GPA</p>
            <p className="text-3xl font-bold text-blue-900">{results.gpa}</p>
          </div>
          <div className="rounded-lg p-4 bg-green-50 border-2 border-green-200">
            <p className="text-xs text-green-600 uppercase font-semibold">Total {useCredits ? 'Credits' : 'Courses'}</p>
            <p className="text-3xl font-bold text-green-900">{results.totalCredits}</p>
          </div>
          <div className="rounded-lg p-4 bg-purple-50 border-2 border-purple-200">
            <p className="text-xs text-purple-600 uppercase font-semibold">Grade Points</p>
            <p className="text-3xl font-bold text-purple-900">{results.totalPoints}</p>
          </div>
          <div className="rounded-lg p-4 bg-orange-50 border-2 border-orange-200">
            <p className="text-xs text-orange-600 uppercase font-semibold">Classification</p>
            <p className="text-xl font-bold text-orange-900">{results.classification}</p>
          </div>
        </div>
      )}

      {/* Formula */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
        <p><strong>Formula:</strong> GPA = Σ (Grade Points × Credits) ÷ {useCredits ? 'Total Credits' : 'Number of Courses'}</p>
      </div>

      {/* Grade Scale Reference */}
      <div className="mt-4 p-4 bg-gray-100 rounded-xl">
        <h3 className="font-semibold text-gray-800 mb-2">Columbia Grade Scale</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs text-gray-600">
          <div><span className="font-bold">A</span> = 4.0</div>
          <div><span className="font-bold">A-</span> = 3.7</div>
          <div><span className="font-bold">B+</span> = 3.3</div>
          <div><span className="font-bold">B</span> = 3.0</div>
          <div><span className="font-bold">B-</span> = 2.7</div>
          <div><span className="font-bold">C+</span> = 2.3</div>
          <div><span className="font-bold">C</span> = 2.0</div>
          <div><span className="font-bold">C-</span> = 1.7</div>
          <div><span className="font-bold">D</span> = 1.0</div>
          <div><span className="font-bold">F</span> = 0.0</div>
        </div>
      </div>
    </div>
  );
}
