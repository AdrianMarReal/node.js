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
            salario: '2000'
        }
        ]                                                                                                                       

        const id = 10;


        const getEmpleado = (id) => {
            const empleado = empleados.find( e => e.id ===id )?.nombre
            const promesa = new Promise ((resolve, reject) => {
            if(empleado){
                resolve(empleado);
            }else{
                reject(empleado);
            }
            });
            return promesa
        }

        const getSalario = () => {
            return new Promise ((resolve, reject) => {
            const salario = salarios.find(s => s.id === id)?.salario;
            (salario)
            ? resolve(salario)
            :reject('No existe la id con ese salarios');
            });
        }


        
        //getSalario(id)
          //  .then(salario => console.log(salario))
            //.catch(err => console.log(err));
        

        getEmpleado(id)
            .then(empleado => {
                nombre = empleado;
                return getSalario(id)
            })
            .then(salario => console.log('El emeplado', nombre, 'tiene una slario de:', salario))
            .catch(err => console.log(err));