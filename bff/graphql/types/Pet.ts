import { axiosInstance } from '@/utils/axios';
import { objectType, extendType, nonNull, intArg, list } from 'nexus';

export const Pet = objectType({
  name: 'Pet',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
    t.nonNull.int('ownerId');
  },
});
