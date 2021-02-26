const arr = new Array (1 ,15 , 150 ,1500, "Jan", 5525, "Henryk")

// zadanie 1 

console.log(arr.length)

arr.forEach(nau =>{
    console.log(nau)
})

// zadanie 2 

const większeOd10 = arr.some(item => item > 1)
console.log(większeOd10)

// zadanie 3 

const szukanie = arr.indexOf("Jan")
console.log(szukanie)