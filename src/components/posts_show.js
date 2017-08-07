import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostsShow extends Component{

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
    }
    render(){
        return (
            <div>
                posts Show !!
            </div>
        );
    };
}

const mapStateToProps = ({posts}, ownProps) => {
    return {post: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {fetchPost})(PostsShow);