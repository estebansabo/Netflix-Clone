import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  } 
  return {
    props: {}
  }
} 


export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-2x1 text-green-500">Netflix Clone</h1>
      <p className="text-white">Welcome: {user?.email}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout</button>
    </>
  )
}
