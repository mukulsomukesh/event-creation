import React, { createContext, useReducer } from 'react';

const initialState = {
    createEventForm: {
        createUnder: "",
        eventName: "",
        organizerName: "",
        eventLocation: "",
        startDateTime: '',
        endDateTime: '',
        visibility: "Public",
        capacityLimited: 1,
        capacity: "Unlimited",
        requireApproval: true,
        ticketsType: "Free",
        ticketPrice: 0,
        eventImage: "https://res.cloudinary.com/dfrhy6m3m/image/upload/v1701101197/zerffslokdc9dhfkxcqk.png",
        eventTheme: { name: "Minimal", color: "c7c9c9" },
        eventColor: "Black",
        eventTypeFace: ""
    },
    eventList: [],
};

export const EventContext = createContext(initialState);

export const EventProvider = ({ children }) => {
    const eventReducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_FORM_FIELD':
                return {
                    ...state,
                    createEventForm: {
                        ...state.createEventForm,
                        [action.field]: action.value,
                    },
                };
            case 'CREATE_EVENT':
                return {
                    ...state,
                    eventList: [...state.eventList, action.eventDetails],
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(eventReducer, initialState);

    return (
        <EventContext.Provider value={{ state, dispatch }}>
            {children}
        </EventContext.Provider>
    );
};
