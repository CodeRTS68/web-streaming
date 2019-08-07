import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
    // renderError({error,  touched}){
    //     if(touched && error){
    //         return(
    //             <div className='ui error message'>
    //                 <div className='header'>{error}</div>
    //             </div>
    //         );
    //     }
    // }
    // renderInput = ({input, label, meta})=>{
    //     const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    //     return(
    //         <div className={className}>
    //             <label>{label}</label>
    //             <input {...input} autoComplete='off'/>
    //             {this.renderError(meta)}
    //         </div>
    //     );
    // }

    onSubmit = (formValues)=>{
        this.props.createStream(formValues);
    }

    render(){
        return(
            <div>
                <h3>create a stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
            // <form
            //     onSubmit={this.props.handleSubmit(this.onSubmit)}
            //     className='ui form error '>
            //         <Field name='title'  component={this.renderInput} label='input name'/>
            //         <Field name='description' component={this.renderInput} label='input email'/>
            //         <button className='ui button primary '>submit</button>
            // </form>
        );
    }
    
};

// const validate = formValues => {
//     const errors = {};
//     if(!formValues.title){
//         errors.title = 'you must enter a title';
//     } 
//     if(!formValues.description){
//         errors.description = 'you must enter a description';
//     }   
//     return errors;
// };

// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate
// })(StreamCreate);

export default connect(null, {createStream})(StreamCreate);