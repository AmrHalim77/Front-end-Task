import React, { Component } from 'react';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: ""
        }
    }

    setFilterValue(filterValue){
        this.setState({
            filterValue
        })

        if(filterValue==""){
            this.props.updateFilters(this.props.filterKey,"")
        }
    }

    render() {
        return (
            <div>
                <label htmlFor="name">{this.props.filterKey}: </label>
                <input type="text" id={this.props.filterKey} name="name" required
                    minLength="4" maxLength="30" size="10" value={this.state.filterValue} onChange={(event)=>{this.setFilterValue(event.target.value)}}/>
                <button class="favorite styled"
                    type="button" onClick={() => this.props.updateFilters(this.props.filterKey,this.state.filterValue)} >
                    Apply Filter
                </button>
            </div >
        );
    }
}

export default SearchField;