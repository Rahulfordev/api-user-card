const cardPop = document.getElementById("card-pops");
async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();
  showData(data);
}
getData();
async function myFunction(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  detailFun(data);
}

function detailFun(data) {
  cardPop.style.display = "block";
  const popUp = document.createElement("div");
  popUp.classList.add("card-pop");
  const {
    name,
    email,
    username,
    phone,
    website,
    address: { street, city, zipcode },
    company: { name: companyName },
  } = data;
  popUp.innerHTML = `
  <div class="pop-heading">
   <h2 class="user-title">User Details Information</h2>
   <button onclick="closeAll()" class="close-info">&times;</button>
  </div>
  
  <div class="user-info"> 
 <dvi class="user-details">
    <h2 class="win-name">Name: ${name}</h2>
  <h2>User Name: ${username}</h2>
  <h2>Email: ${email}</h2>
  <h2>Street: ${street}</h2>
  <h2>City: ${city}</h2>
  <h2>Zip Code: ${zipcode}</h2>
  <h2>Phone: ${phone}</h2>
  <h2>WebSite: ${website}</h2>
  <h2>Company: ${companyName}</h2>
    </dvi>
  </div>
  `;
  cardPop.appendChild(popUp);
}

function closeAll() {
  cardPop.style.display = "none";
}

function showData(userData) {
  let rootDiv = document.getElementById("root");
  userData.map((user) => {
    const {
      id,
      name,
      username,
      email,
      image,
      address: { street, city },
    } = user;
    const div = document.createElement("div");
    div.classList.add("user-card");
    div.innerHTML = `
    <img class="card-image" src="image/user.png" width="50px" height="50px" alt="">
         <h2>${name}</h2>
        <h4 class="card-username">${username}</h4> 
        <button class="card-btn" id="button" onclick="myFunction(${id})">Show Details</button>
        
       `;

    rootDiv.appendChild(div);
  });
}
