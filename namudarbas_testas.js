
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

// Isspausdina mokinio varda ir pazymi, kuris turi prasciausia pazymi

let prasciausiBalai = [];
let min = 0;

for (let i = 0; i < data.length; i++) {
    prasciausiBalai[i] = (Math.min(...data[i].marks))
}
min = Math.min(...prasciausiBalai)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].marks.length; j++)
        if (data[i].marks[j] == min) {
            console.log("Prasciausias pazymis: ", data[i].name, min);
        }
}

console.log("-----------------");

// Isspausdina mokinio varda ir pazymi, kuris turi geriausia pazymi

let geriausiBalai = [];
let max = 0;

for (let i = 0; i < data.length; i++) {
    geriausiBalai[i] = (Math.max(...data[i].marks))
}
max = Math.max(...geriausiBalai)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].marks.length; j++)
        if (data[i].marks[j] == max) {
            console.log("Geriausias pazymis: ", data[i].name, max);
        }
}

console.log("-----------------");

// Isspausdina mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki


//console.log("-------NESIGAUNA----------");

// Isspausdina mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki


//console.log("---------NESIGAUNA--------");

// Isspausdina mokinio varda, jei jis turi pazymi 8

for (var i = 0; i < data.length; i++) {
    let turiAstuonis = false;
    for (var j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] == 8) {
            turiAstuonis = true;

        }
    }

    if (turiAstuonis) {
        console.log('Mokinys ' + data[i].name + ' turi pazymi 8');
    }

}

console.log("-----------------");

// Isspausdina mokinio varda, jei jis neturi pazymio 7

for (var i = 0; i < data.length; i++) {
    let turiSeptynis = false;
    for (var j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] == 7) {
            turiSeptynis = true;
        }
    }
    if (!turiSeptynis) {
        console.log('Mokinys ' + data[i].name + ' neturi pazymio 7');
    }
}