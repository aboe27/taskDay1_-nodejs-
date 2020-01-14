var people = [
    { name: "Steve", friend: true },
    { name: "Dan", friend: false },
    { name: "Bart", friend: true },
    { name: "Sarah", friend: false },
    { name: "Michelle", friend: false },
    { name: "Holly", friend: true }
];

//let friend = people.filter(people => people(friend=true));
var friends = people.filter(function (people) {
    return people.friend==true;
})

console.log(friends)