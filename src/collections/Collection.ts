import { CollectionConfig } from "payload";

export const Customers: CollectionConfig = {
    slug:'customers',
    auth: true,
    fields: [
        {
        name: 'firstname',
        type: 'text',
        required: true
        },
        {
        name: 'lastname',
        type: 'text',
        required: true
        }
    ]
}