
import logo from "../assets/img/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1070px] px-6 py-10 md:px-0">

        {/* Footer main content */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

          {/* Logo and description */}
          <div className="max-w-85">
            <img
              src={logo}
              alt="Dev Stack logo"
              className="h-7 w-auto"
            />

            <p className="mt-3 text-[12px] leading-5 text-gray-400">
              Discover useful tools, technologies, and resources for creating
              modern applications.
            </p>

            {/* Social media */}
            <div className="mt-5 flex gap-5 text-[12px] font-medium text-gray-600">
              <a href="#" className="transition hover:text-gray-900">
                GitHub
              </a>

              <a href="#" className="transition hover:text-gray-900">
                Twitter
              </a>

              <a href="#" className="transition hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Footer navigation */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:gap-20">

            {/* Product links */}
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-gray-800">
                Product
              </h3>

              <nav className="mt-4 flex flex-col gap-2.5">
                <a
                  href="#"
                  className="text-[12px] text-gray-400 hover:text-gray-700"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-[12px] text-gray-400 hover:text-gray-700"
                >
                  Technologies
                </a>

                <a
                  href="#"
                  className="text-[12px] text-gray-400 hover:text-gray-700"
                >
                  Projects
                </a>
              </nav>
            </div>

            {/* Company links */}
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-gray-800">
                Company
              </h3>

              <nav className="mt-4 flex flex-col gap-2.5">
                <a
                  href="#"
                  className="text-[12px] text-gray-400 hover:text-gray-700"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-[12px] text-gray-400 hover:text-gray-700"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="text-[12px] text-gray-400 hover:text-gray-700"
                >
                  Careers
                </a>
              </nav>
            </div>

            {/* Legal links */}
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-gray-800">
                Legal
              </h3>

              <nav className="mt-4 flex flex-col gap-2.5">
                <a
                  href="#"
                  className="text-[12px] text-gray-400 hover:text-gray-700"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="text-[12px] text-gray-400 hover:text-gray-700"
                >
                  Terms of Service
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright area */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5 text-[11px] text-gray-400">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
