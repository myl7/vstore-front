const ServerHost = 'http://localhost:8080'

export const listUserVideoMeta = async () => {
  const res = await fetch(ServerHost + '/api/videos', {credentials: 'include'})
  if (res.status !== 200) {
    const err = await res.text()
    console.error(err)
    return null
  }
  const body = await res.json()
  return body['res']
}