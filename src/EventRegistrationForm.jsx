import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form"

const EventRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        attendingWithGuest: false,
        guestName: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!formData.age || formData.age <= 0) {
            formErrors.age = 'Age must be greater than 0';
        }
        if (formData.attendingWithGuest && !formData.guestName) {
            formErrors.guestName = 'Guest Name is required';
        }
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            navigate('/summary', { state: { formData } });
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <>


            <Form className='container' onSubmit={handleSubmit}>
                <h1 className='mx-auto'> Event Registration Form</h1>
                <Form.Group className='mb-3' >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </Form.Group>

                <Form.Group className='mb-3' >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </Form.Group>

                <Form.Group className='mb-3' >
                    <Form.Label>Age:</Form.Label>
                    <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} />
                    {errors.age && <span className="error">{errors.age}</span>}
                </Form.Group>

                <Form.Group className='mb-3' >
                    <Form.Control className='agecheckbox' type="checkbox" name="attendingWithGuest" checked={formData.attendingWithGuest} onChange={handleChange} />
                    Are you attending with a guest?
                </Form.Group>

                {formData.attendingWithGuest && (
                    <Form.Group>
                        <Form.Label>Guest Name:</Form.Label>
                        <Form.Control type="text" name="guestName" value={formData.guestName} onChange={handleChange} />
                        {errors.guestName && <span className="error">{errors.guestName}</span>}
                    </Form.Group>
                )}
                <button type="submit">Submit</button>

            </Form>
        </>
    );
};

export default EventRegistrationForm;
