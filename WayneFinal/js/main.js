
const openModal1 = () => {
  document.getElementById('modal1').style.display = "block";
};

const openModal2 = () => {
  document.getElementById('modal2').style.display = "block";
};

const openModal3 = () => {
  document.getElementById('modal3').style.display = "block";
};
// ########Open Modals#####
const closeModal1  = () => {
  document.getElementById('modal1').style.display = "none";
};
const closeModal2  = () => {
  document.getElementById('modal2').style.display = "none";
};
const closeModal3  = () => {
  document.getElementById('modal3').style.display = "none";
};



//
// this is saying as long as an ID of modal gets clicked, ill do this. as long as they al have the same id, this will work on all of them
//
// ok but I have 3 modals set as display none, and they are all different, how will it know which
// modal to open?
//
// // JS
// const openModal = (modal) => {
//   document.getElementById(modal).style.display = "block";
// }
// const closeModal = (modal) => {
//   document.getElementById(modal).style.display = "none";
// }
//
// // HTML
// onclick="openModal('modal1')";
// onclick="closeModal'(modal1')";



// ###########End Modals#############################


let blinker = () => {
  let play = document.getElementById('pause');
  if (play.style.animationPlayState == "paused"){
    play.style.animationPlayState = "running";
    console.log(play);
  }
  else{
      play.style.animationPlayState = "paused";
      console.log(play);
    }
};


let proPhase = () => {
  let lotvLogo = document.getElementById('lotvLogo');
  var opac = 0;
  var id = setInterval(proPhaseIn, 100);
  function proPhaseIn () {
   if (opac > 1) {
     clearInterval(id);
   }
   else {
     opac += .05;
     lotvLogo.style.opacity = opac;
   }
 }
};

let sc2Phase = () => {
  let sc2Logo = document.getElementById('sc2Logo');
  var opac = 0;
  var id = setInterval(sc2PhaseIn, 100);
  function sc2PhaseIn () {
   if (opac > 1) {
     clearInterval(id);
   }
   else {
     opac += .05;
     sc2Logo.style.opacity = opac;
   }
 }
};

// ######END LOGO######


class Units {
  constructor(name, description, cost, hp, range, damage, specialAbility, image){
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.hp = hp;
    this.range = range;
    this.damage = damage;
    this.specialAbility = specialAbility;
    this.image = image;
  }
};
// ###############End main class#################

let scv = new Units('Name: SCV', 'Weak worker unit used to gather minerals and gas. Can be healed', '50 Minerals 0 Gas', '45hp', 'Melee', '5 damange', 'Can buid buildings', '../media/scv.gif');

 let marine = new Units('Name: Marine', 'All purpose infantry units', '50 Minerals 0 Gas', '45hp', 'Range 5', '6 damage', 'StimPak - Boost damage and movement speed at the cost of 10 HP', '../media/marine.gif');

let marauder = new Units('Name: Marauder', 'The opposite of the Marine. Very meaty, slow firing, and great versus armored units', '100 Minerals 25 Gas', '125hp', 'Range 5', '9 damage', 'StimPak - Boost damage and movement speed at the cost of 20 HP', '../media/marauder.gif');

let medivac = new Units('Name: Medivac', 'Terran flying dropship. Part transporter, part healer', '100 Minerals 100 Gas', '150hp', 'Range 5', 'Damage NONE', 'Heal - Heals friendly units', '../media/medivac.gif');

let battleCruiser = new Units('Name: Battle Cruiser', 'Terran battle ship, that can tactically jump', '400 Miners 300 Gas', '550hp','Range 6', 'Damage 10', 'Tactical Jump - Teleport anywhere on the map. Long cool down', '../media/battleCruiser.gif');

let siegeTank = new Units('Name: Siege Tank', 'Long rang tank', '150 Minerals 125 Gas', '160hp', 'Range 7 / 13 in Siege Mode', 'Damage 15 / 40 in Siege Mode', 'Transform into Siege Mode - Unit cannot move, but gets a huge increase in range, and does splash damage', '../media/siegeTank.gif');

