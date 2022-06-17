import React from 'react';
import { HotKeys } from 'react-hotkeys';
import Main from './components/main';

const App: React.FC = () => {
  const hotKeyMap = {
    enterSearch: 'command+k',
  };
  const hotKeyHandlers = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    enterSearch: (e: any) => {
      e.preventDefault();
      (document.querySelector('#postChat') as HTMLElement).focus();
      return;
    },
  };
  return (
    <HotKeys keyMap={hotKeyMap} handlers={hotKeyHandlers}>
      <Main />
    </HotKeys>
  );
};

export default App;
