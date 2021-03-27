console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(album);
  return album;
}
addToCollection("The Human Condition", "Jon Bellion", "2016")
addToCollection("Glory Sound Prep", "Jon Bellion", "2018")
addToCollection("agoraphobic", "Corpse", "2021")
addToCollection("Warrior Songs", "TheFatRat", "2018")
addToCollection("Pray for the Wicked", "Panic! At The Disco", "2018")
addToCollection("The Definition", "Jon Bellion", "2014")
console.log(collection);
