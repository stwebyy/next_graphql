import { axiosInstance } from '@/utils/axios';

export const resolvers = {
  Query: {
    pets: async () => {
      return axiosInstance.get('pets').then((res) => res.data);
    },
    owners: async () => {
      return axiosInstance.get('owners').then((res) => res.data);
    },
  },
};
