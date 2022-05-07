export const actions = {
    async sendEmail(context, data) {
        const response = await this.$axios.post('/send_email', data);
        return response;
    },
    async getReservations(context, data) {
        const response = await this.$axios.get('/get_reservations');
        return response;
    },
    async getReservationsByDate(context, date) {
        const response = await this.$axios.get(`/get_reservations_by_date/${date}`);
        return response;
    },
    async createReservation(context, data) {
        const response = await this.$axios.post('/create_reservation', data);
        return response;
    },
    async updateReservation(context, data) {
        const response = await this.$axios.post(`/update_reservation`, data);
        return response;
    },
    async deleteReservation(context, id) {
        const response = await this.$axios.post(`/delete_reservation/${id}`);
        return response;
    },
    async getSumReservations() {
        const response = await this.$axios.get('/get_sum_reservations');
        return response;
    },
    async getSumResByDate(context, date) {
        const response = await this.$axios.get(`/get_sum_res_by_date/${date}`);
        return response;
    }
}