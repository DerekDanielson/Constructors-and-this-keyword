// Person Constructor
function Person(name, dob){
    this.name = name;
    //this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

//const brad = new Person('Brad', 25);
//const bob = new Person('Bob', 38);

const bob = new Person('Bob', '9-10-1981');
console.log(bob.calculateAge());