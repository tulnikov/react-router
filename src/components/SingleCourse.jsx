import {Link, useParams} from "react-router-dom";

import data from '../data/courses';


const SingleCourse = () => {
    const params = useParams();
    const course = data.find(course => course.slug === params.slug);
    return (
        <div>
            <h1>{course.title}</h1>
            <h2>{course.slug}</h2>
            <h3>{course.id}</h3>

            <Link to='..' relative='path'>All courses</Link>
        </div>
    )

}
export default SingleCourse;