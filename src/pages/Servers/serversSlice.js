const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    currentServer: null,
    selectedChannel: null,
};

const ServersSlice = createSlice({
    name: "servers",
    initialState,
    reducers: {
        setServerDetails: (state, action) => {
            state.currentServer = action.payload;
        },
        setSelectedChannel: (state, action) => {
            state.selectedChannel = action.payload;
        },
    },
});

const { actions } = ServersSlice;

export const { setServerDetails, setSelectedChannel } = actions;

export const getServerDetail = (state) => state.servers.currentServer;
export const getSelectedChannel = (state) => state.servers.selectedChannel;

export default ServersSlice.reducer;
