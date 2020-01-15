import React from 'react';

class GifCard extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        // console.log(this.props.image)
        return (
            !this.props.image.fixed_width.url ? "loading" : <img src={this.props.image.fixed_width.url} />
        )
    }
}

export default GifCard; 