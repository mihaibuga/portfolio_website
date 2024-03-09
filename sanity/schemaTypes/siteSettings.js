export const SiteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'copyrightYear',
      title: 'Copyright Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
    },
  ],
}
