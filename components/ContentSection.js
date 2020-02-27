import { makeStyles } from '@material-ui/core/styles'

import {
  Grid
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  gridContainer: {
    marginBottom: '4rem'
  }
}))

export default (props) => {
  const classes = useStyles()
  const { xsSpacing, smSpacing } = props

  return (
    <Grid container spacing={3} justify={props.justify} alignItems={props.align} className={classes.gridContainer}>
      {
        props.full ?
        <Grid item xs={xsSpacing || 12} sm={smSpacing || 12}>
          {props.content}
        </Grid>
        :
        <>
          <Grid item xs={xsSpacing || 12} md={smSpacing || 6}>
            {props.lContent}
          </Grid>
          <Grid item xs={xsSpacing || 12} md={smSpacing || 6}>
            {props.rContent}
          </Grid>
        </>
      }
    </Grid>
  )
}