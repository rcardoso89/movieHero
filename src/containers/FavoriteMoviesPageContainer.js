import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import MoviesList from "../components/MoviesList";
import { logoutFromFirebase } from "../actions/userActions";

const localStyles = {
  noPermissionText: { textAlign: "center", marginTop: "20px" },
  noMoviesText: { textAlign: "center", marginTop: "20px" }
};

class FavoriteMoviesPageContainer extends Component {
  static propsTypes = {
    user: PropTypes.object.isRequired,
    genres: PropTypes.array.isRequired
  };

  render() {
    const movies = {
      moviesList: this.props.user.favoriteMovies || []
    };

    if (!this.props.user.isLoggedIn) {
      return (
        <div style={localStyles.noPermissionText}>
          You have no permission for access to this page.
        </div>
      );
    }else{
      console.log(this.props.user.isLoggedIn)

    }

    if (!this.props.user.favoriteMovies.length) {
      return (
        <div style={localStyles.noMoviesText}>
          There are no favorite movies.
        </div>
      );
    } else {
      return (
        <MoviesList
          movies={movies}
          genres={this.props.genres}
          title="Favorite Movies"
        />
      );
    }
  }
}
const mapDispatchToProps = dispatch => ({
  logoutFromFirebase: () => dispatch(logoutFromFirebase())
});

const mapStateToProps = state => ({ user: state.user, genres: state.genres });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteMoviesPageContainer);
