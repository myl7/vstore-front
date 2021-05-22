import {Card, CardContent, CardHeader, CircularProgress} from '@material-ui/core'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getVideoMeta} from '../apis/videoApi'
import ReactPlayer from 'react-player/lazy'

const VideoView = () => {
  const {vid} = useParams()

  const [meta, setMeta] = useState()

  useEffect(() => {
    getVideoMeta(vid).then(res => {
      if (res != null) {
        setMeta(res)
      }
    })
  }, [setMeta, vid])

  return (
    <div style={{padding: '0.5em'}}>
      {meta ? (
        <Card>
          <CardHeader title={meta.title} subheader={`Source: ${meta.source}`} />
          <CardContent>
            <div style={{marginBottom: '1em'}}>
              {meta.description}
            </div>
            <ReactPlayer controls url={[
              {src: `http://localhost:8080/api/videos/${meta.vid}/stream`, type: 'video/mp4'}
            ]} />
          </CardContent>
        </Card>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default VideoView
