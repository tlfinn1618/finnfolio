import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component { 
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }

        this.handleSuccessfulFormsSubmission = this.handleSuccessfulFormsSubmission.bind(this);
        this.handleFormSumissionError = this.handleFormSumissionError.bind(this);
    }

    handleSuccessfulFormsSubmission(portfolioItem) {
        //TODO
        // Update the portfolioItems state
        // and add the portfolioItems to the list
    }

    handleFormSumissionError(error) {
        console.log("handleFormSubmissionError error", error);
    }

    getPortfolioItems() {
        axios.get("https://thomasfinn.devcamp.space/portfolio/portfolio_items", {withCredentials: true
        } ).then(response =>  {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log("error in getPortfolioItems",  error);
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className='portfolio-manager-wrapper'>
                <div className='left-column'>
                    <PortfolioForm 
                        handleSuccessfulFormsSubmission = {this.handleSuccessfulFormsSubmission}
                        handleFormSumissionError={this.handleFormSumissionError}
                    />
                </div>

                <div className='right-column'>
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        )
    }
}