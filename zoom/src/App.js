import React from 'react';
import './App.css';
import people from './sample/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Move from './components/Move'
class App extends React.Component{
    state = {
        people: people
    }
    render(){
        return(
            <>
            <div>
                <Container fluid>
                <Row>
                <Col>
                    <div className="leftside">
                        <div id="waiting">
                        <h1 id="waiting">waiting room</h1>
                        <div id="people">
                        <Move/>
                        {this.state.people.map(e => <h1 id={e.id}>{e.name}-{e.state}</h1>)}
                        </div>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div className="rightside">
                    <div id="room">
                    <h1 id="participants">Participants</h1>
                    </div>
                    </div>
                </Col>
                </Row>  
                </Container>
            </div>
            </>
  );
    }
}

export default App; 