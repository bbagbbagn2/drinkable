import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

import { TextField } from '@material-ui/core';

import axios from 'axios';

export default function Login() {

    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const LOGIN_URL = '/login';

    const onIdHandler = (event: any) => {
        setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event: any) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmit = () => {
        if (id && password) {
            axios.post(LOGIN_URL, {
                id: id,
                pwd: password
            })
                .then((res) => {
                    if (res.data === "success") {
                        window.location.href = '/account';
                    } else {
                        alert("아이디와 비밀번호를 확인해 주십시오.");
                    }
                });
        } else {
            alert("아이디와 비밀번호를 확인해 주십시오.");
        }
    }


    const [currentButton, setCurrentButton] = useState<boolean>(true);

    const handleButtonClick = (isLoggedIn: boolean) => {
        setCurrentButton(isLoggedIn);
    }
   
    useEffect(() => {
        console.log(currentButton); // 상태 변경 후 값 출력
    }, [currentButton]);

    return (
        <>
            <Header />
            <LoginPageLayout>
                <LoginPageCol>
                    <LoginPageBox>
                        <MyPageTitleBox>
                            <TitleContextBox>
                                <MypageTitleParagraph>마이 페이지</MypageTitleParagraph>
                            </TitleContextBox>
                        </MyPageTitleBox>
                        <LoginResisterBox>
                            <LoginResisterNav>
                                <LoginResisterList>
                                    <LoginResisterItem>
                                        <LoginResisterLink
                                            to="/login"
                                            role="button"
                                            aria-current={currentButton === true ? 'true' : 'false'}
                                            onClick={() => handleButtonClick(true)}>
                                            로그인
                                        </LoginResisterLink>
                                    </LoginResisterItem>
                                    <LoginResisterItem>
                                        <LoginResisterLink
                                            to="/login"
                                            role="button"
                                            aria-current={currentButton === false ? 'true' : 'false'}
                                            onClick={() => handleButtonClick(false)}>
                                            등록하기
                                        </LoginResisterLink>
                                    </LoginResisterItem>
                                </LoginResisterList>
                            </LoginResisterNav>
                        </LoginResisterBox>
                        <UserContentBox>
                            <UserTextBox>
                                <ContentBox>
                                    <ContextForm>
                                        <SubTitlePharagraph fontSize='1rem' fontWeight="700" marginBottom='0.0625rem' letterSpacing='0.0625rem'>DRINKABLE을 찾아주셔서 감사합니다.</SubTitlePharagraph>
                                        <SubTitlePharagraph>이메일과 비밀번호로 로그인</SubTitlePharagraph>
                                        <DataFormCol>
                                            <LoginInputBox>
                                                <LoginInput
                                                    variant="standard"
                                                    label="아이디"
                                                    onChange={onIdHandler} />
                                            </LoginInputBox>
                                            <LoginInputBox>
                                                <LoginInput
                                                    variant="standard"
                                                    type="password"
                                                    label="비밀번호"
                                                    onChange={onPasswordHandler} />
                                            </LoginInputBox>
                                            <LoginButtonBox>
                                                <LoginButtonItem>
                                                    <LoginButton type="submit" onClick={onSubmit}>로그인</LoginButton>
                                                </LoginButtonItem>
                                            </LoginButtonBox>
                                        </DataFormCol>
                                    </ContextForm>
                                </ContentBox>
                            </UserTextBox>
                        </UserContentBox>
                    </LoginPageBox>
                </LoginPageCol>
            </LoginPageLayout>
            <Footer />
        </>
    );
}

const LoginPageLayout = styled.div`
    margin: 80px auto;
    padding: 60px 40px;
    position: relative;
    max-width: 540px;
    border: 1px solid #e5e5e5;
`;

const LoginPageCol = styled.div`
    margin: 0 auto;
    display: block;
    overflow: hidden;
`;

const LoginPageBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;

    @media screen and (max-width: 37.563rem) {
        margin: 0 -2.533vw;
    }
`;

const MyPageTitleBox = styled.div`
    margin-bottom: 40px;
    width: 100%;
    display: block;
    text-align: center;
    flex-basis: auto;
