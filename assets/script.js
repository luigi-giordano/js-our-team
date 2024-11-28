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

// Definisco il contenitore
const rowCol = document.querySelector('#row-col');

// Funzione per creare una card con le proprietà relative
const memberCard = (member) => {
  const {name, role, email, img} = member;
  return `
        <div class="col-md-4 mb-4">
          <div class="card" style="width: 18rem;">
            <img src="./${img}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
              <a href="mailto:${email}">${email}</a>
            </div>
          </div>
        </div>`;
}

// Funzione per generare le card del team
const memberTeam = (team) => {
  let cards = '';
  for (let member of team) {
    // Concateno la card alla variabile
    cards += memberCard(member);
  }
  rowCol.innerHTML = cards;
}

// Stampo le card
memberTeam(teamMembers);
