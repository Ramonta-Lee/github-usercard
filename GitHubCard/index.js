/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Ramonta-Lee')
  .then(response => {
    // console.log(response);
   
   userCard(response.data);
  })

  .catch(err => {
    console.log(err);
  });

  // stretch of nesting
axios.get('https://api.github.com/users/Ramonta-Lee/followers')
  .then(response => {
    response.data.forEach(item => {
      axios.get(item.url)
        .then(response => {
          userCard(response.data)
        })
    })
  })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = ["zakmayfield", "ljh-c", "krisdmonroe", "jeffrey1200", "WindTalker22", "wesley-moody", "MosesSupposes", "jleahwolff", "Jrive204", "KParrish193", "aalvinlin", "lisabpink", "Judson00", "alexandercsierra", "davebettswebdev", "PHONGdotTech", "nicbongo", "anamonteiro430", "debauchery1st", "NathanNNguyen", "AshtonRagan", "rUpadhyayahacks"];

// followersArray.forEach(user => {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       const followerCards = userCard(response.data);
//       cardContainer.appendChild(followerCards);
//     })
//     .catch(function(error){
//       console.log(error);
//     })
// })




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function userCard (data) {
  //define new elements
  const cardContainer = document.createElement('div');
  const imgSrc = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const userNamePara = document.createElement('p');
  const userLocation = document.createElement('p');
  const profilePara = document.createElement('p');
  const addressLink = document.createElement('a');//inside of profile para
  const followerCount = document.createElement('p');
  const followingCount = document.createElement('p');
  const userBio = document.createElement('p');

  // set class names
  cardContainer.classList.add('card');
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  userNamePara.classList.add('username');
  userBio.classList.add('biography');

  // setup structure of elements
  cardContainer.appendChild(imgSrc);
  cardContainer.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userNamePara);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profilePara);
  // profilePara.appendChild(addressLink);
  cardInfo.appendChild(followerCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(userBio);

  // setting the text content
  imgSrc.setAttribute('src', data.avatar_url);
  userName.textContent = data.login;
  userNamePara.textContent = data.name;
  userLocation.textContent = `Location: ${data.location}`;
  profilePara.textContent = "Profile: ";
  profilePara.appendChild(addressLink);
  addressLink.setAttribute('href', data.html_url);
  addressLink.textContent = data.html_url;
  followerCount.textContent = `Followers: ${data.followers}`;
  followingCount.textContent = `Following: ${data.following}`; 
  userBio.textContent = `Bio: ${data.bio}`;

  const entryPoint = document.querySelector('.cards');
  entryPoint.appendChild(cardContainer);

  return cardContainer;
};


// axios.get('https://api.github.com/users/Ramonta-Lee/followers')

 

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
