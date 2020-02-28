import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Link,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex', 
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    '@media (min-width:600px)': {
      maxWidth: '50%',
      margin: '0 auto'
    }
  },
  footerHeading: {
    fontFamily: 'Louis George Cafe',
    fontSize: '3.5rem',
    fontWeight: 700,
    display: 'inline-block',
    marginLeft: '1em'
  },
  linkDiv: {
    display: 'flex',
    flexDirection: 'column'
  },
  linkFont: {
    fontFamily: 'Louis George Cafe',
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '.5em'
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  socialRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1em'
  },
  disclaimerFont: {
    fontFamily: 'Louis George Cafe',
    fontSize: '.8rem',
  }
}))

export default (props) => {
  const classes = useStyles()
  
  return (
    <Grid container justify='space-around' style={{ marginTop: '2em', marginBottom: '2em' }}>
      <Grid item xs={6} sm={4}>
        <img src='/images/black-elephant.png' alt='black elephant' />
        <Typography variant='h6' className={classes.footerHeading}>french dab</Typography>
      </Grid>
      <Grid item xs={4} sm={2}>
        <div className={classes.linkDiv}>
          <Typography variant='body2' className={classes.linkFont}>PLANTS + FUNGI</Typography>
          <Typography variant='body2' className={classes.linkFont}>about</Typography>
          <Typography variant='body2' className={classes.linkFont}>shop</Typography>
          <Typography variant='body2' className={classes.linkFont}>ingredients</Typography>
          <Typography variant='body2' className={classes.linkFont}>blogs</Typography>
          <Typography variant='body2' className={classes.linkFont}>videos</Typography>
        </div>
      </Grid>
      <Grid item xs={4} sm={2}>
        <div className={classes.linkDiv}>
          <Typography variant='body2' className={classes.linkFont}>COMMUNITY</Typography>
          <Typography variant='body2' className={classes.linkFont}>contact us</Typography>
          <Typography variant='body2' className={classes.linkFont}>terms of service</Typography>
          <Typography variant='body2' className={classes.linkFont}>my account</Typography>
        </div>
      </Grid>
      <Grid item xs={6} sm={2}>
        <div className={classes.socialContainer}>
          <div className={classes.socialRow}>
            <img src='/images/fb-icon.png' alt='facebook' />
            <img src='/images/twitter-icon.png' alt='twitter' />
            <img src='/images/ig-icon.png' alt='instagram' />
            <img src='/images/youtube-icon.png' alt='youtube' />
          </div>
          <Typography variant='body2' className={classes.disclaimerFont}>
            *Individual results may vary. 
            This statement has not been evaluated by the Food and Drug Administration. 
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}