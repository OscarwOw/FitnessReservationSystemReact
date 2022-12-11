import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function CourseDetailsPage() {
    const { courseId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [loadedObject, setLoadedObject] = useState();
    const [loadedTags, setLoadedTags] = useState();
    const [loadedLectures, setLoadedLectures] = useState();
    var list = [false, false, false]


    useEffect(() => {
        setIsLoading(true);
        
        let getString = 'http://192.168.100.10:5076/api/Course/' + courseId
        fetch(getString).then((response) => {
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
            list[0] = true;
            setLoadedObject(data);
            setIsLoading(!(list[0] && list[1] && list[2]));
        });
        let getTagsString = 'http://192.168.100.10:5076/api/Course/' + courseId + '/tags'
        fetch(getTagsString).then((response) => {
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
            list[1] = true;
            setLoadedTags(data);
            setIsLoading(!(list[0] && list[1] && list[2]));
        });
        let getLecturesString = 'http://192.168.100.10:5076/api/Course/' + courseId + '/Lectures/NextWeek'
        fetch(getLecturesString).then((response) => {
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
            list[2] = true;
            setLoadedLectures(data);
            setIsLoading(!(list[0] && list[1] && list[2]));
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading..</p>
            </section>
        )
    }

    return (
        <div>
            <h1>Course Name: {loadedObject.name}</h1>
            <p>Duration: {loadedObject.Lenght}</p>
            <p>Price: {loadedObject.price}</p>
            <h2>Tags:</h2>
            <ul>{
                loadedTags.map(tag => { 
                    return <li>#{tag.name}</li>
                })
            }
            </ul>
            <h2>Lectures:</h2>
            <ul>{
                loadedLectures.map(lecture => {
                    return <li>{lecture.name}  { lecture.date}</li>
                })
            }
            </ul>
        </div>

    );
}

export default CourseDetailsPage;



