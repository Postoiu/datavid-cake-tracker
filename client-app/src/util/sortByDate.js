function sortByDate(usersArr) {
    return usersArr.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        const aDate = new Date(a.birthDate);
        const bDate = new Date(b.birthDate);

        const aCurrentYear = new Date(currentYear, aDate.getMonth(), aDate.getDate());
        const bCurrentYear = new Date(currentYear, bDate.getMonth(), bDate.getDate());
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const diffA = daysDifference(today, aCurrentYear);
        const diffB = daysDifference(today, bCurrentYear);

        return diffA - diffB;
    })
}

const daysDifference = (date1, date2) => {
    const timeDifference = date2.getTime() - date1.getTime();
    return Math.abs(timeDifference / (1000 * 3600 * 24));
};

export default sortByDate;