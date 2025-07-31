import axios from 'axios';
import passengersData from '@/data/passengers.json';
import airlinesData from '@/data/airlines.json';
const apiClient = axios.create({
    baseURL: 'https://api.instantwebtools.net/v1',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 3000 // 3秒超时，快速回退到本地数据
});
// 模拟API响应格式
const createMockResponse = (data, totalCount) => {
    return {
        data: data,
        status: 200,
        statusText: 'OK',
        headers: {
            'x-total-count': totalCount?.toString() || data.length?.toString()
        },
        config: {},
        request: {}
    };
};
export default {
    async getPassengers(page = 0, size = 10) {
        try {
            // 先尝试使用远程API
            const response = await apiClient.get(`/passenger?page=${page}&size=${size}`);
            console.log('✅ Using remote API for passengers');
            return response;
        }
        catch (error) {
            console.warn('🔄 Remote API failed, using local passenger data');
            // 如果远程API失败，使用本地数据
            const startIndex = page * size;
            const endIndex = startIndex + size;
            const paginatedData = passengersData.slice(startIndex, endIndex);
            return createMockResponse(paginatedData, passengersData.length);
        }
    },
    async getPassenger(id) {
        try {
            // 先尝试使用远程API
            const response = await apiClient.get(`/passenger/${id}`);
            console.log('✅ Using remote API for passenger details');
            return response;
        }
        catch (error) {
            console.warn('🔄 Remote API failed, using local passenger data');
            // 如果远程API失败，使用本地数据
            const passenger = passengersData.find(p => p._id === id);
            if (passenger) {
                return createMockResponse(passenger);
            }
            else {
                throw new Error(`Passenger with id ${id} not found`);
            }
        }
    },
    async getAirline(id) {
        try {
            // 先尝试使用远程API
            const response = await apiClient.get(`/airlines/${id}`);
            console.log('✅ Using remote API for airline details');
            return response;
        }
        catch (error) {
            console.warn('🔄 Remote API failed, using local airline data');
            // 如果远程API失败，使用本地数据
            const airline = airlinesData.find(a => a.id === id);
            if (airline) {
                return createMockResponse(airline);
            }
            else {
                throw new Error(`Airline with id ${id} not found`);
            }
        }
    }
};
//# sourceMappingURL=PassengerService.js.map