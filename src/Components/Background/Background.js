import React from 'react';
import './style.css';


class Background extends React.Component
{

 constructor(props){
        super(props);
        
        this.state={
            selectedColor:"blue"
        };
    }
    changeBackgroundColor = (event) => {
    this.setState({
        selectedColor:event.target.value
    });
};
    render = () => {
            return(
                <div className="back"
                style={{
                    backgroundColor:this.state.selectedColor,

                }}
                >
                    <div className="colorbox">
                            <h2>Choose a color</h2>
                            <input onChange={this.changeBackgroundColor} type="color"/>
            <p>{this.state.selectedColor}</p>
                        </div>
                </div>
            );
    }
}

export default Background;