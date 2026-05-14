'use client';

import { useMemo, useState } from 'react';

const getGradeStatus = (requiredGrade: number | null) => {
  if (requiredGrade === null) return 'No Data';
  if (requiredGrade >= 90) return 'Excellent';
  if (requiredGrade >= 70) return 'Passing';
  return 'At Risk';
};

export default function MidtermGradeCalculator() {
  const [currentGrade, setCurrentGrade] = useState<number>(85);
  const [desiredGrade, setDesiredGrade] = useState<number>(90);
  const [midtermWeight, setMidtermWeight] = useState<number>(30);
  const [otherWeight, setOtherWeight] = useState<number>(70);
  const [extraCredit, setExtraCredit] = useState<number>(0);
  const [bonusPoints, setBonusPoints] = useState<number>(0);

  const remainingWeight = useMemo(() => otherWeight / 100, [otherWeight]);
  const midtermWeightDecimal = useMemo(() => midtermWeight / 100, [midtermWeight]);

  const requiredMidtermGrade = useMemo(() => {
    if (midtermWeightDecimal === 0) return null;
    const adjustedDesired = Math.min(100, desiredGrade + extraCredit + bonusPoints);
    const required = ((adjustedDesired / 100 - (currentGrade / 100) * remainingWeight) / midtermWeightDecimal) * 100;
    return Math.max(0, Math.min(100, Number(required.toFixed(1))));
  }, [currentGrade, desiredGrade, midtermWeightDecimal, remainingWeight, extraCredit, bonusPoints]);

  const currentStanding = useMemo(() => {
    return currentGrade;
  }, [currentGrade]);

  const gradeStatus = useMemo(() => getGradeStatus(requiredMidtermGrade), [requiredMidtermGrade]);

  const handleInputChange = (setter: (value: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setter(Math.max(0, Math.min(100, value)));
  };

  const resetCalculator = () => {
    setCurrentGrade(85);
    setDesiredGrade(90);
    setMidtermWeight(30);
    setOtherWeight(70);
    setExtraCredit(0);
    setBonusPoints(0);
  };

  const printCalculator = () => {
    window.print();
  };

  const downloadPDF = () => {
    // For simplicity, use print to PDF
    alert('Please use your browser\'s print to PDF feature (Ctrl+P or Cmd+P) to save as PDF.');
  };

  const isValid = midtermWeight + otherWeight === 100;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Midterm Grade Calculator</h2>
        <p className="text-gray-600">Calculate the grade you need on your midterm exam to achieve your desired final grade.</p>
      </div>

      {!isValid && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
          <p className="text-yellow-800">Warning: Midterm Weight + Other Assignment Weight should equal 100% for accurate calculations.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Grade (%)</label>
            <input
              type="number"
              value={currentGrade}
              onChange={handleInputChange(setCurrentGrade)}
              min="0"
              max="100"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Desired Final Grade (%)</label>
            <input
              type="number"
              value={desiredGrade}
              onChange={handleInputChange(setDesiredGrade)}
              min="0"
              max="100"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Midterm Weight (%)</label>
            <input
              type="number"
              value={midtermWeight}
              onChange={handleInputChange(setMidtermWeight)}
              min="0"
              max="100"
              step="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Other Assignment Weight (%)</label>
            <input
              type="number"
              value={otherWeight}
              onChange={handleInputChange(setOtherWeight)}
              min="0"
              max="100"
              step="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Extra Credit (%)</label>
            <input
              type="number"
              value={extraCredit}
              onChange={handleInputChange(setExtraCredit)}
              min="0"
              max="10"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bonus Points (%)</label>
            <input
              type="number"
              value={bonusPoints}
              onChange={handleInputChange(setBonusPoints)}
              min="0"
              max="10"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Results</h3>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Required Midterm Grade:</span>
                <span className="ml-2 text-xl font-bold text-blue-600">
                  {requiredMidtermGrade !== null ? `${requiredMidtermGrade}%` : 'N/A'}
                </span>
              </div>
              <div>
                <span className="font-medium">Current Standing:</span>
                <span className="ml-2">{currentStanding}%</span>
              </div>
              <div>
                <span className="font-medium">Grade Status:</span>
                <span className={`ml-2 px-2 py-1 rounded text-sm font-medium ${
                  gradeStatus === 'Excellent' ? 'bg-green-100 text-green-800' :
                  gradeStatus === 'Passing' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {gradeStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={resetCalculator}
              className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={printCalculator}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Print
            </button>
            <button
              onClick={downloadPDF}
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}