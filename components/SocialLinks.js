import { makeStyles } from '@material-ui/core/styles'
import {
  Link,
  Typography
} from '@material-ui/core'

import {
  GitHub,
  Facebook,
  Twitter
} from '@material-ui/icons'

import DiscordIcon from '../components/DiscordIcon'

import { SOCIAL_LINKS } from '../template.settings'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex', 
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    '@media (min-width:600px)': {
      maxWidth: '50%',
      margin: '0 auto'
    }
  }
}))

export default (props) => {
  const classes = useStyles()
  
  return (
    <>
      <Typography variant='h4' paragraph style={{ textAlign: 'center' }}>Stay Up to Date</Typography>
      <Typography variant='body1' paragraph className={classes.container}>
        <Link href={SOCIAL_LINKS.DISCORD} target='_blank'>
          <DiscordIcon width={245} height={240} style={{ fontSize: '48px' }} />
        </Link>
        <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank'>
          <Facebook style={{ fontSize: '48px', fill: '#3b5998' }} />
        </Link>
        <Link href={SOCIAL_LINKS.GITHUB} target='_blank'>
          <GitHub style={{ fontSize: '44px', fill: 'black' }} />
        </Link>
        {/* <Link href={SOCIAL_LINKS.TWITTER} target='_blank'>
          <Twitter style={{ fontSize: '44px', fill: 'black' }} />
        </Link> */}
      </Typography>
    </>
  )
}