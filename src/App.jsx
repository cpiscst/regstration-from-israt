




function App() {
  

  return (
    <>
    <div className="bg-green-700 h-50 w-80 flex justify-center items-center">
      <div className="bg-red-900 h-25 w-25 rounded-full">

      </div>
    </div>
    <div className="h-90 w-2 bg-amber-900">

    </div>
     <div className="bg-amber-500 h-50 w-50 rounded-full flex justify-center items-center">
     <div className="bg-amber-200 h-25 w-25 rounded-full  ">

     </div>
     </div>
     <div className="bg-blue-950  h-100 w-100 flex justify-around items-center">
     <div className="bg-blue-400 h-50 w-50 rounded-xl">

     </div>
     </div>

    <div className="my-20 pl-5 border-2 p-5">

      <h1 className="text-6xl font-bold">
        Registion From 
      </h1>
    <div className="my-2">
      <p className="text-xl font-bold">Your Name: </p>
      <input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" placeholder="You Name"/>
    </div >
    <div className="my-2">
    <p className="text-xl font-bold">Roll number: </p> 
    <input type="text" className="border-2 rounded-md h-[40px]  w-[200px] font-bold text-gray-600 text-xl p-3"
     placeholder="Roll number"/>
    </div>
   
    <div className=" my-2">
      <p className="text-xl font-bold">Email address:</p>
    <input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" 
    placeholder="Email address"/> 
    </div>
    <div className="my-2">
      <p className="text-xl font-bold">Mobile number:</p>
    <input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" 
    placeholder="Mobile number"/> 
    </div>
    <div className="my-2">
      <p className="text-xl font-bold">Present address:</p>
    <input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" 
    placeholder="Present address"/> 
    </div>
    <div className="my-2">
      <p className="text-xl font-bold">Date of birth:</p>
    <input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" 
    placeholder="Date of birth"/> 
    </div>
    <div className="">
      <p className="text-xl font-bold">comments:</p>
    <input type="text" className="border-2 rounded-md h-[200px] w-[400px] font-bold text-gray-600 text-xl p-3" 
    placeholder="comments"/> 
    </div>
    
    </div>
    
    
    </>
  )
}

export default App
