/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
    media: MediaAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    navbar: Navbar;
    'banner-slider': BannerSlider;
    'multiple-logos': MultipleLogo;
    'content-page': ContentPage;
    'slider-content': SliderContent;
    accordion: Accordion;
    'tabs-content': TabsContent;
    articles: Article;
    footerbanner: Footerbanner;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    navbar: NavbarSelect<false> | NavbarSelect<true>;
    'banner-slider': BannerSliderSelect<false> | BannerSliderSelect<true>;
    'multiple-logos': MultipleLogosSelect<false> | MultipleLogosSelect<true>;
    'content-page': ContentPageSelect<false> | ContentPageSelect<true>;
    'slider-content': SliderContentSelect<false> | SliderContentSelect<true>;
    accordion: AccordionSelect<false> | AccordionSelect<true>;
    'tabs-content': TabsContentSelect<false> | TabsContentSelect<true>;
    articles: ArticlesSelect<false> | ArticlesSelect<true>;
    footerbanner: FooterbannerSelect<false> | FooterbannerSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user:
    | (User & {
        collection: 'users';
      })
    | (Media & {
        collection: 'media';
      });
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface MediaAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navbar".
 */
export interface Navbar {
  id: string;
  title: string;
  logo: string | Media;
  menus: {
    label: string;
    link: string;
    subItems?:
      | {
          label: string;
          link: string;
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  buttons?:
    | {
        label: string;
        link: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "banner-slider".
 */
export interface BannerSlider {
  id: string;
  mainHeading: string;
  subHeading: string;
  buttons: {
    label: string;
    link: string;
    id?: string | null;
  }[];
  images: {
    url: string | Media;
    id?: string | null;
  }[];
  tags: {
    text: string;
    color: 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'orange';
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "multiple-logos".
 */
export interface MultipleLogo {
  id: string;
  images: {
    image: string | Media;
    caption?: string | null;
    id?: string | null;
  }[];
  heading: string;
  subtext?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "content-page".
 */
export interface ContentPage {
  id: string;
  mainHeading: string;
  mainSubheading?: string | null;
  logo: string | Media;
  textSection?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  secondaryHeading?: string | null;
  secondarySubheading?: string | null;
  image?: (string | null) | Media;
  blocks?:
    | {
        blockImage?: (string | null) | Media;
        blockHeading?: string | null;
        blockSubheading?: string | null;
        blockLink?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "slider-content".
 */
export interface SliderContent {
  id: string;
  heading: string;
  blocks?:
    | {
        heading: string;
        subHeading?: string | null;
        button: {
          label: string;
          link: string;
        };
        image?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "accordion".
 */
export interface Accordion {
  id: string;
  heading: string;
  caption?: string | null;
  image: string | Media;
  accordion?:
    | {
        title: string;
        content: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tabs-content".
 */
export interface TabsContent {
  id: string;
  heading: string;
  subHeading?: string | null;
  tabs?:
    | {
        mainTitle: string;
        image: string | Media;
        heading: string;
        subHeading?: string | null;
        button: {
          label: string;
          link: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles".
 */
export interface Article {
  id: string;
  heading: string;
  article?:
    | {
        mainTitle: string;
        image: string | Media;
        heading: string;
        subHeading?: string | null;
        link: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footerbanner".
 */
export interface Footerbanner {
  id: string;
  image: string | Media;
  heading: string;
  subHeading?: string | null;
  button: {
    label: string;
    link: string;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'navbar';
        value: string | Navbar;
      } | null)
    | ({
        relationTo: 'banner-slider';
        value: string | BannerSlider;
      } | null)
    | ({
        relationTo: 'multiple-logos';
        value: string | MultipleLogo;
      } | null)
    | ({
        relationTo: 'content-page';
        value: string | ContentPage;
      } | null)
    | ({
        relationTo: 'slider-content';
        value: string | SliderContent;
      } | null)
    | ({
        relationTo: 'accordion';
        value: string | Accordion;
      } | null)
    | ({
        relationTo: 'tabs-content';
        value: string | TabsContent;
      } | null)
    | ({
        relationTo: 'articles';
        value: string | Article;
      } | null)
    | ({
        relationTo: 'footerbanner';
        value: string | Footerbanner;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'media';
        value: string | Media;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'media';
        value: string | Media;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navbar_select".
 */
export interface NavbarSelect<T extends boolean = true> {
  title?: T;
  logo?: T;
  menus?:
    | T
    | {
        label?: T;
        link?: T;
        subItems?:
          | T
          | {
              label?: T;
              link?: T;
              id?: T;
            };
        id?: T;
      };
  buttons?:
    | T
    | {
        label?: T;
        link?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "banner-slider_select".
 */
export interface BannerSliderSelect<T extends boolean = true> {
  mainHeading?: T;
  subHeading?: T;
  buttons?:
    | T
    | {
        label?: T;
        link?: T;
        id?: T;
      };
  images?:
    | T
    | {
        url?: T;
        id?: T;
      };
  tags?:
    | T
    | {
        text?: T;
        color?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "multiple-logos_select".
 */
export interface MultipleLogosSelect<T extends boolean = true> {
  images?:
    | T
    | {
        image?: T;
        caption?: T;
        id?: T;
      };
  heading?: T;
  subtext?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "content-page_select".
 */
export interface ContentPageSelect<T extends boolean = true> {
  mainHeading?: T;
  mainSubheading?: T;
  logo?: T;
  textSection?: T;
  secondaryHeading?: T;
  secondarySubheading?: T;
  image?: T;
  blocks?:
    | T
    | {
        blockImage?: T;
        blockHeading?: T;
        blockSubheading?: T;
        blockLink?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "slider-content_select".
 */
export interface SliderContentSelect<T extends boolean = true> {
  heading?: T;
  blocks?:
    | T
    | {
        heading?: T;
        subHeading?: T;
        button?:
          | T
          | {
              label?: T;
              link?: T;
            };
        image?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "accordion_select".
 */
export interface AccordionSelect<T extends boolean = true> {
  heading?: T;
  caption?: T;
  image?: T;
  accordion?:
    | T
    | {
        title?: T;
        content?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tabs-content_select".
 */
export interface TabsContentSelect<T extends boolean = true> {
  heading?: T;
  subHeading?: T;
  tabs?:
    | T
    | {
        mainTitle?: T;
        image?: T;
        heading?: T;
        subHeading?: T;
        button?:
          | T
          | {
              label?: T;
              link?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles_select".
 */
export interface ArticlesSelect<T extends boolean = true> {
  heading?: T;
  article?:
    | T
    | {
        mainTitle?: T;
        image?: T;
        heading?: T;
        subHeading?: T;
        link?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footerbanner_select".
 */
export interface FooterbannerSelect<T extends boolean = true> {
  image?: T;
  heading?: T;
  subHeading?: T;
  button?:
    | T
    | {
        label?: T;
        link?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}