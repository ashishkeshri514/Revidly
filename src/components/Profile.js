/* I have Hard coded the profile information for now , as it will get after the login and authentication */

import React, { Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
class Profile extends Component {
    render() {
 
      
        return (
              <Paper>
              <Typography varient='h1' align="center" color="primary">@Ashish</Typography>   
              <img src={require('../img/1.png')} style ={{display:'block',marginLeft: 'auto',marginRight: 'auto', width: '50%', height: '200', borderRadius: 150/2}} alt="profile"/>
              <div style={{ padding: 20 }}>
              <Grid container justify="space-between"> 
                    <Typography variant="body2"  color="textSecondary" align="left" >Followers</Typography>
                    <Typography variant="body2"  color="textSecondary" align="center" >Following </Typography>
                    <Typography variant="body2" color="textSecondary" align="right"  >Upvotes </Typography>
                </Grid>
                <Grid container justify="space-between"> 
                    <Typography variant="body2"  color="textSecondary" align="left" >57</Typography>
                    <Typography variant="body2"  color="textSecondary" align="center" >100 </Typography>
                    <Typography variant="body2" color="textSecondary" align="right"  >4000 </Typography>
                    
                </Grid>
                <div style={{textAlign:"center"}}>
                <Button variant="contained" color='primary' >Change Clans</Button> <Button variant="contained" color='primary' >Invite Friends</Button>
                </div>
                </div>
              </Paper>

            
        )
    }
}
export default Profile