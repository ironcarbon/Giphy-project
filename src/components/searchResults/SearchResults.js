import React, { Fragment } from 'react';
import { giphyApiSearchRequest } from '../../utils/api';
import GifCard from '../gifCard/GifCard';


class SearchResults extends React.Component {
    state = { searchResult: null, loading: true }

    componentDidMount() {
        const searchedKeyword = this.props.location.state.searchedKeyword;
        this._asyncRequest = giphyApiSearchRequest(searchedKeyword).then(result => {
            this._asyncRequest = null;
            this.setState({ searchResult: result, loading: false })
        });
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.loading ? "Loading" : <div>Done</div>}
                {!this.state.searchResult && this.state.loading ? "Loading" :
                    this.state.searchResult.map(result => {
                        if (result.images) {
                            return <GifCard key={result.id} image={result.images} />
                        } else {
                            return <div>"loading"</div>
                        }
                    })
                }
            </Fragment>
        )
    }
}


export default SearchResults;