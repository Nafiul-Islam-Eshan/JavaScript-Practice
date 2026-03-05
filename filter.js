// Find all students that have scored greater than or equal to 90 marks in science
const marks =[
    {id:1122001, science: 89},
    {id:1122002, science: 90},
    {id:1122003, science: 91},
    {id:1122004, science: 88},
    {id:1122005, science: 79},
    {id:1122006, science: 90},
    {id:1122007, science: 99},
    {id:1122008, science: 92},
];

const highestScorers = marks.filter(mark => mark.science >= 90);
console.log(highestScorers)