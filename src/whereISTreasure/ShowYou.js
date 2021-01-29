import react from 'react'

const bitter = {personaje: "pain", anime: "naruto", image: "https://tse1.mm.bing.net/th?id=OIP.Tqs0r8EyfR8QVCmnzDvI2gHaEK&pid=Api&P=0&w=283&h=160"}

class ShowCharacter extends react.Component {
    state= { image: '' } 
    showImage = () => {
        // this.setState({image: bitter.image})
        console.log(this.state.image);
        this.setState({image: bitter.image})
    }

    EraseImage = () => {
        this.setState({image: ''})
    }

    render(){
        return(
            (
            <div>
            <h3>{bitter.personaje} - {bitter.anime}</h3>
            <button onClick={this.showImage}>Click here</button>
            <button onClick={this.EraseImage}>Delete image</button>
            <p>{this.state.image}</p>
            <img src={this.state.image} alt="we suppose"/>
            </div>
            )
        )
    }
}

export default ShowCharacter;