const currentDate = new Date();
const currentMonth = currentDate.getUTCMonth();

let matchDates: string[];

switch (currentMonth) {
    case 9: // Octobre
        matchDates = [
            "2023-10-01",
            "2023-10-02",
            "2023-10-03",
            "2023-10-07",
            "2023-10-08",
            "2023-10-21",
            "2023-10-22",
            "2023-10-23",
            "2023-10-27",
            "2023-10-28",
            "2023-10-29",
        ];
        break;

    case 10: // Novembre
        matchDates = [
            "2023-11-04",
            "2023-11-05",
            "2023-11-06",
            "2023-11-11",
            "2023-11-12",
            "2023-11-25",
        ];
        break;

    case 11: // Décembre
        matchDates = [
            "2023-12-02",
            "2023-12-05",
            "2023-12-06",
            "2023-12-09",
            "2023-12-16",
            "2023-12-23",
            "2023-12-26",
            "2023-12-30",
        ];
        break;

    default:
        matchDates = [];
}

export { matchDates };
