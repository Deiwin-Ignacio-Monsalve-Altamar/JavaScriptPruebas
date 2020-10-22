import React from 'react';



class Button extends React.Component {

    state = {
        count: 0
    }

    handleClick = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        /* destructurando codigo */
        const {count} = this.state

        return (
            <div>
                <h1>Manzanas: {count}</h1>
                <button type="button" onClick={this.handleClick}>
                    Agregar
                </button>
            </div>            
        )
    }
}

export default Button;