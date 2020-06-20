import React from 'react';

import Actions from './components/actions'
import Chat from './components/chat'
import Docs from './components/docs'
import News from './components/news'
import SpeechesList from './components/speechesList'
import Video from './components/video'
import Votes from './components/votes'

function App() {
  return (
    <div className="App">
      <Actions/>
      <Chat/>
      <Docs/>
      <News/>
      <SpeechesList/>
      <Video/>
      <Votes/>
    </div>
  );
}

export default App;
