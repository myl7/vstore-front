const ServerHost = ''

export const listUserVideoMeta = async () => {
  const res = await fetch(ServerHost + '/api/videos')
  if (res.status !== 200) {
    const err = await res.text()
    console.error(err)
    return null
  }
  const body = await res.json()
  return body['res']
}

export const getVideoMeta = async vid => {
  const res = await fetch(ServerHost + `/api/videos/${vid}/meta`)
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
  const res = await fetch(ServerHost + `/api/videos/${vid}/comments`)
  if (res.status !== 200) {
    const err = await res.text()
    console.error(err)
    return null
  }
  return await res.json()
}

export const addVideoComments = async (vid, text) => {
  const res = await fetch(ServerHost + `/api/videos/${vid}/comments`, {
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
