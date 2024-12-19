import { CollectionConfig } from 'payload';

const FooterBanner: CollectionConfig = {
  slug: 'footerbanner', 
  admin: {
    useAsTitle: 'heading', 
  },
  fields: [
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media', 
        required: true,
        label: 'FooterBanner Image', 
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading', 
    },
    {
        name: 'subHeading',
        type: 'text',
        required: false,
        label: 'FooterBanner Sub Heading', 
    },
    {
        name: 'button',
        type: 'group', 
        label: 'Button Settings',
        fields: [
          {
            name: 'label',
            type: 'text',
            required: true,
            label: 'Button Label', 
          },
          {
            name: 'link',
            type: 'text',
            required: true,
            label: 'Button Link', 
          },
        ],
      },
  ],
};

export default FooterBanner;
