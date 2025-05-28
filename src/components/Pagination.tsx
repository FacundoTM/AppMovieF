function Pagination({ pagina }: { pagina: number }) {
  const url = `${import.meta.env.VITE_URL || "http://localhost:5173/"}`;

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          {pagina <= 1 ? (
            <></>
          ) : (
            <li>
              <a
                href={`${url}${pagina + -1}`}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Anterior
              </a>
            </li>
          )}
          <li>
            <a
              href={`${url}${pagina}`}
              className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white "
            >
              {pagina}
            </a>
          </li>
          {pagina > 95 ? (
            <></>
          ) : (
            <>
              <li>
                <a
                  href={`${url}${pagina + 1}`}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {pagina + 1}
                </a>
              </li>
              <li>
                <a
                  href={`${url}${pagina + 2}`}
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {pagina + 2}
                </a>
              </li>
              <li>
                <a
                  href={`${url}${pagina + 3}`}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {pagina + 3}
                </a>
              </li>
              <li>
                <a
                  href={`${url}${pagina + 4}`}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {pagina + 4}
                </a>
              </li>
            </>
          )}
          {pagina >= 100 ? (
            <></>
          ) : (
            <li>
              <a
                href={`${url}${pagina + 1}`}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Siguiente
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
