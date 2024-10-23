import HomeIcon from '@mui/icons-material/Home';
import { useState, useEffect } from 'react';

export const SideBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const isLightTheme = theme === 'light';

  return (
    <aside className={`dark:bg-[#131212] bg-slate-100 w-20 md:w-20 lg:w-56  p-5 rounded-2xl`}>
      <h2 className="text-sm hidden lg:inline-block text-center font-semibold text-white">NOMBRE DE LA APP</h2>
      <section>
        <ul className="mt-16">
          <li className="hover:cursor-pointer flex items-center mb-10">
            <a className="flex items-center text-white bg-blue-800 w-10 h-10 rounded-md justify-center">
              <HomeIcon htmlColor={isLightTheme ? "black" : "white"} />
            </a>
            <span className="ml-2 text-sm hidden lg:inline-block text-white">Dashboard</span>
          </li>

          <li className="hover:cursor-pointer flex items-center mb-10">
            <a className="flex items-center text-white bg-blue-800 w-10 h-10 rounded-md justify-center">
              <HomeIcon htmlColor={isLightTheme ? "black" : "white"} />
            </a>
            <span className="ml-2 text-sm hidden lg:inline-block text-white">Certifications</span>
          </li>

          <li className="hover:cursor-pointer flex items-center mb-10">
            <a className="flex items-center text-white bg-blue-800 w-10 h-10 rounded-md justify-center">
              <HomeIcon htmlColor={isLightTheme ? "black" : "white"} />
            </a>
            <span className="ml-2 text-sm hidden lg:inline-block text-white">Events</span>
          </li>

          <li className="hover:cursor-pointer flex items-center mb-10">
            <a className="flex items-center text-white bg-blue-800 w-10 h-10 rounded-md justify-center">
              <HomeIcon htmlColor={isLightTheme ? "black" : "white"} />
            </a>
            <span className="ml-2 text-sm hidden lg:inline-block text-white">Reputation</span>
          </li>

          <li className="hover:cursor-pointer flex items-center mb-10">
            <a className="flex items-center text-white bg-blue-800 w-10 h-10 rounded-md justify-center">
              <HomeIcon htmlColor={isLightTheme ? "black" : "white"} />
            </a>
            <span className="ml-2 text-sm hidden lg:inline-block text-white">Dashboard</span>
          </li>
        </ul>
      </section>
    </aside>
  );
};
