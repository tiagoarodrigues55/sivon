import React from 'react';

import Actions from '../../../components/actions'
import Chat from '../../../components/chat'
import Docs from '../../../components/docs'
import News from '../../../components/news'
import SpeechesList from '../../../components/speechesList'
import Video from '../../../components/video'
import Votes from '../../../components/votes'
// import Teste from '../Testes.js'
import {Grid} from './Layout'


function Layout() {
  return (
    <Grid>
      <Video moderator />
      <SpeechesList moderator />
      <News moderator />
      <Chat moderator />
      <Actions moderator/>
      <Votes moderator />
      <Docs moderator />
    </Grid>
  );
}

export default Layout;
