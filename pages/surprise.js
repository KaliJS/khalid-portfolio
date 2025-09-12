import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Surprise() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample images - you can replace these with your actual images
  const carouselImages = [
    '/images/misso/india/1.jpeg',
    '/images/misso/india/2.jpeg', 
    '/images/misso/india/3.jpeg',
    '/images/misso/india/4.jpeg',
    '/images/misso/india/5.jpeg',
    '/images/misso/india/6.jpeg',
    '/images/misso/india/7.jpeg',
    '/images/misso/india/8.jpeg',
    '/images/misso/india/9.jpeg',
    '/images/misso/india/10.jpeg',
    '/images/misso/india/11.jpeg',
    '/images/misso/india/12.jpeg',
  ];

  const handleHeartClick = () => {
    setShowCarousel(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'mr.india') {
      setIsAuthenticated(true);
      setShowError(false);
      setTimeout(() => setShowContent(true), 500);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Special Access</title>
          <meta name="robots" content="noindex,nofollow" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Great+Vibes&display=swap" rel="stylesheet" />
        </Head>
        <div className="login-container">
          <div className="login-card">
            <h1>🌹 Special Access Required 🌹</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="Enter the magic word..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
              />
              <button type="submit" className="unlock-btn">Unlock Surprise</button>
            </form>
            {showError && <p className="error">Try again... 💕</p>}
          </div>
          <div className="login-flowers">
            <div className="flower f1">🌹</div>
            <div className="flower f2">🌸</div>
            <div className="flower f3">💜</div>
            <div className="flower f4">🌺</div>
          </div>
        </div>
        <style jsx>{`
          .login-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #ffeaa7, #fab1a0, #fd79a8);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Dancing Script', cursive;
            position: relative;
            overflow: hidden;
          }
          .login-card {
            background: rgba(255,255,255,0.9);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255,215,0,0.3);
          }
          .login-card h1 {
            font-size: 32px;
            color: #d63031;
            margin-bottom: 30px;
            font-family: 'Great Vibes', cursive;
          }
          .password-input {
            padding: 15px 20px;
            border: 2px solid #fdcb6e;
            border-radius: 25px;
            font-size: 18px;
            width: 280px;
            text-align: center;
            font-family: 'Dancing Script', cursive;
            margin-bottom: 20px;
          }
          .unlock-btn {
            background: linear-gradient(45deg, #fd79a8, #fdcb6e);
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            color: white;
            font-size: 20px;
            font-family: 'Dancing Script', cursive;
            cursor: pointer;
            font-weight: 700;
            transition: transform 0.3s ease;
          }
          .unlock-btn:hover {
            transform: scale(1.05);
          }
          .error {
            color: #d63031;
            margin-top: 15px;
            font-size: 18px;
          }
          .login-flowers {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
          .flower {
            position: absolute;
            font-size: 30px;
            animation: float 6s ease-in-out infinite;
          }
          .f1 { top: 20%; left: 15%; animation-delay: 0s; }
          .f2 { top: 70%; right: 20%; animation-delay: 1s; }
          .f3 { top: 30%; right: 10%; animation-delay: 2s; }
          .f4 { bottom: 20%; left: 10%; animation-delay: 3s; }
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Happy Birthday Beautiful! 🎂</title>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Pacifico&family=Satisfy&family=Poppins:wght@300;400;500;600&family=Lora:wght@400;500&family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="birthday-container">
        <div className="floating-elements">
          <div className="rose r1">
            <div className="rose-petals">
              <div className="petal petal1"></div>
              <div className="petal petal2"></div>
              <div className="petal petal3"></div>
              <div className="petal petal4"></div>
              <div className="petal petal5"></div>
            </div>
            <div className="rose-center"></div>
          </div>
          <div className="rose r2">
            <div className="rose-petals">
              <div className="petal petal1"></div>
              <div className="petal petal2"></div>
              <div className="petal petal3"></div>
              <div className="petal petal4"></div>
              <div className="petal petal5"></div>
            </div>
            <div className="rose-center"></div>
          </div>
          <div className="rose r3">
            <div className="rose-petals">
              <div className="petal petal1"></div>
              <div className="petal petal2"></div>
              <div className="petal petal3"></div>
              <div className="petal petal4"></div>
              <div className="petal petal5"></div>
            </div>
            <div className="rose-center"></div>
          </div>
          
          <div className="purple-flower p1">
            <div className="purple-petals">
              <div className="purple-petal pp1"></div>
              <div className="purple-petal pp2"></div>
              <div className="purple-petal pp3"></div>
              <div className="purple-petal pp4"></div>
              <div className="purple-petal pp5"></div>
              <div className="purple-petal pp6"></div>
            </div>
            <div className="purple-center"></div>
          </div>
          <div className="purple-flower p2">
            <div className="purple-petals">
              <div className="purple-petal pp1"></div>
              <div className="purple-petal pp2"></div>
              <div className="purple-petal pp3"></div>
              <div className="purple-petal pp4"></div>
              <div className="purple-petal pp5"></div>
              <div className="purple-petal pp6"></div>
            </div>
            <div className="purple-center"></div>
          </div>
          
          <div className="cherry-blossom c1">
            <div className="cherry-petals">
              <div className="cherry-petal cp1"></div>
              <div className="cherry-petal cp2"></div>
              <div className="cherry-petal cp3"></div>
              <div className="cherry-petal cp4"></div>
              <div className="cherry-petal cp5"></div>
            </div>
            <div className="cherry-center"></div>
          </div>
          <div className="cherry-blossom c2">
            <div className="cherry-petals">
              <div className="cherry-petal cp1"></div>
              <div className="cherry-petal cp2"></div>
              <div className="cherry-petal cp3"></div>
              <div className="cherry-petal cp4"></div>
              <div className="cherry-petal cp5"></div>
            </div>
            <div className="cherry-center"></div>
          </div>
          
          <div className="sparkle s1"></div>
          <div className="sparkle s2"></div>
          <div className="sparkle s3"></div>
          <div className="sparkle s4"></div>
          
          <div className="heart h1"></div>
          <div className="heart h2"></div>
          <div className="heart h3"></div>
          
          <div className="butterfly b1">
            <div className="wing wing-left"></div>
            <div className="wing wing-right"></div>
            <div className="butterfly-body"></div>
          </div>
          <div className="butterfly b2">
            <div className="wing wing-left"></div>
            <div className="wing wing-right"></div>
            <div className="butterfly-body"></div>
          </div>
        </div>
        
        <div className="background-elements">
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
          <div className="bubble bubble4"></div>
          <div className="bubble bubble5"></div>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
        
        <div className={`main-content ${showContent ? 'show' : ''}`}>
          <div className="birthday-header">
            <h1 className="birthday-title">
              🎂 Happy Birthday, Beautiful! 🎂
            </h1>
            <div className="subtitle">
              ✨ Today is all about celebrating YOU ✨
            </div>
          </div>
          
          <div className="message-container">
            <div className="golden-frame">
              <div className="message-content">
                <p className="main-message">
                  {/* This is where your personal message will go */}
                  <span className="hindi-message">Misso Happy Birthday Babyyyyyyyyy... 💝</span>
                  <br /><br />
                  <span className="english-message">I love you so so so so much babyyyyyyyyy... 💝</span>
                  <br /><br />
                  <span className="hindi-message">Kafi socha mene ki apni misso ke liye kya kru. ooops sorry mene socha ki kya kya kru pr yaar kuchh special samajh hi nhi aa rha tha. I know mai bahut bk bk krta hu or aapko irritate kr deta hu, but aaj bk bk nhi krunga aaj mai aapko kuchh dikhaunga
                    to jo neeche heart ka button hai uspe jara click to kro.
                    <br/>  </span>
                </p>
                <div className="heart-button-container">
                  <button className="heart-button" onClick={handleHeartClick}>
                    <div className="heart-icon"></div>
                    <span className="heart-text">Click my heart! 💕</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          
          
          <div className="birthday-wishes">
            <div className="wish-item">
              <span className="wish-icon">🌹</span>
              <span className="wish-text">May your day be as beautiful as you are</span>
            </div>
            <div className="wish-item">
              <span className="wish-icon">💖</span>
              <span className="wish-text">Sending you all my love today and always</span>
            </div>
            <div className="wish-item">
              <span className="wish-icon">✨</span>
              <span className="wish-text">You deserve all the happiness in the world</span>
            </div>
          </div>
        </div>
        
        <div className="golden-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        {/* Beautiful Carousel Modal */}
        {showCarousel && (
          <div className="carousel-overlay" onClick={closeCarousel}>
            <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
              <button className="carousel-close" onClick={closeCarousel}>×</button>
              
              <div className="carousel-header">
                <h2>Our Beautiful Memories 💕</h2>
              </div>
              
              <div className="carousel-content">
                <button className="carousel-nav prev" onClick={prevImage}>❮</button>
                
                <div className="image-container">
                  <div className="image-frame">
                    <img 
                      src={carouselImages[currentImageIndex]} 
                      alt={`Memory ${currentImageIndex + 1}`}
                      className="carousel-image"
                    />
                  </div>
                  <div className="image-hearts">
                    <div className="floating-heart fh1">💖</div>
                    <div className="floating-heart fh2">💕</div>
                    <div className="floating-heart fh3">💗</div>
                  </div>
                </div>
                
                <button className="carousel-nav next" onClick={nextImage}>❯</button>
              </div>
              
              <div className="carousel-indicators">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              
              <div className="carousel-counter">
                {currentImageIndex + 1} of {carouselImages.length}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .birthday-container {
          min-height: 100vh;
          background: 
            linear-gradient(135deg, 
              rgba(255,234,167,0.45) 0%, 
              rgba(250,177,160,0.45) 25%, 
              rgba(253,121,168,0.45) 50%, 
              rgba(225,112,85,0.45) 75%, 
              rgba(253,203,110,0.45) 100%),
            url('/images/misso/india/5.jpeg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          overflow-x: hidden;
          font-family: 'Dancing Script', cursive;
        }
        
        .floating-elements {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .rose, .purple-flower, .cherry-blossom, .sparkle, .heart, .butterfly {
          position: absolute;
          animation: floatAround 8s ease-in-out infinite;
        }
        
        /* Beautiful CSS Roses */
        .rose {
          width: 40px;
          height: 40px;
          position: relative;
        }
        
        .rose-petals {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .petal {
          position: absolute;
          width: 20px;
          height: 30px;
          background: linear-gradient(135deg, #ff6b8a, #c44569, #f8b500);
          border-radius: 50% 50% 50% 0;
          transform-origin: bottom center;
        }
        
        .petal1 { transform: rotate(0deg) translateY(-8px); }
        .petal2 { transform: rotate(72deg) translateY(-8px); }
        .petal3 { transform: rotate(144deg) translateY(-8px); }
        .petal4 { transform: rotate(216deg) translateY(-8px); }
        .petal5 { transform: rotate(288deg) translateY(-8px); }
        
        .rose-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #f39c12, #e74c3c);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(243, 156, 18, 0.6);
        }
        
        .rose.r1 { top: 8%; left: 3%; animation-delay: 0s; animation-duration: 10s; }
        .rose.r2 { top: 55%; left: 5%; animation-delay: 2s; animation-duration: 12s; }
        .rose.r3 { top: 25%; right: 5%; animation-delay: 4s; animation-duration: 9s; }
        
        /* Purple Flowers */
        .purple-flower {
          width: 35px;
          height: 35px;
          position: relative;
        }
        
        .purple-petals {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .purple-petal {
          position: absolute;
          width: 12px;
          height: 20px;
          background: linear-gradient(135deg, #a29bfe, #6c5ce7, #fd79a8);
          border-radius: 50% 50% 50% 0;
          transform-origin: bottom center;
        }
        
        .pp1 { transform: rotate(0deg) translateY(-6px); }
        .pp2 { transform: rotate(60deg) translateY(-6px); }
        .pp3 { transform: rotate(120deg) translateY(-6px); }
        .pp4 { transform: rotate(180deg) translateY(-6px); }
        .pp5 { transform: rotate(240deg) translateY(-6px); }
        .pp6 { transform: rotate(300deg) translateY(-6px); }
        
        .purple-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, #ffeaa7, #fdcb6e);
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(253, 203, 110, 0.8);
        }
        
        /* Cherry Blossoms */
        .cherry-blossom {
          width: 30px;
          height: 30px;
          position: relative;
        }
        
        .cherry-petals {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .cherry-petal {
          position: absolute;
          width: 15px;
          height: 15px;
          background: linear-gradient(135deg, #fab1a0, #ff7675, #fdcb6e);
          border-radius: 50% 0;
          transform-origin: bottom left;
        }
        
        .cp1 { transform: rotate(0deg) translateY(-5px); }
        .cp2 { transform: rotate(72deg) translateY(-5px); }
        .cp3 { transform: rotate(144deg) translateY(-5px); }
        .cp4 { transform: rotate(216deg) translateY(-5px); }
        .cp5 { transform: rotate(288deg) translateY(-5px); }
        
        .cherry-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #f39c12, #e17055);
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(225, 112, 85, 0.6);
        }
        
        /* Sparkles */
        .sparkle {
          width: 20px;
          height: 20px;
          position: relative;
        }
        
        .sparkle::before,
        .sparkle::after {
          content: '';
          position: absolute;
          background: linear-gradient(45deg, #ffeaa7, #fdcb6e, #f39c12);
          border-radius: 50%;
        }
        
        .sparkle::before {
          width: 20px;
          height: 4px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(243, 156, 18, 0.8);
        }
        
        .sparkle::after {
          width: 4px;
          height: 20px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(243, 156, 18, 0.8);
        }
        
        /* Hearts */
        .heart {
          width: 30px;
          height: 30px;
          position: relative;
        }
        
        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 15px;
          height: 24px;
          background: linear-gradient(135deg, #ff7675, #d63031, #fd79a8);
          border-radius: 15px 15px 0 0;
          transform: rotate(-45deg);
          transform-origin: 0 100%;
          box-shadow: 0 0 10px rgba(253, 121, 168, 0.6);
        }
        
        .heart::after {
          left: 9px;
          transform: rotate(45deg);
          transform-origin: 100% 100%;
        }
        
        /* Butterflies */
        .butterfly {
          width: 35px;
          height: 25px;
          position: relative;
        }
        
        .wing {
          position: absolute;
          width: 12px;
          height: 20px;
          background: linear-gradient(135deg, #a29bfe, #6c5ce7, #fd79a8);
          border-radius: 50% 10px;
          box-shadow: 0 0 8px rgba(162, 155, 254, 0.6);
        }
        
        .wing-left {
          left: 5px;
          transform: rotate(-15deg);
          animation: wingFlap 2s ease-in-out infinite;
        }
        
        .wing-right {
          right: 5px;
          transform: rotate(15deg);
          animation: wingFlap 2s ease-in-out infinite reverse;
        }
        
        .butterfly-body {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 2px;
          height: 18px;
          background: linear-gradient(180deg, #2d3436, #636e72);
          border-radius: 2px;
        }
        
        @keyframes wingFlap {
          0%, 100% { transform: rotate(-15deg) scaleY(1); }
          50% { transform: rotate(-25deg) scaleY(0.8); }
        }
        
        /* Positioning */
        .purple-flower.p1 { top: 20%; left: 80%; animation-delay: 1.5s; animation-duration: 14s; }
        .purple-flower.p2 { bottom: 25%; left: 3%; animation-delay: 3.5s; animation-duration: 8s; }
        
        .cherry-blossom.c1 { top: 12%; left: 55%; animation-delay: 0.5s; animation-duration: 16s; }
        .cherry-blossom.c2 { bottom: 12%; left: 35%; animation-delay: 4.5s; animation-duration: 7s; }
        
        .sparkle.s1 { top: 18%; left: 25%; animation-delay: 0.8s; animation-duration: 6s; }
        .sparkle.s2 { top: 70%; right: 30%; animation-delay: 2.8s; animation-duration: 8s; }
        .sparkle.s3 { bottom: 20%; left: 65%; animation-delay: 4.2s; animation-duration: 5s; }
        .sparkle.s4 { top: 35%; left: 12%; animation-delay: 1.2s; animation-duration: 9s; }
        
        .heart.h1 { top: 32%; left: 70%; animation-delay: 2.2s; animation-duration: 11s; }
        .heart.h2 { bottom: 35%; right: 5%; animation-delay: 0.3s; animation-duration: 13s; }
        .heart.h3 { top: 62%; left: 20%; animation-delay: 3.8s; animation-duration: 7s; }
        
        .butterfly.b1 { top: 22%; right: 35%; animation-delay: 1.2s; animation-duration: 18s; }
        .butterfly.b2 { bottom: 40%; left: 45%; animation-delay: 3.8s; animation-duration: 15s; }
        
        /* Heart Button Styles */
        .heart-button-container {
          display: flex;
          justify-content: center;
          margin: 40px 0;
        }
        
        .heart-button {
          background: linear-gradient(135deg, #ff7675, #d63031, #fd79a8);
          border: none;
          border-radius: 25px;
          padding: 20px 30px;
          display: flex;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(253, 121, 168, 0.4);
          position: relative;
          overflow: hidden;
        }
        
        .heart-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .heart-button:hover::before {
          opacity: 1;
        }
        
        .heart-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(253, 121, 168, 0.6);
        }
        
        .heart-icon {
          width: 25px;
          height: 25px;
          position: relative;
        }
        
        .heart-icon::before,
        .heart-icon::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 20px;
          background: #ffffff;
          border-radius: 12px 12px 0 0;
          transform: rotate(-45deg);
          transform-origin: 0 100%;
          animation: heartBeat 1.5s ease-in-out infinite;
        }
        
        .heart-icon::after {
          left: 7px;
          transform: rotate(45deg);
          transform-origin: 100% 100%;
          animation-delay: 0.1s;
        }
        
        .heart-text {
          color: white;
          font-family: 'Dancing Script', cursive;
          font-size: 20px;
          font-weight: 700;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        
        @keyframes heartBeat {
          0%, 100% { transform: rotate(-45deg) scale(1); }
          50% { transform: rotate(-45deg) scale(1.1); }
        }
        
        .main-content {
          position: relative;
          z-index: 2;
          padding: 40px 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .main-content.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .birthday-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .birthday-title {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(48px, 8vw, 80px);
          color: #d63031;
          text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
          margin-bottom: 20px;
          animation: titleGlow 3s ease-in-out infinite;
        }
        
        .subtitle {
          font-family: 'Pacifico', cursive;
          font-size: clamp(20px, 4vw, 32px);
          color: #6c5ce7;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        .message-container {
          max-width: 800px;
          margin: 0 auto 60px;
          display: flex;
          justify-content: center;
        }
        
        .golden-frame {
          padding: 6px;
          border-radius: 25px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          animation: frameShine 4s ease-in-out infinite;
        }
        
        .message-content {
          background: rgba(255,255,255,0.45);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
        }
        
        .main-message {
          font-size: clamp(16px, 4vw, 22px);
          color: #2d3436;
          line-height: 1.8;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
          animation: textGlow 5s ease-in-out infinite;
        }
        
        .hindi-message {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          letter-spacing: 0.3px;
        }
        
        .english-message {
          font-family: 'Lora', serif;
          font-weight: 400;
          font-style: italic;
        }
        
        .birthday-wishes {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .wish-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          animation: wishFloat 6s ease-in-out infinite;
        }
        
        .wish-item:nth-child(2) { animation-delay: 1s; }
        .wish-item:nth-child(3) { animation-delay: 2s; }
        
        .wish-icon {
          font-size: 40px;
          margin-right: 20px;
        }
        
        .wish-text {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(20px, 3vw, 28px);
          color: #2d3436;
          font-weight: 700;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }
        
        .golden-particles {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: linear-gradient(45deg, #f39c12, #e74c3c);
          border-radius: 50%;
          animation: particleFloat 15s linear infinite;
        }
        
        .particle:nth-child(1) { left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { left: 30%; animation-delay: 3s; }
        .particle:nth-child(3) { left: 50%; animation-delay: 6s; }
        .particle:nth-child(4) { left: 70%; animation-delay: 9s; }
        .particle:nth-child(5) { left: 90%; animation-delay: 12s; }
        
        @keyframes floatAround {
          0%, 100% { 
            transform: translateY(0) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-30px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(-10px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translateY(-40px) rotate(270deg) scale(1.05); 
          }
        }
        
        @keyframes titleGlow {
          0%, 100% { 
            text-shadow: 3px 3px 6px rgba(0,0,0,0.3), 0 0 20px rgba(214,48,49,0.5); 
          }
          50% { 
            text-shadow: 3px 3px 6px rgba(0,0,0,0.3), 0 0 40px rgba(214,48,49,0.8); 
          }
        }
        
        @keyframes frameShine {
          0%, 100% { 
            box-shadow: 0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(243,156,18,0.5); 
          }
          50% { 
            box-shadow: 0 25px 50px rgba(0,0,0,0.3), 0 0 40px rgba(243,156,18,0.8); 
          }
        }
        
        @keyframes textGlow {
          0%, 100% { 
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1); 
          }
          50% { 
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1), 0 0 15px rgba(214,48,49,0.3); 
          }
        }
        
        @keyframes wishFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes particleFloat {
          0% { 
            transform: translateY(100vh) rotate(0deg); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-100px) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        .background-elements {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,215,0,0.1));
          animation: bubbleFloat 20s ease-in-out infinite;
        }
        
        .bubble1 { width: 60px; height: 60px; left: 10%; top: 20%; animation-delay: 0s; }
        .bubble2 { width: 40px; height: 40px; right: 15%; top: 40%; animation-delay: 4s; }
        .bubble3 { width: 80px; height: 80px; left: 70%; top: 60%; animation-delay: 8s; }
        .bubble4 { width: 50px; height: 50px; right: 25%; bottom: 30%; animation-delay: 12s; }
        .bubble5 { width: 35px; height: 35px; left: 30%; bottom: 20%; animation-delay: 16s; }
        
        .wave {
          position: absolute;
          width: 120%;
          height: 120px;
          background: linear-gradient(45deg, rgba(255,182,193,0.1), rgba(255,215,0,0.1));
          border-radius: 50%;
          animation: waveMove 25s ease-in-out infinite;
        }
        
        .wave1 { left: -10%; top: 10%; animation-delay: 0s; }
        .wave2 { right: -10%; top: 50%; animation-delay: 8s; }
        .wave3 { left: 20%; bottom: 10%; animation-delay: 16s; }
        
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          25% { transform: translateY(-30px) scale(1.1); opacity: 0.6; }
          50% { transform: translateY(-60px) scale(0.9); opacity: 0.4; }
          75% { transform: translateY(-20px) scale(1.05); opacity: 0.7; }
        }
        
        @keyframes waveMove {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.2; }
          33% { transform: rotate(120deg) scale(1.1); opacity: 0.3; }
          66% { transform: rotate(240deg) scale(0.9); opacity: 0.25; }
        }
        
        @media (max-width: 768px) {
          .main-content { padding: 15px 10px; }
          .message-content { padding: 20px; }
          .wish-icon { margin-right: 10px; font-size: clamp(20px, 5vw, 25px); }
          .birthday-header { margin-bottom: 40px; }
          .message-container { margin-bottom: 40px; }
          .golden-frame { padding: 4px; }
          .bubble { transform: scale(0.7); }
          .wave { height: 80px; }
        }
        
        /* Carousel Styles */
        .carousel-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }
        
        .carousel-container {
          background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95));
          border-radius: 25px;
          padding: 30px;
          position: relative;
          box-shadow: 0 25px 80px rgba(0,0,0,0.4);
          border: 3px solid rgba(255,215,0,0.6);
          animation: slideUp 0.4s ease;
          backdrop-filter: blur(5px);
        }
        
        .carousel-close {
          position: absolute;
          top: 15px;
          right: 20px;
          background: linear-gradient(135deg, #ff7675, #d63031);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          color: white;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(214, 48, 49, 0.4);
        }
        
        .carousel-close:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(214, 48, 49, 0.6);
        }
        
        .carousel-header {
          text-align: center;
          margin-bottom: 25px;
        }
        
        .carousel-header h2 {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(24px, 5vw, 36px);
          color: #d63031;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          margin: 0;
        }
        
        .carousel-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .carousel-nav {
          background: linear-gradient(135deg, #fdcb6e, #f39c12);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          color: white;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(243, 156, 18, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .carousel-nav:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(243, 156, 18, 0.6);
        }
        
        .image-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .image-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
          border: 3px solid;
          border-image: linear-gradient(45deg, #f39c12, #e74c3c, #fd79a8) 1;
        }
        
        .carousel-image {
          width: 300px;
          height: 400px;
          object-fit: contain;
          display: block;
          transition: transform 0.5s ease;
        }
        
        .carousel-image:hover {
          transform: scale(1.02);
        }
        
        .image-hearts {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .floating-heart {
          position: absolute;
          font-size: 20px;
          animation: floatHeart 3s ease-in-out infinite;
        }
        
        .fh1 { top: 10%; right: 10%; animation-delay: 0s; }
        .fh2 { bottom: 15%; left: 10%; animation-delay: 1s; }
        .fh3 { top: 50%; right: 5%; animation-delay: 2s; }
        
        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(243, 156, 18, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: linear-gradient(135deg, #f39c12, #e74c3c);
          transform: scale(1.2);
          box-shadow: 0 3px 10px rgba(243, 156, 18, 0.5);
        }
        
        .carousel-counter {
          text-align: center;
          font-family: 'Dancing Script', cursive;
          font-size: 18px;
          color: #2d3436;
          font-weight: 600;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes floatHeart {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-15px) rotate(10deg); opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .carousel-container { padding: 20px; }
          .carousel-image { width: 250px; height: 300px; }
          .carousel-nav { width: 40px; height: 40px; font-size: 16px; }
          .heart-button { padding: 15px 25px; }
          .heart-text { font-size: 18px; }
        }
      `}</style>
    </>
  );
}
