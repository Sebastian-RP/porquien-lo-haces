import react from 'react'
// https://riptutorial.com/reactjs/example/29827/basic-example for examples

const wached = [
  {id: 1, personaje: "Rock Lee", anime: "Naruto"}, 
  {id: 2, personaje: "konan", anime: "Naruto"}, 
  {id: 3, personaje: "Modoriya", anime: "Boku no hero"}, 
  {id: 4, personaje: "Shikamaru", anime: "Naruto"},
  {id: 5, personaje: "kirishima", anime: "Boku no hero"},
  {id:6, personaje: "mina", anime: "boku no hero"}
]

function ShowShowed() {
    return(
        wached.map(elementWached => 
            <div>
                <h3>{elementWached.id} - {elementWached.personaje} - {elementWached.anime}</h3>
                <hr/>
            </div>
        )
    )
}

export default ShowShowed;