import axios from "axios";
import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    container,
} from "reactstrap";
import base_url from "../API/SpringBootAPI";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/DeleteCourse/${id}`)
            .then((response) => {
                toast.success("Course deleted successfully");
                update(id);
            })
            .catch((error) => {
                toast.error("Course not deleted !!");
            });
    };



    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">
                    {course.title}
                </CardSubtitle>
                <CardText>{course.description}</CardText>
                <container className="text-center">
                    <Button color="primary me-2"
                    >update</Button>
                    <Button color="warning" onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>

                </container>
            </CardBody>
        </Card>
    );
}
export default Course;

