import styled from 'styled-components';
import Backgroud from '../../assets/backgroud.svg';

export const Container = styled.div`
    min-height: calc(100vh - 72px);
    position: relative;
`;

export const ImageCategorias = styled.img`
    width: 100%;
    height: auto;
    background-color: #000;
`;

export const ContainerTitle = styled.div`
    position: absolute;
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    text-align: center; 
    color: #FFFFFF;
    left: 500px;
    top: 300px;
    transform: translate(120%, -50%);
`;

export const Title = styled.h1`
    width: 25vw;
    font-family: "Road Rage", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 5vw; 
    line-height: 1.1;
`;

export const SubTitle = styled.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-size: 1.5vw;
    line-height: 1.1;
    text-align: center; 
    margin-top: 10px;
    color: #FFFFFF;
`;

export const CategoriSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    &::before {
        content: '';
        background: url('${Backgroud}');
        opacity: 0.5; 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; 
    }
`;

export const Titles = styled.h2`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 2vw;
    line-height: 48px;
    text-align: center;
    color: #9758A6;
`;

export const ItemsSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;
    border-radius: 20px;
    margin: 0 20px; 
    margin-bottom: 20px; 

    @media (min-width: 768px) {
        margin-bottom: 0; 
    }
`;
