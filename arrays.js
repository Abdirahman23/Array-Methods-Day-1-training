let inventors = [
    {first:"galelio" , last:"galeli" , year : 1800 , passed: 1955},
    {first: "poul" , last:"johnson" , year : 1700 , passed: 1925},
    {first:"schols'" , last:"bardons" , year : 1708 , passed: 1855},
    {first:"basto" , last:'doglous' , year : 1600 , passed: 1755},
    {first:"albert" , last:'mongos' , year : 1534 , passed: 1625},
    {first:"khabayb" , last: 'young ', year : 1902 , passed: 1975},
    {first:"baba ", last: "yelow ", year : 1540 , passed: 1655},
    
]


// array protoType is filter()
// filter the inventors who born in 1500s

/*let fiftees = inventors.filter(function(inventor){
    if(inventor.year >=1500 && inventor.year < 1600){
    return true
    }
})*/

let fiftees = inventors.filter(inventor=>(inventor.year >= 1500 && inventor.year< 1600) )


// array protoType map
// give array of inventors first , last names 
let fullName = inventors.map(function(inventor){

//    return `${inventor.first}  ${inventor.last}`

})

// console.table(fullName)

// array prototype.sort
// sort them by birthday olders to youngst

let order = inventors.sort(function(a,b){
    if(a.year > b.year){
        return 1
    }
    else{
        return -1
    }
})


// array prtotype reduce
// how many years all they live

let total = inventors.reduce(function(totalYears, inventor){
   return totalYears = totalYears + (inventor.passed - inventor.year)
},0)

// console.log(total)

//array prtotype sort
// sort oldest to the youngest

let older = inventors.sort(function(latest,next){
    let latestGuy = latest.passed - latest.year
    let nextGuy = next.passed - next.year

    if(latestGuy > nextGuy){
        return -1
    }
    else{
        return 1
    }
})
//  console.table(older)

//array prototype sort 
// sort them alphabelically by last name

let alpha = inventors.sort(function(lastOne,nextOne){
       console.log()
})


// aray method reduce

// sum up all of them

const foods = [
    {dailyFoods :'bariis' ,
      price :10000 ,
      time : 15 } ,
    {heavyFoods :'hilibgeel ',
      price : 80000,
      time : 11} ,
    {fastFoods :'saamuse ',
      price : 5000,
     time : 17 }

]

// select each object

let foodsDaily = foods.map(function(dailyFood,){
    return dailyFood
})

// console.log(foods[0].dailyFoods)

function foodTime (){

    if(foods[0].time < 12){
      console.log ("I am sorry there is no" +" "+ foods[0].dailyFoods)
    }
    else if (foods[0].time == 12){
        console.log (foods[0].dailyFoods +" "+ "is Available")
    }
    else{
        return "no bariis is here"
    }
}

// console.log(foodTime())








