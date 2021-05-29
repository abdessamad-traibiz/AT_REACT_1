import React from 'react'
import { Row,Col } from 'react-bootstrap'
import products from '../products.js'
import Product from '../components/Product'
function HomeScreen() {
    return (
        <div>
            <h1><center>Nos derniers produits</center></h1>
            <Row>
                {products.map(product=>(
                    <Col key={product.__id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
