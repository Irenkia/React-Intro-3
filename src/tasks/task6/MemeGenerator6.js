import React, { Component } from 'react';
import './css6/Task6_1.css';

class MemeGenerator6 extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxxkZYOZmI_os8-j_7-1bNZKM-aUueK_sbg&usqp=CAU",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return (
            <div>
                <h3>Задание № 6_1</h3>
                <h2>MEME GENERATOR SECTION</h2>
                <div className="picture">
                    <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Problem?" />
                    <p>Meme Generator  </p>
                </div>

                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Заголовок "
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Текст "
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Сгенерировать</button>
                </form>
                <div className="meme">
                    <img align="center" src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator6;
