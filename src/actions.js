import store from './store'

export const addComent = (user,moreComent) => {
  let firstList = store.getState().date;
  const actualList =firstList.concat({
    id : firstList.length,
    name : user,
    coment : moreComent
  })
  store.setState({
    date : actualList,
     selectedSong : -1
  })
}

export const deleteComent = (id) => {
  let lists = store.getState().list;
  lists = lists.filter(item => item.id == id);
  store.setState({
    list: lists
  });
}
