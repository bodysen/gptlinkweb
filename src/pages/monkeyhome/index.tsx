import { Link } from 'react-router-dom';

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
            background: linear-gradient(135deg, rgba(36, 198, 220, 0.7), rgba(81, 74, 157, 0.7));
          }
          section {
            height: 100vh;
            width: 100%;
            scroll-snap-align: start;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            background-color: rgba(255, 255, 255, 0.1); /* 半透明背景 */
          }
          .bg-tech::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="noise" x="0%" y="0%" width="100%" height="100%"><feTurbulence baseFrequency="0.02" numOctaves="3" stitchTiles="stitch" type="fractalNoise" /></filter><rect width="100%" height="100%" filter="url(%23noise)"></rect></svg>') center/cover;
            opacity: 0.1;
          }
          h1 {
            font-weight: 700; /* Orbitron Bold */
            color: white;
            margin-bottom: 0.5em;
          }
          p {
            font-weight: 400; /* Orbitron Regular */
            color: #dcdcdc;
            margin-bottom: 1em;
          }
          .button {
            background-color: rgba(36, 198, 220, 0.7);
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
            font-weight: 400; /* Orbitron Regular */
          }
          .button:hover {
            background-color: rgba(42, 130, 186, 0.7);
          }
        `}
      </style>
      <section className="bg-tech">
        <div className="text-center z-10">
          <h1 className="text-6xl">Monkey Software</h1>
          <p className="text-xl">探索我们的世界</p>
          <Link to="/chat" className="button">
            开始体验
          </Link>
        </div>
      </section>
      <section className="bg-tech">
        <div className="text-center z-10">
          <h1 className="text-6xl">Our Mission</h1>
          <p className="text-xl">创新科技，改善人类生活。</p>
        </div>
      </section>
      <section className="bg-tech">
        <div className="text-center z-10">
          <h1 className="text-6xl">Joni Us</h1>
          <p className="text-xl">一起构建未来。</p>
        </div>
      </section>
    </div>
  );
}
