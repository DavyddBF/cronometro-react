import { Component } from "react";

class Btn extends Component{
    constructor(props) {
      super(props)
    }
  
    render() {
      return (
        <>
          <button className='btn' onClick={ this.props.click }>{ this.props.title }</button>
        </>
      );
    }
}

export default Btn;