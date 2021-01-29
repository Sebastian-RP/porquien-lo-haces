import react from 'react'
//flat ui colors 2 https://flatuicolors.com/

const wachedData = [
  {id: 1, personaje: "Rock Lee", anime: "Naruto", image: "http://images6.fanpop.com/image/photos/36400000/Rock-Lee-image-rock-lee-36450126-640-480.jpg"}, 
  {id: 2, personaje: "konan", anime: "Naruto", image: "http://vignette2.wikia.nocookie.net/naruto-bleach/images/a/a3/800px-Konan_Anime_1.jpg/revision/latest?cb=20110207234151"}, 
  {id: 3, personaje: "Midoriya", anime: "Boku no hero", image: "https://1.bp.blogspot.com/-8070srcHS88/WvWzbDyLslI/AAAAAAAAFsk/Lg-yLqEqVXUA85V72UU62bGK2pXpn6KugCLcBGAs/w1200-h630-p-k-no-nu/Izuku+Midoriya+My+Hero+Boku+no+BNHA+MHA+academia+anime+new+episode+manga+deku+all+might+blog+blogspot.png"}, 
  {id: 4, personaje: "Shikamaru", anime: "Naruto", image: "https://img00.deviantart.net/4fff/i/2012/214/a/7/shikamaru_by_kayo1996-d59lwut.png"},
  {id: 5, personaje: "kirishima", anime: "Boku no hero", image: "https://s-media-cache-ak0.pinimg.com/736x/61/bf/e4/61bfe457521d734b5872a1fd9810c917.jpg"},
  {id:6, personaje: "mina", anime: "boku no hero", image:"https://www.nautiljon.com/images/perso/00/14/ashido_mina_15641.jpg?1524085446"}
]

class ClickOnLink extends react.Component{
    state= {image: ''}

    render(){
        return(
            wachedData.map((wachedElement) => (
            <div style={{backgroundColor: '#c8d6e5', paddingLeft: '0.5rem'}}>
                <h3 style={{cursor: 'pointer', color: '#1dd1a1'}} onClick={()=>{this.setState({image: wachedElement.image}) }}>{wachedElement.id} - {wachedElement.personaje} - {wachedElement.anime}</h3>
                <img src={this.state.image} style={{maxHeight: '25vh'}}></img>
                <hr/>
            </div>
            ))
        )
    }
}

export default ClickOnLink;