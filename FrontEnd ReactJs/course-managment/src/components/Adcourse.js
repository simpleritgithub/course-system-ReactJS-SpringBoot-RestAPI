
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../API/SpringBootAPI";
import { toast } from "react-toastify";

const AddCourse = () => {
    useEffect(() => {
        document.title = "AddCourse";
    }, []);

    const [course, setCourse] = useState({});

    const handleForm = (e) => {
        e.preventDefault();
        console.log(course);
        postDataToServer(course);
    };

    const postDataToServer = (data) => {
        axios.post(`${base_url}/AddCourses`, data)
            .then((response) => {
                console.log(response);
                toast.success("Added Successfully", { position: ("bottom-center") }

                )
            })
            .catch((error) => {
                console.log(error);
                toast.error("failed....")
            });
    };

    return (
        <>
            <Form onSubmit={handleForm}>
                <h1 className="text-center my-3"> Fill Course Detail</h1>
                <FormGroup>
                    <label htmlFor="userId">Course ID</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                        onChange={(e) => {
                            setCourse({ ...course, Id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="title">Course Title</label>
                    <Input
                        type="text"
                        placeholder="Enter title here"
                        name="CourseName"
                        id="title"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="description">Course description</label>
                    <Input
                        type="textarea"
                        placeholder="Enter description here"
                        name="Course description"
                        id="description"
                        style={{ height: 120 }}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success me-2">
                        Add Course
                    </Button>
                    <Button color="warning me-2" type="reset"
                    // onClick={() => {
                    //     console.log("Before clearing:", course);
                    //     setCourse({});
                    //     console.log("After clearing:", course);
                    //}}
                    >Clear</Button>


                </Container>
            </Form >
        </>
    );
};

export default AddCourse;




























































// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Button, Container, Form, FormGroup, Input } from "reactstrap";
// import base_url from "../API/SpringBootAPI";
// const AddCourse = () => {

//     useEffect(() => {
//         document.title = "AddCourse"
//     })
//     const [course, setCourse] = useState({});
//     // FormHandler function
//     const handleForm = ((e) => {
//         console.log(course);

//         postDataToServer(course);
//         e.preventDefault();
//     });

//     //function to post data on servrr
//     const postDataToServer = (data) => {
//         axios.post(`${base_url}/AddCourses`, data).then((response) => {
//             console.log(response);
//         }, (error) => {
//             console.log(error);
//         });


//         return (
//             <>
//                 <Form onSubmit={handleForm}>
//                     <h1 className="text-center my-3"> Fill Course Detail</h1>
//                     <FormGroup>

//                         <label for="userId">Course ID</label>
//                         <Input type="text" placeholder="Enter hetre" name="userId" id="userId" onChange={(e) => {
//                             setCourse({ ...course, Id: e.target.value })
//                         }} />


//                     </FormGroup>
//                     <FormGroup>

//                         <label for="title">Course Title</label>
//                         <Input type="text" placeholder="Enter title here" name="CourseName" id="title"
//                             onChange={(e) => {
//                                 setCourse({ ...course, title: e.target.value })
//                             }} />

//                     </FormGroup>
//                     <FormGroup>

//                         <label for="title">Course Title</label>
//                         <Input type="text" placeholder="Enter title here" name="CourseName" id="title" />

//                     </FormGroup>
//                     <FormGroup>

//                         <label for="description">Course description</label>
//                         <Input type="textarea" placeholder="Enter description here" name="Course description" id="description"
//                             style={{ height: 120 }}
//                             onChange={(e) => [
//                                 setCourse({ ...course, description: e.target.value })
//                             ]}
//                         />

//                     </FormGroup>
//                     <Container className="text-center">
//                         <Button type="submit" color="success me-2">Add Course</Button>
//                         <Button color="warning me-2">Clear</Button>
//                     </Container>
//                 </Form>
//             </>
//         )
//     }
// }
// export default AddCourse;
