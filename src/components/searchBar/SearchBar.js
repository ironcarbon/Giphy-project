import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './SearchBar.module.css';
// import search from './search.png';

class SearchBar extends React.Component {
    state = { searchedKeyword: "", error: null };

    inputHandler = (e) => {
        const cleanStr = e.target.value.replace(/[^a-zA-Z]/g, "")
        this.setState({ searchedKeyword: cleanStr })
    }

    formHandler = (e) => {
        e.preventDefault();
        if (!this.state.searchedKeyword) {
            this.setState({
                error: (<div className={styles.errorContainer}>
                    <img src="https://media.giphy.com/media/1QGRJ9cOTbh5K/giphy.gif" />
                    <p>Please Search a Gif</p></div>)
            })
        } else {
            this.setState({ error: null })

            this.props.history.push({
                pathname: `/search/${this.state.searchedKeyword}`,
                state: {
                    searchedKeyword: this.state.searchedKeyword
                }
            })
        }

    }
    render() {
        return (

            <Fragment>

                <div className={styles.container}>
                    <form className={styles.form} onSubmit={this.formHandler}>
                        <div className={styles.formContainer}>
                            <input type="text" className={styles.search} onChange={this.inputHandler} required placeholder='Search a Gif' />
                            <button type="submit" className={styles.submitButton} />
                            {/* <img src={search} alt="search" className={styles.image} onClick={this.formHandler} /> */}
                        </div>
                    </form>
                </div>
                {this.state.error ? <Fragment>{this.state.error}</Fragment> : ""}
            </Fragment>
        )
    }
}

export default withRouter(SearchBar); 
