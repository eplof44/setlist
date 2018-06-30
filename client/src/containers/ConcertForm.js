import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateConcertFormData } from '../actions/concertsForm';
import { createConcert } from '../actions/concerts';


class ConcertForm extends Component {


    handleOnChange = event => {
      this.setState({
        [event.target.band]: event.target.value
      });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const { createConcert, history } = this.props;
        createConcert(this.state, history);
      }
