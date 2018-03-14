import React from 'react';
import {Link} from 'react-router-dom';

const ArtistsList = (props) => {

    const list = ({allArtists}) => {
        if (allArtists) {
            return allArtists.map((item) => {

                const style = {
                    background: `url('/images/covers/${item.cover}.jpg')
                    no-repeat`
                }

                return (
                    <Link
                        key={item.id}
                        to={`/artist/${item.id}`}
                        className="z-depth-4 artist_item col s12 m6 l3"
                        style={style}>

                        <div>{item.name}</div>

                    </Link>

                )
            })
        }
    }

    return (
        <div>
            <h4>Browse the artists</h4>
            <div className="row artists_list">
                {list(props)}
            </div>
        </div>
    )
}

export default ArtistsList;