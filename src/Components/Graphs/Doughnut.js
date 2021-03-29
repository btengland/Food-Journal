import {Subscription} from 'react-apollo';
import gql from 'graphql-tag';
import graphql2chartjs from 'graphql2chartjs';
import React, {Component} from 'react';
import {doughnut} from 'react-chartjs-2';


const Chart = () => (
  <Subscription
    subscription={gql`
      subscription {
        foods: allergens {
          label: 
          rating: 
        }
      }`}
    }>

    {({data} => {
      if (data) {
        const g2c = new graphql2chartjs(data, 'doughnut');
        return (<doughnut data={g2c.data} />);
      }
      return null;
    }
  </Subscription>
);

query {
  foods : allergens {
    label:
    data:
  }
}