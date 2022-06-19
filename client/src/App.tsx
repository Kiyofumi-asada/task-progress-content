import React from 'react';
import { HotKeys } from 'react-hotkeys';
import Content from './presentation/components/block/content';

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
      <Content />
    </HotKeys>
  );
};

export default App;
