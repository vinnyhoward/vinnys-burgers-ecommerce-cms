import { MdStore as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'storeSettings',
  // visible title
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'Name of the store',
    },
    {
      name: 'theChefs',
      title: 'The Chefs Currently Cookin',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'freshBurgers',
      title: 'Fresh burgers available now',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'veganBurger' }] }],
    },
  ],
};
