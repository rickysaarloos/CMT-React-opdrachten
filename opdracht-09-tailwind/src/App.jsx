import './App.css'

function App() {

  return (
    <>
    <div className="flex justify-center items-center">
   <h1 className="text-xl font-semibold text-black" >
    Work<span className="text-indigo-600">cation</span></h1>
    </div>
<div className="flex justify-center items-center">
      <img className="w-80 " src="./images/Schermafbeelding 2025-11-10 113838.png" alt="workation" />
</div>

<div className="mt-6 w-80 max-w-md mx-auto text-left">
            <h2 className="text-3xl font-bold text-gray-900 max-1">
              You can work from anywhere.{" "}
              <span className="text-indigo-600">Take advantage of it.</span>
            </h2>
</div>

<div className="text-left w-80 max-w-md mx-auto">
      <p className=" text-gray-600  ">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you’re not
              on vacation.
      </p>
            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg">
              BOOK YOUR ESCAPE
            </button>
</div>  
    </>

    
  )
}

export default App
