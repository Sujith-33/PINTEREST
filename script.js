var arr = [
    {name: "Highway", image: "./image/one.jpg"},
    {name: "Waterfall", image: "./image/two.jpg"},
    {name: "snow", image: "./image/three.jpg"},
    {name: "Forest", image: "./image/four.jpg"},
    {name: "Smoking", image: "./image/five.jpg"},
    {name: "super car", image: "./image/six.jpg"},
    {name: "person", image: "./image/seven.jpg"},
    {name: "sun set", image: "./image/eight.jpg"},
    {name: "sky", image: "./image/nine.jpg"},
    {name: "solar system", image: "./image/ten.jpg"},
    {name: "painting", image: "./image/eleven.jpg"},
    {name: "room", image: "./image/twelve.jpg"},
    {name: "wan", image: "./image/thirteen.jpg"},
    {name: "car", image: "./image/fourteen.jpg"}
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();