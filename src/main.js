var button = document.querySelector(".btn");
var nameProf = document.querySelector(".name");
var image = document.querySelector("#image");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var phone = document.querySelector(".phone");
var cell = document.querySelector(".mobile");
var dob = document.querySelector(".dob");
var city = document.querySelector(".city");
var url = "https://randomuser.me/api/";
var rowAnimate = document.getElementsByClassName("row")[0];
var x = document.getElementById("myAudio"); 
var enterButton = document.querySelector(".tik");

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
}

// window.onload = function() {
//     var context = new AudioContext();
//   }
document.addEventListener('click', musicPlay);
function musicPlay() {
    playAudio();
    document.removeEventListener('click', musicPlay);
}


fetch(url)
.then(function(request){
    if(!request.ok){
        throw Error(request.status);
    }
    return request.json();
})
.then(function(response){
    var data = response.results[0];
    //rowAnimate.style.webkitAnimationPlayState = "running";
    rowAnimate.classList.add("myAnimate");
    nameProf.innerHTML = data.name.title + " " + data.name.first + " " + data.name.last;
    city.innerHTML = data.location.city + ", " + data.location.state + ", " + data.location.country;
    username.innerHTML = data.login.username;
    email.innerHTML = data.email;
    dob.innerHTML = data.dob.date.slice(0, 10);
    phone.innerHTML = data.phone;
    cell.innerHTML = data.cell;
    image.src = data.picture.large;
    setTimeout(function(){
        //rowAnimate.style.webkitAnimationPlayState = "paused";
        rowAnimate.classList.remove("myAnimate");
        rowAnimate.style.opacity = 1;
    }, 900);
    
})
.catch(function(error){
    alert(error);
});

button.addEventListener("click", function(){

    fetch(url)
    .then(function(request){
        if(!request.ok){
            throw Error(request.status);
        }
        return request.json();
    })
    .then(function(response){
        var data = response.results[0];
        //rowAnimate.style.webkitAnimationPlayState = "running";
        rowAnimate.classList.add("myAnimate");
        setTimeout(function(){
            nameProf.innerHTML = data.name.title + " " + data.name.first + " " + data.name.last;
            city.innerHTML = data.location.city + ", " + data.location.state + ", " + data.location.country;
            username.innerHTML = data.login.username;
            email.innerHTML = data.email;
            dob.innerHTML = data.dob.date.slice(0, 10);
            phone.innerHTML = data.phone;
            cell.innerHTML = data.cell;
            image.src = data.picture.large;
        }, 400);
        setTimeout(function(){
            //rowAnimate.style.webkitAnimationPlayState = "paused";
            rowAnimate.classList.remove("myAnimate");
            rowAnimate.style.opacity = 1;
        }, 900);
        
    })
    .catch(function(error){
        alert(error);
    });
})

enterButton.addEventListener("click", function(){
    
})
