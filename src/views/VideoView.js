import {Button, Card, CardContent, CardHeader, CircularProgress} from '@material-ui/core'
import {useHistory, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getVideoComments, getVideoMeta} from '../apis/videoApi'
import ReactPlayer from 'react-player/lazy'

const VideoView = () => {
  const {vid} = useParams()

  const [meta, setMeta] = useState()

  const [comments, setComments] = useState([])

  const history = useHistory()

  const handleClick = path => () => history.push(path)

  useEffect(() => {
    getVideoMeta(vid).then(res => {
      if (res != null) {
        setMeta(res)
      }
    })
    getVideoComments(vid).then(res => {
      if (res != null) {
        setComments(res.res)
      }
    })
  }, [setMeta, setComments, vid])

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
            {comments ? (
              <Card>
                <CardHeader title="评论" />
                <CardContent>
                  {comments.map(comment => (
                    <Card style={{marginTop: '1em'}}>
                      <CardHeader title={'By ' + comment.user_name} subheader={comment.time} />
                      <CardContent>
                        {comment.text}
                      </CardContent>
                    </Card>
                  ))}
                  <Button style={{marginTop: '1em'}} variant="outlined"
                          onClick={handleClick(`/videos/${vid}/comments/add`)}>
                    Comment
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <CircularProgress />
            )}
          </CardContent>
        </Card>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default VideoView
