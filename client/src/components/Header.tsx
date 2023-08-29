import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import axios from 'axios';

export default function Header(): JSX.Element {
    const [sign, setSign] = useState(null);
    const [profileData, setProfileData] = useState({ username: "admin_user" });
    const GET_AUTH_URL = '/get_auth';
    const GET_PROFILE_URL = '/get_profile';

    const fetchData = async () => {
        try {
            const authResponse = await axios.post(GET_AUTH_URL);
            const data = authResponse.data;
            setSign(data);

            const profileResponse = await axios.post(GET_PROFILE_URL, {
                user: data
            });
            setProfileData(profileResponse.data[0]);

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleScroll = (height: number) => {
        const targetHeight = height;
        window.scrollTo({
            top: targetHeight,
            behavior: 'smooth',
        });
    };

    return (
        <HeaderLayout>
            <HeaderCol>
                <div onClick={() => handleScroll(0)}>
                    <Logo />
                </div>
                <HeaderList>
                    <HeaderItem to="/" onClick={() => handleScroll(0)}>HOME</HeaderItem>
                    <HeaderItem to="/" onClick={() => handleScroll(530)}>ABOUT</HeaderItem>
                    <HeaderItem to="/classfication">CLASSFICATION</HeaderItem>
                </HeaderList>
                <MobileHeaderMenuButton>
                    <AiOutlineMenu size="27" fill='#8E6C62' />
                </MobileHeaderMenuButton>
                <MyPageCol>
                    <MyPageItem to="/search"><CiSearch size="20" fill='#8E6C62' /></MyPageItem>
                    <MyPageItem to="/login"><CiUser size="20" fill='#8E6C62' /></MyPageItem>
                    <MyPageItem to="/"><CiShoppingCart size="20" fill='#8E6C62' /></MyPageItem>
                </MyPageCol>
            </HeaderCol>
        </HeaderLayout>
    );
}

const HeaderLayout = styled.header`
    position: fixed;
    width: 100%;
    display: grid;
    align-items: center;
    background: #FFFFFF;
    border-top: 7px solid #8E6C62;
    border-bottom: 1px solid #ECECEC; 
    z-index: 999;
`;

const HeaderCol = styled.div`
    margin: 0 6.5%;
    height: 65px;
    display: grid;
    grid-template-columns: 250px 1fr 10%;
    align-items: center;
    justify-items: stretch;

    @media (max-width: 1024px) {
        grid-template-columns: 250px 1fr;
    }
`;

const HeaderList = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const HeaderItem = styled(Link)`
    width: 190px;
    height: 100%;
    display: grid;
    place-items: center;
    color: #8E6C62;
    font-size: 14px;
    font-weight: medium;
    text-decoration: none;
    letter-spacing: 1.909091px;
    transition: ease 0.3s;
    
    &:hover{
        color: #4E3C36;
    }
`;

const MobileHeaderMenuButton = styled.div`
    display: none;

    @media (max-width: 1024px) {
        display: grid;
        justify-content: end;
        cursor: pointer;
    }
`;

const MyPageCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
`;

const MyPageItem = styled(Link)`
    display: grid;
    place-items: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;