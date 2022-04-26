const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    currentServerName: "",
    textChannelList: [],
    voiceChannelList: [],
};

const EmployeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        storeEmployeeId: (state, action) => {
            state.employeeId = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload.notesList;
        },
    },
});

const { actions } = EmployeeSlice;

export const { storeEmployeeId, setNotes } = actions;

export default EmployeeSlice.reducer;
