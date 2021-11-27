//the four roles are 'design', 'data', 'web', 'mobile' and 'special'.


// save the image for both images
let male_avi = "<img src='images/male.png' class='avatar'>"
let female_avi = "<img src='images/female.png' class='avatar'>"

const members = [
  {
    name: "Damilare Akin-Oladejo",
    id: 1,
    gender: 'M',
    story: "I’m dami, a Machine Learning Engineer. I work with Python and sometimes R. I usually prefer that the D in my name starts with lower case. Other than that, I have absolutely no other fun fact about myself that comes to mind👀",
    role: "data",
    title: 'ML Engineer'
  },//dami
  {
    name: "Seun Philip",
    id: 2,
    gender: "F",
    story: "Fourteenth cousin to Elon. A badass. Dara tested the software that runs the pentagon from 300ft below the ocean's surface.",
    role: "data",
    title: 'Data Scientist'
  },//skittles
  {
    name: "Gift Omotor",
    id: 3,
    gender: "M",
    story: "What do you get when you mix accounting with backend - chastity!",
    role: "web",
    title: 'Backend Engineer'
  },//gift
  {
    name: "Dara Akinyemi",
    id: 4,
    gender: "M",
    story: "Owner of the only characteristic pants in all the seven kingdoms, Tomiwa is proud to have us mortals gaze on them. Plus, there's something with her and balloons. Ask Pennywise.🤷‍♀️",
    role: "special",
    title: "Software Tester"
  },//tomiwa
  {
    name: "Tope",
    id: 5,
    gender: "M",
    story: "Beast at data, Early can do everything but get to work late. Mwahahahahaha!😎 Also, one time, Early high-fived the moon and was sent to mediate between warring alien nations. Of course, he was early for that too😒.",
    role: "mobile",
    title: "Cross-Platform Developer"
  },//early
  {
    name: "Ekemini",
    id: 6,
    gender: "F",
    story: "She lurks in the shadows, with her gaaaang signs and anti-anime slurs, waiting for that weeb to be the first to say 'Arigatou'. Say that magic word, and ... and ... Say it and see for yourself.",
    role: "design"
  },//farouq
  {
    name: "Eniola-chan",
    id: 7,
    gender: "https://img.icons8.com/color/48/000000/user-female-skin-type-4.png",
    story: "What's that stillness in the wind, that tranquil in the office area, it is the aura of none other than Eniola, kung fu ka of Shi Fu(She'd beat Po blindfolded🚶‍♀️)",
    role: "special"
  },//eniola
  {
    name: "Gbemisola of High Garden",
    id: 8,
    gender: "https://img.icons8.com/color/48/000000/user-female-skin-type-4.png",
    story: "Smiles. Smiles. Smiles. But beneath that smile, there is an undeniably sinister will to take over the known world- I just know it. Watch out, people. They'll say Dami warned you.",
    role: "data"
  },//gbemi
  {
    name: "Gboyega, a Stormtrooper",
    id: 9,
    gender: "https://img.icons8.com/color/48/000000/user-male-skin-type-6.png",
    story: "Your IOS developer ain't a-millionth as dapper.",
    role: "data"
  },//gboyega
  {
    name: "Chudi the Moody",
    id: 10,
    gender: "https://img.icons8.com/color/48/000000/user-male-skin-type-6.png",
    story: "His slack bio speaks for itself: software craftsman and, wait for it, <b>janitor</b>.",
    role: "design"
  },//chudi
  {
    name: "Wole the Corporate",
    id: 11,
    gender: "https://img.icons8.com/color/48/000000/user-male-skin-type-6.png",
    story: "Any assassin can spot Wole from three miles away- look for his quintessentially-dark headphones and his idiosyncratic, dapper, corporate get-up. He's quadruple black belt, so no assassin should be stupid enough to look for him",
    role: "web"
  },//wole
  {
    name: "Assurance the Glued",
    id: 12,
    gender: "https://img.icons8.com/color/48/000000/user-male-skin-type-6.png",
    story: "We've tried everything, even hiring ronin(we couldn't afford Keanu Reeves tho); nothing, I repeat, nothing, can take his eyes off his laptop screen.😪😫",
    role: "design"
  },//assurance
  {
    name: "Dare, SBA Saboteur",
    id: 13,
    gender: "https://img.icons8.com/color/48/000000/user-male-skin-type-6.png",
    story: "He's the reason Falz gave up on the Sweet Boy association. Why, we'll never know.",
    role: "design"
  },//dare
  {
    name: "Itasoha, Light-skinned Somebori",
    id: 14,
    gender: "https://img.icons8.com/color/48/000000/user-female-skin-type-4.png",
    story: "So Al-fred and Isma'il kidnapped Saint Jhn, Beyonce and the poor little Blue Ivy to remix the song specially for Itasoha. On whose orders? Itasoha's. Nobody needed WizKid. He didn't even write his part.🙄",
    role: "special"
  },//itasoha
  {
    name: "Kareem, the Dream",
    id: 15,
    gender: "https://img.icons8.com/color/48/000000/user-male-skin-type-6.png",
    story: "In a proper coding-shinobi-niceness triathlon, who do you think would win- Kareem or the other guy?",
    role: "design"
  },//kareem
  {
    name: "Chukwudi T9000",
    id: 16,
    gender: "https://img.icons8.com/color/48/000000/user-male-skin-type-6.png",
    story: "From a long line of terminators comes Chukwudi, a very nasty message for John Connor hidden in the most hidden of his hidden files.",
    role: "design"
  },//chukwudi
  {
    name: "A Time-traveller Called Isma'il",
    id: 17,
    gender: "https://img.icons8.com/color/48/000000/user-male-skin-type-6.png",
    story: "Rogue time-traveller and defender of all things green, plus illustrator plus rogue time-traveller and defender of all things green. Ooops! THAT WAS A TIME LOOP. I see what he did there.",
    role: 'special'
  },//ismail
  {
    name: "Front-end Kayode",
    id: 18,
    gender: "https://img.icons8.com/color/48/000000/user-male-skin-type-6.png",
    story: "He beats our logs hands down and then consoles them. He is also a hypnotist with an expertise in DOM manipulation. Don't mess with this guy.",
    role: 'design'
  },//kayode

];

