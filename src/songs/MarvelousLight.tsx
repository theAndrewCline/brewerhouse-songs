import { useNavigate } from 'react-router-dom'

const P: React.FC = ({ children }) => <p className="text-lg">{children}</p>

const MarvelousLight: React.FC<{}> = () => {
  const navigate = useNavigate()
  return (
    <div className="w-screen container p-4 mx-auto">
      <div className="flex flex-col justify-center items-center bg-white rounded shadow my-8 p-16">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold text-3xl text-indigo-800">
            Marvelous Light
          </h1>
          <h2 className="text-gray-600 font-italic">Charlie Hall</h2>

          <div className="my-4">
            <p className="font-bold">Verse 1:</p>
            <P>I once was fatherless</P>
            <P>a stranger with no hope</P>
            <P>Your kindness wakened me</P>
            <P>Awakened me, from my sleep</P>
          </div>

          <div className="my-4">
            <p className="font-bold">Verse 2:</p>
            <P>Your love it beckons deeply,</P>
            <P>a call to come and die.</P>
            <P>By grace now I will come</P>
            <P>And take this life, take Your life.</P>
          </div>

          <div className="my-4">
            <p className="font-bold">Pre Chorus:</p>
            <P>Sin has lost it's power,</P>
            <P>death has lost it's sting.</P>
            <P>From the grave You've risen</P>
            <P>VICTORIOUSLY!</P>
          </div>

          <div className="my-4">
            <p className="font-bold">Chorus:</p>
            <P>Into marvelous light I'm running,</P>
            <P>Out of darkness, out of shame.</P>
            <P>By the cross you are the truth,</P>
            <P>You are the life, you are the way</P>
          </div>

          <div className="my-4">
            <p className="font-bold">Verse 3:</p>
            <P>My dead heart now is beating,</P>
            <P>My deepest stains now clean.</P>
            <P>Your breath fills up my lungs.</P>
            <P>Now I'm free. Now I'm free!</P>
          </div>

          <div className="my-4">
            <p className="font-bold">Bridge:</p>
            <P>Lift my hands and spin around,</P>
            <P>See the light that I have found.</P>
            <P>Oh the marvelous light</P>
            <P>Marvelous light</P>
          </div>

          <div>
            <button
              onClick={() => {
                navigate('/')
              }}
              className="mx-2 bg-gray-300 text-lg px-4 py-2 rounded hover:shadow hover:bg-gray-400 ease-in-out duration-200"
            >
              Songlist
            </button>
            <button
              onClick={() => {
                navigate('/center')
              }}
              className="mx-2 bg-indigo-600 text-lg px-4 py-2 rounded hover:shadow hover:bg-indigo-700 text-white ease-in-out duration-200"
            >
              Next Song
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarvelousLight
