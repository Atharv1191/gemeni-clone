import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { context } from '../../context/context';

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(context);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && input) {
            onSent();
        }
    };

    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemeni</p>
                <img src={assets.user_icon} alt='User Icon' />
            </div>

            <div className='main-container'>
                {!showResult ? (
                    <>
                        <div className='greet'>
                            <p>
                                <span>Hello, Dev.</span>
                            </p>
                            <p>How can I help you today</p>
                        </div>

                        <div className='cards'>
                            <div className='card'>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt='Compass Icon' />
                            </div>

                            <div className='card'>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.bulb_icon} alt='Bulb Icon' />
                            </div>

                            <div className='card'>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt='Message Icon' />
                            </div>

                            <div className='card'>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt='Code Icon' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt='User Icon' />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className='result-data'>
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}

                            <img src={assets.gemini_icon} alt='Gemini Icon' />
                        </div>
                    </div>
                )}

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type='text'
                            placeholder='Enter a prompt here'
                            onKeyDown={handleKeyPress} // Add key press handler
                        />
                        <div>
                            <img src={assets.gallery_icon} alt='Gallery Icon' />
                            <img src={assets.mic_icon} alt='Mic Icon' />
                            {input && (
                                <img
                                    onClick={() => onSent()}
                                    src={assets.send_icon}
                                    alt='Send Icon'
                                />
                            )}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
