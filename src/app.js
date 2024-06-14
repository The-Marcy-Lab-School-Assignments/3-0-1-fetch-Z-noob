import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } = 
  setupPageBasics(appDiv)

  checkResponseStatus().then((statusInfoObj) => {
    renderStatus(statusDiv, statusInfoObj) })
  
  getUsers().then((users) => {
    renderUsers(usersUl, users) })

 
  usersUl.addEventListener('click', (event) => {
      const clickedElement = event.target;
      console.log(event.target)
      if(clickedElement.tagName === 'BUTTON' && clickedElement.hasAttribute('data-user-id')) {
        const user = clickedElement.getAttribute('data-user-id')
        console.log(user)
        getUserPosts(user)
       .then((posts)=> 
        // console.log(posts)
        renderPosts(postsUl, posts))
      }
  }) 

  newUserForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const clickedElement = event.target;
    // const user = clickedElement.getElementById(username)
    // const eMail = clickedElement.getElementById(email)
    console.log(event.target)
    
    const formData = new FormData(newUserForm)
    const formDa = {
      username: formData.get("username"),
      email: formData.get("email")
    }

    console.log(formData)
    console.log(formDa)

    createNewUser(formDa).then(((data) => {
      renderNewUser(newUserDiv, data)
      newUserForm.reset()
    }))
}) 


}