let memberView = "";

// <div class= "avatar"><img src="${member.gender}"></div>
members.forEach(member => {
  const personView = `
        <div id = "person_${member.id}" class="person ${member.role}">
          <div class = "card ${member.role}">
          <div>${member.gender==='M' ? male_avi : female_avi}</div>
          <div class = "name">${member.name}</div>
          </div>
          <div class = "invisible">
            ${member.story}
          </div>
        </div>
      `;
  memberView += personView;
});//this iterator turns the members array into innerHTML consisting of multiple

document.querySelector('#memberList').innerHTML = memberView;//this then assigns that innerHTML to a div called memberList. We used querySelector but we called used other methods

let elements = document.getElementById("memberList").children;
//I created elements just so I can know how many children there are of the memberlist div. Below, I used that as if it was an array containing each person's block.

let web_devs = [];
let data_people = [];
let specials = [];
let design_people = [];
let mobile_people = [];

//this is what reveals extra info on each 
let e = 0
for(i= 0; i < elements.length; i++){
  let u = document.getElementById(`person_${i + 1}`);
  let title = members[i].title;
  let name = members[i].name;
  //perfect lines below
  u.onmouseover = function(){
    u.lastElementChild.style.display = 'block';
    u.firstElementChild.lastElementChild.innerHTML = `<span class = "reve">Title:</span><br>${title}`;
  };

  u.onmouseleave = function(){
    u.lastElementChild.style.display = 'none';
    u.firstElementChild.lastElementChild.innerHTML = name;
  }

  e++;
  
  if(u.className === "person web")
  web_devs.push(u)
  
  if(u.className === "person design")
  design_people.push(u)
  
  if(u.className === "person special")
  specials.push(u)
  
  if(u.className === "person data")
  data_people.push(u)

  if(u.className === "person mobile")
  mobile_people.push(u)
}

let allButton = document.getElementById("allButton");
let dsButton = document.getElementById("dsButton");
let designButton = document.getElementById("designButton");
let specialButton = document.getElementById("specialButton");
let webButton = document.getElementById("webButton");
let mobileButton = document.getElementById("mobileButton");

function hideElements(arr) {
  arr.forEach((elem)=>{
    elem.style.display = "none"
  })
}

function showElements(arr) {
  arr.forEach((elem)=>{
    elem.style.display = "block"
  })
}

//when you click the 'all' button, change the background and color of it and reveal all hidden cards

