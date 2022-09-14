const tog = document.getElementsByClassName("toggle")[0]
const link = document.getElementsByClassName("links")[0]

let state=false
tog.addEventListener("click", function (e) {
    
    e.preventDefault();
    link.classList.toggle("active");

    

})
// const link = document.querySelector(".links")
// const tog = document.querySelector(".toggle")
// let state = false
// tog.addEventListener("click", function () {

    
//     if (state)
//     {
//         link.style.display = "none"
        
//     }

//     else
//     {
//        link.style.display = "flex" 
//     }
//     state = !state
// })
