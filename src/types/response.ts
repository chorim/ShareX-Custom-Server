export interface DefaultResponse {
  status: boolean
  message?: string
}
export interface ShareXCustomResponse extends DefaultResponse {
  errormsg?: string | undefined,
  url: string
}