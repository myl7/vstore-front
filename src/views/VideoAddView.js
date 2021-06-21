import {Button, Card, CardContent, CardHeader, Grid, TextField, Typography} from '@material-ui/core'
import {useRef, useState} from 'react'
import {addVideo} from '../apis/videoApi'
import {useHistory} from 'react-router-dom'

const VideoAddView = () => {
  const titleRef = useRef()
  const descriptionRef = useRef()
  const fileRef = useRef()

  const [filename, setFilename] = useState()

  const handleUpload = e => {
    const file = e.target.files[0]
    setFilename(file ? file.name : '选择视频文件')
  }

  const history = useHistory()

  const handleClick = () => {
    addVideo(titleRef.current.value, descriptionRef.current.value, fileRef.current.files[0]).then(res => {
      history.push(`/videos/${res.res}`)
    })
  }

  return (
    <div style={{padding: '0.5em'}}>
      <Card>
        <CardHeader title="上传新视频" />
        <CardContent>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField label="标题" variant="outlined" inputRef={titleRef} />
            </Grid>
            <Grid item>
              <TextField label="简介" variant="outlined" inputRef={descriptionRef} />
            </Grid>
            <Grid item>
              <input id="video-file" type={'file'} hidden ref={fileRef} onChange={handleUpload} />
              <label htmlFor="video-file">
                <Button variant="outlined" component={'span'}>
                  <Typography variant={'subtitle1'}>
                    {filename ? filename : '选择视频文件'}
                  </Typography>
                </Button>
              </label>
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

export default VideoAddView
