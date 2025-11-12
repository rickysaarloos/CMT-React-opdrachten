import './App.css'

function App() {
  return (
    <>
          <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <nav>
        <div className="flex justify-center bg-indigo-600 dark:bg-indigo-800 items-center">
          <ul className="flex justify-end p-4 space-x-6">
            <li><a href="#" className="text-white hover:text-gray-200 dark:hover:text-gray-300">Features</a></li>
            <li><a href="#" className="text-white hover:text-gray-200 dark:hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="text-white hover:text-gray-200 dark:hover:text-gray-300">Contact</a></li>
            <li><a href="#" className="text-white hover:text-gray-200 dark:hover:text-gray-300">About us</a></li>
          </ul>
        </div>
      </nav>

      <div className="flex justify-center items-center">
        <h1 className="text-xl font-semibold text-black dark:text-white">
          Work<span className="text-indigo-600 dark:text-indigo-400">cation</span>
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <img
          className="w-80"
          src="./images/Schermafbeelding 2025-11-10 113838.png"
          alt="workation"
        />
      </div>

      <div className="mt-6 w-80 max-w-md mx-auto text-left">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 max-1">
          You can work from anywhere.
          <span className="text-indigo-600 dark:text-bg-red-500"> Take advantage of it.</span>
        </h2>
      </div>

      <div className="text-left w-80 max-w-md mx-auto">
       <p className="text-gray-600 dark:text-gray-300">
          Workcation helps you find work-friendly rentals in beautiful
          locations so you can enjoy some nice weather even when you’re not
          on vacation.
        </p>
        <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg">
          BOOK YOUR ESCAPE
        </button>
      </div>
      </div>
    </>
  )
}

export default App
