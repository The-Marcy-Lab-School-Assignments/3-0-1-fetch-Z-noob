// const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
  .then( (res)=> {
    return {
      ok: res.ok,      
      status: res.status, 
      url: res.url }
  }) ;
};

export const getUsers = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
  .then( (res)=> {
    // if (!res.ok) {
    //   throw new Error(response.status)
    // }
    return res.json();
  }).then((data) => {
    // const userID = data.map(item => ({
    //   id: item.id,
    //   user: item.username
    // }))
    return data;
  })
};

export const getUserPosts = (userId, maxNumPosts = 3) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  return fetch(url)
  .then( (res)=> {
    if (!res.ok) {
      throw new Error(res.status)
    }
    return res.json();
  }).then((data) => {
    const part = data.slice(0, maxNumPosts)
    return part;
  })
};


export const createNewUser = (newUserData) => {
  const postOption = {
    method: "POST",                      // The type of HTTP request
    body: JSON.stringify(newUserData),       // The data to be sent to the API
    headers: {
      "Content-Type": "application/json" // The format of the body's data
    }}
  return fetch(`https://jsonplaceholder.typicode.com/users`, postOption)
  .then((response) => {
    if (!response.ok) {
      return console.log(`Fetch failed. ${response.status} ${response.statusText}`)
    }
    return response.json();
  })
  .then((responseData) => {
      return responseData;
  }).catch((err) =>
  console.log(err.message))
}
