const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});





//create a photo
/*Photo.create({
  title: 'Photo Title 2',
  description: 'Photo Description 2 Lorem Ipsum',
});*/

// Read a photo

/*Photo.find({}, (err, data) => {
  console.log(data);
});*/

// Update a photo

/*const id = "60af5bcc444bc207c8df03fa";

Photo.findByIdAndUpdate(
    id,
    {
        title: "Photo title 1 updated",
        description: "Photo description 1 updated",
    },
    {
        new: true
    },
    (err,data) => {
        console.log(data);
    }
)*/

// Delete a photo
const id = '60af5bcc444bc207c8df03fa';

Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed..');
});
