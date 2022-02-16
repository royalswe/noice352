import {TagIcon} from '@sanity/icons'

export default {
  name: 'category',
  type: 'document',
  icon: TagIcon,
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Address of this post in the website',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
