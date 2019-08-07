import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Modal from '../Modal';
import history from '../../history';
import {fetchStream, deleteStream} from '../../actions';


class StreamDelete extends React.Component {
    componentDidMount(){
        // intinya untuk mendapatkan id dengan consol(this.props) baru mendapatkan match.params.id 
        this.props.fetchStream(this.props.match.params.id);
    }
    renderAction(){
        const {id} = this.props.match.params ; //es5
        return(
            <React.Fragment>
                <button onClick={()=> this.props.deleteStream(id)} className='ui button negative'>delete</button>
                <Link to="/" className='ui button primary'>Cancel</Link>
            </React.Fragment>
        );
    }
    renderContent(){
        if(!this.props.stream){
            return 'are you sure you want to delete this stream?';
        }
        return `are you sure you want to delete this streams with title: ${this.props.stream.title}`;

    }
    render(){
        return(
            <Modal
                title='Delete Stream'
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push('/')}
            /> 
        );
    }
    
}
const mapStateToProps = (state, ownProps) =>{
    return{
        stream: state.streams[ownProps.match.params.id]
    };
}
export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);