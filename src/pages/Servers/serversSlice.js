const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    currentServer: null,
    selectedChannel: null,
    messages: [],
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
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        updateMessages: (state, action) => {
            state.messages = action.payload;
        },
    },
});

const { actions } = ServersSlice;

export const {
    setServerDetails,
    setSelectedChannel,
    setMessages,
    updateMessages,
} = actions;

export const getServerDetail = (state) => state.servers.currentServer;
export const getSelectedChannel = (state) => state.servers.selectedChannel;
export const getMessages = (state) => state.servers.messages;

export default ServersSlice.reducer;
