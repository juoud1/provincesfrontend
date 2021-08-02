import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ProvinceList from './provinces/ProvinceList';

function App() {
	return (
		<div className="App">
			<AppBar position="static" color="default" >
				<ToolBar>
					<Typography>
						<ProvinceList />
					</Typography>
				</ToolBar>
			</AppBar>
		</div>
	);
}

export default App;
