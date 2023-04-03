export interface Country {
	name: string;
	code: string;
}

export const COUNTRIES: Country[] = [
	{ name: 'Argentina', code: 'ar' },
  { name: 'Australia', code: 'au' },
  { name: 'Austria', code: 'at' },
  { name: 'Belgium', code: 'be' },
  { name: 'Brazil', code: 'br' },
  { name: 'Canada', code: 'ca' },
  { name: 'China', code: 'cn' },
  { name: 'Colombia', code: 'co' },
  { name: 'Cuba', code: 'cu' },
  { name: 'Czech Republic', code: 'cz' },
  { name: 'Denmark', code: 'dk' },
  { name: 'Egypt', code: 'eg' },
  { name: 'Finland', code: 'fi' },
  { name: 'France', code: 'fr' },
  { name: 'Germany', code: 'de' },
  { name: 'Greece', code: 'gr' },
  { name: 'Hong Kong', code: 'hk' },
  { name: 'Hungary', code: 'hu' },
  { name: 'India', code: 'in' },
  { name: 'Indonesia', code: 'id' },
  { name: 'Ireland', code: 'ie' },
  { name: 'Israel', code: 'il' },
  { name: 'Italy', code: 'it' },
  { name: 'Japan', code: 'jp' },
  { name: 'Latvia', code: 'lv' },
  { name: 'Lithuania', code: 'lt' },
  { name: 'Malaysia', code: 'my' },
  { name: 'Mexico', code: 'mx' },
  { name: 'Morocco', code: 'ma' },
  { name: 'Netherlands', code: 'nl' },
  { name: 'New Zealand', code: 'nz' },
  { name: 'Norway', code: 'no' },
  { name: 'Philippines', code: 'ph' },
  { name: 'Singapore', code: 'sg' },
  { name: 'United States', code: 'us' }
]

export const NEWS_CATEGORIES = [
	"business", "entertainment", "general", "health", "science",
	"sports", "technology"
]

export interface Article {
  author: string
  title: string
  url: string
}