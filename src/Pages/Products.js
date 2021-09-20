import React, { useEffect } from "react";
import Helmet from "../Components/Helmet";
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import Grid from "../Components/Grid";
import ProductCard from "../Components/ProductCard";
import ProductView from '../Components/ProductView'
import productData from "../assets/fake-data/products";
import {withRouter} from 'react-router-dom'

const Products = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);

  const relatedProducts = productData.getProducts(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
}
export default withRouter(Products);