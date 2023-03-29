// packages
// import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import C1 from 'assets/Project/C1.jpg';
import C2 from 'assets/Project/C2.jpg';
import C3 from 'assets/Project/C3.jpg';
import C4 from 'assets/Project/C4.jpg';
import * as color from 'constants/colors';

const StyledWrap = styled.div`
  max-width: 1024px;
  width: 80%;
  background-color: ${color.WHITE_COLOR};
`;

const StyledTitleWrap = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
  }
`;

const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  color: ${color.DEFAULT_BACKGROUND};
  margin: 10px;
  font-weight: 600;
  letter-spacing: 0.05em;
  @media (max-width: 768px) {
    font-size: 45px;
  }
  @media (max-width: 400px) {
    font-size: 35px;
  }
`;

const StyledHr = styled.div`
  width: 116px;
  height: 10px;
  color: ${color.DEFAULT_YELLOW};
  background-color: ${color.DEFAULT_YELLOW};
  border: 1px solid ${color.DEFAULT_YELLOW};
`;

// const StyledClient = styled.div`
//   width: 100%;
//   height: 367px;
//   background-color: ${color.LIGHT_GREY_COLOR};
// `;

// const StyledClientWrap = styled.div`
//   max-width: 1024px;
//   margin: 20px;
//   height: 150px;
//   overflow-y: scroll;
//   display: flex;
//   flex-direction: row;
//   @media (max-width: 1023px) {
//     max-width: 768px;
//   }
//   @media (max-width: 768px) {
//     max-width: 600px;
//   }
//   @media (max-width: 650px) {
//     max-width: 500px;
//   }
//   @media (max-width: 550px) {
//     max-width: 400px;
//   }
//   @media (max-width: 400px) {
//     max-width: 300px;
//   }
// `;

// const StyledClientImg = styled.img`
//   width: 150px;
//   height: 150px;
//   margin: 0px 10px;
// `;

const StyledProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledProjectWrap = styled.div`
  display: flex;
  width: 457px;
  height: 457px;
  margin: 10px;
  cursor: pointer;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  transition: opacity 2s ease-out;
  @media (max-width: 1200px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 1023px) {
    width: 300px;
    height: 300px;
  }
`;

const StyledProjectContent = styled.div`
  display: none;
  color: ${color.DARK_BLUE_COLOR};
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  transition: opacity 2s ease-out;
  opacity: 0;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  ${StyledProjectWrap}:hover & {
    opacity: 1;
    display: flex;
  }
`;

// const StyledButton = styled.button`
//   font-size: 18px;
//   height: 20px;
//   width: 20px;
//   margin: 10px;
//   border-radius: 5px;
//   color: white;
//   background-color: #426780;
//   cursor: pointer;
//   &:hover {
//     background-color: #6092b3;
//   }
// `;

const projectData = [
  {
    name: 'c1',
    url: C1,
    name1: 'c2',
    url1: C2,
  },
  {
    name: 'c2',
    url: C2,
    name1: 'c2',
    url1: C2,
  },
  {
    name: 'c3',
    url: C3,
    name1: 'c2',
    url1: C2,
  },
  {
    name: 'c4',
    url: C4,
    name1: 'c2',
    url1: C2,
  },
];

// const data = [
//   {
//     name: '1',
//     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlpttS5sXB8ub4Si1n4HbuJywFnpFcaby5Q&usqp=CAU',
//   },
//   {
//     name: '2',
//     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczPLsNRsjHnRNh-PFIsQJ7ozPqG41VU2gpA&usqp=CAU',
//   },
//   {
//     name: '3',
//     url: 'https://static.wixstatic.com/media/e33d38_19de30ade9b741569540ce4a70172d23~mv2.jpg/v1/fill/w_506,h_506,al_c,q_80,usm_0.66_1.00_0.01/e33d38_19de30ade9b741569540ce4a70172d23~mv2.webp',
//   },
//   {
//     name: '4',
//     url: 'https://cdn.worldvectorlogo.com/logos/eva-air.svg',
//   },
//   {
//     name: '5',
//     url: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-6.svg',
//   },
//   {
//     name: '5',
//     url: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-6.svg',
//   },
//   {
//     name: '5',
//     url: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-6.svg',
//   },
//   {
//     name: '5',
//     url: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-6.svg',
//   },
//   {
//     name: '5',
//     url: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-6.svg',
//   },
//   {
//     name: '5',
//     url: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-6.svg',
//   },
//   {
//     name: '5',
//     url: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-6.svg',
//   },
// ];

function Projects(): JSX.Element {
  // const [page, setPage] = useState(0);

  // const handleChange = (slider) => {
  //   setPage(slider);
  // };

  return (
    <>
      <StyledWrap id="projects">
        <StyledTitleWrap>
          <StyledTitle>PROJECTS</StyledTitle>
          <StyledHr />
        </StyledTitleWrap>

        {/* <StyledProject>
          <Slider {...aa}>
            {projectData.map((val) => (
              <StyledProject>
                <StyledProjectWrap src={val.url}>
                  <StyledProjectContent>{val.name}</StyledProjectContent>
                </StyledProjectWrap>
              </StyledProject>
            ))}
          </Slider>
        </StyledProject> */}

        {/* <Carousel
          animationSpeed={2500}
          value={page}
          onChange={handleChange}
          plugins={[
            'infinite',
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2500,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <StyledButton type="button">
                    <i className="fa fa-chevron-left" />
                  </StyledButton>
                ),
                arrowRight: (
                  <StyledButton type="button">
                    <i className="fa fa-chevron-right" />
                  </StyledButton>
                ),
                addArrowClickHandler: true,
              },
            },
          ]}
        >
          {projectData.map((val) => (
            <StyledProject>
              <StyledProjectWrap src={val.url}>
                <StyledProjectContent>{val.name}</StyledProjectContent>
              </StyledProjectWrap>

              <StyledProjectWrap src={val.url1}>
                <StyledProjectContent>{val.name1}</StyledProjectContent>
              </StyledProjectWrap>
            </StyledProject>
          ))}
        </Carousel>
        <Dots value={page} onChange={handleChange} number={projectData.length} /> */}

        <StyledProject>
          {projectData.map((val) => (
            <StyledProjectWrap src={val.url}>
              <StyledProjectContent>{val.name}</StyledProjectContent>
            </StyledProjectWrap>
          ))}
        </StyledProject>
      </StyledWrap>
      {/* <StyledClient>
        <StyledTitleWrap>
          <StyledTitle>CLIENTS</StyledTitle>
          <StyledHr />
          <StyledClientWrap>
            {data.map((val) => (
              <StyledClientImg src={val.url} />
            ))}
          </StyledClientWrap>
        </StyledTitleWrap>
      </StyledClient> */}
    </>
  );
}

export default Projects;
