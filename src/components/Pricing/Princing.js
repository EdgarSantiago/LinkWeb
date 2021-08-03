
import React, { Fragment } from 'react';
import { Button } from '../../globalStyles';
import { GiCutDiamond, GiCrystalBars } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  SpamColor
} from './Princing.elements';

function Pricing({preço_s, card_ht, id_scroll}) {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection id={id_scroll}>
        <PricingWrapper>
            {preço_s ? ( <PricingHeading>Serviços</PricingHeading> ) : ( <PricingHeading>Financiamento</PricingHeading>)}
          <PricingContainer>

            <PricingCard card_ht='true' href='https://wa.me/55013997303537?text=Tenho%20interesse%20no%20financiamento%20ouro'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars style={{ color: 'yellow'}} />
                </PricingCardIcon>

              {preço_s ? (
              <Fragment>
                <PricingCardPlan>Ouro</PricingCardPlan>
                <PricingCardCost>R$25</PricingCardCost>
                <PricingCardLength>Mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Domínio Grátis</PricingCardFeature>
                  <PricingCardFeature>Banco de dados 512mb</PricingCardFeature>
                  <PricingCardFeature>Atualizações mensais</PricingCardFeature>
                  <PricingCardFeature>Suporte 12/7</PricingCardFeature>
                  <PricingCardFeature>        </PricingCardFeature>
                  <PricingCardFeature>        </PricingCardFeature>
                  <PricingCardFeature>        </PricingCardFeature>

                </PricingCardFeatures>
              </Fragment>) : (
              <Fragment>
                <PricingCardPlan>Ouro</PricingCardPlan>
                <PricingCardCost>R$1000</PricingCardCost>
                <PricingCardLength>Entrada</PricingCardLength>
                <PricingCardCost>R$150</PricingCardCost>
                <PricingCardLength>Durante 12 meses</PricingCardLength>

                <PricingCardFeatures>
                  <PricingCardFeature>4 meses grátis</PricingCardFeature>
                  <PricingCardFeature>serviço <SpamColor colorSpam="yellow">Ouro</SpamColor></PricingCardFeature>
                                                      
                </PricingCardFeatures>

              </Fragment>
              )}

                <Button primary>Escolher</Button>
              </PricingCardInfo>
            </PricingCard >
            <PricingCard href='https://wa.me/55013997303537?text=Tenho%20interesse%20no%20financiamento%20diamante' card_ht='true'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond style={{ color: '#01A4B7'}}/>
                </PricingCardIcon>
             {preço_s ? (
              <Fragment>
                <PricingCardPlan>Diamante</PricingCardPlan>
                <PricingCardCost>R$55</PricingCardCost>
                <PricingCardLength>Mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Domínio Grátis</PricingCardFeature>
                  <PricingCardFeature>Banco de dados 512mb</PricingCardFeature>
                  <PricingCardFeature>Atualizações mensais</PricingCardFeature>
                  <PricingCardFeature>Atualizações de componentes</PricingCardFeature>
                  <PricingCardFeature>Suporte 24/7</PricingCardFeature>
                </PricingCardFeatures>
              </Fragment>) : (
              <Fragment>
                <PricingCardPlan>Diamante</PricingCardPlan>
                <PricingCardCost>R$1400</PricingCardCost>
                <PricingCardLength>Entrada</PricingCardLength>
                <PricingCardCost>R$122</PricingCardCost>
                <PricingCardLength>Durante 12 meses</PricingCardLength>

                <PricingCardFeatures>                 
                   <PricingCardFeature>6 meses grátis  </PricingCardFeature>
                   <PricingCardFeature>serviço <SpamColor colorSpam="#01A4B7">Diamante</SpamColor></PricingCardFeature>
                </PricingCardFeatures>
              </Fragment>
              )}
                <Button primary>Escolher</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;