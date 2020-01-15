import React, { Fragment } from 'react';
import { giphyApiSearchRequest } from '../../utils/api';


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
            </Fragment>
        )
    }
}


export default SearchResults;