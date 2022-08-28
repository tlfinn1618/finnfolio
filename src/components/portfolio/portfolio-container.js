import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class Portfoliocontainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
       
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get('https://thomasfinn.devcamp.space/portfolio/portfolio_items')
          .then(response => {
            // console.log("response data", response);
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
            console.log(error);
          })
          .then(function () {
        });
    }
    
    portfolioItems() {
        return this.state.data.map(item => {
            // console.log("portfolio item", item);
            
            return <PortfolioItem key={item.id} item={item} />;
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (       
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button className="btn" onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button className="btn" onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                
                
                {this.portfolioItems()}
            </div>
        )
    }
}