
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStackCard from "./YourStackCard";
import type { TechnologyType } from "../type";

function Technology() {
  const [technologyList, setTechnologyList] = useState<TechnologyType[]>([]);
  const [selectedStack, setSelectedStack] = useState<TechnologyType[]>([]);

  // Load technology data
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/msultana2231037-hue/assignment-05-Mayesha-PH/refs/heads/main/tech.json"
        );

        const technologies: TechnologyType[] = await response.json();

        setTechnologyList(technologies);
      } catch (error) {
        console.error("Unable to load technology data:", error);
        toast.error("Could not load technologies!");
      }
    };

    loadTechnologies();
  }, []);

  // Add a technology to the stack
  const addTechnology = (technology: TechnologyType) => {
    const exists = selectedStack.some(
      (selected) => selected.id === technology.id
    );

    if (exists) {
      toast.warning(`${technology.name} is already added!`);
      return;
    }

    setSelectedStack((currentStack) => [...currentStack, technology]);

    toast.success(`${technology.name} added successfully!`);
  };

  // Remove a single technology
  const removeTechnology = (technologyId: number) => {
    const removedItem = selectedStack.find(
      (technology) => technology.id === technologyId
    );

    setSelectedStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== technologyId)
    );

    if (removedItem) {
      toast.info(`${removedItem.name} removed from your stack!`);
    }
  };

  // Clear the complete stack
  const clearStack = () => {
    if (!selectedStack.length) {
      return;
    }

    setSelectedStack([]);

    toast.info("Your complete stack has been cleared!");
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
        {/* Available technologies */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-3">
          {technologyList.map((technology) => {
            const selected = selectedStack.some(
              (item) => item.id === technology.id
            );

            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={selected}
                onAdd={addTechnology}
              />
            );
          })}
        </div>

        {/* Selected technology stack */}
        <div className="lg:col-span-1">
          <YourStackCard
            stack={selectedStack}
            onRemove={removeTechnology}
            onRemoveAll={clearStack}
          />
        </div>
      </div>
    </div>
  );
}

export default Technology;
