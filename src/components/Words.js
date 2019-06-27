import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const databaseURL = "https://word-cloud-e5850.firebaseio.com"
class Words extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          Words 페이지
        </CardContent>
      </Card>
    )
  }
}

export default Words;
