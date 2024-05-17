import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../API/SpringBootAPI";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {
    const [courses, setCourses] = useState([]);
    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id != id))
    }

    useEffect(() => {
        document.title = "View Course Here";
        getAllCoursesFromServer();
    }, []);

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/Courses`)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                toast.success("Courses have been loaded", {
                    position: "bottom-center"
                });
                setCourses(response.data);
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
                toast.error("Something went wrong while fetching courses", {
                    position: "bottom-center"
                });
            });
    };

    return (
        <div>
            <h1>All courses</h1>
            <p>List of Courses are as follows</p>
            {
                courses.length > 0
                    ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)            
                    : "No courses available"
            }
        </div>
    );
};

export default Allcourses;




































































































// import React, { useEffect, useState } from "react";
// import Course from "./Course";
// import base_url from "../API/SpringBootAPI";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Allcourses = () => {

//     useEffect(() => {
//         document.title = "View Course Here";
//     }, []);

//     const getAllCoursesFromServer = () => {
//         axios.get(`${base_url}/Courses`).then(
//             (response) => {
//                 console.log(response);
//                 console.log(response.data);
//                 toast.success("course has been loaded");
//                 setCourses(response.data)
//             }, (error) => {
//                 console.log(error);
//                 toast.error("something went wrong");
//             }
//         )
//     };

//     useEffect(() => {
//         getAllCoursesFromServer();
//     }, []);

//     const [courses, setCourses] = useState([
//         // { id: 1, title: "python", description: "This is the best for AI&ML." },
//         // { id: 2, title: "Java", description: "This is the best for Backend Development. " },
//         // { id: 3, title: "React", description: "This is the best for For FrontEnd Devlopment. " },
//         // { id: 4, title: "Angular", description: "This is the best for For FrontEnd Devlopment. " },
//         // { id: 5, title: "Html", description: "This is the best for For FrontEnd Devlopment. " },
//     ]);

//     return (
//         <div>
//             <h1>All courses</h1>
//             <p>List of Courses are as follows</p>
//             {
//                 courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} />) : ".........! No courses Available........."
//             }
//         </div>
//     );
// };

// export default Allcourses;
