import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        document.title = "Home || Welcome to 4522 Organization"; // Added space around ||
    }, []);

    const showMessageOnClick = () => {
        setShowMessage(true);
    };

    return (
        <>
            <div className="text-center bg-secondary">
                <Container fluid>
                    <h1 className="display-3">Software Development Courses</h1>
                    <p className="lead">Here you can get world-class courses on software development taught by industry experts.</p>
                    <Button color="danger" onClick={showMessageOnClick}>Start using</Button>
                </Container>
                <hr />
            </div>

            {showMessage && (

                <Container fluid>
                    <h1 className="display-4">Welcome to the Page!</h1>
                    <p className="lead" color="warning" >Thank you for choosing our software development courses. We're excited to have you onboard.</p>
                </Container>

            )}
        </>
    );
};

export default Home;
