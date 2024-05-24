import { Component } from "react";

class Btn extends Component{
    constructor(props) {
      super(props)
    }
  
    render() {
      return (
        <>
          <a className='btn' onClick={ this.props.click }>{ this.props.title }</a>
        </>
      );
    }
}

export default Btn;