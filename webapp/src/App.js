import './App.css';
import { Component } from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
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
                fetch("https://collection.bccampus.ca/wp-json/wp/v2/oer?page=13", requestOptions)
                        .then(response => response.json())
                        .then((data) => {
                                this.setState({books: data})
				console.log(this.state.books)
                        })
                        .catch(error => console.log('error', error));
		
		
	}

	
	render() {
		return (

<Container>
  <Row>
    <Col>
      <h1>Duck Data</h1>
    </Col>
  </Row>

  <Row>
    <Col>
      <h1>Duck Data</h1>
		<Table striped bordered hover>
			<thead>
				<tr>
				 <th>link</th>
				 <th>title</th>
				 <th>authors</th>
				 <th>keywords</th>
				 <th>oertypes</th>
				 <th>Levels</th>
				</tr> 
		   </thead>
			<tbody>
			{this.state.books.map((data, key) => {
				return (
				<tr>
					<th>{data.link}</th>
					<th>{data.title.rendered}</th>
					<th>{data.authors}</th>
					<th>{data.keywords}</th>
					<th>{data.oertype}</th>
					<th>{data.Levels}</th>
				</tr>
				)
			})}
			</tbody>
		</Table>
    </Col>
  </Row>
</Container>


  		);
	}
}

export default App;
