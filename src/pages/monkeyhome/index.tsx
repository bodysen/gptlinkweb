import { Link } from 'react-router-dom';

import TechBackground1 from '@/assets/explore.webp'; 
import TechBackground2 from '@/assets/tech.webp'; 
import TechBackground3 from '@/assets/stangel.avif'; 

export default function Monkeyhome() {
  return (
    <div className="home-container">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

          .home-container {
            font-family: 'Orbitron', sans-serif;
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
            height: 100vh;
            background: linear-gradient(135deg, rgba(235, 235, 235, 0.9), rgba(225, 225, 225, 1));
          }
          .bg-tech {
            height: 100vh;
            width: 100%;
            scroll-snap-align: start;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
          }
          .bg-tech::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-size: cover;
            background-position: center;
            opacity: 0.5; // 调整背景图片的透明度，使其更清晰
          }
          .tech-1::before {
            background-image: url(${TechBackground1});
          }
          .tech-2::before {
            background-image: url(${TechBackground2});
          }
          .tech-3::before {
            background-image: url(${TechBackground3});
          }
          h1 {
            font-weight: 700;
            color: #333; /* 更深的文字颜色 */
            margin-bottom: 0.5em;
          }
          p {
            font-weight: 400;
            color: #555; /* 更深的文字颜色 */
            margin-bottom: 1em;
          }
          .button {
            background-color: rgba(36, 198, 220, 0.7);
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
            font-weight: 400;
          }
          .button:hover {
            background-color: rgba(42, 130, 186, 0.7);
          }
        `}
      </style>
      <section className="bg-tech tech-1">
        <div className="text-center z-10">
          <h1 className="text-6xl">Monkey Software</h1>
          <p className="text-xl">探索我们的世界</p>
          <Link to="/chat" className="button">
            开始体验
          </Link>
        </div>
      </section>
      <section className="bg-tech tech-2">
        <div className="text-center z-10">
          <h1 className="text-6xl">Our Mission</h1>
          <p className="text-xl">创新科技，改善人类生活。</p>
        </div>
      </section>
      <section className="bg-tech tech-3">
        <div className="text-center z-10">
          <h1 className="text-6xl">Join Us</h1>
          <p className="text-xl">一起构建未来。</p>
        </div>
      </section>
    </div>
  );
}
