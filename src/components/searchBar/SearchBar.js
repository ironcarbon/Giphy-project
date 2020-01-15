import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './SearchBar.module.css';

class SearchBar extends React.Component {
    state = { searchedKeyword: "", error: "" };

    inputHandler = (e) => {
        this.setState({ searchedKeyword: e.target.value })
    }

    formHandler = (e) => {
        e.preventDefault();
        if (!this.state.searchedKeyword) {
            this.setState({
                error: (<div className={styles.errorContainer}>< div className={styles.error}>
                    <img src="https://media.giphy.com/media/1QGRJ9cOTbh5K/giphy.gif" />
                </div><p>Please Search a Gif</p></div>)
            })
        } else {
            console.log(this.props.history.push({
                pathname: `/search/${this.state.searchedKeyword}`,
                state: {
                    searchedKeyword: this.state.searchedKeyword
                }
            }))
        }

    }
    render() {
        return (

            <Fragment>
                {this.state.error ? <div>{this.state.error}</div> : ""}
                <form onSubmit={this.formHandler}>
                    <input type="text" onChange={this.inputHandler} placeholder='Search a Giph' />
                    <input type="submit" value="Search" />
                </form>
            </Fragment>
        )
    }
}

export default withRouter(SearchBar); 
