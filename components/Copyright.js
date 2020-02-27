import {
  Link,
  Typography
} from '@material-ui/core'

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={props.link}>
        {props.title}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
