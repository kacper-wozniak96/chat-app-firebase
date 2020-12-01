import './App.scss';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { useViewport } from './contexts/context';

function App() {
  const { windowWidth, breakpoint } = useViewport();

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        {windowWidth < breakpoint ? null : <Chat />}
      </div>
    </div>
  );
}

export default App;
