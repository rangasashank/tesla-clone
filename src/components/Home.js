import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section 
            title = "Model S"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-s.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            />
        <Section 
        title = "Model Y"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"/>
        <Section 
        title = "Model 3"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"/>
        <Section 
        title = "Model X"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"/>
        <Section 
        title = "Lowest Cost Solar Panel"
        description = "Money-back guarantee"
        backgroundImg = "solar-panel.jpg"
        leftBtnText = "Order now"
        rightBtnText = "Learn more"/>
        <Section 
        title = "Solar for new roofs"
        description = "Solar roof costs less than a new roof"
        backgroundImg = "solar-roof.jpg"
        leftBtnText = "Order now"
        rightBtnText = "Learn more"/>
        <Section 
        title = "Accessories"
        description = "Money-back guarantee"
        backgroundImg = "accessories.jpg"
        leftBtnText = "Shop now"/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`