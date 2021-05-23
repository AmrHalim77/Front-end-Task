import React, { Component } from 'react';
import PhoneService from '../services/PhoneService';
import SearchField from './SearchField';

class ListPhoneComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            phones: [],
            filters: {
                country: "",
                state: ""
            }
        }

        this.updateFilters = this.updateFilters.bind(this);
        this.updatePhones = this.updatePhones.bind(this);
    }

    componentDidMount() {
        this.updatePhones();

    }


    updatePhones(){
        PhoneService.getPhoneContact(this.state.filters).then((res) => {
            this.setState({ phones: res.data });

        });
    }

    updateFilters(key,value){
        this.setState({
            filters: {
                ...this.state.filters,
                [key]: value
            }
        },()=>{
            this.updatePhones(); 
        })

    }

    render() {
        return (
            <div>
                <SearchField filterKey="country"  updateFilters = {this.updateFilters} />
                <SearchField filterKey="state"  updateFilters = {this.updateFilters} />
                <h2 className="text-center">Phone List</h2>
                <div className="row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Country </th>
                                <th>Phone </th>
                                <th>Country code </th>
                                <th>State </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.phones.content?.length > 0 ?
                                    this.state.phones.content.map(
                                        phone =>
                                            <tr key={phone.id}>
                                                <td>{phone.id}</td>
                                                <td>{phone.country}</td>
                                                <td>{phone.phoneNumber}</td>
                                                <td>{phone.countryCode}</td>
                                                <td>{phone.state}</td>
                                            </tr>
                                    )
                                    : null
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListPhoneComponent;