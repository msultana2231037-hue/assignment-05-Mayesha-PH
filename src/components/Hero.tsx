
import heroImage from "../assets/img/banner-stack.png";

function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col items-center px-5 py-12 md:flex-row ">

        <div className="w-full md:w-1/2">
          <h1 className="text-center text-4xl font-extrabold leading-tight text-[#0f172a] sm:text-5xl md:text-left lg:text-[44px]">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className=" mt-5  text-center text-sm leading-6 text-[#64748b] md:text-left md:text-[14px]">
            Discover frontend, backend, database, and development tools,
            compare your options, and create a stack that matches your next
            project.
          </p>

        
          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            <button
              type="button"
              className="rounded-md bg-linear-to-r from-orange-500 to-pink-500 px-4 py-2.5 text-[12px] font-medium text-white transition hover:shadow-md"
            >
              Explore Technologies
            </button>

            <button
              type="button"
              className="rounded-md border border-gray-200 bg-white px-8 py-2.5 text-[12px] font-medium text-[#475569] transition hover:border-pink-300 hover:text-pink-500"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-10 flex w-full items-center justify-center md:mt-0 md:w-1/2">
          <img
            src={heroImage}
            alt="Development stack illustration"
            className="w-75  md:w-82.5 "
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;