let displayScv = () => {
  let names = document.getElementById('names');
  names.innerHTML = scv.name;
  let image = document.getElementById('pic');
  image.src = scv.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = scv.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = scv.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = scv.hp;
  let range = document.getElementById('range');
  range.innerHTML = scv.range;
  let special = document.getElementById('special');
  special.innerHTML = scv.specialAbility;
};
let displayMarine = () => {
  let names = document.getElementById('names');
  names.innerHTML = marine.name;
  let image = document.getElementById('pic');
  image.src = marine.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = marine.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = marine.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = marine.hp;
  let range = document.getElementById('range');
  range.innerHTML = marine.range;
  let special = document.getElementById('special');
  special.innerHTML = marine.specialAbility;
};
let displayMarauder = () => {
  let names = document.getElementById('names');
  names.innerHTML = marauder.name;
  let image = document.getElementById('pic');
  image.src = marauder.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = marauder.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = marauder.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = marauder.hp;
  let range = document.getElementById('range');
  range.innerHTML = marauder.range;
  let special = document.getElementById('special');
  special.innerHTML = marauder.specialAbility;
};
let displayMedivac = () => {
  let names = document.getElementById('names');
  names.innerHTML = medivac.name;
  let image = document.getElementById('pic');
  image.src = medivac.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = medivac.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = medivac.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = medivac.hp;
  let range = document.getElementById('range');
  range.innerHTML = medivac.range;
  let special = document.getElementById('special');
  special.innerHTML = medivac.specialAbility;
};
let displayBattleCruiser = () => {
  let names = document.getElementById('names');
  names.innerHTML = battleCruiser.name;
  let images = document.getElementById('pic');
  images.src = battleCruiser.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = battleCruiser.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = battleCruiser.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = battleCruiser.hp;
  let range = document.getElementById('range');
  range.innerHTML = battleCruiser.range;
  let special = document.getElementById('special');
  special.innerHTML = battleCruiser.specialAbility;
};
let displaySiegeTanks = () => {
  let names = document.getElementById('names');
  names.innerHTML = siegeTank.name;
  let images = document.getElementById('pic');
  images.src = siegeTank.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = siegeTank.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = siegeTank.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = siegeTank.hp;
  let range = document.getElementById('range');
  range.innerHTML = siegeTank.range;
  let special = document.getElementById('special');
  special.innerHTML = siegeTank.specialAbility;
};

// ###############End Terran Classes#################

let probe = new Units('Name: Probe', 'The mining units of Protoss race, with regenerating shields', '50 Minerals 0 Gas', '20hp', 'Melee', 'Dmage 5', 'Can warp in buildings', '../media/probe.gif');

let stalker = new Units('Name: Stalker', 'Fast unit that can blink across short distances. Can be used to surprise enemy, flee, and catch fleeing units.', '125 Minerals 50 Gas', '80hp', 'Range 6', 'Damage 10', 'Blink - Teleport short distances', '../media/stalker.gif');

let colossus = new Units('Name: Colossus', 'This towering unit does large amounts of damge to ground units. Weak from a back flank, but devastiting head-on.', '300 Minerals 200 Gas', '200hp', 'Range 6', 'Damage 50', 'Cliff Walk - Can walk up cliffs to surprise attack, flank, or retreat', '../media/colossus.gif');

let archon = new Units('Name: Archon', 'Powerful damage dealer, with a bonus against biological units.', '100 Minerals 300 Gas', '10hp and 350 Shield', 'Range 2', 'Damage 25', 'Storm - Produces a psionic storm that deals high damage to biological units, and denies an area', '../media/archon.gif', '../media/archon.gif');

let warpPrism = new Units('Name: Warp Prism', 'A flying dropship, that also has the ability to warp in units anywhere it is on the map.', '200 Minerals 0 Gas', '200hp', 'Range NONE', 'Damage NONE', 'Phasing Mode - Grants the ability to warp in units to reinforce, or surprise attack the enemy. Unable to move in this mode', '../media/warpPrism.gif');

