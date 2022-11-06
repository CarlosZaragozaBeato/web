//**Notes
import notes1 from '../../assets/images/jetpack_compose/notes_app/notes1.png'
import notes2  from '../../assets/images/jetpack_compose/notes_app/notes2.png'
import notes3  from '../../assets/images/jetpack_compose/notes_app/notes3.png'
import notes4  from '../../assets/images/jetpack_compose/notes_app/notes4.png'
import notes5 from '../../assets/images/jetpack_compose/notes_app/notes5.png'
import notes6 from '../../assets/images/jetpack_compose/notes_app/notes6.png'
import notes7  from '../../assets/images/jetpack_compose/notes_app/notes7.png'
import notes8  from '../../assets/images/jetpack_compose/notes_app/notes8.png'
import notes9  from '../../assets/images/jetpack_compose/notes_app/notes9.png'
import notes10 from '../../assets/images/jetpack_compose/notes_app/notes10.png'
import notes11 from '../../assets/images/jetpack_compose/notes_app/notes11.png'
import notes12  from '../../assets/images/jetpack_compose/notes_app/notes12.png'
import notes13  from '../../assets/images/jetpack_compose/notes_app/notes13.png'
import notes14  from '../../assets/images/jetpack_compose/notes_app/notes14.png'
import notes15 from '../../assets/images/jetpack_compose/notes_app/notes15.png'

//**Calculator
import calculator1 from '../../assets/images/jetpack_compose/calculator_app/calculator1.png' 
import calculator2 from '../../assets/images/jetpack_compose/calculator_app/calculator2.png' 
import calculator3 from '../../assets/images/jetpack_compose/calculator_app/calculator3.png' 
import calculator4 from '../../assets/images/jetpack_compose/calculator_app/calculator4.png' 

//*Weather
import weather1 from '../../assets/images/jetpack_compose/weather_app/weather1.png' 
import weather2 from '../../assets/images/jetpack_compose/weather_app/weather2.png' 
import weather3 from '../../assets/images/jetpack_compose/weather_app/weather3.png' 
import weather4 from '../../assets/images/jetpack_compose/weather_app/weather4.png' 
import weather5 from '../../assets/images/jetpack_compose/weather_app/weather5.png' 
import weather6 from '../../assets/images/jetpack_compose/weather_app/weather6.png' 
import weather7 from '../../assets/images/jetpack_compose/weather_app/weather7.png' 

//*Pomodoro
import pomodoro1 from '../../assets/images/jetpack_compose/pomodoro_app/pomodoro1.png' 
import pomodoro2 from '../../assets/images/jetpack_compose/pomodoro_app/pomodoro2.png' 
import pomodoro3 from '../../assets/images/jetpack_compose/pomodoro_app/pomodoro3.png' 
import pomodoro4 from '../../assets/images/jetpack_compose/pomodoro_app/pomodoro4.png' 
import pomodoro5 from '../../assets/images/jetpack_compose/pomodoro_app/pomodoro5.png' 
import pomodoro6 from '../../assets/images/jetpack_compose/pomodoro_app/pomodoro6.png'


//*Rock,Paper Scissors
import rps1 from '../../assets/images/jetpack_compose/rps/rps1.png' 
import rps2 from '../../assets/images/jetpack_compose/rps/rps2.png' 
import rps3 from '../../assets/images/jetpack_compose/rps/rps3.png' 
import rps4 from '../../assets/images/jetpack_compose/rps/rps4.png' 
import rps5 from '../../assets/images/jetpack_compose/rps/rps5.png' 
import rps6 from '../../assets/images/jetpack_compose/rps/rps6.png' 
import rps7 from '../../assets/images/jetpack_compose/rps/rps7.png'
import rps8 from '../../assets/images/jetpack_compose/rps/rps8.png' 
import rps9 from '../../assets/images/jetpack_compose/rps/rps9.png' 
import rps10 from '../../assets/images/jetpack_compose/rps/rps10.png'  


//*Tic Tac Toe Game

import ttt1 from '../../assets/images/jetpack_compose/tic_tac_toe_game/ttt1.png' 
import ttt2 from '../../assets/images/jetpack_compose/tic_tac_toe_game/ttt2.png' 
import ttt3 from '../../assets/images/jetpack_compose/tic_tac_toe_game/ttt3.png' 
import ttt4 from '../../assets/images/jetpack_compose/tic_tac_toe_game/ttt4.png' 
import ttt5 from '../../assets/images/jetpack_compose/tic_tac_toe_game/ttt5.png' 





const listOfProjectsJetpackComposeSpanish = [
            {
                id: 0,
                mainImage: notes1,
                listOfImage: [notes1,notes2,notes3,notes4,notes5,notes6,notes7,notes8,notes9,notes10,notes11,notes12,notes13,notes14,notes15 ],
                steps: [
                "-Esta aplicación está constituida de 7 pantallas.(Splash, Access, Login, Register, Home, Profile, Create)",
                "-Las notas de nuestra aplicación serán almacenadas en una base de datos MySql que actualmente solo se podrá consultar de manera local.",
                "-Esta aplicación actualmente implementa Clean Architecture. con uso de Dependency Injection, Use Cases y Almacenamiento Local con Room.",
                "-Con esta aplicación mi objetivo era poder trabajar con Mysql y Jetpack Compose con la ayuda de Node.js para el backend."],
                date: "8/19/2022",
                name: "Notas",
                tag: "Jetpack Compose",
                link:"https://github.com/GbatZ2/NotesApp_JetpackCompose",
                language:"es",
            },
            {
                id: 1,
                mainImage: calculator1,
                listOfImage: [calculator1,calculator2,calculator3,calculator4],
                steps: ["lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum"],
                date: "8/20/2022",
                name: "Calculadora",
                tag: "Jetpack Compose",
                link:"https://github.com/GbatZ2/CalculatorApp_JetpackCompose",
                language:"es",
            },
            {
                id: 2,
                mainImage: weather1,
                listOfImage: [weather1,weather2,weather3,weather4,weather5,weather6,weather7],
                steps: ["lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum"],
                date: "7/20/2022",
                name: "Tiempo",
                tag: "Jetpack Compose",
                link : "https://github.com/GbatZ2/WeatherApp",
                language:"es",
            },  
            {
                id: 3,
                mainImage: pomodoro1,
                listOfImage: [pomodoro1,pomodoro2,pomodoro3,pomodoro4,pomodoro5,pomodoro6],
                steps: ["lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum"],
                date: "8/30/2022",
                name: "Pomodoro App",
                tag: "Jetpack Compose",
                link : "https://github.com/GbatZ2/PomodoroApp",
                language:"es",
            }, 
            {
                id: 4,
                mainImage: rps1,
                listOfImage: [rps1,rps2,rps3,rps4,rps5,rps6,rps7,rps8,rps9,rps10],
                steps: ["lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum"],
                date: "9/19/2022",
                name: "Piedra, Papel, Tijeras App",
                tag: "Jetpack Compose",
                link : "https://github.com/GbatZ2/Rock-Paper-Scissors",
                language:"es",
            }, 
            {
                id: 5,
                mainImage: ttt1,
                listOfImage: [ttt1,ttt2,ttt3,ttt4,ttt5],
                steps: ["lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum","lorem ipsum"],
                date: "9/24/2022",
                name: "Tres en raya",
                tag: "Jetpack Compose",
                link : "https://github.com/GbatZ2/Tic-Tac-Toe-Game",
                language:"es",
            }, 
        
    ]

    

    
export default listOfProjectsJetpackComposeSpanish;