import React, { Component } from "react";
export class ProvinceList extends Component {
	render() {
		if (this.props.provinces == null || this.props.provinces.length === 0) {
			return <h6 className="p-2"> Aucune province! </h6>
		}

		return this.props.provinces.map(p => <div className="card m-1 p-1 bg-light" key={p.provinceCode}>
			{p.provinceName}
		</div>)
	}

}