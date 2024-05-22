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

        const getInfoUsuario = async() => {
            try {
                const empleado = await getEmpleado(id);
            const salario = await getSalario(id);
            return `El slaario del empleado ${empleado} es de ${salario}`
            } catch (error) {
                throw error;
            }
        }

        const id = 3
        

        getInfoUsuario(id)
            .then(msg => {
                console.log('Todo bien')
                console.log(msg)
            })
            .catch(err => {
                console.log('Todo Mal')
                console.log(err)
            });