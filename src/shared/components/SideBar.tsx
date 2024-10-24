import { useLocation, NavLink } from "react-router-dom";

export const SideBar = () => {

  const location = useLocation();

  console.log(location.pathname)

  return (
    <aside
      className={`dark:bg-[#131212] bg-slate-100 w-20 md:w-20 lg:w-56  p-5 rounded-2xl`}
    >
      <div className="flex gap-4">
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5" cy="15.5" r="15.5" fill="#EDF0F4" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.3136 15.2527L23.7651 14.7025L15.5933 6.45898L7.41866 14.7025L6.7168 15.4103L6.97041 15.6304C7.25647 15.8712 7.55137 16.1002 7.85512 16.3143C11.0872 18.6102 15.095 19.3031 18.796 18.3901C20.3059 18.0213 21.7391 17.3879 23.0337 16.5195C23.3551 16.3054 23.6677 16.0735 23.9744 15.8296C24.1425 15.6928 24.3077 15.553 24.4699 15.4103L24.3136 15.2527ZM20.0701 19.889L15.5935 24.4033L13.3729 22.164C15.7675 22.0213 18.0795 21.2362 20.0701 19.889ZM9.64222 15.0327C12.5028 15.0208 15.3102 15.8148 17.7491 17.3255C19.3091 17.046 20.8013 16.4602 22.1372 15.6037C17.9437 13.1711 13.3698 13.3941 9.64222 15.0327Z"
            fill="#2B71FF"
          />
        </svg>

        <h2 className="text-sm hidden lg:inline-block text-center font-semibold text-white pt-1">
          GoodActions
        </h2>
      </div>
      <section>
        <ul className="mt-20">
          <li className={`" hover:cursor-pointer flex items-center mb-8 " ${location.pathname === "/dashboard" ? " mb-8 border-l border-[#BFED54]" : ""}`}>
           <NavLink  to={"/dashboard"} className="flex items-center" >
           <a className="flex items-center text-white  w-10 h-10 rounded-md justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 8.90039V16.9004C19.5 17.696 19.1839 18.4591 18.6213 19.0217C18.0587 19.5843 17.2956 19.9004 16.5 19.9004H7.5C6.70435 19.9004 5.94129 19.5843 5.37868 19.0217C4.81607 18.4591 4.5 17.696 4.5 16.9004V8.90039"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 9.9003L19.5 8.9003L13.5 4.9003L12.55 4.2703C12.3867 4.16278 12.1955 4.10547 12 4.10547C11.8045 4.10547 11.6133 4.16278 11.45 4.2703L10.5 4.9003L4.5 8.9003L3 9.9003"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
           </NavLink>
            <span className="ml-2 text-sm hidden lg:inline-block text-white">
              Dashboard
            </span>
          </li>

          <li className={`" hover:cursor-pointer flex items-center mb-8 " ${location.pathname === "/challenges" ? " mb-8 border-l border-[#BFED54]" : ""}`}>
            <NavLink className="flex items-center "  to={"/challenges"}>
            <a  className="flex items-center text-white  w-10 h-10 rounded-md justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4004 7.5C10.4004 5.84315 9.05724 4.5 7.40039 4.5C5.74354 4.5 4.40039 5.84315 4.40039 7.5C4.40039 9.15685 5.74354 10.5 7.40039 10.5C9.05724 10.5 10.4004 9.15685 10.4004 7.5Z"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.90039 13.5H5.90039C5.07196 13.5 4.40039 14.1716 4.40039 15V18C4.40039 18.8284 5.07196 19.5 5.90039 19.5H8.90039C9.72882 19.5 10.4004 18.8284 10.4004 18V15C10.4004 14.1716 9.72882 13.5 8.90039 13.5Z"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.4004 16.5C19.4004 14.8431 18.0572 13.5 16.4004 13.5C14.7435 13.5 13.4004 14.8431 13.4004 16.5C13.4004 18.1569 14.7435 19.5 16.4004 19.5C18.0572 19.5 19.4004 18.1569 19.4004 16.5Z"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5004 4.63965L13.4004 9.99965H19.6004L16.5004 4.63965Z"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <span className="ml-2 text-sm hidden lg:inline-block text-white">
              Challenges
            </span>
            </NavLink>
          </li>

          <li className={`" hover:cursor-pointer flex items-center mb-8 " ${location.pathname === "/scholarships" ? " border-l border-[#BFED54]" : ""}`}>
           <NavLink to={"/scholarships"} className="flex items-center">
           <a className="flex items-center text-white  w-10 h-10 rounded-md justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6491 10.9401L18.8691 9.16009V6.63009C18.8691 6.23226 18.7111 5.85073 18.4298 5.56943C18.1485 5.28812 17.7669 5.13009 17.3691 5.13009H14.8391L13.0591 3.35009C12.9205 3.2098 12.7555 3.09841 12.5735 3.02239C12.3916 2.94637 12.1963 2.90723 11.9991 2.90723C11.8019 2.90723 11.6067 2.94637 11.4247 3.02239C11.2428 3.09841 11.0777 3.2098 10.9391 3.35009L9.15911 5.13009H6.62911C6.23129 5.13009 5.84976 5.28812 5.56845 5.56943C5.28715 5.85073 5.12911 6.23226 5.12911 6.63009V9.16009L3.34911 10.9401C3.20882 11.0787 3.09744 11.2437 3.02142 11.4257C2.9454 11.6076 2.90625 11.8029 2.90625 12.0001C2.90625 12.1973 2.9454 12.3925 3.02142 12.5745C3.09744 12.7564 3.20882 12.9215 3.34911 13.0601L5.12911 14.8401V17.3701C5.12911 17.7679 5.28715 18.1494 5.56845 18.4307C5.84976 18.7121 6.23129 18.8701 6.62911 18.8701H9.15911L10.9391 20.6501C11.0777 20.7904 11.2428 20.9018 11.4247 20.9778C11.6067 21.0538 11.8019 21.0929 11.9991 21.0929C12.1963 21.0929 12.3916 21.0538 12.5735 20.9778C12.7555 20.9018 12.9205 20.7904 13.0591 20.6501L14.8391 18.8701H17.3691C17.7669 18.8701 18.1485 18.7121 18.4298 18.4307C18.7111 18.1494 18.8691 17.7679 18.8691 17.3701V14.8401L20.6491 13.0601C20.7894 12.9215 20.9008 12.7564 20.9768 12.5745C21.0528 12.3925 21.092 12.1973 21.092 12.0001C21.092 11.8029 21.0528 11.6076 20.9768 11.4257C20.9008 11.2437 20.7894 11.0787 20.6491 10.9401Z"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.41016 12.2203L10.6602 14.4703L15.5902 9.53027"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <span className="ml-2 text-sm hidden lg:inline-block text-white">
              Scholarships
            </span>
           </NavLink>
          </li>

          <li className={`" hover:cursor-pointer flex items-center mb-8 " ${location.pathname === "/profile" ? " mb-8 border-l border-[#BFED54]" : ""}`}>
            <NavLink to={"/profile"} className="flex items-center">
            <a className="flex items-center text-white  w-10 h-10 rounded-md justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9995 12.62C13.5514 12.62 14.8095 11.3619 14.8095 9.81C14.8095 8.25808 13.5514 7 11.9995 7C10.4475 7 9.18945 8.25808 9.18945 9.81C9.18945 11.3619 10.4475 12.62 11.9995 12.62Z"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 20.43C5.52505 18.9845 6.48235 17.7356 7.74187 16.8531C9.00139 15.9705 10.5021 15.4971 12.04 15.4971C13.5779 15.4971 15.0786 15.9705 16.3381 16.8531C17.5976 17.7356 18.555 18.9845 19.08 20.43"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <span className="ml-2 text-sm hidden lg:inline-block text-white">
              My Profile
            </span>
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
};
