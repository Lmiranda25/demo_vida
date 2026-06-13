export function img(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
export const reciclada = (file: string) => img(`images/reciclada/${file}`)
export const stock = (file: string) => img(`images/stock/${file}`)
