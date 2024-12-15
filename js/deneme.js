/*
/*const person = {
    ad: 'Zeynep',
    soyad: 'Bora',
    yas: 22,
    hobiler: ['yüzme', 'okuma', 'anime'],
    adres: {
        sehir: 'İstanbul',
        ulke: 'Türkiye',
        ilce: 'Beyoğlu'
    }

}
*/
/*console.log(person.hobiler.indexOf('okuma'));
console.log(person.adres.sehir);
person.email='zeynepbora@gmail.com';
console.log(person);*/

/*console.log(person.ad); = 
const {ad, soyad, adres:{sehir}}= person;
console.log(ad);*/

const todos = [
    {
        id: 1,
        text: 'Alışveriş zamanı',
        iscompleted: true
    },
    {
        id: 2,
        text: 'Toplantı yapıldı',
        iscompleted: true
    },
    {
        id: 3,
        text: 'Okula gitmek',
        iscompleted: false
    }
];
/*const todoJSON= JSON.stringify(todos);
console.log(todoJSON);*/

for (let i = 0; i < todos.length; i++) { //3e kadar demek yerine todosun sahip oldugu deger kadar demek daha pro
    console.log(todos[i].text);// 3 değerdeki textler
}
for (let todo of todos) { //todo i de olabilir değerleri tek tek yazdırdı
    console.log(todo);//todo.text dersek sadece textler
}

// forEach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text);
});

const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText); // ['alısveris zamanı','toplantı yapıldı','okula gitmek'] alt alta değil bu sekilde gözüküyor

/*const todoCompleted = todos.filter(function (todo) {
    return todo.iscompleted === true;
});
console.log(todoCompleted); //true olanları filtreledi
*/
const todoCompleted = todos.filter(function (todo) {
    return todo.iscompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);// completed olanların textlerini çağırdı

// || OR  && AND
