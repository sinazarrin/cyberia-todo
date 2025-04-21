import './App.css'
import TaskManager from './components/TaskManager';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">To-Do List Application</h1>
      <TaskManager />
    </div>
  );
};

export default App
