import React from 'react'
import {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyles'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, SubTitle, Img, ImgWrapper
   } from './InfoSection.elements'


const InfoSection = ({lightBg, imgStart, topLine, headline, description, primary, lightText, lightTextDesc,
    lightTopLine, buttonLabel, img, start, alt }) => {
    return (
        <Fragment>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </Fragment>
    )
}

export default InfoSection
