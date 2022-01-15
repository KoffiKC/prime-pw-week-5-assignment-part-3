console.log('***** Music Collection *****')

let collection = []; // initializes empty collection array

function addToCollection(title, artist, yearPublished){
  let album = {  //initialize new album object
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


function showCollection(array){
  console.log(array.length); // logs number of albums in array

  for(album of array){ // loops through imput array
    // using a for of loop allows dot notation directly on the album varible
    // as opposed to something like collection[0].title with a traditional for loop
    console.log(`${album.Title} by ${album.Artist} published in ${album.Release}.`); // logs info as full sentence
  }
  return true;
}

// testing function
showCollection(collection);


// Just did this to demonstrate the alternet means of notation and bring up the var question I had
// function showCollection_alt(array){
//   console.log(array.length); // logs number of albums in array
//
//   // I got a comment about using var, but it was an unitential usage as its part of an auto fill package
//   // on atom. I was somewhat curious why var would be "banned"? I'm guessing its too specific maybe? I may also ask in class
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i].Title, 'by', array[i].Artist, 'published in', array[i].Release);
//   }
//  return true;
// }
//
// showCollection_alt(collection);
