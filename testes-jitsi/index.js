const domain = 'meet.jit.si';
const options = {
    roomName: 'teste-2003',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet'),
    configOverwrite: { startWithAudioMuted: false },
    interfaceConfigOverwrite: { filmStripOnly: false },
    userInfo: {
      email: 'email@jitsiexamplemail.com',
      displayName: 'John Doe'
  }
};
const api = new JitsiMeetExternalAPI(domain, options);
api.executeCommand('displayName', 'New Nickname');
api.executeCommand('subject', 'New');
function ligaAudio(){
  // api.executeCommand('toggleAudio');
  // api.executeCommand('toggleVideo');
  // api.executeCommand('toggleFilmStrip');
  api.executeCommand('avatarUrl', 'https://avatars0.githubusercontent.com/u/3671647');
}
function ligaChat(){
  api.executeCommand('toggleChat');

}
function toque(){
  api.executeCommand('sendTones', {
    tones: '12345#', // The dial pad touch tones to play. For example, '12345#'.
    duration: 200, // Optional. The number of milliseconds each tone should play. The default is 200.
    pause: 200 // Optional. The number of milliseconds between each tone. The default is 200.
});
}