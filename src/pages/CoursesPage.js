import { useState, useEffect } from 'react';
import CoursesList from '../components/Courses/CoursesList';


function CoursesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedObjects, setLoadedObjects] = useState();

    useEffect(() => {
        setIsLoading(true);
        fetch('http://192.168.100.10:5076/api/Course').then((response) => {
            return response.json();
        }).then((data) => {
            const objects = [];
            for (const key in data) {
                const object = {
                    id: key,
                    ...data[key]
                };
                objects.push(object);
            }
            setIsLoading(false);
            setLoadedObjects(data);
        });


    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>

        )
    }
    return (

        

            <div>
                <h1>hello application</h1>
                <CoursesList items={loadedObjects} />

            </div>
       
    );

}

export default CoursesPage;