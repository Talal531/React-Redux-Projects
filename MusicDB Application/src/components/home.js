import React, {Component} from 'react';

import Banner from '../components/banner';
import ArtistsList from '../components/artistlist';

const URL_ARTISTS = 'http://localhost:3001/artists';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artist: ''
        }

    }

    //lifecycle
    componentDidMount() {
        fetch(URL_ARTISTS, {
                method:'GET'
            })
            .then(responce => responce.json())
            .then(json => {
                // console.log(json)
                this.setState({
                    artist:json
                })
            })
    }

    render() {
        return (
            <div>
                <Banner/>
                <ArtistsList allArtists={this.state.artist} />
            </div>
        )
    }
}

export default Home;