import {Button, Card, CardContent, CardHeader, Grid, TextField, Typography} from '@material-ui/core'
import {useRef} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {addVideoComments} from '../apis/videoApi'

const CommentAddView = () => {
  const {vid} = useParams()

  const ref = useRef()

  const history = useHistory()

  const handleClick = () => {
    addVideoComments(vid, ref.current.value).then(() => {
      setTimeout(() => history.push(`/videos/${vid}`), 1000)
    })
  }

  return (
    <div style={{padding: '0.5em'}}>
      <Card>
        <CardHeader title="添加新评论" />
        <CardContent>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField label="内容" variant="outlined" inputRef={ref} />
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={handleClick}>
                <Typography variant={'subtitle1'}>
                  提交
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default CommentAddView
