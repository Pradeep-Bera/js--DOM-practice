// let newPost = document.getElementById('newPost');
// console.log(newPost);

// newPost.addEventListener('change', (e) => {
//     e.target.value.length == 0
//         ? newPost.style.border = "5px solid red"
//         : newPost.style.border = "5px solid green"

// });

// let newPost = document.querySelector('#newPost').value;
let button = document.querySelector('#add');
let ul = document.getElementById('allPost');

button.addEventListener('click', list);
// let newPost = document.querySelector('#newPost');



function list() {
    let post = newPost.value
    let li = document.createElement('li');
    let p = document.createElement('p');
    p.innerHTML = post;
    li.appendChild(p);
    ul.appendChild(li);
    document.querySelector('#newPost').value = '';

}


