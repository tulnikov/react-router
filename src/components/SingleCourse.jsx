import {Link, useParams, useNavigate} from "react-router-dom";
import {useEffect} from "react";

import data from '../data/courses';


const SingleCourse = () => {
    const params = useParams();
    const navigate = useNavigate();

    const course = data.find(course => course.slug === params.slug);
    useEffect(() => {
        if (!course) {
            navigate("..", {relative: 'path'});
        }
    }, [course, navigate]);

    return (
        <div>
            <h1>{course?.title}</h1>
            <h2>{course?.slug}</h2>
            <h3>{course?.id}</h3>

            <Link to='..' relative='path'>All courses</Link>
        </div>
    )

}
export default SingleCourse;