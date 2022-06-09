import React from 'react';
import Axios from 'axios';
import fileDownload from 'js-file-download';
import downloadIcon from '../../assets/icons/download_icon.png';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/images/bannerImg.jpg';

const Home = () => {

    const download = (e) => {
        e.preventDefault();
        Axios({
            url: "http://localhost:4000",
            method: "GET",
            responseType: "blob"
        })
            .then((res) => {
                // console.log(res);
                fileDownload(res.data, "Mehedi_Web_Developer_Resume.pdf")
            })
    }

    return (
        <div className='lg:flex bg-black py-10'>
            <div className='w-50 lg:ml-16'>
                <img src={bannerImg} alt="" width="700" />
            </div>
            <div className='w-50 ml-20 mt-20'>
                <h1 className='text-xl text-white text-center'>Hi there !</h1>
                <h1 className='text-3xl font-semibold text-white text-center'>I'M <span className='text-primary'>Md Mehedi Al Mamun</span> </h1> <br />
                <div className='text-center'>
                    <Link to="/contact"><button type='button' className='btn btn-accent hover:text-white font-bold hover:bg-secondary text-black'>Hire Me</button></Link>
                </div> <br />
                <div className='text-center'>
                    <button onClick={(e) => download(e)} type='button' className='btn btn-secondary hover:bg-accent hover:text-black text-white font-semibold'>
                        Download Resume
                        <img src={downloadIcon} alt="" width="30" className='ml-2' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;