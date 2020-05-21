var button = document.querySelector(".btn");
var nameProf = document.querySelector(".name");
var image = document.querySelector("#image");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var city = document.querySelector(".city");
var url = "https://randomuser.me/api/";
var rowAnimate = document.getElementsByClassName("row")[0];

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
    city.innerHTML = data.location.city;
    username.innerHTML = data.login.username;
    email.innerHTML = data.email;
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
            city.innerHTML = data.location.city;
            username.innerHTML = data.login.username;
            email.innerHTML = data.email;
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

