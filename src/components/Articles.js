import React, { Component} from 'react';
import '../css/articles.css';
import Button from 'react-bootstrap/Button';
import { Fragment } from 'react';
import { Card } from 'react-bootstrap';


class Articles extends Component {
    render(){
        return (
            <Fragment>
                <Card className='carte' style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={this.props.article.image} />
                    <Card.Body className='carteBody'>
                        <Card.Title><h3>{this.props.article.produit}</h3></Card.Title>
                        <Card.Text>
                            <h5>Prix: {this.props.article.prix}€</h5> 
                            <h5>Stock: {this.props.article.stock} unités</h5>
                        </Card.Text>
                        <Button onClick={() => this.props.acheter(this.props.article) } variant="outline-success">Acheter</Button>{' '}
                    </Card.Body>

                    {this.props.article.stock === 1 && 
                        <Card.Body style={{backgroundColor: "orange"}}>
                            <Card.Text>
                                <h4>{this.props.article.produit}</h4>
                                <h5>Prix: {this.props.article.prix}€</h5> 
                                <h5>Stock: {this.props.article.stock} unités</h5>
                            </Card.Text>
                        </Card.Body>
                    }
                    {this.props.article.stock === 0 &&
                        <Card.Body style={{backgroundColor: "red"}}>
                            <Card.Text>
                                <h4>{this.props.article.produit}</h4>
                                <h5>Prix: {this.props.article.prix}€</h5> 
                                <h5>Rupture de stock</h5>
                            </Card.Text>
                        </Card.Body>
                    }
                </Card>
            </Fragment>
        )
    }
};

export default Articles;