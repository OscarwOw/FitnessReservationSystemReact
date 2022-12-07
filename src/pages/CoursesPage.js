import { useState, useEffect } from 'react';

function CoursesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedObjects, setLoadedObjects] = useState();
    useEffect(() => {
        setIsLoading(true);
        fetch('https://localhost:7223/api/Course').then((response) => {
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
    return(
        


            <div>
                <h1>hello application</h1>
                <ul>
                    {loadedObjects.map((obj) => {
                        return <li key={obj.id}>{obj.name}</li>
                    })}
                </ul>

            </div>
       
    );

}

export default CoursesPage;