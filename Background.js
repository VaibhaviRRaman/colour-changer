import React from 'react'
import './style.css';
class Background extends React.Component{

    constructor(props){
        super(props);

        this.state={
            selectedColor: "white"
        }
    }

changeBackgroundColor = (event) => {
    //console.log("color changed",event.target.value);
    //const val =event.target.value;
    this.setState({
        selectedColor: event.target.value
    });
};
    //@override
    render = () => {
        return(

            <div
             className="back-container"
             style={{
                 backgroundColor:this.state.selectedColor
             }}>
                <div className="color-box">
                    <h2>Choose a color</h2>
                    <input onChange={this.changeBackgroundColor} type="color"/>
                    <p>{this.state.selectedColor}</p>
                    </div>
            </div>
        );

    };
}

export default Background;