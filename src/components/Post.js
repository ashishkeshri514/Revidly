import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Grid } from '@material-ui/core'
//MUI stuff
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
    cards: {
        display: 'flex',
        marginButton: 20,

    },
    image:{
        minWidth:200,
    },
    content:{
        padding: 25,
    }
}
class Post extends Component {
    render() {
        dayjs.extend(relativeTime)

        
        return (
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth>
            <Card > 
                <CardContent >
                <a href={'/users/'+ this.props.userHandle}>
                <img src={require('../img/'+this.props.avatar)} style ={{width: 60, height: 60, borderRadius: 150/2}} component={Link} to={'/users/'+ this.props.userHandle} alt="profile"/>
                </a>
                    <Typography variant="h5" color="primary"  >{this.props.clan} </Typography>
                    
                    <Grid container justify="space-between"> 
                    <Typography variant="body2" component={Link} to={'/users/'+ this.props.userHandle} color="textSecondary" align="left" >{this.props.userHandle} </Typography>
                    <Typography variant="body2" color="textSecondary" align="right"  >{dayjs(this.props.date).fromNow()} </Typography>
                    </Grid>
                    <Typography variant="body1" color="textPrimary">{this.props.content} </Typography>
                    <button>⬆ Upvotes</button>  <button> 💬 </button>   <button>⏩</button>  <button>👁‍🗨</button> <button>⬇ Downvotes</button>


                </CardContent>
                
            </Card>
            </Grid>
            </Grid>

            
        )
    }
}

export default withStyles(styles)(Post)
