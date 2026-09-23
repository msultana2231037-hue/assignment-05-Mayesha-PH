import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import YourStackCard from "./YourStackCard";
import TechnologyCard from "./TechnologyCard";
import type { TechnologyType } from "../type";

function Technology() {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);
  const [stack, setStack] = useState<TechnologyType[]>([]);

  // Fetch technologies
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/tarek-hossain-rifat/assignment-05-PH-Tarek/refs/heads/main/technologies.json",
        );

        const data: TechnologyType[] = await res.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Failed to fetch technologies:", error);
        toast.error("Failed to load technologies!");
      }
    };

    fetchTechnologies();
  }, []);

  // Add technology
  const handleAddToStack = (technology: TechnologyType) => {
    // Prevent duplicate technology
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemoveFromStack = (id: number) => {
    const technologyToRemove = stack.find(
      (technology) => technology.id === id,
    );

    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id),
    );

    if (technologyToRemove) {
      toast.info(`${technologyToRemove.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack!");
  };

  return (
    <div className="mx-auto max-w-6xl px-5 lg:px-0">
      <div className="mb-6">
        <h2 className="text-center text-[36px] font-extrabold leading-tight text-[#0f172a] sm:text-[28px] md:text-left lg:text-[36px]">
          Explore the{" "}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-6 text-[#64748b] md:mx-0 md:text-left md:text-[14px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        {/* Technology Cards - 3/4 */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-3">
          {technologies.map((technology) => {
            const isAdded = stack.some(
              (item) => item.id === technology.id,
            );

            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={isAdded}
                onAdd={handleAddToStack}
              />
            );
          })}
        </div>

        {/* Your Stack - 1/4 */}
        <div className="lg:col-span-1">
          <YourStackCard
            stack={stack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
}

export default Technology;
