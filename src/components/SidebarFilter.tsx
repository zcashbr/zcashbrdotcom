interface SidebarFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

export default function SidebarFilter({ categories, activeFilter, onFilterChange }: SidebarFilterProps) {
  return (
    <aside className="w-full md:w-56 shrink-0">
      <h3 className="text-xs font-bold text-zinc-500 mb-6 tracking-widest uppercase">
        Filtrar por:
      </h3>
      
      <ul className="space-y-4 text-sm font-semibold text-zinc-400">
        <li>
          <button 
            onClick={() => onFilterChange('Todos')}
            className={`text-left w-full uppercase transition-colors hover:text-brand ${
              activeFilter === 'Todos' ? 'text-brand underline decoration-2 underline-offset-4' : ''
            }`}
          >
            Todos
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button 
              onClick={() => onFilterChange(category)}
              className={`text-left w-full uppercase transition-colors hover:text-brand ${
                activeFilter === category ? 'text-brand underline decoration-2 underline-offset-4' : ''
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}