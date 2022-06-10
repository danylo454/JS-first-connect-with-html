const people = [
  {
    id: 0,
    firstName: "Daenerys",
    lastName: "Targaryen",
    fullName: "Daenerys Targaryen",
    title: "Mother of Dragons",
    family: "House Targaryen",
    image: "daenerys.jpg",
    imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
  },
  {
    id: 1,
    firstName: "Samwell",
    lastName: "Tarly",
    fullName: "Samwell Tarly",
    title: "Maester",
    family: "House Tarly",
    image: "sam.jpg",
    imageUrl: "https://thronesapi.com/assets/images/sam.jpg",
  },
  {
    id: 2,
    firstName: "Jon",
    lastName: "Snow",
    fullName: "Jon Snow",
    title: "King of the North",
    family: "House Stark",
    image: "jon-snow.jpg",
    imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
  },
  {
    id: 3,
    firstName: "Arya",
    lastName: "Stark",
    fullName: "Arya Stark",
    title: "No One",
    family: "House Stark",
    image: "arya-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
  },
  {
    id: 4,
    firstName: "Sansa",
    lastName: "Stark",
    fullName: "Sansa Stark",
    title: "Lady of Winterfell",
    family: "House Stark",
    image: "sansa-stark.jpeg",
    imageUrl: "https://thronesapi.com/assets/images/sansa-stark.jpeg",
  },
  {
    id: 5,
    firstName: "Brandon",
    lastName: "Stark",
    fullName: "Brandon Stark",
    title: "Lord of Winterfell",
    family: "House Stark",
    image: "bran-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/bran-stark.jpg",
  },
  {
    id: 6,
    firstName: "Ned",
    lastName: "Stark",
    fullName: "Ned Stark",
    title: "Lord of Winterfell",
    family: "House Stark",
    image: "ned-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/ned-stark.jpg",
  },
  {
    id: 7,
    firstName: "Robert",
    lastName: "Baratheon",
    fullName: "Robert Baratheon",
    title: "Lord of the Seven Kingdoms",
    family: "House Baratheon",
    image: "robert-baratheon.jpeg",
    imageUrl: "https://thronesapi.com/assets/images/robert-baratheon.jpeg",
  },
  {
    id: 8,
    firstName: "Jamie",
    lastName: "Lannister",
    fullName: "Jamie Lannister",
    title: "Lord Commander of the Kingsguard",
    family: "House Lannister",
    image: "jaime-lannister.jpg",
    imageUrl: "https://thronesapi.com/assets/images/jaime-lannister.jpg",
  },
  {
    id: 9,
    firstName: "Cersei",
    lastName: "Lannister",
    fullName: "Cersei Lannister",
    title: "Lady of Casterly Rock",
    family: "House Lannister",
    image: "cersei.jpg",
    imageUrl: "https://thronesapi.com/assets/images/cersei.jpg",
  },
  {
    id: 10,
    firstName: "Cateyln",
    lastName: "Stark",
    fullName: "Catelyn Stark",
    title: "Lady of Winterfell",
    family: "House Stark",
    image: "catelyn-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/catelyn-stark.jpg",
  },
];

function ShowPeople() {
  people.forEach((item) => {
    const root = document.getElementById("root");
    const character = document.createElement("div");
    character.setAttribute("class", "character_block");
    const character_title = document.createElement("div");
    character_title.setAttribute("class", "character_child");

    const characterImg = document.createElement("img");
    characterImg.setAttribute("src", item.imageUrl);

    const characterFullNameTitle = document.createElement("h1");
    characterFullNameTitle.innerHTML = item.firstName + " " + item.lastName;

    const characterId = document.createElement("p");
    characterId.innerHTML = "ID: " + item.id;

    const characterFirstName = document.createElement("p");
    characterFirstName.innerText = "First Name: " + item.firstName;

    const characterLastName = document.createElement("p");
    characterLastName.innerText = "Last Name: " + item.lastName;

    const characterFullName = document.createElement("p");
    characterFullName.innerText = "Full Name: " + item.fullName;

    const characterTitle = document.createElement("p");
    characterTitle.innerText = "Title: " + item.title;

    const characterFamily = document.createElement("p");
    characterFamily.innerText = "Family: " + item.family;

    const characterImage = document.createElement("p");
    characterImage.innerText = "Image: " + item.image;

    const characterImageURL = document.createElement("p");
    characterImageURL.innerText = "Image URL: " + item.imageUrl;

    character_title.appendChild(characterFullNameTitle);
    character_title.appendChild(characterImg);
    character.appendChild(character_title);
    character.appendChild(characterId);
    character.appendChild(characterFirstName);
    character.appendChild(characterLastName);
    character.appendChild(characterFullName);
    character.appendChild(characterTitle);
    character.appendChild(characterFamily);
    character.appendChild(characterImage);
    character.appendChild(characterImageURL);
    root.appendChild(character);
  });
}
ShowPeople();

// const root = document.getElementById("root");
// const character = document.createElement("div");
// const characterImg = document.createElement("img");
// characterImg.setAttribute("src", people[1].imageUrl);
// characterImg.setAttribute("alt", "Character image");
// const characterFullNameTitle = document.createElement("h1");
// character.appendChild(characterImg);
// root.appendChild(character);
