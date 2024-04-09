//import Chat from './Chat';
//import Conversation from './Conversation';
//import { useMobileScreen } from '@/hooks/use-mobile-screen';
import { useUserStore } from '@/store';
import { useEffect } from 'react';

export default function Home() {
  const [{ nickname, avatar }] = useUserStore((state) => [state.userInfo]);
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      console.log('Nickname:', nickname);
      console.log('Avatar:', avatar);
      // iframe.contentWindow?.postMessage(userInfo, 'https://ai.micropdf.top');
    }
  }, [nickname, avatar]);
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
