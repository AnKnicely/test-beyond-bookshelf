
import { useState } from 'react';
export default function ProgressModal({ isOpen, onClose, activeBookId, initialPercentage, onUpdate }) {
  const [newPercentage, setNewPercentage] = useState(initialPercentage);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const updateProgress = () => {
    const percent = parseInt(newPercentage);
    if (isNaN(percent) || percent < 0 || percent > 100) {
      setError('Please enter a valid percentage between 0 and 100.');
      return; 
    }
    setError('');
    onUpdate(activeBookId, percent);
    onClose();
  };

  return (
    <div 
      id="progress-modal" 
      className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm m-4 transform scale-100 transition-transform duration-300" 
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-4">Update Reading Percentage</h3>
        <p className="text-sm text-gray-600 mb-4">Enter the new total percentage of the book you have completed.</p>
          
        <label htmlFor="percentage-input" className="block text-sm font-medium text-gray-700 mb-2">New Percentage (0 - 100)</label>
        <input 
          type="number" 
          id="percentage-input" 
          name="percentage-input" 
          min="0" 
          max="100" 
          step="1" 
          value={newPercentage}
          onChange={(e) => setNewPercentage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-orange focus:border-primary-orange text-lg mb-4"
        />

        <div id="error-message" className={`text-red-500 text-sm mb-4 ${error ? 'block' : 'hidden'}`}>{error}</div>

        <div className="flex justify-end space-x-3">
          <button 
            onClick={onClose} 
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-150"
          >
            Cancel
          </button>
          <button 
            onClick={updateProgress} 
            className="px-4 py-2 text-white bg-primary-orange rounded-lg hover:bg-dark-brown font-semibold transition duration-150"
          >
            Submit Update
          </button>
        </div>
      </div>
    </div>
  );
}