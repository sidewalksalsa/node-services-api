import { prisma } from '@prisma/generated/prisma-client';

const roles = [{ name: 'USER' }];

/**
 * Seed roles
 *
 * @async
 * @function
 * @returns {undefined} - Role was inserted into DB
 */
export default async () => {
  for (const role of roles) {
    // @ts-ignore
    await prisma.createRole(role);
  }
};
