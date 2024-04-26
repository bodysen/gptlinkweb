interface CefInterOp {
    scanSuccess: () => void;
}
declare function recvRenderMsg(arg1: any, arg2: any): void;
declare global {
    interface Window {
        cefInterOp?: CefInterOp;
    }
}
