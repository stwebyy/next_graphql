import { axiosInstance } from '@/utils/axios';
import { objectType, nonNull, intArg, list } from 'nexus';
import { Pet } from './Pet';
import { Owner } from './Owner';

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nonNull.field('pets', {
      type: list(Pet),
      async resolve(_, _args, __) {
        // 第3引数 = contextなので、axiosをcontextに定義しておけば毎回呼び出す必要がない
        return axiosInstance.get('pets').then((res) => res.data);
      },
    });
    t.nonNull.field('pet', {
      type: Pet,
      args: {
        ownerId: nonNull(intArg()),
      },
      async resolve(_, _args, __) {
        return axiosInstance
          .get(`pets/${_args.ownerId}`)
          .then((res) => res.data);
      },
    });
    t.nonNull.field('owners', {
      type: list(Owner),
      async resolve(_, _args, __) {
        return axiosInstance.get('owners').then((res) => res.data);
      },
    });
    t.nonNull.field('owner', {
      type: Owner,
      args: {
        id: nonNull(intArg()),
      },
      async resolve(_, _args, __) {
        return axiosInstance.get(`owners/${_args.id}`).then((res) => res.data);
      },
    });
  },
});
