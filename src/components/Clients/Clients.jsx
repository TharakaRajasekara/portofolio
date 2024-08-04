import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "React",
        position : "Frontend",
        img_url : "https://www.thecn.com/uploads/6517aa/6517aae4a684c009f30229d8/s3/NjRmZWRhODU3NDVkMDlmYmNkMDExN2E3LzA1ZmUyNzZjZTk3MTdlNzkwOGJmMDA1MTZmYmRmMTRiL0RBVF8xNjk2MDQ5ODkyXzJlY2Q4NWNiNWNjMy5wbmc/05fe276ce9717e7908bf00516fbdf14b.png.w50h50.jpg",
        stars : 3,
        disc : `simplified building apps and websites, creating UI test cases, reusing existing website code on mobile counterparts, and improving UI and web application performances.`
    },
    {
        name : "Spring Boot",
        position : "Backend ",
        img_url : "https://www.thecn.com/uploads/65f6da/65f6da343b52318b6b0f4105/s3/NjRmZWRhODU3NDVkMDlmYmNkMDExN2E3LzMzM2VlZDFlY2FmN2E2NjIxYzczOGZlNTMzYWJlMmM5L0RBVF8xNzEwNjc2NTMyXzlkYTNlNjBkYjM0YS5wbmc/333eed1ecaf7a6621c738fe533abe2c9.png.w50h50.jpg",
        stars : 4,
        disc : ` Java Spring Boot is  an open-source tool that makes it easier to use Java-based frameworks to create microservices and web apps.one of the most popular and widely used.`
    },
    {
        name : "MySQL",
        position : "Database",
        img_url : "https://www.thecn.com/uploads/65be6d/65be6d8537c0a7743302dee5/s3/NjRmZWRhODU3NDVkMDlmYmNkMDExN2E3LzBkMDQxNjEwYTljZWQ5NTRmZGEyZjY4NjUxZDU1ODU0L0RBVF8xNzA2OTc4NjkzXzA3MmJiZjZkOWJjOS5wbmc/0d041610a9ced954fda2f68651d55854.png.w50h50.jpg",
        stars : 5,
        disc : `Supports different back ends, several different client programs and libraries, administrative tools, and a wide range of application programming interfaces (APIs).`
    },
    {
        name : "Flutter",
        position : "Mobile App",
        img_url : "https://www.thecn.com/uploads/65f6da/65f6da343b52318b6b0f4105/s3/NjRmZWRhODU3NDVkMDlmYmNkMDExN2E3LzMzM2VlZDFlY2FmN2E2NjIxYzczOGZlNTMzYWJlMmM5L0RBVF8xNzEwNjc2NTMyXzlkYTNlNjBkYjM0YS5wbmc/333eed1ecaf7a6621c738fe533abe2c9.png.w50h50.jpg",
        stars : 3,
        disc : ` Flutter is a framework that can be used for both frontend and backend development. However, most use it for the former.open source framework developed  by Google.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">Expertise</span>
            <h1>Software Tools</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`