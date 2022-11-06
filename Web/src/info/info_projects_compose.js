import notes1 from '../assets/images/jetpack_compose/notes_app/notes1.png'
import notes2  from '../assets/images/jetpack_compose/notes_app/notes2.png'
import notes3  from '../assets/images/jetpack_compose/notes_app/notes3.png'
import notes4  from '../assets/images/jetpack_compose/notes_app/notes4.png'
import notes5 from '../assets/images/jetpack_compose/notes_app/notes5.png'

import calculator1 from '../assets/images/jetpack_compose/calculator_app/calculator1.png'
import calculator2  from '../assets/images/jetpack_compose/calculator_app/calculator2.png'
import calculator3  from '../assets/images/jetpack_compose/calculator_app/calculator3.png'
import calculator4  from '../assets/images/jetpack_compose/calculator_app/calculator4.png'


const listOfProjectsJetpackCompose = [
            {
                mainImage: notes1,
                listOfImage: [notes1,notes2,notes3,notes4,notes5],
                description: "Pequeña Aplicación desarrollada con Jetpack Compose. Algunas de las funcionalidades de esta aplicación son: ",
        functionalities: [ 
            "-Poder mostrar Las notas en distintas disposiciones.",
            "-Poder marcar la prioridad que deseas tener en cada nota.",
            "-Elegir el color de cada una de ellas.",
            "-Almacenamiento local de las notas utilizado la base de datos ROOM.",
            ],
                date: "8/19/2022",
                name: "Notes App",
                tag: "Jetpack Compose",
                link:"https://github.com/GbatZ2/NotesApp_JetpackCompose"
            },
            {
                mainImage: calculator1,
                listOfImage: [calculator1,calculator2,calculator3,calculator4],
                description: "Pequeña Aplicación desarrollada con Jetpack Compose. Algunas de las funcionalidades de esta aplicación son: ",
                functionalities: [ 
                    "-Capacidad de realizar operaciones simples.",
                    "-Poder cambiar entre tema oscuro y tema claro.",
                    ],
                date: "8/20/2022",
                name: "Calculator App",
                tag: "Jetpack Compose",
                link:"https://github.com/GbatZ2/CalculatorApp_JetpackCompose"
            },
            
    ]
    

    
export default listOfProjectsJetpackCompose;