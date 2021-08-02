import React, { Component } from "react";
import axios from "axios";

class ProvinceList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			provinces: []
		};
	}

	componentDidMount() {
		axios.get('https://app-provinces.herokuapp.com/provinces')
			.then(resp => {
				console.log(resp);
				this.setState({
					provinces: resp.data
				});
			})
			.catch(err => console.error(err));
	}

	render() {
		/*if (this.props.provinces == null || this.props.provinces.length === 0) {
			return <h6 className="p-2"> Aucune province! </h6>
		}

		return this.props.provinces.map(p => <div className="card m-1 p-1 bg-light" key={p.provinceCode}>
			{p.provinceName}
		</div>)*/
		let tableRows = null;

		if (this.state.provinces == null || this.state.provinces.length === 0) {
			tableRows = (() => <tr>
				<td>Aucune province!</td>
			</tr>);
		}

		tableRows = this.state.provinces.map(
			(p, index) => <tr key={index}>
				<td>{p.provinceCode}</td>
				<td>{p.provinceName}</td>
			</tr>
		);

		return (
			<div className="App">
				<table>
					<tbody>{tableRows}</tbody>
				</table>
			</div>
		);
	}

}

export default ProvinceList;