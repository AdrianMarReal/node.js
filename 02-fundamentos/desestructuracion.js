const deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'regeneracion',
    //edad : 50,
getNombre(){
    return `${this.nombre} ${this.apellido} ${this.poder} ${this.edad}`
}
}

//console.log(deadpool.getNombre())


//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

//const {nombre, apellido, poder, edad = 0} = deadpool

//console.log(nombre, apellido, poder);

function imprimeHeroe({nombre, apellido, poder, edad = 0} ) {
    console.log(nombre, apellido, poder, edad);
}

//imprimeHeroe(deadpool)

const heroes = ['Deadpool', 'Baman', 'sUPERMAN'];
//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];
const [ , , h3] = heroes;

console.log(h3)
