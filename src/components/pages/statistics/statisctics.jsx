import React from 'react'
import { Container, GenderContainer, LineOne, LineTwo } from './style'

import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge, gaugeClasses  } from '@mui/x-charts/Gauge';

const pData = [1400, 8000, 8900, 5008];
const xLabels = [
  '0 ~ 10',
  '10 ~ 18',
  '18 ~ 30',
  '30+'
];

const settings = {
    width: 200,
    height: 200,
    value: 98000,
};
  

function Statisctics() {
  return (
    <Container>
        <LineOne>
            <GenderContainer>
                <BarChart
                    series={[
                        { data: [24] },
                        { data: [51] },
                        { data: [40] },
                    ]}
                    height={300}
                    width={400}
                    xAxis={[{ data: [''], scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                />
                <div style={{display: "flex", gap: "50px", marginLeft: "35px", marginTop: "-20px"}}>
                    <p>Others</p>
                    <p>Male</p>
                    <p>Female</p>
                </div>
                <h2 style={{fontWeight: "400", marginLeft: "35px", marginTop: "30px"}}>Gender of users</h2>
            </GenderContainer>
            
            <GenderContainer>
                <Gauge
                    {...settings}
                    cornerRadius="50%"
                    sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 40,
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                        fill: '#5d02b2',
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                        fill: theme.palette.text.disabled,
                        },
                    })}
                />
                <h2 style={{fontWeight: "400", marginTop: "30px"}}>Users</h2>
            </GenderContainer>
            
        </LineOne>
        <LineTwo>
            <BarChart
                width={1000}
                height={500}
                series={[
                    { data: pData, label: 'user of this age', id: 'pvId', stack: 'total' }
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
            />
        </LineTwo>
    </Container>
  )
}

export default Statisctics
