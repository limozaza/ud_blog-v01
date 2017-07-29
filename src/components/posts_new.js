import React, {Component} from "react";
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    renderTitleField = (field)=>{
        return(
            <div className="form-group">
                <label>Title</label>
                <input
                    className="form-control"
                    /*onChange={field.input.onChange}
                    onFocus={field.input.onFocus}
                    onBlur={field.input.onBlur}*/
                    type="text"
                    {...field.input}
                />
            </div>
        );
    };

    render(){
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderTitleField}
                />
                <Field
                    name="tags"
                    component={this.renderTagsField}
                />
            </form>
        );
    }
}
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);