allButton.onclick = function(){
  dsButton.className = "button";
  allButton.className = "button active";
  designButton.className = "button";
  specialButton.className = "button";
  webButton.className = "button";
  showElements(data_people);
  showElements(web_devs);
  showElements(specials);
  showElements(design_people);
  showElements(mobile_people);
}

//when you click any of the roke filter buttons, change the background and color of it, reveal only that card and hide all other role cards
dsButton.onclick = function(){
  dsButton.className = "button active";
  allButton.className = "button";
  designButton.className = "button";
  specialButton.className = "button";
  webButton.className = "button";
  hideElements(web_devs);
  hideElements(specials);
  hideElements(design_people);
  hideElements(mobile_people);
  showElements(data_people);
}

designButton.onclick = function(){
  dsButton.className = "button";
  allButton.className = "button";
  designButton.className = "button active";
  specialButton.className = "button";
  webButton.className = "button";
  hideElements(web_devs);
  hideElements(specials);
  hideElements(data_people);
  hideElements(mobile_people);
  showElements(design_people);
}

specialButton.onclick = function(){
  dsButton.className = "button";
  allButton.className = "button";
  designButton.className = "button";
  specialButton.className = "button active";
  webButton.className = "button";
  hideElements(web_devs);
  hideElements(data_people);
  hideElements(design_people);
  hideElements(mobile_people);
  showElements(specials);
}

webButton.onclick = function(){
  dsButton.className = "button";
  allButton.className = "button";
  designButton.className = "button";
  specialButton.className = "button";
  webButton.className = "button active";
  hideElements(data_people);
  hideElements(specials);
  hideElements(design_people);
  hideElements(mobile_people);
  showElements(web_devs);
}

mobileButton.onclick = function(){
    dsButton.className = "button";
    allButton.className = "button";
    designButton.className = "button";
    specialButton.className = "button";
    webButton.className = "button active";
    hideElements(data_people);
    hideElements(specials);
    hideElements(design_people);
    hideElements(web_devs);
    showElements(mobile_people);
  }

//everything under here is just what would happenif your screen is smaller than required.
//it's a simple endless random color generating game
let viewWidth = Math.max(document.documentElement.clientWidth || 0);

console.log(viewWidth);

let original = document.body.innerHTML;

//the line below evaluates the screen before running the game instead of the webpage
if(viewWidth < 705){
  document.body.innerHTML = `<div id="whole">
  <div id="err"><img src='images/smile.png' class="logo"><br>Err, 404?!</div>
  <div id="exc">
    <div class="six">No be so👀</div>
    <div class="eight">Site no go fine</div>
    <div>for smaller screens.</div>
    <div class="eight">Use something</div>
    <div class="six">bigger, jor.</div>
  </div>
  <div id="shuffle">Play with colors :-)</div>
</div>`;

let shuffle = document.getElementById("shuffle");
let divWhole = document.getElementById("whole");
let paragraph = document.getElementById("exc");
let err = document.getElementById("err");

const ranNum = (inp) =>{
  let num = (inp || 128);
  console.log(`num is ${num}`);
     return num + Math.floor(Math.random()* 156)
    }
  
  function backie(){
    divWhole.style.background = `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`;
  shuffle.style.background = `rgb(${ranNum(0)}, ${ranNum(0)}, ${ranNum(0)})`;
  err.style.color = `rgb(${ranNum(1)}, ${ranNum(1)}, ${ranNum(1)})`;
  }
  
  shuffle.addEventListener('click', backie);
  
  //looksie, there is a function ranNum that generates random numbers. It receives a presupposed integer. If none is received, that integer  will assume the value of 128. What does the number do? It determines whether the color generated will be in the range of light or dark by generating a random rgb within that number and its sum with 156 eg ranNum(34) will generate random numbers btw 34 and (34 + 156 = 190).ie the lightest number will be rgb(190, 190, 190) and the lowest will be rgb(0,0,0). if you call ranNum(0), your colors will fall within rgb(0,0,0) and rgb(156, 156, 156).
  //Here, when you click the shuffle button, you pass in 0, therefore you expect a dark color.
  
  //not passing in an argument will make the ranNum use 128 by default, hereby generating lighter colors i.e the darkest color will be rgb(128, 128, 128) and the lightest will be white. Sorry, had to write this.
  
  //this is just to reduce the likelihood that the button will be as light as the background. Shikena!
}
