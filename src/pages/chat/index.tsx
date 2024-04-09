//import Chat from './Chat';
//import Conversation from './Conversation';
//import { useMobileScreen } from '@/hooks/use-mobile-screen';

export default function Home() {
  //const isMobileScreen = useMobileScreen();

  return (
    <div className="flex flex-1 overflow-hidden">
      {/*{!isMobileScreen && <Conversation />}*/}
      <div style={{ width: '100%', height: '100%'}}>
        <iframe src="https://ai.micropdf.top" style={{ width: '100%', height: '100%' }}></iframe>
      </div>
        {/* <Chat /> */}
    </div>
  );
}
