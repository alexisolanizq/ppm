import { createSlice } from "@reduxjs/toolkit"
import NotificationService from "@Services/notifications/notificationService"

export const service = NotificationService.getInstance()

const initialState = {
    notificationList: [],
    isLoading: false
}

export const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setNotifications: (state, action) => {
            state.notificationList = action.payload
        }
    }
})

export const { setLoading, setNotifications } = notificationSlice.actions

export const fetchNotifications = () => async (dispatch) => {
    try {
        const response = await service.notificationsList()
        dispatch(setNotifications(response))
        return response
    } catch (error) {
        throw new Error(error)
    }
}

export default notificationSlice.reducer