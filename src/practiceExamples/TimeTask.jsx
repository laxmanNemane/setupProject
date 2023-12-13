import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TimePicker } from 'antd';
import moment from 'moment';

const initialValues = {
    startTime: moment(),
    endTime: moment(),
};

const YourFormComponent = () => {
    const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log('Form values:', values);
    };

    const buttonStyle = {
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
        border: '1px solid #ccc', // Adjust border color as needed
        borderRadius: '4px', // Adjust border radius as needed
        padding: '10px', // Adjust padding as needed
        cursor: 'pointer',
    };

    const  getvalues =(values)=>{
        console.log(values , "values");
    }

    return (
        <Formik initialValues={initialValues} validate={getvalues} onSubmit={handleSubmit} enableReinitialize>
            <Form>
                <div>
                    <label htmlFor="startTime">Start Time:</label>
                    <Field name="startTime">
                        {({ field, form }) => (
                            <TimePicker
                                {...field}
                                format="HH:mm"
                                placeholder="Select Start Time"
                                value={field.value ? moment(field.value) : null} // Use defaultValue
                                onSelect={(time) => form.setFieldValue('startTime', time)}
                            />
                        )}
                    </Field>
                </div>

                <div>
                    <label htmlFor="endTime">End Time:</label>
                    <Field name="endTime">
                        {({ field, form }) => (
                            <TimePicker
                                {...field}
                                format="HH:mm"
                                placeholder="Select End Time"
                                value={field.value ? moment(field.value) : null} // Use defaultValue
                                onSelect={(time) => form.setFieldValue('endTime', time)}
                            />
                        )}
                    </Field>
                </div>

                <button style={buttonStyle} type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default YourFormComponent;
