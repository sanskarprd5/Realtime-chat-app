import { MultiChatSocket,MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = () => {
    const chatProps = useMultiChatLogic('bdcd3d5e-1c6d-4e3f-bfca-596e91a6b75a',props.user.username, props.user.secret);
    return (
    <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
    )
}


export default ChatsPage