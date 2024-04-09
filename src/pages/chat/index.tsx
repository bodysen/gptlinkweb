//import Chat from './Chat';
//import Conversation from './Conversation';
//import { useMobileScreen } from '@/hooks/use-mobile-screen';
import { useUserStore} from '@/store';

useEffect(() => {
    const iframe = document.querySelector('iframe');
    const [{ nickname, avatar }] = useUserStore((state) => [state.userInfo]);
    const userInfo = { nickname, avatar };
    iframe.contentWindow.postMessage(userInfo, 'https://ai.micropdf.top');
}, [userInfo]);

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
