import { CollectionConfig } from 'payload';

const BannerSlider: CollectionConfig = {
  slug: 'banner-slider',
  admin: {
    useAsTitle: 'mainHeading',
  },
  fields: [
    {
      name: 'mainHeading',
      type: 'text',
      required: true,
    },
    {
      name: 'subHeading',
      type: 'text',
      required: true,
    },
    {
      name: 'buttons',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'url',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          type: 'select',
          options: [
            { label: 'Red', value: 'red' },
            { label: 'Green', value: 'green' },
            { label: 'Blue', value: 'blue' },
            { label: 'Yellow', value: 'yellow' },
            { label: 'Purple', value: 'purple' },
            { label: 'Orange', value: 'orange' },
          ],
          required: true,
        },
      ],
    },
  ],
};

export default BannerSlider;
