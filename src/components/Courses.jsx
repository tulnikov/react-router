import data from '../data/courses';
import {Link, useLocation} from "react-router-dom";
import queryString from "query-string";
import {useState} from "react";

const Courses = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);

    const [sortedCourses, setSortedCourses] = useState()
    
    return <>
        <h1>Courses</h1>

        {data.map((course) => (
            <div key={course.id}>
                <h2><Link to={course.slug}>{course.title}</Link></h2>
            </div>
        ))}

    </>

}
export default Courses;