import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {useState} from 'react'

export default function Login() {
  const [formData, setFormData] = useState({})
    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                const data = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            "Authorization": `Bearer ${response.access_token}`
                        }
                    })
                    .then(data => {
                      let dataResponse = data.data
                      let register = {
                        email: dataResponse.email,
                        password: dataResponse.sub,
                        name: dataResponse.name
                      }
                      axios({
                        method: 'post',
                        url: 'http://localhost:8000/users',
                        data: register
                      })
                      .then(res => {
                        const data = res?.data?.data
                        if (data) {
                          localStorage.setItem('accessToken', data.token)
                          localStorage.setItem('userInfo', data.user)
                        }
                      })
                      .catch(error => window.alert('Email hoặc mật khẩu sai'))
                    })
                    .catch(error => window.alert('Lỗi, vui lòng đăng nhập lại'))
            } catch (e) {
                console.log(e);
            }
        }
    });

    const handleLogin = (user) => {
      try {
        axios({
          method: 'post',
          url: 'http://localhost:8000/users/login',
          data: user
        })
        .then(res => {
          const data = res?.data?.data
          if (data) {
            localStorage.setItem('accessToken', data.token)
            localStorage.setItem('userInfo', data.user)
            window.alert('Đăng nhập thành công !')
          }
        })
        .catch(error => window.alert('Email hoặc mật khẩu sai'))
      } catch (e) {
        console.log(e);
      }
    }

    // const handleRegister = (user) => {
    //   try {
    //     axios({
    //       method: 'post',
    //       url: 'http://localhost:8000/users',
    //       data: user
    //     })
    //     .then(res => {
    //       const data = res?.data?.data
    //       if (data) {
    //         localStorage.setItem('accessToken', data.token)
    //         window.alert('Đăng nhập thành công !')
    //       }
    //     })
    //     .catch(error => window.alert('Email hoặc mật khẩu sai'))
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      handleLogin(formData)
    }

    return (
        <div className="login">
            <div className="login-Wrapper">
                <span className="login_Title">
                    Login
                </span>
                <form action="submit" className="login_Form" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter Password"  onChange={(e) => setFormData({...formData, password: e.target.value})}  />
                    <button className="login_Form__Button" type="submit">Login</button>
                </form>
                <div className="other-method">
                    <label htmlFor="">Or sign in with:</label>
                    <div className="iconGroup">
                        <i className=" fa-brands fa-square-facebook"></i>

                        <i className=" fa-brands fa-google" onClick={login}></i>
                    </div>
                </div>
                <Link to="/register"> <button className="login_register__Button">Register</button></Link>

            </div>

        </div>
    )
}
