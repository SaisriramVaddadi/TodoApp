import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik';

export default class TodoComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            description: "Formik",
            targetDate: "01/31/2021"
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(value){
        console.log(value)
    }
    render() {
        let {description,targetDate} = this.state;
        return (
            <div className="container">
                <Formik 
                    initialValues = {{description, targetDate}}
                    onSubmit = {this.onSubmit}
                    >
                    {(props) => {
                            return(
                                <Form>
                                    <fieldset className="form-group">
                                    <label >Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                    <label >Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
                            )}
                    }
                </Formik>
            </div>
        )
    }
}
