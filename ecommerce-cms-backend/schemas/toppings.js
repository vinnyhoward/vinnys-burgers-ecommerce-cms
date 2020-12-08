export default {
  // computer name
  name: 'topping',
  // visible title
  title: 'Toppings',
  type: 'document',
  icon: () => '🍅',
  fields: [
    {
      name: 'name',
      title: 'Vegan Burger Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'glutenFree',
      title: 'Gluten Free',
      type: 'boolean',
      description: 'What is the name of the topping?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      glutenFree: 'glutenFree',
    },
    prepare: ({ name, glutenFree }) => ({
      title: `${name} ${glutenFree ? '❌ 🍞' : '✅ 🍞'}`,
    }),
  },
};
