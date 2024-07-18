import data from '../data/courses';
import {Link} from "react-router-dom";

const Courses = () => {
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