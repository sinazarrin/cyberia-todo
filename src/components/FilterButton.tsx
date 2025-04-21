import { filterButtons } from '../constants'

interface IProps {
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    filter: 'all' | 'active' | 'completed'
}

const FilterButton = ({ setFilter, filter }: IProps) => {

    return (
        // Buttons to switch between task filters: all, active, completed
        <div className="flex lg:flex-col flex-row justify-around lg:gap-6 gap-2 bg-white shadow-md rounded-lg p-3 h-full">
            {filterButtons.map((item) => (
                <div
                    key={item.id}
                    onClick={() => setFilter(item.state)}
                    className={`flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 active:bg-gray-300 transition-all duration-200 p-3 rounded ${filter === item.state && "bg-gray-200 hover:bg-gray-300"
                        }`}
                >
                    <button
                        className={`p-3 rounded-full ${item.state === "completed"
                                ? "bg-green-100"
                                : item.state === "all"
                                    ? "bg-red-100"
                                    : "bg-orange-100"
                            }`}
                    >
                        {item.icon}
                    </button>
                    <p className="text-sm">{item.state}</p>
                </div>
            ))}
        </div>
    );

}

export default FilterButton