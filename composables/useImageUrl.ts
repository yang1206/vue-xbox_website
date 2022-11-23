import { filename } from 'pathe/utils'
const glob = import.meta.glob(`~/assets/images/*.jpg`, { eager: true })
const useImageUrl = (name: string) => {
  const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
  )
  return images[name]
}
export default useImageUrl
