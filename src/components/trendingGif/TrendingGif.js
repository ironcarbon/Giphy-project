import React from 'react';
import styles from './Trending.module.css';
import { giphyApiTrendingRequest } from '../../utils/api';



class TrendingGif extends React.Component {

    state = { trendingGif: null, loading: true }

    componentDidMount = () => {
        this._asyncRequest = giphyApiTrendingRequest().then(response => {
            this._asyncRequest = null;
            this.setState({ trendingGif: response, loading: false })
        })
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    displayHandler = () => {
        return this.state.trendingGif.map(gif => <img src={gif.images.fixed_height.url} key={gif.id} />)
    }
    render() {
        return (
            <div className={styles.wrapped}>
                {!this.state.trendingGif && this.state.loading ? "Loading" : this.displayHandler()}
            </div>
        )
    }

}


export default TrendingGif;



