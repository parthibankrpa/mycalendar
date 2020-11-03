export const getTotalRooms = (state) => {
    const totalMeetingRooms =  [...state.meetings.buildings.buildings].reduce((accumulator,building) => {
        return accumulator + building.meetingRooms.length;
    },0);
    return totalMeetingRooms;
}
export const getTodayMeetings = (state) => {
    return 0;
}