// content.ts
export interface ContentItem {
  name: string
  href: string
  icon?: string
}

export const content: ContentItem[] = [
  { name: 'Contact', href: '#contact' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'faTwitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'faLinkedin' },
  { name: 'GitHub', href: 'https://github.com', icon: 'faGithub' }
]
