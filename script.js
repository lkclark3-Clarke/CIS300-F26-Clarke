const facts = [
  "The Pantheon in Rome has one of the world's largest unreinforced concrete domes.",

  "The Eiffel Tower can grow taller in hot weather because metal expands with heat.",

  "Frank Lloyd Wright designed Fallingwater to sit directly above a waterfall.",

  "The Great Pyramid of Giza was the tallest human-made structure for nearly 4,000 years.",

  "The Burj Khalifa in Dubai is currently the world's tallest building.",

  "The Parthenon uses subtle curves to create the illusion of perfectly straight lines.",

  "Antoni Gaudí designed many of his structures using inspiration from nature."
];

const today = new Date();

const dayNumber = Math.floor(
  new Date(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000
);

const factNumber = dayNumber % facts.length;

document.getElementById("daily-fact").textContent =
  facts[factNumber];