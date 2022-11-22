export default interface Option {
  src: string
  xlSrc?: string
  mdSrc?: string
  smSrc?: string
  textAling?: 'left' | 'right'
  text?: {
    title: string
    des: string
    button: string
  }
}
