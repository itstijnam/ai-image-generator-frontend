import { CircularProgress } from '@mui/material';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    flex: 1;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border: 2px  dashed ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.arrow + 80};
    border-radius: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    background: ${({ theme }) => theme.black + 50};
`;

function GeneratedImageCard({ src, loading }) {
    return (
        <Container>
            {
                loading ? (
                    <>
                        <CircularProgress style={{ color: 'inherit', width: '24px', height: '24px', padding: '10px'}} />
                        Generating your image..............
                    </>
                ) : (
                    <>
                        {
                            src ? <Image /> : <> Write a prompt to generate image </>
                        }
                    </>
                )
            }
            <Image />
        </Container>
    )
}

export default GeneratedImageCard