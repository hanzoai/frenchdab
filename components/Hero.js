import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useStore } from '../store'
import { useObserver } from 'mobx-react-lite'
import { 
  Button,
  Grid,
  Link
} from '@material-ui/core'

const coreFont = {
  fontFamily: 'Open Sans',
  fontWeight: 600,
  color: '#ffffff',
  fontSize: '24px',
}

const useStyles = makeStyles(theme => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100vh',
    width: '100%',
    backgroundImage: 'url(/images/hero-background.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  getYourStripButton: {
    ...coreFont,
    borderRadius: 0,
    color: '#ffffff',
    width: '216px',
    height: '49px',
    border: '3px solid #ffffff',
    padding: 0
  },
  mainHeroText: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontSize: '50px',
    lineHeight: 1
  },
  bottomGrid: {
    color: '#ffffff',
    textAlign: 'right',
    marginRight: '5.2%',
    marginBottom: '8.65%'
  },
  topGrid: {
    textAlign: 'right',
    marginRight: '5.2%',
    marginTop: '2.5%',
  },
  elephantHero: {
    marginLeft: '-39px'
  },
  lineDiv: {
    backgroundColor: 'white',
    minWidth: '38px',
    height: '3px',
    display: 'inline-block',
    marginBottom: '4px'
  },
  linkStyle: {
    ...coreFont,
    marginLeft: '2em',
    textDecoration: 'none'
  }
}))

export default (props) => {
  const store = useStore()
  const classes = useStyles()
  const { user } = store.accountStore

  return (
    <div className={classes.hero}>
      <Grid container justify='center' alignContent='space-between' style={{ minHeight: '100%' }}>
        <Grid item xs={12} className={classes.topGrid}>
          <Link href='#' className={classes.linkStyle}>french dab</Link>
          <Link href='#' className={classes.linkStyle}>about</Link>
          <Link href='#' className={classes.linkStyle}>shop</Link>
          <Link href='#' className={classes.linkStyle}>cart (3)</Link>
        </Grid>
        <Grid item xs={3} style={{flexDirection: 'column', textAlign: 'center'}}>
          <img src='/images/hero-elephant.png' alt='white elephant logo' className={classes.elephantHero} />
          <Typography variant='h5' className={classes.mainHeroText}>Think</Typography>
          <Typography variant='h5' className={classes.mainHeroText}>about</Typography>
          <Typography variant='h5' className={classes.mainHeroText}>you</Typography>
          <Button variant='outlined' className={classes.getYourStripButton}>GET YOUR STRIP</Button>
        </Grid>
        <Grid item xs={12} className={classes.bottomGrid}>
          <Typography variant='body2' style={{ fontSize: '24px' }}><span className={classes.lineDiv} /> purity you can taste, absorb,</Typography>
          <Typography variant='body2' style={{ fontSize: '24px' }}>and feel</Typography>
        </Grid>
      </Grid>
    </div>
  )
}