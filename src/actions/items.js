function fetchItems() {
  console.log("Fetching items")
  return(dispatch) => {
    dispatch({type: 'LOADING_ITEMS'});
    return fetch('https://developer-wikitrash.herokuapp.com/db')
      .then(response => { return response.json() })
      .then(responseJSON => { return responseJSON})
      .then(items => {
        dispatch({ type: 'FETCH_ITEMS', payload: items })})
  }
}

// production: fetch('https://developer-wikitrash.herokuapp.com/db')
// development: fetch('http://localhost:3000/db')

function addItem(item) {
  fetch('https://developer-wikitrash.herokuapp.com/item', {
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
        'Content-Type': 'application/json'
      }})

  return { type: "ADD_ITEM", item }
}

// production: fetch('https://developer-wikitrash.herokuapp.com/item', {
// development: fetch('http://localhost:3000/item', {

function searchItems(name) {
  fetch('https://developer-wikitrash.herokuapp.com/item', {
      method: 'PUT',
      body: JSON.stringify({item: {name: name, searches: true}}),
      headers:{
        'Content-Type': 'application/json'
      }}).then(console.log("Success"))

  return(dispatch) => { dispatch({ type: 'SEARCH_ITEMS', payload: name })}
}

// production: fetch('https://developer-wikitrash.herokuapp.com/item', {
// development: fetch('http://localhost:3000/item', {

function resetSearchItem() {
  return(dispatch) => { dispatch({ type: 'RESET_SEARCH_ITEM'})}
}

function upVoteItem(item) {
  fetch('https://developer-wikitrash.herokuapp.com/item', {
      method: 'PUT',
      body: JSON.stringify({item: {name: item.name, upvotes: true}}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(console.log("Success"))

  return { type: 'UPVOTE_ITEM', item }
}

// production: fetch('https://developer-wikitrash.herokuapp.com/item', {
// development: fetch('http://localhost:3000/item', {

function downVoteItem(item) {
  const downVoteItem = item
  fetch('https://developer-wikitrash.herokuapp.com/item', {
      method: 'PUT',
      body: JSON.stringify({item: {name: item.name, downvotes: true}}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(console.log("Success"))

  return { type: 'DOWNVOTE_ITEM', downVoteItem }
}

// production: fetch('https://developer-wikitrash.herokuapp.com/item', {
// development: fetch('http://localhost:3000/item', {

export {
  addItem,
  fetchItems,
  searchItems,
  resetSearchItem,
  upVoteItem,
  downVoteItem
}
