
let bar = document.querySelector(".toggleBar");
let sidebar = document.querySelector(".sidebar")
let menuToggle = document.querySelector(".menuToggle")


bar.onclick =()=>{
    bar.classList.toggle('fa-xmark');
    sidebar.classList.toggle('active');
}

// let count = 0;
// bar.onclick = ()=>{
//     if(count == 0){
//         bar.classList.toggle('fa-xmark') 
//         sidebar.classList.toggle('active')
//         count = 1;
//     }else{
//         // bar.classList.toggle('fa-bars')
//         sidebar.style.overflow = "hidden";
//         bar.classList.remove('fa-xmark')
//         sidebar.classList.remove('active')
//         count = 0;
//     }
    
// }


    


























// const stranger = document.querySelector('h2');
// const add = document.querySelector('.add'); 
// const remove = document.querySelector('.remove');

// const cancel = document.querySelector('.cancel')


// add.addEventListener("click",function(){
//     stranger.innerHTML = "Friend";
//     add.style.display = 'none';
//     remove.style.display = 'none';
//     // add.classList.toggle('cancel')
//     cancel.style.display = 'block'
    
// })
// remove.addEventListener("click",function(){
//     stranger.innerHTML = "Stranger";
//     add.style.display = 'block'
// })

// cancel.addEventListener("click",function(){
//     cancel.style.display = 'none'
//     add.style.display = 'block'
//     remove.style.display = 'block'
// })