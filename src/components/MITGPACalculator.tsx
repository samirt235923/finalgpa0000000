'use client';

import { useMemo, useState } from 'react';

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
}

const mitGradePoints: Record<string, number> = {
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

export default function MITGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([INITIAL_COURSE]);

  const results = useMemo(() => {
    if (courses.length === 0) return null;

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const gradeValue = mitGradePoints[course.grade] ?? 0;
      const creds = Math.max(0, course.credits);
      totalPoints += gradeValue * creds;
      totalCredits += creds;
    });

    if (totalCredits === 0) return null;

    const gpa = totalPoints / totalCredits;
    let standing = '';

    if (gpa >= 4.0) standing = 'Perfect GPA - Exceptional';
    else if (gpa >= 3.8) standing = 'Excellent standing';
    else if (gpa >= 3.5) standing = 'Very strong standing';
    else if (gpa >= 3.0) standing = 'Good standing';
    else if (gpa >= 2.0) standing = 'Satisfactory standing';
    else standing = 'Needs improvement';

    return {
      gpa: gpa.toFixed(2),
      totalCredits,
      totalPoints: totalPoints.toFixed(2),
      standing,
    };
  }, [courses]);

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

  const resetCourses = () => {
    setCourses([INITIAL_COURSE]);
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) => (course.id === id ? { ...course, [field]: value } : course))
    );
  };

  return (
    <div className="rounded-2xl border-2 border-red-200 bg-white p-4 shadow-sm md:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">MIT GPA Calculator 2026</h2>
          <p className="mt-1 text-sm text-gray-600">
            Add your courses, choose letter grades, enter credits, and estimate your GPA instantly.
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
        This tool estimates GPA by multiplying each course&apos;s grade points by its credit value, then dividing the total points by total credits attempted.
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="px-3 py-2">Course</th>
              <th className="px-3 py-2">Grade</th>
              <th className="px-3 py-2">Credits</th>
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
                    {Object.entries(mitGradePoints).map(([grade, points]) => (
                      <option key={grade} value={grade}>
                        {grade} ({points})
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2 w-24">
                  <input
                    type="number"
                    value={course.credits}
                    onChange={(event) => updateCourse(course.id, 'credits', parseInt(event.target.value) || 0)}
                    min="0"
                    max="12"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </td>
                <td className="px-3 py-2">
                  <button
                    onClick={() => removeCourse(course.id)}
                    disabled={courses.length === 1}
                    className="rounded-lg bg-red-100 px-3 py-1 text-sm font-semibold text-red-700 transition hover:bg-red-200 disabled:opacity-50"
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
        <div className="mt-6 rounded-xl bg-gradient-to-r from-red-600 to-red-800 p-6 text-center text-white shadow-lg">
          <div className="mb-4">
            <div className="text-red-100 text-lg mb-2">Your MIT GPA</div>
            <div className="text-4xl font-bold mb-2">{results.gpa}</div>
            <div className="text-xl font-semibold">{results.standing}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-red-200">Total Credits</div>
              <div className="font-bold">{results.totalCredits}</div>
            </div>
            <div>
              <div className="text-red-200">Total Points</div>
              <div className="font-bold">{results.totalPoints}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}