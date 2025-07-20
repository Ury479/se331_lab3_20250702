export default {
    getEvents() {
        return apiClient.get('/events')
    },

    // Get a specific event by ID
    getEvent(id: number) {
        return apiClient.get('/events/' + id)
    }
}
