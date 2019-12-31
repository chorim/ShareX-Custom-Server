let storeToken = ''
export const setToken = (token: string) => storeToken = token
export const isUser = (userToken: string) => {
  const tokens = (storeToken !== '') ? storeToken : process.env.USER_TOKENS as string
  const token = tokens.split(',')
  return token.includes(userToken)
}