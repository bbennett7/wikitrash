function fetchItems() {
  console.log("Fetching items")
  console.log("c")
  return(dispatch) => {
    dispatch({type: 'LOADING_ITEMS'});
    return fetch('http://localhost:3000/db')
      .then(response => { return response.json() })
      .then(responseJSON => { return responseJSON})
      .then(items => {
        console.log("d")
        dispatch({ type: 'FETCH_ITEMS', payload: items })})
  }
  console.log("e")
}

function addItem(item) {
  fetch('http://localhost:3000/item', {
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
        'Content-Type': 'application/json'
      }})

  return { type: "ADD_ITEM", item }
}

function searchItems(name) {
  fetch('http://localhost:3000/item', {
      method: 'PUT',
      body: JSON.stringify({item: {name: name, searches: true}}),
      headers:{
        'Content-Type': 'application/json'
      }})

  return(dispatch) => { dispatch({ type: 'SEARCH_ITEMS', payload: name })}
}

function resetSearchItem() {
  return(dispatch) => { dispatch({ type: 'RESET_SEARCH_ITEM'})}
}

function upVoteItem(item) {
  fetch('http://localhost:3000/item', {
      method: 'PUT',
      body: JSON.stringify({item: {name: item.name, upvotes: true}}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(console.log("Success"))

  return { type: 'UPVOTE_ITEM', item }
}

function downVoteItem(item) {
  const downVoteItem = item
  fetch('http://localhost:3000/item', {
      method: 'PUT',
      body: JSON.stringify({item: {name: item.name, downvotes: true}}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(console.log("Success"))

  return { type: 'DOWNVOTE_ITEM', downVoteItem }
}

export {
  addItem,
  fetchItems,
  searchItems,
  resetSearchItem,
  upVoteItem,
  downVoteItem
}
