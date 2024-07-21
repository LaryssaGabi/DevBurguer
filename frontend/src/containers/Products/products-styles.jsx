import styled from 'styled-components';
import Backgroud from '../../assets/backgroud.svg';

export const Container = styled.div`
      min-height: 100vh;
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
    left: 55%;
    top: 1.7%;
`;

export const Title = styled.h1`
 font-family: "Road Rage", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 5vw; 
    line-height: 1.1;
    text-align: center;
`;

export const SubTitle = styled.h4`
font-family: 'Poppins';
    font-style: normal;
    font-size: 1vw;
    line-height: 1.1;
    width: 100%;  
    text-align: center; 
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

export const CategoriSeletion = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const CategoryButton = styled.button`
    margin-top: 15px;
    width: 9vw;
    border: none;
    background: none;
    border-bottom: ${props => props.active === 'true' ? '2px solid #9758a6' : 'none'};
    color: ${props => props.active === 'true' ? '#9758a6' : '#9a9a90'};
    font-size: 15px;
    line-height: 20px;
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 40px;
    justify-content: center;
    margin-top: 20px;
`;
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 81%;
    color: #5C2669;
    border: none;
    background: none;
    margin-bottom: 50px;

`;
