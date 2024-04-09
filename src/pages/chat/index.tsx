//import Chat from './Chat';
//import Conversation from './Conversation';
//import { useMobileScreen } from '@/hooks/use-mobile-screen';
import { useUserStore } from '@/store';
import { useEffect } from 'react';

export default function Home() {
  //const isMobileScreen = useMobileScreen();
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const [{ nickname, avatar }] = useUserStore((state) => [state.userInfo]);
      //const userInfo = { nickname, avatar };
      console.log('Nickname:', nickname);
      console.log('Avatar:', avatar);
      //iframe.contentWindow?.postMessage(userInfo, 'https://ai.micropdf.top');
    }
  }, []); // 在组件挂载时执行
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
