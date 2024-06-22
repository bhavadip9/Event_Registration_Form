import { useLocation, useNavigate } from 'react-router-dom';

const SubmissionSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state || {};

    if (!formData) {
        navigate('/');
        return null;
    }

    return (
        <div className='container' >
            <h2>Form Submission Summary</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Age: {formData.age}</p>
            <p>Attending with Guest: {formData.attendingWithGuest ? 'Yes' : 'No'}</p>
            {formData.attendingWithGuest && <p>Guest Name: {formData.guestName}</p>}
        </div>
    );
};

export default SubmissionSummary;
