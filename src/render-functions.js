export const setupPageBasics = (parentEl) => {
    parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

    const statusDiv = parentEl.querySelector('#status');
    const usersUl = parentEl.querySelector('#users-list');
    const postsUl = parentEl.querySelector('#posts-list');
    const newUserForm = parentEl.querySelector('#new-user-form');
    const newUserDiv = parentEl.querySelector('#new-user');

    return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
  // const statusDiv = parentEl.querySelector('#status-heading');
  const h2Element = document.createElement("h2")
  const pElement = document.createElement("p")
  const ook = statusInfoObj.ok === true ? "OK" : "FAIL"
  
  h2Element.textContent = `Info on - ${statusInfoObj.url}`
  pElement.textContent = `Status code: ${statusInfoObj.status}, ${ook}!`
  h2Element.setAttribute("id", "status-heading");
  pElement.setAttribute("id", "status-code");
  // h2Element.setAttribute()
  statusDiv.append(h2Element, pElement)
};

export const renderUsers = (usersUl, users) => {
  usersUl.innerHTML = "";

  users.forEach((user)=> {
    const buttonElem = document.createElement("button")
    const liElem = document.createElement("li")
    
    buttonElem.textContent = `Load ${user.username}'s posts`
    buttonElem.setAttribute('data-user-id', `${user.id}`)
    liElem.setAttribute("class", "user-card");

    liElem.append(buttonElem)
    usersUl.append(liElem)
  })
};

export const renderPosts = (postsUl, posts) => {
  postsUl.innerHTML = "";

  posts.forEach((post)=> {
  const liElem = document.createElement("li")
  const h2Element = document.createElement("h2")
  const pElement = document.createElement("p")
    
  h2Element.textContent = `${post.title}`
  pElement.textContent = `${post.body}`

  liElem.append(h2Element, pElement)
  postsUl.append(liElem)
  })
}

export const renderNewUser = (newUserDiv, newUserInfo) => {
  newUserDiv.innerHTML = "";

  // newUserInfo.forEach((user)=> {

  const h2Element = document.createElement("h2")
  const pElement = document.createElement("p")
    
  h2Element.textContent = newUserInfo.username
  pElement.textContent = newUserInfo.email

  newUserDiv.append(h2Element, pElement)

  
}