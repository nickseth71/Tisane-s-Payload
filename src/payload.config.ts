import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import cors from 'cors';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Customers } from './collections/Collection';
import Blog from './collections/Blog';
import Navbar from './collections/Navbar';
import BannerSlider from './collections/Banner-slider';
import MultipleLogos from './collections/Multiple-logos';
import ContentPage from './collections/ContentPage';
import SliderContent from './collections/SliderContent';
import Accordion from './collections/Accordion';
import TabsContent from './collections/TabSection';
import Articles from './collections/Articles';
import FooterBanner from './collections/FooterBanner';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);


export default buildConfig({
  
  cors:  ['http://localhost:4200'], 
  csrf: ['http://localhost:4200'], 
  
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: 
  [
    Users, 
    Media,
    Navbar, 
    BannerSlider, 
    MultipleLogos, 
    ContentPage, 
    SliderContent,
    Accordion,
    TabsContent,
    Articles,
    FooterBanner,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
