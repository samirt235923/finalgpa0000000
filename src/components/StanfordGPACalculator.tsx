'use client';

import { useMemo, useState } from 'react';

interface Course {
  id: string;
  name: string;
  grade: string;
  units: number;
}

const stanfordGradePoints: Record<string, number> = {
  'A+': 4.0,
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'D-': 0.7,
  'F': 0.0,
};

const createCourse = (id: string): Course => ({
  id,
  name: '',
  grade: 'A',
  units: 3,
});

const INITIAL_COURSE: Course = createCourse('course-1');

export default function StanfordGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([INITIAL_COURSE]);

  const results = useMemo(() => {
    if (courses.length === 0) return null;

    let totalPoints = 0;
    let totalUnits = 0;

    courses.forEach((course) => {
      const units = Math.max(0, course.units);
      const points = stanfordGradePoints[course.grade] ?? 0;
      totalPoints += points * units;
      totalUnits += units;
    });

    if (totalUnits === 0) return null;

    const gpa = totalPoints / totalUnits;
    let standing = '';

    if (gpa >= 3.8) standing = 'Excellent standing';
    else if (gpa >= 3.5) standing = 'Very strong standing';
    else if (gpa >= 3.0) standing = 'Good standing';
    else if (gpa >= 2.0) standing = 'Satisfactory standing';
    else standing = 'Needs improvement';

    return {
      gpa: gpa.toFixed(2),
      totalUnits,
      totalPoints: totalPoints.toFixed(2),
      standing,
    };
  }, [courses]);

  const addCourse = () => {
    setCourses((currentCourses) => {
      if (currentCourses.length >= 20) return currentCourses;
      return [...currentCourses, createCourse(`course-${currentCourses.length + 1}-${Date.now()}`)];
    });
  };

  const removeCourse = (id: string) => {
    setCourses((currentCourses) => {
      if (currentCourses.length === 1) return currentCourses;
      return currentCourses.filter((course) => course.id !== id);
    });
  };

  const resetCourses = () => {
    setCourses([INITIAL_COURSE]);
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) => (course.id === id ? { ...course, [field]: value } : course))
    );
  };

  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white p-4 shadow-sm md:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Stanford GPA Calculator</h2>
          <p className="mt-1 text-sm text-gray-600">
            Add your courses, choose letter grades, enter units, and estimate your GPA instantly.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={addCourse}
            disabled={courses.length >= 20}
            className="rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800 disabled:opacity-50"
          >
            + Add Course
          </button>
          <button
            onClick={resetCourses}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-gray-700">
        This tool estimates GPA by multiplying each course&apos;s grade points by its unit value, then dividing the total points by total units attempted.
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="px-3 py-2">Course</th>
              <th className="px-3 py-2">Grade</th>
              <th className="px-3 py-2">Units</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id} className="border-t border-gray-200">
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={course.name}
                    onChange={(event) => updateCourse(course.id, 'name', event.target.value)}
                    placeholder={`Course ${index + 1}`}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </td>
                <td className="px-3 py-2 w-40">
                  <select
                    value={course.grade}
                    onChange={(event) => updateCourse(course.id, 'grade', event.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {Object.entries(stanfordGradePoints).map(([grade, points]) => (
                      <option key={grade} value={grade}>
                        {grade} ({points})
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2 w-28">
                  <input
                    type="number"
                    min="0.5"
                    max="12"
                    step="0.5"
                    value={course.units}
                    onChange={(event) => updateCourse(course.id, 'units', parseFloat(event.target.value) || 0)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </td>
                <td className="px-3 py-2 w-24">
                  <button
                    onClick={() => removeCourse(course.id)}
                    disabled={courses.length === 1}
                    className="text-sm text-red-700 disabled:text-gray-400"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {results && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
            <p className="text-xs font-semibold uppercase text-red-700">Estimated GPA</p>
            <p className="text-3xl font-bold text-red-900">{results.gpa}</p>
          </div>
          <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
            <p className="text-xs font-semibold uppercase text-blue-700">Total Units</p>
            <p className="text-3xl font-bold text-blue-900">{results.totalUnits}</p>
          </div>
          <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-semibold uppercase text-emerald-700">Grade Points</p>
            <p className="text-3xl font-bold text-emerald-900">{results.totalPoints}</p>
          </div>
          <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold uppercase text-amber-700">Academic Standing</p>
            <p className="text-lg font-bold text-amber-900">{results.standing}</p>
          </div>
        </div>
      )}

      <div className="mt-5 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
        <p className="font-semibold text-gray-900">Formula</p>
        <p className="mt-1">GPA = Sum of (Grade Points × Units) / Total Units</p>
      </div>

      <div className="mt-5 rounded-xl bg-gray-100 p-4">
        <h3 className="mb-2 font-semibold text-gray-900">Quick Grade Reference</h3>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 md:grid-cols-4">
          <div>A+ / A = 4.0</div>
          <div>A- = 3.7</div>
          <div>B+ = 3.3</div>
          <div>B = 3.0</div>
          <div>B- = 2.7</div>
          <div>C+ = 2.3</div>
          <div>C = 2.0</div>
          <div>C- = 1.7</div>
          <div>D+ = 1.3</div>
          <div>D = 1.0</div>
          <div>D- = 0.7</div>
          <div>F = 0.0</div>
        </div>
      </div>
    </div>
  );
}
