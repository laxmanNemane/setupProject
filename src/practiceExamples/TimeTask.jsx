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

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label htmlFor="startTime">Start Time:</label>
                    <Field name="startTime">
                        {({ field, form }) => (
                            <TimePicker
                                {...field}
                                format="HH:mm"
                                placeholder="Select Start Time"
                                onSelect={(value) => form.setFieldValue('startTime', moment(value))}
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
                                onSelect={(value) => form.setFieldValue('endTime', moment(value))}
                            />
                        )}
                    </Field>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default YourFormComponent;
