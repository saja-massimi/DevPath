import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import axiosInstance from '../../api/axiosInstance';

const Counter = ({ endValue, duration }) => {
    return (
        <div className="counter">
            <CountUp end={endValue} duration={duration} />
        </div>
    );
};

const CounterSection = () => {
    const [coursesCount, setCoursesCount] = useState(0);
    const [clientsCount, setClientsCount] = useState(0);
    const [teachersCount, setTeachersCount] = useState(0);
    const [categoriesCount, setCategoriesCount] = useState(0);

    const counters = [
        { id: 1, value: coursesCount, label: "Different Courses", color: "text-primary" },
        { id: 2, value: clientsCount, label: "Happy Clients", color: "text-black" },
        { id: 3, value: teachersCount, label: "Teachers", color: "text-primary" },
        { id: 4, value: categoriesCount, label: "Categories", color: "text-black" },
    ];

    useEffect(() => {
        const fetchCounts = async () => {
            try {

                const [coursesResponse, clientsResponse, teachersResponse, categoriesResponse
                ] = await Promise.all([
                    axiosInstance.get("/courses"),
                    axiosInstance.get('/customers'),
                    axiosInstance.get('/teachers'),
                    axiosInstance.get('/categories')
                ]);

                setCoursesCount(coursesResponse.data.data.length);
                setClientsCount(clientsResponse.data.users.length);
                setTeachersCount(teachersResponse.data.teachers.length);
                setCategoriesCount(categoriesResponse.data.categories.length);

            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        };

        fetchCounts();
    }, []);

    return (
        <div className="section-area content-inner section-sp1">
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        {counters.map((counter) => (
                            <div
                                key={counter.id}
                                className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30"
                            >
                                <div className="counter-style-1">
                                    <div className={counter.color}>
                                        <Counter endValue={counter.value} duration={3} />
                                    </div>
                                    <span className="counter-text">{counter.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
