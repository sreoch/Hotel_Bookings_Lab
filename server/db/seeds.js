use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Peter",
        email: "peter@codeclan.com",
        checkedIn: true
    },
    {
        name: "Craig",
        email: "craig@codeclan.com",
        checkedIn: false
    },
    {
        name: "Stan",
        email: "stan@codeclan.com",
        checkedIn: true
    }

]);