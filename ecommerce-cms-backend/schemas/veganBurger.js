import PriceInput from '../components/PriceInput';

export default {
  // computer name
  name: 'veganBurger',
  // visible title
  title: 'Vegan Burgers',
  type: 'document',
  icon: () => '🍔',
  fields: [
    {
      name: 'name',
      title: 'Vegan Burger Name',
      type: 'string',
      description: 'Name of the burger',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the burger in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
      inputComponent: PriceInput,
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      const subtitle = Object.values(toppings).filter(Boolean).join(', ');
      return {
        title,
        media,
        subtitle,
      };
    },
  },
};
