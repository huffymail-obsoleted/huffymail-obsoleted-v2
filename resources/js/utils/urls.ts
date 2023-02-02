export const makeInboxUrl = (to: string): string => {
  return ['/inbox', to].join('/')
}
