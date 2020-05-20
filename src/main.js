var button = document.querySelector(".btn");
var nameProf = document.querySelector(".name");
var image = document.querySelector("#image");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var city = document.querySelector(".city");
var url = "https://randomuser.me/api/";

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
        nameProf.innerHTML = data.name.title + " " + data.name.first + " " + data.name.last;
        city.innerHTML = data.location.city;
        username.innerHTML = data.login.username;
        email.innerHTML = data.email;
        image.src = data.picture.large;
    })
    .catch(function(error){
        alert(error);
    })
})