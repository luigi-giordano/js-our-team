const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//definisco il contenitore
const teamContainer = document.querySelector('.container-team');

//faccio due funzioni, la prima con dentro la card e le proprietà relative,
const memberCard = (member) => {
  const {name, role, email, img} = member;
  return `<div class="row">
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="./${img}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
              <a href="mailto:tuoindirizzo@email.com">${email}</a>
            </div>
          </div>
        </div>
        </div>
      </div>`
}
//la seconda con gli oggetti(membri del team) e ad ogni ciclo devo richiamare la funzione che creo dalla card
const memberTeam = (team) => {
  let cards = '';
  for(let member of teamMembers){
    //infine concateno la card a una variabile
    cards += memberCard(member);
  }
  teamContainer.innerHTML = cards;
}
//stampo le card
memberTeam(teamMembers);