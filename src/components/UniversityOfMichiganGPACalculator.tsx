'use client';

import { useState } from 'react';

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
}

export default function UniversityOfMichiganGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Engineering 100', grade: 'A', credits: 3 },
    { id: '2', name: 'Chemistry 210', grade: 'A-', credits: 4 },
  ]);

  const [newCourseName, setNewCourseName] = useState('');
  const [newCourseGrade, setNewCourseGrade] = useState('A');
  const [newCourseCredits, setNewCourseCredits] = useState(3);

  const gradePoints: { [key: string]: number } = {
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
    F: 0.0,
  };

  const calculateGPA = () => {
    if (courses.length === 0) return 0;
    const totalPoints = courses.reduce(
      (sum, course) => sum + (gradePoints[course.grade] || 0) * course.credits,
      0
    );
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  };

  const gpa = calculateGPA();

  const addCourse = () => {
    if (newCourseName.trim()) {
      setCourses([
        ...courses,
        {
          id: Date.now().toString(),
          name: newCourseName,
          grade: newCourseGrade,
          credits: newCourseCredits,
        },
      ]);
      setNewCourseName('');
      setNewCourseGrade('A');
      setNewCourseCredits(3);
    }
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id: string, field: string, value: any) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Courses</h2>
        <div className="space-y-4 mb-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <input
                type="text"
                value={course.name}
                onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                placeholder="Course name"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={course.grade}
                onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.keys(gradePoints).map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                max="6"
                step="1"
                value={course.credits}
                onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value))}
                placeholder="Credits"
                className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => removeCourse(course.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Add Course</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={newCourseName}
              onChange={(e) => setNewCourseName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addCourse()}
              placeholder="Course name"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
            />
            <select
              value={newCourseGrade}
              onChange={(e) => setNewCourseGrade(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              {Object.keys(gradePoints).map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              max="6"
              value={newCourseCredits}
              onChange={(e) => setNewCourseCredits(parseInt(e.target.value))}
              placeholder="Credits"
              className="w-20 px-3 py-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={addCourse}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
            >
              Add
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
          <div className="text-center">
            <p className="text-sm font-medium opacity-90">Your University of Michigan GPA</p>
            <p className="text-5xl font-bold mt-2">{gpa.toFixed(2)}</p>
            <p className="text-sm opacity-90 mt-2">Based on {courses.reduce((sum, c) => sum + c.credits, 0)} total credits</p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">GPA Performance Scale</h3>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 border-l-4 border-green-500">
            <p className="font-medium">3.8+</p>
            <p className="text-sm text-gray-700">Excellent – Competitive for graduate programs</p>
          </div>
          <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
            <p className="font-medium">3.5–3.7</p>
            <p className="text-sm text-gray-700">Very Good – Strong academic standing</p>
          </div>
          <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
            <p className="font-medium">3.0–3.4</p>
            <p className="text-sm text-gray-700">Good – Solid student performance</p>
          </div>
          <div className="p-3 bg-red-50 border-l-4 border-red-500">
            <p className="font-medium">Below 3.0</p>
            <p className="text-sm text-gray-700">Academic probation threshold</p>
          </div>
        </div>
      </div>
    </div>
  );
}
