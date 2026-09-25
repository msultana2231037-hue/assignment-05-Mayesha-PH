
import type { TechnologyType } from "../type";

type CardProps = {
  technology: TechnologyType;
  isAdded: boolean;
  onAdd: (technology: TechnologyType) => void;
};

function TechnologyCard({ technology, isAdded, onAdd }: CardProps) {
  const buttonText = isAdded ? "Added to Stack" : "Add to Stack";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md">

      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-8 w-8"
        />

        <span className="rounded-full bg-slate-50 px-2 py-1 text-[10px] text-blue-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-3 text-base font-bold text-slate-800">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-15 text-[10px] leading-4 text-slate-500">
        {technology.description}
      </p>

  
      <div className="mt-3 flex items-center justify-between text-[9px]">
        <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
          {technology.category}
        </span>

        <span className="text-slate-500">
          {technology.difficulty}
        </span>

        <span className="text-slate-600">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-3 w-full rounded-md py-2 text-xs font-medium text-white transition ${
          isAdded
            ? "cursor-not-allowed bg-green-600"
            : "bg-[#080d1a] hover:bg-slate-700"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default TechnologyCard;
