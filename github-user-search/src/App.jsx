// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar';
import './App.css'

function App() {
  const handleSearch = (username) => {
    console.log("Searching for:", username)
  }

  return (
    <>
      <div>
        <h1>GitHub User Search</h1>
        <SearchBar onSearch={handleSearch} />
        <p>Start searching for GitHub users!</p>
      </div>
    </>
  )
}

export default App