`;

const TitleContextBox = styled.div``;

const MypageTitleParagraph = styled.h1`
    color: #000;
    font-size: 2.5rem;
    letter-spacing: .125rem;
    line-height: 1.225;

    @media screen and (max-width: 60.063rem) {
        margin: 0;
        padding: 0;
        font-size: 1.875rem;
        letter-spacing: normal;
        line-height: 1.2;
    }

    
    @media screen and (max-width: 37.563rem) {
        font-size: 1.563rem;
        letter-spacing: normal;
        line-height: 1.24;
    }
`;

const LoginResisterBox = styled.div`
    margin: 0 auto;
    padding: 0;
    min-width: 33.33%;
    width: 100%;
    flex-basis: auto;

    @media screen and (max-width: 60.063rem) {
        padding: 0 0.972vw;
        width: 100%;
    }

    @media screen and (max-width: 37.563rem) {
        padding: 0 2.533vw;
    }
    
`;
const LoginResisterNav = styled.nav`
    border-bottom: 1px solid #ECECEC;
`;
const LoginResisterList = styled.ul`
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;

    @media screen and (min-width: 60.06rem) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
const LoginResisterItem = styled.li`
    margin: 0;
    padding: 0;
    width: auto;
    box-sizing: border-box;
    flex: 0 0 50%;

    @media screen and (min-width: 60.06rem) {
        grid-row: 1;
        justify-self: stretch;
    }
`;
const LoginResisterLink = styled(Link)`
    position: relative;
    padding: 0 1.56rem;
    width: 100%;
    height: 3.125rem;
    display: inline-flex;
    align-items: center;
    place-content: center;
    border-width: 0;
    border-radius: 0;
    border-bottom: 3px solid ${(props) => (props['aria-current'] === 'true' ? "#1D1D1D" : "#FFF")};
    font-weight: 700;
    letter-spacing: .05rem;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;

    @media screen and (min-width: 60.06rem) {
        font-size: .938rem;
        letter-spacing: .05rem;
        line-height: 1.5;
        cursor: pointer;
    }
`;

const UserContentBox = styled.div`
    width: 100%;
    flex-basis: auto;

    @media screen and (max-width: 60.063rem) {
        margin: 0;
        width: 100%;
    }
    
    @media screen and (max-width: 37.563rem) {
        padding: 0 2.533vw;
    }
`;
const UserTextBox = styled.div`
    padding: 2.25rem 0;

    @media screen and (max-width: 60.063rem) {
        padding: 1.688rem 0;
    }

    @media screen and (max-width: 37.563rem) {
        padding: 1.125rem 0;
    }
`;
const ContentBox = styled.div``;

const ContextForm = styled.form`
    margin-bottom: 1.69rem;

    @media screen and (max-width: 60.063rem) {
        margin-top: 1.125rem;
    }
`;
const SubTitlePharagraph = styled.p<{ marginBottom?: string; fontSize?: string; letterSpacing?: string; fontWeight?: string; }>`
    margin: 0;
    padding: 0;
    text-align: center;
    
    margin-bottom: ${(props) => (props.marginBottom || "1.125rem")};
    font-size: ${(props) => (props.fontSize || ".875rem")};
    font-weight: ${(props) => (props.fontWeight || "300")};
    letter-spacing: ${(props) => (props.letterSpacing || "0.03rem")};
`;
const DataFormCol = styled.div`
    padding-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr;
`;
const LoginInputBox = styled.div`
    margin-bottom: 1.125rem;
`;
const LoginInput = styled(TextField)`
    width: 100%;
    height: 70px;
    background: #FFF;
    color: #333;

    & label.Mui-focused {
        color: #333;
        }
        & .MuiInput-underline:after {
        border-bottom-color: #000;
        }
        & .MuiOutlinedInput-root {
        & fieldset {
            border-color: #000;
        }
        &:hover fieldset {
            border-color: #000;
        }
        &.Mui-focused fieldset {
            border-color: #000;
        }
    }
`;
const LoginButtonBox = styled.div`
    margin-top: 1.69rem;
    margin-bottom: 0;
`;
const LoginButtonItem = styled.div`
    margin: 0 auto;
    max-width: none;
`;
const LoginButton = styled.button`
    position: relative; 
    margin: 0;
    padding: 0 1.563rem;
    width: 100%;
    height: 3.125rem;
    align-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 0;
    background-color: #000;
    color: #FFF;
    font-size: .813rem;
    font-weight: 700;
    letter-spacing: .044rem;
    cursor: pointer;
`;

