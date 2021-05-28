import React, { Component } from 'react';

import {Link} from 'react-router-dom';


import styled from 'styled-components';

const Sprite = styled.img`
    width: 8em;
    height: 8em;
    
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
}
`;

export default class PokemonCard extends Component {
    state = {
        name:'',
        imageUrl:'',
        pokemonIndex:'',
        imageLoading: true,
        tooManyRequests: false
    }

    componentDidMount(){
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${pokemonIndex}.png`;
        

        this.setState({
            name,
            imageUrl,
            pokemonIndex
        });
    }
    render() {
        
        


        return (
            <div className = 'col-md-6 col-sm-7 mb-15 mx-auto'>
            <StyledLink to= {`pokemon/${this.state.pokemonIndex}`}> 
                <div className = "card">
                
                        <div className= "card-body">
                        <div className="row align-items-center">
                             
                        <div className="col-md-3">

                        <Sprite 
                            className= "card-img-top rounded mx-auto float-left"
                            onLoad={() => this.setState({imageLoading: false})}
                            onError={() => this.setState({tooManyRequests: true})}
                            src={this.state.imageUrl}
                        />
                        </div>
                        <div className= "col-md-9">
                                <h1>{this.state.name
                                    .toLowerCase()
                                    .split(" ")
                                    .map(
                                        letter => letter.charAt(0).toUpperCase() + letter.substring(1) 
                                        )
                                        .join(' ')}
                                </h1>
                            </div>  
                       </div> 
                            
                    </div>
                </div>
                </StyledLink>   
            </div>
        )
    }
}
