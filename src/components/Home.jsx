import React from 'react';
import { connect } from 'react-redux';
import {  } from '../actions/pagedata';


class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){

      console.log('Home componentWillMount');
    }
    componentDidMount(){
      console.log('Home componentDidMount');

    }
    shouldComponentUpdate(nextProps, nextState){
      console.log('Home shouldComponentUpdate');
    }
    componentWillUpdate(){
      console.log('Home componentWillUpdate');
    }
    componentDidUpdate(){
      console.log('Home componentDidUpdate');
    }
    render(){
      return (
        <div className="home">
         
        </div>
      )
    }
}

export default connect(
   state => ({ 

  }),
   {  }
)(Home)