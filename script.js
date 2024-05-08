// let newPost = document.getElementById('newPost');
// console.log(newPost);

// newPost.addEventListener('change', (e) => {
//     e.target.value.length == 0
//         ? newPost.style.border = "5px solid red"
//         : newPost.style.border = "5px solid green"

// });

// // let newPost = document.querySelector('#newPost').value;
// let button = document.querySelector('#add');
// let ul = document.getElementById('allPost');

// button.addEventListener('click', list);
// // let newPost = document.querySelector('#newPost');



// function list() {
//     let post = newPost.value
//     let li = document.createElement('li');
//     let p = document.createElement('p');
//     p.innerHTML = post;
//     li.appendChild(p);
//     ul.appendChild(li);
//     document.querySelector('#newPost').value = '';

// }

// class Person {
//     constructor(name, id, city) {
//         this.name = name;
//         this.id = id;
//         this.city = city;
//     }
//     showInfo() {
//         return `${this.name} lives in ${this.city} and their ID is ${this.id}`;
//     }
// }
// class Librarian extends Person { }
// let newLibrarian = new Librarian("jane", 1234, "New York");
// console.log(newLibrarian.showInfo());

// class Student extends Person {
//     constructor(name, id, city, houseNumber) {
//         super(name, id, city);
//         this.houseNumber = houseNumber;

//     }
//     showSudentInfo() {
//         return this.showInfo() + ` ${this.name} lives in ${this.city} and their ID is  and the H.NO is ${this.houseNumber}`;

//     }
// }


// let jhon = new Student('jhon', 543, 'Delhi', 456655)
// console.log(jhon.showSudentInfo());

function loadData() {
    let myRequest = new XMLHttpRequest();

    myRequest.open("GET", "https://www.randomuser.me/api");

    myRequest.send();

    myRequest.onreadystatechange = () => {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            console.log(myRequest.responseText);
            let convertedData = JSON.parse(myRequest.responseText);
            document.getElementById("username").innerHTML = convertedData.results.location.street.number;



        }
    };

}