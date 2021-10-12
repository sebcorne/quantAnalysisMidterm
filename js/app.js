var mainEle=document.body.querySelector(".gurenyuu")
var secondEle=document.body.querySelector(".gurenyuu2")
var gurenyumbah=5
var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];
var l=1

function addingAOne (x){
    gurenyumbah=x+1
    secondEle.innerHTML=gurenyumbah
}
for (var i=0; i<list.length; i++) {
    var daEle = document.createElement("div")
    var nameEle = document.createElement("h2")
    var ageEle = document.createElement("h4")

    nameEle.innerHTML="Name:" + list[i].name
    ageEle.innerHTML="Age:" +  list[i].age

    if (list[i].age>25) {
        nameEle.innerHTML = "Name:" +list[i].name.fontcolor("#178605")
        //var wooo= list[i].age.toString()
        ageEle.innerHTML = "Age:" + list[i].age.toString().fontcolor("#178605")

    }


    daEle.appendChild(nameEle)
    daEle.appendChild(ageEle)
    mainEle.appendChild(daEle)
}


secondEle.innerHTML=gurenyumbah
document.body.querySelector(".necoArcChaos").addEventListener("click", function(){addingAOne(gurenyumbah)} )