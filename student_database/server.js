const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/student_database');
mongoose.connection.on('connected', () => console.log('connected to mongo database'));

// Create a students collection, each student must have name, home state, lucky number, and birthday.
var studentSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    home_state: {
        type: String,
        required: true,
    },
    lucky_number: {
        type: Number,
        required: true,
    }, birthday: {
        month: {
            type: Number,
            required: true,
        },
        day: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
    }
} , {
        timestamps: true,
});

// Creating the student model
var Student = mongoose.model('Student', studentSchema);

/*
// Create 5 students
var tom = new Student();
tom.name = "tom";
tom.home_state = "california";
tom.lucky_number = 12;
tom.birthday = {
    month:2,
    day:22,
    year:1982,
};

var adrianna = new Student();
adrianna.name = "adrianna",
adrianna.home_state = "washington",
adrianna.lucky_number = 5,
adrianna.birthday = {
        month:9,
        day:1,
        year:1991
};

var dee = new Student();
dee.name = "dee",
dee.home_state = "california",
dee.lucky_number = 8,
dee.birthday = {
        month:12,
        day:12,
        year:2012,
};

var greg = new Student();
greg.name = "greg",
greg.home_state = "washington",
greg.lucky_number = 1,
greg.birthday = {
        month:6,
        day:11,
        year:1994,
};

var thanos = new Student();
thanos.name = "thanos",
thanos.home_state = "unknown",
thanos.lucky_number = 100,
thanos.birthday = {
        month:1,
        day:1,
        year:1
};

// Save the five students to the database
tom.save(function(err){
    console.log("tom saved.")
});

adrianna.save(function(err){
    console.log("adrianna saved.")
});

dee.save(function(err){
    console.log("dee saved.")
});

greg.save(function(err){
    console.log("greg saved.")
});

thanos.save(function(err){
    console.log("Tom saved.")
});
*/

// This removes all students
/* 
Student.remove({}, function(err) {
    console.log("all students deleted.")
});
*/
/*
// Retrieve all students from california
Student.find({home_state:"california"}, function(err, students){
    console.log("Found all students from california:");
    console.log(students);
    console.log();
});

// Retrieve all students with a lucky number greater than 3
Student.find({lucky_number: {$gt: 3}}, function(err, students){
    console.log("Found all students with a lucky number greater than 3:");
    console.log(students);
    console.log();
});

// Retrieve all students with a lucky number less than or equal to 10
Student.find({lucky_number: {$lte: 10}}, function(err, students){
    console.log("Found all students with a lucky number less than or equal to 10:");
    console.log(students);
    console.log();
});

// Retrieve all students with a lucky number between 1 and 9 (inclusive)
Student.find({lucky_number: {$gte: 1, $lte: 9}}, function(err, students){
    console.log("Found all students with a lucky number between 1 and 9 (inclusive):");
    console.log(students);
    console.log();
});
*/

// Add interests field to each student ['coding', 'brunch', 'MongoDB']
Student.find({})
    .then(students => {
        for (let student of students) {
            student.interests = ['coding', 'brunch', 'MongoDB'];
            student.save(function(err, updatedStudent){console.log(updatedStudent.name, 'updated interests', updatedStudent.interests)});
        };
    });

// get all students
Student.find({}, function(err, students) {
    console.log();
    console.log("Found all students:");
    console.log(students);
    console.log();
});