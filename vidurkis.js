  
const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]//6 vidurkis
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]//6 vidurkis
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]//7 vidurkis
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]//8 vidurkis
    },
]


// Isspausdina mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki
let baluVidurkis = []
let minVidurkis = 0;
let suma = 0;

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++){
    suma += (data[i].marks[j])
    }
    baluVidurkis[i] = suma / data[i].marks.length
    data[i].vidurkis = baluVidurkis[i]
    suma = 0;
}
minVidurkis = Math.min(...baluVidurkis)

for (let i = 0; i < data.length; i++){
    
    if(data[i].vidurkis == minVidurkis){
        console.log("Prasciausias pazymiu vidurkis: ", data[i].name, data[i].vidurkis);
    }
    
}
console.log("-----------------");

// Isspausdina mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki
baluVidurkis = []
let maxVidurkis = 0;
suma = 0;

for (let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].marks.length; j++){
    suma += (data[i].marks[j])
    }
    baluVidurkis[i] = suma / data[i].marks.length
    data[i].vidurkis = baluVidurkis[i]
    suma = 0;
}
maxVidurkis = Math.max(...baluVidurkis)
for (let i = 0; i < data.length; i++){
    
    if(data[i].vidurkis == maxVidurkis){
        console.log("Geriausias pazymiu vidurkis: ", data[i].name, data[i].vidurkis);
    }
    
}
console.log("-----------------");