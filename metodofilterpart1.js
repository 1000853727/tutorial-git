const numeros = [1,2,3,4,5,6,7,8,9]

const mascota = [
	{nombre: 'Puchini',edad: 12, raza: 'perro' },
	{nombre: 'chanchito feliz',edad: 3,raza: 'perro'},
	{nombre: 'Pulga',edad: 10,raza: 'perro'},
	{nombre: 'Pelusa',edad: 16, raza: 'gato'}
]

const numerosfiltrados = numeros.filter(x => x < 5)
console.log(numerosfiltrados);

const perros1 = mascota.filter(x => x.raza == 'perro')
console.log(perros1);

//HOLA//

//BORRAR/