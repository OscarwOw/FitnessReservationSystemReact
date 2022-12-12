import classes from './AddReservationPage.module.css';

function AddReservationPage() {
    const currentURL = window.location.href;
    const urlParts = currentURL.split("/");
    const valueAfterSecondSlash = urlParts[4];


    const handleSubmit = (event) => {
        event.preventDefault();
        let fetchstring = 'http://192.168.100.10:5076/api/Reservation?lectureid=' + valueAfterSecondSlash;
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const mail = formData.get('email');
        const currentDate = new Date();
        const createdDate = currentDate.toISOString();


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, mail, createdDate })
        };

        fetch(fetchstring, requestOptions)
            .then(response => {
                if (response.status === 204) {
                    window.alert('Your reservation was added successfully');
                    // Process the response here
                } else {
                    window.alert(`An error occurred: ${response.status}`);
                    // Handle the error here
                }
            });
    }

    return (
        <div className={classes.form}>
            <form  onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <button className={classes.button} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddReservationPage;
