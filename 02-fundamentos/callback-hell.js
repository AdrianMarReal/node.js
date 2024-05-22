const empleados = [
{
    id : 1,
    nombre: 'Fernando'
},
{
    id : 2,
    nombre: 'Linda'
},
{
    id : 3,
    nombre: 'Maria'
}
]


const salarios = [
    {
        id : 1,
        salario: '1000'
    },
    {
        id : 2,
        nombre: '2000'
    }
    ]

    const getEmpleado = (id, callback) => {
        const empleado = empleados.find( e => e.id ===id )
        if(empleado ){
           callback(null, empleado);
        }else {
            callback(`Empleado con id ${id} no existe`);
        }
    }




    const getSalario = (id, callback) => {
        const salario = salarios.find(e => e.id === id )
        if(salario){
            callback(null, salario);
        }else{
           callback(`No existe salario para el id ${id} `)
        }
    }

    getSalario (2, (err, empleado) => {
        if(err){
            console.log('error');
            return console.log(err);
        }
        console.log(empleado)
    })

    getEmpleado(1, (err, empleado) => {
        if(err){
            console.log('error');
            return console.log(err)
        }
        console.log('Empleado existe')
        console.log(empleado);
    })