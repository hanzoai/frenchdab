import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Button
} from '@material-ui/core'

import { TITLE, HERO_IMAGE, TAG_LINE, SITE_LINK } from '../template.settings'

import Copyright from '../components/Copyright'
import Hero from '../components/Hero'

import ContentSection from '../components/ContentSection'
import SocialLinks from '../components/SocialLinks'

import { useStore } from '../store'

const openSans = {
  fontFamily: 'Open Sans',
  fontWeight: 600
}

const longeviteColor = {
  color: '#FBAD18',
}

const progressColor = {
  color: '#6ABF64',
}

const aphrodisiaqueColor = {
  color: '#F26963',
}

const useStyles = makeStyles(theme => ({
  title: {
    ...openSans,
    fontSize: '4rem',
    marginBottom: '2rem',
    marginTop: '3rem'
  },
  subTitle: {
    ...openSans,
    fontSize: '2rem'
  },
  italics: {
    ...openSans,
    fontSize: '1rem',
    fontStyle: 'italic',
    marginTop: '2rem',
    marginBottom: '3rem',
  },
  lineBreak: {
    border: '1px solid black'
  },
  initialDiv: {
    textAlign: 'center',
  },
  imageDiv: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  innerContentDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: '300px'
  },
  addToCardBtn: {
    borderRadius: 0,
    color: 'black',
    width: '210px',
    height: '45px',
    border: '3px solid black',
    padding: 0,
    textTransform: 'uppercase',
    marginBottom: '2rem'
  },
  longeviteTitle: {
    ...longeviteColor,
    fontFamily: 'Louis George Cafe',
    fontSize: '2rem'
  },
  longeviteSubtitle: {
    ...longeviteColor,
    fontFamily: 'Keep Calm',
    fontSize: '1rem',
    marginBottom: '1.5rem'
  },
  progressTitle: {
    ...progressColor,
    fontFamily: 'Louis George Cafe',
    fontSize: '2rem'
  },
  progressSubtitle: {
    ...progressColor,
    fontFamily: 'Keep Calm',
    fontSize: '1rem',
    marginBottom: '1.5rem'
  },
  aphrodisiaqueTitle: {
    ...aphrodisiaqueColor,
    fontFamily: 'Louis George Cafe',
    fontSize: '2rem'
  },
  aphrodisiaqueSubtitle: {
    ...aphrodisiaqueColor,
    fontFamily: 'Keep Calm',
    fontSize: '1rem',
    marginBottom: '1.5rem'
  },
  contentText: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem'
  },
  healthInfo: {
    width: '671px',
    height: 'auto'
  },
  breakImage: {
    minWidth: '100vw',
    height: 'auto',
    marginBottom: '4rem'
  },
  aboutText: {
    fontFamily: 'Louis George Cafe',
    fontSize: '1.2rem',
    marginBottom: '1rem'
  },
  thinkTextTitle: {
    fontSize: '2rem',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    lineHeight: '1'
  },
  thinkText: {
    fontSize: '1rem',
    fontFamily: 'Roboto',
  },
  thinkDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
  }
}))

