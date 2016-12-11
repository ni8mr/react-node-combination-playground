import React from 'react';
import { Link } from 'react-router';
import athletes from '../data/athletes';

export default class AthletesMenu extends React.Component{
	render(){
		return (
			<nav className="athletes-menu">
			{athletes.map(menuAthlete => {
				retrun <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`}>
				    {menuAthlete.name}
				</Link>;
			})}
			</nav>
		);
	}
}