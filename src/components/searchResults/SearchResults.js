import React, { Fragment } from "react";
import { giphyApiSearchRequest } from "../../utils/api";
import GifCard from "../gifCard/GifCard";
import styles from "./SearchResults.module.css";
import SearchBar from "../searchBar/SearchBar";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from '../loading/Loading';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: null,
            loading: <Loading />,
            allGifs: [],
            count: 30,
            start: 1
        };
    }

    componentDidMount() {
        const searchedKeyword = this.props.location.state.searchedKeyword;
        this._asyncRequest = giphyApiSearchRequest(searchedKeyword).then(result => {
            this._asyncRequest = null;
            let firstThirtyGifs = result.slice(0, 30);
            this.setState({
                searchResult: firstThirtyGifs,
                loading: false,
                allGifs: result
            });
        });
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.location.state.searchedKeyword !==
            prevProps.location.state.searchedKeyword
        ) {
            const searchedKeyword = this.props.location.state.searchedKeyword;

            this._asyncRequest = giphyApiSearchRequest(searchedKeyword).then(
                result => {
                    this._asyncRequest = null;
                    let firstThirtyGifs = result.slice(0, 50);
                    this.setState({
                        searchResult: firstThirtyGifs,
                        loading: false,
                        allGifs: result,
                        count: 50,
                        start: 1
                    });
                }
            );
        }
    }

    fetchGifs = () => {
        const { count, start } = this.state;
        this.setState({ start: this.state.start + count });
        let thirtyGifs = this.state.allGifs.slice(
            this.state.start,
            this.state.start + 50
        );
        this.setState({ searchResult: this.state.searchResult.concat(thirtyGifs) });
    };

    displayHandler = gifs =>
        gifs.map((gif, index) => {
            return <GifCard image={gif.images} gif={gif} key={index} />;
        });

    render() {
        return (
            <Fragment>
                <SearchBar />

                {!this.state.searchResult && this.state.loading ? (
                    <Loading />
                ) : (
                        <div className={styles.container}>
                            <div className={styles.masonry}>
                                <InfiniteScroll
                                    dataLength={this.state.searchResult.length}
                                    next={this.fetchGifs}
                                    hasMore={true}
                                    loader={<Loading />}
                                >
                                    {this.displayHandler(this.state.searchResult)}
                                </InfiniteScroll>
                            </div>
                        </div>
                    )}
            </Fragment>
        );
    }
}

export default SearchResults;
