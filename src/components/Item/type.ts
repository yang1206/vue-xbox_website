export type ItemCardProps = {
  direction?: 'left' | 'right' | 'none'
  mdSrc: string
  smSrc: string
  text: {
    title: string
    des: string
    button: string
  }
  theme?: string | 'theme-green' | 'theme-transparent' | 'theme-black'
}
