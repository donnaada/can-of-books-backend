require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const Book = require('./models/book');

async function seed() {
  // seed the database with some books, so I can retrieve them
  // title: {type: String, required: true}, // String is shorthand for {type: String}
  // description: {type: String, required: true},
  // status: {type: String, required: true},

  // *** await Model.Create ({...})

  await Book.create({
    title: 'To Kill a Mockingbird',
    description: 'A novel set in the Depression-era South, depicting the story of racial injustice through the eyes of a young girl.',
    status: 'available'
  })
  
  console.log('To Kill a Mockingbird Created');

  await Book.create({
    title: 'The Great Gatsby',
    description: 'A novel that explores themes of decadence, idealism, resistance to change, and social upheaval in the Roaring Twenties.',
    status: 'available'
  })
  
  console.log('The Great Gatsby Created');

  await Book.create({
    title: 'The Catcher in the Rye',
    description: 'A novel that presents a story of teenage angst and alienation, featuring the protagonist Holden Caulfield and his struggles with identity and growing up.',
    status: 'available'
  })
  
  console.log('The Catcher in the Rye Created');

  await Book.create({
    title: '1984',
    description: 'A dystopian novel that explores themes of totalitarianism, censorship, and the power of language.',
    status: 'available'
  })
  
  console.log('1984 Created');
  
  
  
  

  mongoose.disconnect();
}

seed();