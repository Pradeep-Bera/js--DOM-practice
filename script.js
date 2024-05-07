// let newPost = document.getElementById('newPost');
// console.log(newPost);

// newPost.addEventListener('change', (e) => {
//     e.target.value.length == 0
//         ? newPost.style.border = "5px solid red"
//         : newPost.style.border = "5px solid green"

// });

let newPost = document.getElementById('newPost');
let button = document.querySelector('.add');


button.addEventListener('click', listItem);

function listItem() {
    let blogTitle = newPost.value
    let li = document.createElement('li');
    let p = document.createElement('p');
    p.innerHTML = blogTitle;
    li.appendChild(p);
    let allPost = document.getElementById('allPost');
    allPost.appendChild(li);
};