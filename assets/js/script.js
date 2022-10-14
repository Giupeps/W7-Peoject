async function getDisneyList() {
  let disneyList = await fetch("https://api.disneyapi.dev/characters");
  let disneyObject = await disneyList.json();
  let disneyArray = disneyObject.data;
  console.log(disneyArray);

  for (let disneyFilms of disneyArray) {
    let mainContainer = document.querySelector(".row");

    mainContainer.innerHTML += `<div class="card" style="width: 15rem; height: 18rem;">
    <div class=card-container>
                <img src="${disneyFilms.imageUrl}" class="card-img-top" alt="...">
                </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Nome:</b> ${disneyFilms.name}</p>
  </div>
</div>`;
  }
}

let navbar = document.querySelector("nav");
let sticky = navbar.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onload = () => {
  getDisneyList();
};

window.onscroll = function () {
  stickyNav();
};
