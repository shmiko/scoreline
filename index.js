var faker = require('faker');

exports.handler = function(event, context){
  // return an array of 10 items in sports
  // include sport name, kind, description
  // teamSize, and eventDate
  var sports = [];
  for (var i = 0; i < 10; i++){
    var mySport = getSport();
    var item = {};
    item.name = getSportName(mySport);
    item.kind = getSportKind();
    item.description = getSportDescription(mySport);
    item.teamSize = getTeamSize();
    item.eventDate = getLastEvent();
    sports.push(sport);
  }
  context.succeed(sports);
}

function getSport() {
  var sportType = [
    "NFL",
    "football",
    "tennis",
    "basketball",
    "soccer",
    "athletics"
  ]
  return sportType[getNum(0, 5)];
}

function getSportName(mySport){
  return faker.company.catchPhraseNoun() + " " + faker.company.catchPhraseDescriptor() + " " + mySport;
}

function getSportKind() {
  return faker.commerce.kind();
}

function getSportDescription(mySport) {
  return "A(n) " + faker.commerce.productAdjective() + ", " + faker.commerce.productAdjective() +
  " " + mySport + " made from the best teams " + faker.commerce.productMaterial() +
  " and also for the " + faker.company.bsBuzz() + " individual!"
}

function getTeamSize() {
  return getNum(1, 13);
}

function getLastEvent() {
  return faker.commerce.eventDate();
}

function getNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
