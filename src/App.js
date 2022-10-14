import { useState } from 'react';
import './App.css';
import Bottom from './Components/Bottom';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import TopNav from './Components/TopNav';

function App() {

  const [opened, setOpened] = useState(false)

  return (
    <div className="App">
      <TopNav opened={opened} setOpened={setOpened} />
      <Navbar opened={opened} setOpened={setOpened} />
      <Hero />
      <Bottom />
    </div>
  );
}

export default App;
