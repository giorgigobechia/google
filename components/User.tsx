import {useSession, signIn,signOut} from "next-auth/react";

export default function User() {
    const {data:session} = useSession();
    if(session){
        return (
            <>
             <img onClick={signOut} src={session?.user?.image} alt="" style={{height: "40px",width: "40px",borderRadius: "180%"}} />
            </>
        )
    }
    return(
        <>
        <button onClick={signIn}>Sign In</button>
        </>
    )
}