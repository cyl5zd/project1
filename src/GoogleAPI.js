import React, { Component } from "react"
import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY;

export default class GoogleAPI extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            places: []
        }
    }

    componentDidMount(){
        let url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Charlottesville&key=' + API_KEY
        
        axios
            .get(url)
            .then(res =>{
                console.log(res.data.results);
                this.setState({places:res.data.results})

            })
    }
    render(){
        return(
            <div>
                {this.state.places.map(place => <div>{place.name}</div>)}
                {this.state.places.map(place => <div>{place.price_level}</div>)}
                {this.state.places.map(place => <div>{place.rating}</div>)}
            </div>
        )
    }

}