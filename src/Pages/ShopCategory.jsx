import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { Container, Row } from 'react-bootstrap';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div>
      <section className='shop-category'>
        <Container>
          <Row>
            <img className='shopcategory-banner' src={props.banner} alt="" />
          </Row>
          <Row>
            <div className="shopcategory-indexSort">
            <p>
              <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt="" />
            </div>
            </div>
          </Row>
          <Row>
            {all_product.map((item, i) => {
              if (props.category === item.category) {
                return <Item
                  key={i}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              } else {
                return null;
              }
            })}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ShopCategory