let motherShip = new Units('Name: MotherShip', 'The Protoss capital ship. Has many special abilities, such as being able to cloak an entire army under its hulking mass', '400 Minerals 400 Gas', '350hp', 'Range 7', 'Damage 6', 'Mass Recall - Call an entire army to its location to reinforce, or surpise the enemy', '../media/motherShip.gif', '../media/motherShip.gif');

let displayProbe = () => {
  let names = document.getElementById('names');
  names.innerHTML = probe.name;
  let image = document.getElementById('pic');
  console.log(image);
  image.src = probe.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = probe.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = probe.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = probe.hp;
  let range = document.getElementById('range');
  range.innerHTML = probe.range;
  let special = document.getElementById('special');
  special.innerHTML = probe.specialAbility;
};
  let displayStalker= () => {
  let names = document.getElementById('names');
  names.innerHTML = stalker.name;
  let image = document.getElementById('pic');
  image.src = stalker.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = stalker.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = stalker.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = stalker.hp;
  let range = document.getElementById('range');
  range.innerHTML = stalker.range;
  let special = document.getElementById('special');
  special.innerHTML = stalker.specialAbility;
};
  let displayColossus = () => {
  let names = document.getElementById('names');
  names.innerHTML = colossus.name;
  let image = document.getElementById('pic');
  image.src = colossus.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = colossus.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = colossus.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = colossus.hp;
  let range = document.getElementById('range');
  range.innerHTML = colossus.range;
  let special = document.getElementById('special');
  special.innerHTML = colossus.specialAbility;
};
  let displayArchon = () => {
  let names = document.getElementById('names');
  names.innerHTML = archon.name;
  let image = document.getElementById('pic');
  image.src =archon.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = archon.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = archon.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = archon.hp;
  let range = document.getElementById('range');
  range.innerHTML = archon.range;
  let special = document.getElementById('special');
  special.innerHTML = archon.specialAbility;
};
  let displayWarpPrism = () => {
  let names = document.getElementById('names');
  names.innerHTML = warpPrism.name;
  let image = document.getElementById('pic');
  image.src = warpPrism.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = warpPrism.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = warpPrism.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = warpPrism.hp;
  let range = document.getElementById('range');
  range.innerHTML = warpPrism.range;
  let special = document.getElementById('special');
  special.innerHTML = warpPrism.specialAbility;
};
  let displayMotherShip = () => {
  let names = document.getElementById('names');
  names.innerHTML = motherShip.name;
  let image = document.getElementById('pic');
  image.src = motherShip.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = motherShip.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = motherShip.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = motherShip.hp;
  let range = document.getElementById('range');
  range.innerHTML = motherShip.range;
  let special = document.getElementById('special');
  special.innerHTML = motherShip.specialAbility;
};

// ##################End Protoss Display#################


let drone = new Units('Name: Drone', 'Worker unit for harvesting minerals and gas', '50 Minerals 0 Gas', '40hp', 'Melee', '5 Damage', 'Can morph into buildings', '../media/drone.gif');

let broodLord = new Units('Name: Brood Lord', 'Heavy assault flying unit, that can deal up to three times its base damage', '150 Minerals 150 Gas', '225hp', 'Range 10', '20 Damage', 'Swarm Seeds - Spawn Broodlings up to 2 Broodlings to multiply base damage by up to 200%', '../media/broodLord.gif');

let roach = new Units('Name: Roach', 'Amored heavy attack unit, with the ability to regnerate its health', '75 Minerals 25 Gas', '145hp', 'Range 4', ' Damage 16', 'Burrow - Can tunnel underground, and is one of the few units that can move while underground. Will regerate health quickly while burrowed', '../media/roach.gif');

let zergling = new Units('Name: Zergling', 'Small and fast. Individually they are useless, but it a group can be overwhelimg very quickly.', '25 Minerals 0 Gas', '35hp', 'Melee', '5 Damage', 'Metabolic Boost - Increase move speed by an additional 60%', '../media/zergling.gif');

