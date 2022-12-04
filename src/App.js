import { useState, useEffect } from 'react';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedObjects, setLoadedObjects] = useState();

    useEffect(() => {
        setIsLoading(true);
        fetch('https://localhost:7223/api/Course.json').then((response) => {
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

          
      </div>
  );
}

export default App;
