import Sidebar from"./components/Sidebar"
function App() {

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-1 min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Mon texte blq bla</h1>
      </div>
    </div>
  )
}

export default App
