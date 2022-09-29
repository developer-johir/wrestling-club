
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid px-5">
                <div className='header-logo'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAmnzB7BxHSTFCrBx5o6lBUMBb9eIKGy-tWBqVFRegw&s" alt="" />
                <a class="navbar-brand text-white" href="/button">Wrestling-Club</a>
                </div>
                <div>
                <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav header-menu">
                    <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="/about">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="/club">My-Club</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="/blog">Blog</a>
                    </li>
                </ul>
                </div>
                </div>
            </div>
            </nav>
        </nav>
    );
};

export default Header;