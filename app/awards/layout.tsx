import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'

export const metadata: Metadata = genMeta({
  title: '業界獎項 - Korae 榮譽肯定',
  description: 'Korae 前身 OrangeBox 榮獲新城電台及香港電腦商會合辦之「香港傑出數碼品牌大獎」——傑出網上批發平台（創辦人：麥晧威先生）。了解我們的業界認可與榮譽。',
  keywords: ['業界獎項', '榮譽', '香港傑出數碼品牌大獎', '傑出網上批發平台', '業界認可', 'OrangeBox'],
  url: `${siteUrl}/awards`,
})

