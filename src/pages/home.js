import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import PostData from '../posts.json'

import Post from '../components/Post'
import Profile from '../components/Profile'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
const postDetails=PostData.map((postDetail)=> <Post key={postDetail.id} avatar={postDetail.avatar} userHandle={postDetail.userHandle} content={postDetail.content} date={postDetail.date} clan={postDetail.clan}/>)

 class home extends Component {
    
   /*I have  added temprory post from json */
    render() {
        return (
            <Grid container spacing={20}>
                <Grid item sm={7} xs={12}>
                    {postDetails}
                </Grid>
                <Grid item sm={5} xs={10}>
                <Profile></Profile>
                <Paper square>
                <Tabs
                fullWidth={true}
                indicatorColor="primary"
                centered
                >
                <Tab label="Posts"  />
                <Tab label="Clan"  />
                
                </Tabs>
                </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default home
