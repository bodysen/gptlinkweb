import { Link } from 'react-router-dom';

export default function Monkeyhome() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-tech">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

          .bg-tech {
            background: linear-gradient(135deg, #24c6dc, #514a9d);
            position: relative;
            font-family: 'Orbitron', sans-serif;
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
            font-weight: 400; /* Orbitron Regular */
          }
        `}
      </style>
      <section className="text-center z-10 relative">
        <h1 className="text-6xl">Monkey Software</h1>
        <p className="text-xl">探索我们的世界</p>
        <Link to="/chat" className="mt-8 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          开始体验
        </Link>
      </section>
    </div>
  );
}
