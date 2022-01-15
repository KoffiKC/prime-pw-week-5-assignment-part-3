console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  let album = {  //initialize album object
    Title: title, // sets each input argument to the appropriate property
    Artist: artist,
    Release: yearPublished,
  }
  collection.push(album); // adds album to collection array
  return album;
}

// testing function
console.log(collection);
addToCollection('All Alone Am I', 'Brenda Lee', 1963);
console.log(collection);

//adding more ablums
addToCollection('Psychedelic Pill', 'Niel Young', 2012);
addToCollection('The Story', 'Brandi Carlile', 2007);
addToCollection('Kidz bop 28', 'various', 2015);
addToCollection('I Love Men', 'Eartha Kitt', 1984);
addToCollection("She's My Witch", 'Kip Tyler', 1958);

// further testing
console.log(collection);
