import './App.css';
import { Component } from 'react';
import {Row, Col, Navbar, NavItem, SideNav, SideNavItem, Container, Button, Card, CardTitle, Icon} from 'react-materialize';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			terms: []
    		};
		this.getBooks = this.getBooks.bind(this);
  	}

        componentDidMount(){
		this.getBooks();
	}

	getBooks() {
                var myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json')
                var requestOptions = {
                        method: 'GET',
                        headers: myHeaders
                }
                fetch("https://collection.bccampus.ca/wp-json/wp/v2/oer?per_page=15", requestOptions)
                        .then(response => response.json())
                        .then((data) => {
                                this.setState({books: data})
				console.log(this.state.books)
                        })
                        .catch(error => console.log('error', error));
		
		
	}

	getTerms() {
                var myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json')
                var requestOptions = {
                        method: 'POST',
                        headers: myHeaders
                }
                fetch("https://collection.bccampus.ca/wp-json/ptam/v2/get_terms", requestOptions)
                        .then(response => response.json())
                        .then((data) => {
                                this.setState({terms: data})
                                console.log(this.state.terms)
                        })
                        .catch(error => console.log('error', error));	
	}
	
	render() {
		return (

<div>
	<Navbar
	  alignLinks="left"
	  brand={<a className="brand-logo" href="#">Archives: OER</a>}
	  centerLogo
	  className="cyan darken-2"
	  id="mobile-nav"
	  menuIcon={<Icon>menu</Icon>}
	  options={{
		draggable: true,
		edge: 'left',
		inDuration: 250,
		onCloseEnd: null,
		onCloseStart: null,
		onOpenEnd: null,
		onOpenStart: null,
		outDuration: 200,
		preventScrolling: true
	  }}
	>
		<NavItem>
			<style>
			{`
				#root > div {
					z-index: 99999 !important;
				}
			`}
			 </style>
			<SideNav
				id="SideNav-10"
				options={{
				  draggable: true
				}}
				trigger={<Button node="button">Filter</Button>}
			>
				<SideNavItem href="#!second">
				  Filter Items
				</SideNavItem>
			</SideNav>
		</NavItem>
	</Navbar>
	
	<Row>
		<Col>
			<h3>Open Education Resources</h3>
			<p>Showing {this.state.books.length} books</p>
		</Col>
	</Row>
	<Row>
		<style>{
		`.card .card-image .card-title {
				color: #0082b1;
				font-weight: normal;
		}`
		}
		</style>
		{this.state.books.map((data, key) => {
			return (
				<Col s={4}>
					<Card
						actions={[
								<a href={data.link}>Read Now</a>
						]}
						header={<CardTitle image="https://hazlitt.net/sites/default/files/default-book.png">{data.title.rendered}</CardTitle>}
					>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus rutrum eros, vitae varius dui tempor nec. Mauris mattis fermentum rutrum. Ut venenatis facilisis hendrerit. Mauris consequat, odio eu tempor laoreet, ipsum nibh finibus dolor, vitae tempus risus enim ac eros. Aliquam bibendum ante quis purus pulvinar consequat. Fusce fringilla enim turpis, non porta sapien consequat id. Suspendisse finibus justo non aliquam efficitur.
					</Card>
				</Col>

			)
		})}
	</Row>
</div>

  		);
	}
}

export default App;
