const currentDate = new Date();
const currentMonth = currentDate.getUTCMonth();

let matchDates: string[];

switch (currentMonth) {
    case 4:
        matchDates = [
            "2024-05-02",
            "2024-05-03",
            "2024-05-04",
            "2024-05-05",
            "2024-05-06",
            "2024-05-11",
            "2024-05-12",
            "2024-05-13",
            "2024-05-14",
            "2024-05-15",
            "2024-05-19",
        ];
        break;

    default:
        matchDates = [];
}

export { matchDates };
