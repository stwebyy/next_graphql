import { objectType, nonNull, intArg, list } from 'nexus';

export const Owner = objectType({
  name: 'Owner',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  },
});
