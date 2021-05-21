import {Card, CardActionArea, CardContent, CardHeader, Grid} from '@material-ui/core'
import {useEffect, useState} from 'react'
import {listUserVideoMeta} from '../apis/videoApi'
import {useHistory} from 'react-router-dom'

const IndexView = () => {
  const [videos, setVideos] = useState([])
  const history = useHistory()

  useEffect(() => {
    listUserVideoMeta().then(res => {
      if (res != null) {
        setVideos(res)
      }
    })
  }, [setVideos])

  const handleClick = vid => () => history.push(`/videos/${vid}`)

  return (
    <div style={{padding: 'calc(8px + 0.5em)'}}>
      <Grid container spacing={1}>
        {videos.map(({vid, title, source, description}) => (
          <Grid item key={vid} xl={6} xs={12}>
            <Card>
              <CardActionArea onClick={handleClick(vid)}>
                <CardHeader title={title} subheader={`Source: ${source}`} />
                <CardContent>
                  {description}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default IndexView