let banling = new Units('Name: Banling', 'A suicide bomber, with a high damage output, and large splash radius', '25 Minerals 25 Gas', '30 hp', 'Melee', ' Damage 20', 'Burrow - Tunnel underground to set a surpise mine field like attack for unsuspecting enemies', '../media/baneling.gif');

let hydralisk = new Units('Name: Hydralisk', 'Long distance, high damage, ranged unit, that can target both ground and air', '100 Minerals 50 Gas', '90hp', 'Range 5', '12 Damage', 'Grooved Spines - Increase attack range by an additional 1', '../media/hydralisk.gif');


let displayDrone = () => {
  let name = document.getElementById('names');
  names.innerHTML = drone.name;
  let image = document.getElementById('pic');
  image.src = drone.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = drone.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = drone.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = drone.hp;
  let range = document.getElementById('range');
  range.innerHTML = drone.range;
  let special = document.getElementById('special');
  special.innerHTML = drone.specialAbility;
};
  let displayBroodLord= () => {
  let names = document.getElementById('names');
  names.innerHTML = broodLord.name;
  let image = document.getElementById('pic');
  image.src = broodLord.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = broodLord.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = broodLord.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = broodLord.hp;
  let range = document.getElementById('range');
  range.innerHTML = broodLord.range;
  let special = document.getElementById('special');
  special.innerHTML = broodLord.specialAbility;
};
  let displayRoach = () => {
  let names = document.getElementById('names');
  names.innerHTML = roach.name;
  let image = document.getElementById('pic');
  image.src = roach.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = roach.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = roach.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = roach.hp;
  let range = document.getElementById('range');
  range.innerHTML = roach.range;
  let special = document.getElementById('special');
  special.innerHTML = Roach.specialAbility;
};
  let displayZergling = () => {
  let names = document.getElementById('names');
  names.innerHTML = zergling.name;
  let image = document.getElementById('pic');
  image.src = zergling.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = zergling.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = zergling.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = zergling.hp;
  let range = document.getElementById('range');
  range.innerHTML = zergling.range;
  let special = document.getElementById('special');
  special.innerHTML = zergling.specialAbility;
};
  let displayBanling = () => {
  let names = document.getElementById('names');
  names.innerHTML = banling.name;
  let image = document.getElementById('pic');
  image.src = banling.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = banling.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = banling.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = banling.hp;
  let range = document.getElementById('range');
  range.innerHTML = banling.range;
  let special = document.getElementById('special');
  special.innerHTML = banling.specialAbility;
};
  let displayHydralisk = () => {
  let names = document.getElementById('names');
  names.innerHTML = hydralisk.name;
  let image = document.getElementById('pic');
  image.src = hydralisk.image;
  let descript = document.getElementById('descript');
  descript.innerHTML = hydralisk.description;
  let cost = document.getElementById('cost');
  cost.innerHTML = hydralisk.cost;
  let hp = document.getElementById('hp');
  hp.innerHTML = hydralisk.hp;
  let range = document.getElementById('range');
  range.innerHTML = hydralisk.range;
  let special = document.getElementById('special');
  special.innerHTML = hydralisk.specialAbility;
};


// #################END UNITS###################

var video = document.getElementById("cinematic");
var pauseButton = document.getElementById("pause");


let pause = () => {
  if (video.paused) {
    video.play();
    pauseButton.innerHTML = "Pause";
  } else {
    video.pause();
    pauseButton.innerHTML = "Play";
  }
};

// #######Landing Page Video and Buttons#######


var currentRace = 1;

let changeRace = (n) => {
  displayRace(currentRace += n);
};

let displayRace = (n) => {
  let i = 0;
  let raceArray = document.getElementsByClassName('icons');
  console.log(raceArray);
  if(n > raceArray.length){
    currentRace = 1;
  }
  if(n < 1){
    currentRace = raceArray.length;
  }
  while(i < raceArray.length){
    raceArray[i].style.display = "none";
    i++;
  }
  raceArray[currentRace-1].style.display = "block";
};


displayRace(currentRace);

// ##########End slideShow##############
