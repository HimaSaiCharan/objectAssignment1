const rahul = {
  name: "Rahul",
  age: 30,
  livesIn: "Pune",
  hobbies: ["chess", "gardening", "weekend trips"],
  employed: true,
  occupation: "salaried",
  profession: "software engineer",
  pets: [
    {
      name: "Max",
      species: "Golden Retriever",
      age: 4,
      fullyVaccinated: true,
      favActivites: ["playing fetch in park"],
    },
  ],
  vehiclesOwned: ["car"],
  transportPreference: "",
  degree: ["computer science"],
};

const ananya = {
  name: "Ananya",
  age: 30,
  livesIn: "Bangalore",
  hobbies: ["cooking", "experiments with Italian recepies"],
  employed: false,
  occupation: "",
  profession: "",
  pets: [
    {
      name: "Kiwi",
      species: "Parrot",
      age: 0,
      fullyVaccinated: false,
      favActivites: ["knows over 20 phrases", "mimics voice"],
    },
  ],
  vehiclesOwned: [],
  transportPreference: "public transport",
  degree: ["computer science", "graphic design"],
};

const ramesh = {
  name: "Ramesh",
  age: 30,
  livesIn: "Jaipur",
  hobbies: ["gardening", "reading"],
  employed: true,
  occupation: "business",
  profession: "business-man",
  pets: [
    {
      name: "Bella",
      species: "Persian cat",
      age: 3,
      fullyVaccinated: true,
      favActivites: ["lounging in the sun"],
    },
    {
      name: "Leo",
      species: "Persian cat",
      age: 3,
      fullyVaccinated: true,
      favActivites: ["lounging in the sun"],
    },
  ],
  vehiclesOwned: [],
  transportPreference: "",
  degree: [],
};

const kavya = {
  name: "Kavya",
  age: 28,
  livesIn: "Chennai",
  hobbies: ["reading", "binge-watching sci-fi shows"],
  employed: false,
  occupation: "",
  profession: "dancer",
  pets: [
    {
      name: "Snowy",
      species: "Rabbit",
      age: 2,
      fullyVaccinated: false,
      favActivites: ["hopping around backyard", "nibbling on carrots"],
    },
  ],
  vehiclesOwned: [],
  transportPreference: "",
  degree: [],
};

const peopleData = [rahul, ananya, ramesh, kavya];

//***************************** code for the solutions *************************

const employedIndividualsCount = function (people) {
  return people.filter((person) => person.employed).length;
};
// console.log(employedIndividualsCount(peopleData));

const carOwnerCount = function (people) {
  return people.filter((person) => person.vehiclesOwned.includes("car")).length;
};
// console.log(carOwnersCount(peopleData));

const getPets = (person) => person.pets;

const isPetFullyVaccinated = (pet) => pet.fullyVaccinated;

const fullyVaccinatedPetsCount = function (people) {
  return people.flatMap(getPets).filter(isPetFullyVaccinated).length;
};
// console.log(fullyVaccinatedPetsCount(peopleData));

const nameAndTypeOfPet = (pet) => {
  return { petName: pet.name, petType: pet.species };
};

const namesAndTypesOfPets = function (people) {
  return people.flatMap(getPets).map(nameAndTypeOfPet);
};
// console.log(namesAndTypesOfPets(peopleData));

const citiesOfIndividuals = function (people) {
  return people.map((person) => person.livesIn);
};
// console.log(citiesOfIndividuals(peopleData));

const allPeopleHobbies = function (people) {
  const allHobies = people.flatMap((person) => person.hobbies);
  return { totalHobbies: allHobies.length, hobbies: allHobies };
};
// console.log(allPeopleHobbies(peopleData));

const unemployedPeople = (person) => !person.employed;

const petsCount = (person) => person.pets.length;

const petsCountOfUnempolyed = function (people) {
  return people.filter(unemployedPeople).flatMap(petsCount).length;
};
// console.log(petsCountOfUnempolyed(peopleData));

const getAges = (person) => person.age;

const averageAgeOfIndividuals = function (people) {
  const sumOfAges = people.map(getAges).reduce(addElements, 0);

  return sumOfAges / people.length;
};
// console.log(averageAgeOfIndividuals(peopleData));

const didPersonStudiedCSAndHasPet = function (person) {
  return person.degree.includes("computer science") && person.pets.length !== 0;
};

const csStudiedPetOwnersCount = function (people) {
  return people.filter(didPersonStudiedCSAndHasPet).length;
};
// console.log(csStudiedPetOwnersCount(peopleData));

const multiplePetsOwnerCount = function (people) {
  return people.filter((person) => person.pets.length > 1).length;
};
// console.log(multiplePetsOwnerCount(peopleData));

const petNameAndFavActivites = (pet) => {
  return { petName: pet.name, petFavActivies: pet.favActivites };
};

const petFavAcitives = function (people) {
  return people.flatMap(getPets).map(petNameAndFavActivites);
};
// console.log(petFavAcitives(peopleData));

const isFromBangaloreOrChennai = function (person) {
  return person.livesIn === "Bangalore" || person.livesIn === "Chennai";
};

const getPetsNames = (person) => person.pets.map((pet) => pet.name);

const petNamesFromSpecificRegion = function (people) {
  return people.filter(isFromBangaloreOrChennai).flatMap(getPetsNames);
};
// console.log(petNamesFromSpecificRegion(peopleData));

const nonCarOwnerPeople = (person) => !person.vehiclesOwned.includes("car");

const vaccinatedPetCount = function (person) {
  return person.pets.filter((pet) => pet.fullyVaccinated);
};

const countPetsOfNonCarOwners = function (people) {
  return people.filter(nonCarOwnerPeople).flatMap(vaccinatedPetCount).length;
};
// console.log(countPetsOfNonCarOwners(peopleData));

const peopleCountFromCityStartsWithB = function (people) {
  return people.filter((person) => person.livesIn.startsWith("B")).length;
};
// console.log(peopleCountFromCityStartsWithB(peopleData));

const peopleCountWithNoPets = function (people) {
  return people.filter((person) => person.pets.length < 1).length;
};
// console.log(peopleCountWithNoPets(peopleData));

const youngerPet = (pet1, pet2) => (pet1.age > pet2.age ? pet2 : pet1);

const youngestPet = function (people) {
  return people.flatMap(getPets).reduce(youngerPet).name;
};
// console.log(youngestPet(peopleData));

const peopleCountWithMultipleHobbies = function (people) {
  return people.filter((person) => person.hobbies.length > 2).length;
};
// console.log(peopleCountWithMultipleHobbies(peopleData));

const findPetCount = function (table, pet) {
  let row = table.find(function (row) {
    return row.species === pet.species;
  });

  row = row || { species: pet.species, count: 0 };

  if (row.count === 0) {
    table.push(row);
  }

  row.count += 1;
  return table;
};

const mostCommonPet = (pet1, pet2) => (pet1.count > pet2.count ? pet1 : pet2);

const mostCommonPetType = function (people) {
  return people.flatMap(getPets).reduce(findPetCount, []).reduce(mostCommonPet).species;
};
// console.log(mostCommonPetType(peopleData));

const peopleCountSharesHobbyWithRamesh = function (people) {
  const rameshHobbies = people[2].hobbies;
  return people.filter((person) => {
    return person.hobbies.some((hobby) => {
      return rameshHobbies.includes(hobby);
    });
  }).length;
};
console.log(peopleCountSharesHobbyWithRamesh(peopleData));
