
import type { TechnologyType } from "../type";

type StackCardProps = {
  stack: TechnologyType[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};

function StackCard({
  stack,
  onRemove,
  onRemoveAll,
}: StackCardProps) {
  const totalItems = stack.length;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-bold text-slate-800">Your Stack</h2>

      <p className="mt-1 text-[10px] text-slate-400">
        {totalItems} Technology{totalItems !== 1 ? "s" : ""} Selected
      </p>

      <div className="mt-3 space-y-2">
        {stack.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-md border border-slate-200 px-2 py-2"
          >
            <div className="flex items-center gap-2">
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="h-5 w-5"
              />

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-medium text-slate-700">
                  {item.name}
                </span>

                <span className="text-[9px] text-slate-400">
                  {item.category}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="text-slate-400 transition hover:text-red-500"
              aria-label={`Remove ${item.name}`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {totalItems === 0 ? (
        <p className="py-5 text-center text-[10px] text-slate-400">
          No technology selected
        </p>
      ) : null}

      <button
        type="button"
        onClick={onRemoveAll}
        disabled={totalItems === 0}
        className="mt-5 w-full rounded-md border border-red-200 py-2 text-[10px] font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Remove All
      </button>
    </div>
  );
}

export default StackCard;