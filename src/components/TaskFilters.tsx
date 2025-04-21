import React from 'react';

interface TaskFiltersProps {
  setSelectedCategory: (category: 'all' | 'personal' | 'work') => void
  selectedCategory: string
}

const TaskFilters: React.FC<TaskFiltersProps> = ({ setSelectedCategory, selectedCategory }) => {


  return (
    <div className="flex justify-center gap-4 my-4 mt-8">
      <select value={selectedCategory} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value as 'all' | 'personal' | 'work')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-12">
        <option value="all">all</option>
        <option value="personal">personal</option>
        <option value="work">work</option>
      </select>
    </div>
  );
};

export default TaskFilters;