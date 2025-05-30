import Search from "./Search";

type NavbarProps = {
  logo: string;
  fetchBusqueda: any;
};

function Navbar({ logo, fetchBusqueda }: NavbarProps) {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl gap-5 flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href={`${import.meta.env.VITE_URL}1`}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://www.svgrepo.com/download/166681/movie.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {logo}
            </span>
          </a>
          <div>
            <Search fetchBusqueda={fetchBusqueda}></Search>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