export default (props) => {
  const classes = useStyles()
  const store = useStore()
  const { lynxInit } = store.accountStore
  useEffect(() => {
    lynxInit()
  }, [])

  return (
    <>
      <Hero 
        title={TITLE}
        image={HERO_IMAGE}
        subtitle={TAG_LINE}
      />
      <Container style={{ paddingTop: '3vh' }}>
        <ContentSection 
          justify='center'
          align='center'
          full
          xsSpacing={9}
          smSpacing={8}
          content={
            <div className={classes.initialDiv}>
              <Typography variant='h5' className={classes.title}>Original</Typography>
              <hr className={classes.lineBreak} />
              <Typography variant='h6' className={classes.subTitle}>100% Vegan | Superfood & Fungi | Sublingual Strip</Typography>
              <hr className={classes.lineBreak} />
              <Typography variant='body2' className={classes.italics}>
                Our whole plant & fungi remedies are clean, 
                highly concentrated, and easy to absorb.  
                Our exotic formulations bypass the digestive system sublingually, 
                directly to bloodstream
              </Typography>
            </div>
          }
        />
        <ContentSection 
          justify='center'
          align='center'
          full
          xsSpacing={10}
          smSpacing={10}
          content={
            <div className={classes.imageDiv}>
              <img src='/images/longevite.png' alt='longévité' />
              <div className={classes.innerContentDiv}>
                <Typography variant='h5'className={classes.longeviteTitle}>longévité</Typography>
                <Typography variant='h6'className={classes.longeviteSubtitle}>increase longevity & drive</Typography>
                <Typography variant='body2'className={classes.contentText}>
                  Invigorating turmeric & cordyceps tonic for daily high function. 
                  The synergystic formula helps maintain and imporove healthy joints, glowing skin, positive energy, drive and sexual function.
                </Typography>
              </div>
              <div className={classes.innerContentDiv}>
                <Button className={classes.addToCardBtn}>+10 | Cart | $20</Button>
                <Button className={classes.addToCardBtn}>+30 | Cart | $42</Button>
                <Button className={classes.addToCardBtn}>Learn More</Button>
              </div>
            </div>
          }
        />
        <ContentSection 
          justify='center'
          align='center'
          full
          xsSpacing={10}
          smSpacing={10}
          content={
            <div className={classes.imageDiv}>
              <img src='/images/progress.png' alt='progréss' />
              <div className={classes.innerContentDiv}>
                <Typography variant='h5'className={classes.progressTitle}>progréss</Typography>
                <Typography variant='h6'className={classes.progressSubtitle}>focus & cognition</Typography>
                <Typography variant='body2'className={classes.contentText}>
                  Known as the “Samurai Strip,” crafted with Japanese precision, 
                  Ceremonial Grade Matcha paired with Lions Mane Mushroom will help you maintain progressive improvement in your life for years to come.
                </Typography>
              </div>
              <div className={classes.innerContentDiv}>
                <Button className={classes.addToCardBtn}>+10 | Cart | $20</Button>
                <Button className={classes.addToCardBtn}>+30 | Cart | $42</Button>
                <Button className={classes.addToCardBtn}>Learn More</Button>
              </div>
            </div>
          }
        />
        <ContentSection 
          justify='center'
          align='center'
          full
          xsSpacing={10}
          smSpacing={10}
          content={
            <div className={classes.imageDiv}>
              <img src='/images/aphrodisiaque.png' alt='aphrodisiaque' />
              <div className={classes.innerContentDiv}>
                <Typography variant='h5'className={classes.aphrodisiaqueTitle}>aphrodisiaque</Typography>
                <Typography variant='h6'className={classes.aphrodisiaqueSubtitle}>increase sensual experience</Typography>
                <Typography variant='body2'className={classes.contentText}>
                  Redefining the sex essentials industry for conscious consumers. 
                  Infused with damiana, known as a natural aphrodisiac, uplift your sensations to swim in good vibrations.
                </Typography>
              </div>
              <div className={classes.innerContentDiv}>
                <Button className={classes.addToCardBtn}>+10 | Cart | $20</Button>
                <Button className={classes.addToCardBtn}>+30 | Cart | $42</Button>
                <Button className={classes.addToCardBtn}>Learn More</Button>
              </div>
            </div>
          }
        />
        <ContentSection 
          justify='center'
          align='center'
          full
          xsSpacing={12}
          smSpacing={12}
          content={
            <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src='/images/health-info.png' alt='health info' className={classes.healthInfo} />
            </div>
          }
        />
      </Container>
      <img src='/images/bottom-hero.png' alt='long break image' className={classes.breakImage} />
      <ContentSection 
        justify='center'
        align='center'
        xsSpacing={6}
        smSpacing={4}
        lContent={
          <div className={classes.imageDiv}>
            <img src='/images/product1.png' alt='product image' />
          </div>
        }
        rContent={
          <div>
            <Typography variant='body2' className={classes.aboutText}>
              French Dab is a plant & fungi based wellness company with a charismatic commitment to the development of pure, innovative, and sustainable highly absorbable products. 
            </Typography>
            <Typography variant='body2' className={classes.aboutText}>
              We are dedicated to the study of mushroom adaptogens and pure plant essences for their psychological, physiological and environmental benefits.
            </Typography>
            <Button className={classes.addToCardBtn} style={{ fontFamily: 'Louis George Cafe', fontSize: '1.3rem', fontWeight: 700 }}>Learn More</Button>
          </div>
        }
      />
      <hr className={classes.lineBreak} />
      <div className={classes.thinkDiv}>
        <div style={{ maxWidth: '25%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='h5'className={classes.thinkTextTitle}>think</Typography>
          <Typography variant='h5'className={classes.thinkTextTitle}>about</Typography>
          <Typography variant='h5'className={classes.thinkTextTitle}>you</Typography>
        </div>
        <Typography variant='body2'className={classes.thinkText}>
          10% off your first order and be the first to know about limited edition launches, events, and recipes.
        </Typography>
        <Typography variant='body2'className={classes.thinkText}>
          Email Placeholder
        </Typography>
      </div>
      <hr className={classes.lineBreak} />
      <Copyright title={TITLE} link={SITE_LINK} />
    </>
  )
  // }
}
/*
  <Typography variant='body1' paragraph></Typography>
  <Typography variant='body1' paragraph><Typography variant='h6' component='span'></Typography></Typography>
  {
    [
      {
        title: '',
        body: ''
      },
    ]
  }
*/
