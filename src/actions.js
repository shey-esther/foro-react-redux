import store from './store'

export const playAction = () => {
  let selectedSong = store.getState().selectedSong
  if (selectedSong == -1 )
     selectedSong = 0

  store.setState({
     selectedSong : selectedSong
  })
}

export const nextAction = () => {

  let selectedSong = store.getState().selectedSong + 1 //es el estado inicial de mi store
  if (selectedSong == store.getState().songs.length )//getstate obtiene el estado actual del store.obtiene y almacena el estado
     selectedSong = 0

  store.setState({//haace una notificacion al render principal de q ha hecho un cambio
     selectedSong : selectedSong 
  })
}

export const stopAction = () => {
  store.setState({
     selectedSong : -1
  })
}