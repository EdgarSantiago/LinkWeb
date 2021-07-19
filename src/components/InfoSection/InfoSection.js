import React from 'react'
import {Fragment} from 'react'
import {Link} from 'react-scroll'
import { Button, Container } from '../../globalStyles'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, SubTitle, Img, ImgWrapper
   } from './InfoSection.elements'


const InfoSection = ({lightBg, imgStart, topLine, headline, description, primary, lightText, lightTextDesc,
    lightTopLine, buttonLabel, img, start, alt, dbutton, id_scroll, scrollLx}) => {
    return (
        <Fragment> 
            <InfoSec id={id_scroll} lightBg={lightBg}>
                <Container>
                    <InfoRow id="test" imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to={scrollLx} spy={true} smooth={true}>
                                <Button dbutton={dbutton} big fontBig primary={primary}>
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
