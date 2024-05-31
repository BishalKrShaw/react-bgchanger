import { useState } from "react"

function App() { 

  const [color, setColor] = useState("blue");

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className="fixed bottom-10 inset-x-0 flex flex-wrap justify-center px-2">
        <div className="bg-white rounded-full p-4 flex flex-wrap justify-center items-center shadow-lg gap-3">
          <button onClick={() => setColor("red")} className="rounded-full bg-red-600 px-4 py-1 text-white">Red</button>
          <button onClick={() => setColor("blue")} className="rounded-full bg-blue-600 px-4 py-1 text-white">Blue</button>
          <button onClick={() => setColor("green")} className="rounded-full bg-green-600 px-4 py-1 text-white">Green</button>
          <button onClick={() => setColor("orange")} className="rounded-full bg-orange-600 px-4 py-1 text-white">Orange</button>
          <button onClick={() => setColor("violet")} className="rounded-full bg-violet-600 px-4 py-1 text-white">Violet</button>
          <button onClick={() => setColor("pink")} className="rounded-full bg-pink-600 px-4 py-1 text-white">Pink</button>
          <button onClick={() => setColor("yellow")} className="rounded-full bg-yellow-500 px-4 py-1 text-white">Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
