import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/ViewService.css';

const AvailableService = () => {
    const [services, setServices] = useState([
        {
            serviceType: 'Helping',
            serviceDescription: 'Home helping service',
            charge: '$50',
            duration: '2 hours',
            available: true,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFOGxDJ5pNmb83DXr_ZKS70_xDOSoHh4rvmkEB5jhkYlQ0IOCfrjemEdPyQR9RymUbcU&usqp=CAU'
        },
        {
            serviceType: 'Activity',
            serviceDescription: 'Activity service',
            charge: '$30',
            duration: '1 hour',
            available: false,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPmxM7HPaxOndX9b8Bhj04WCgpxw7Lo3aHLfvL58-uWWOsaw8Uzj9LJXTqyhtAM5BPus&usqp=CAU'
        },
        {
            serviceType: 'Councling',
            serviceDescription: 'Councling service',
            charge: '$40',
            duration: '1.5 hours',
            available: true,
            image: 'https://cdn.sixtyandme.com/wp-content/uploads/2020/09/Elder-Care-Handbook-A-Guide-to-Local-and-National-Help-for-Common-Aging-Issues-1500x808.jpg'
        }
    ]);

    return (
        <div className="container my-3 py-3">
            <h2 className="display-5 text-center">Latest Services</h2>
            <hr />
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="card" style={{ width: "18rem" }} key={index}>
                        <img className="card-img-top" src={service.image} alt="Service" />
                        <div className="card-body">
                            <h5 className="card-title">{service.serviceType}</h5>
                            <p className="card-text">{service.serviceDescription}</p>
                        </div>
                        <ul className="list-group list-group-flush" style={{ marginTop: '10px' }}>
                            <li className="list-group-item">Duration: {service.duration}</li>
                            <li className="list-group-item">Charges: {service.charge}</li>
                            <li className="list-group-item">Available: {service.available ? 'Yes' : 'No'}</li>
                        </ul>
                        <div className="card-body">
                            {service.available ? (
                                <Link to='/BookService' className="card-link">
                                    <button className="btn btn-dark">Book now</button>
                                </Link>
                            ) : (
                                <button className="btn btn-dark" disabled>Booking not available</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Link to='/UserDashboard'>
                <button style={{ width: "100px", float: "right", backgroundColor: "green", color: "white" }}>Back to Dashboard</button>
            </Link>
        </div>
    );
};

export default AvailableService;
