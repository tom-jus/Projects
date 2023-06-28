import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const users = [
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: true
    },
    {
      userName: "tomiijustel",
      name: "Tomás Justel",
      isFollowing: false
    },
    {
      userName: "lioscaloni",
      name: "Lionel Scaloni",
      isFollowing: true
    },
    {
      userName: "AgustinJustel",
      name: "Agustin Justel",
      isFollowing: false
    }
  ]

  return(
    <section className='sectionApp'>
      {
        users.map(({ userName, name, isFollowing}) => (
          <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}


{/* <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing userName="midudev" alt="Midudev">
      Miguel Ángel Durán
    </TwitterFollowCard>

    <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={false} userName="tomiijustel" alt="TomJustel">
      Tomás Justel
    </TwitterFollowCard>

    <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing userName="lioscaloni" alt="Scaloni"> 
      Lionel Scaloni
    </TwitterFollowCard>

    <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={false} userName="AgustinJustel" alt="Scaloni"> 
      AgustinJustel
    </TwitterFollowCard>  */}