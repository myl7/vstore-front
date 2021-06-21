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

export const getVideoMeta = async vid => {
  const res = await fetch(ServerHost + `/api/videos/${vid}/meta`, {credentials: 'include'})
  if (res.status !== 200) {
    const err = await res.text()
    console.error(err)
    return null
  }
  return await res.json()
}

export const addVideo = async (title, description, file, sid = 1) => {
  const body = new FormData()
  body.set('file', file)
  body.set('sid', String(sid))
  body.set('title', title)
  body.set('description', description)
  const res = await fetch(ServerHost + '/api/videos', {
    method: 'POST',
    credentials: 'include',
    body
  })
  if (res.status !== 201) {
    const err = await res.text()
    console.error(err)
    return null
  }
  return await res.json()
}

export const getVideoComments = async vid => {
  const res = await fetch(ServerHost + `/api/videos/${vid}/comments`, {credentials: 'include'})
  if (res.status !== 200) {
    const err = await res.text()
    console.error(err)
    return null
  }
  return await res.json()
}

export const addVideoComments = async (vid, text) => {
  const res = await fetch(ServerHost + `/api/videos/${vid}/comments`, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({text})
  })
  if (res.status !== 201) {
    const err = await res.text()
    console.error(err)
    return null
  }
  return await res.json()
}
