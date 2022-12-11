function addHours(date, hours) {
    let result = new Date(date);
    result.setHours(date.getHours() + hours);

    return result;
}

export default addHours;