import IUser from '@/models/User';
import axiosClient from './axiosClient';

const search = (params: any): Promise<{ data: Array<IUser> }> => {
    return axiosClient.get('/users/search', { params });
};

export { search };
