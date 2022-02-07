import { useNavigate } from 'react-router-dom'

const P: React.FC = ({ children }) => <p className="text-lg">{children}</p>

const Center = () => {
  const navigate = useNavigate()
  return (
    <div className="w-screen container mx-auto">
      <div className="flex flex-col justify-center items-center bg-white rounded shadow my-8 p-16">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold text-3xl text-indigo-800">Be The Center</h1>
          <h2 className="text-gray-600 font-italic">Charlie Hall</h2>

          <div className="my-4">
            <p className="font-bold">Chorus:</p>

            <P>Oh Christ, be the center of our lives</P>
            <P>Be the place we fix our eyes</P>
            <P>Be the center of our lives</P>
          </div>

          <div className="my-4">
            <p className="font-bold">Verse 1:</p>
            <P>And You're the center of the universe</P>
            <P>Everything was made in You, Jesus</P>
            <P>Breath of every living thing</P>
            <P>Everyone was made for You</P>
            <P>You hold everything together</P>
            <P>You hold everything together</P>
          </div>

          <div className="my-4">
            <p className="font-bold">Verse 2:</p>

            <P>You're the center of the universe</P>
            <P>And You're the center of the universe</P>
            <P>Everything was made in You, Jesus</P>
            <P>Breath of every living thing</P>
            <P>Everyone was made for You</P>
            <P>You hold everything together</P>
            <P>You hold everything together</P>
          </div>

          <div className="my-4">
            <p className="font-bold">Bridge:</p>
            <P>And we lift our eyes to heaven</P>
            <P>And we wrap our lives around Your life</P>
            <P>We lift our eyes to heaven, to You</P>
            <P>And we lift our eyes to heaven</P>
            <P>And we wrap our lives around Your life</P>
            <P>We lift our eyes to heaven, to You</P>
          </div>

          <div>
            <button
              onClick={() => {
                navigate('/')
              }}
              className="mx-2 bg-indigo-600 text-white text-lg px-4 py-2 rounded hover:shadow hover:bg-indigo-700 ease-in-out duration-200"
            >
              Songlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Center
