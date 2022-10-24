import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../firebase.config'

const SignIn = () => {
    const logGoogleUser = async() => {
        const res = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(res.user)
    }

  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  )
}

export default SignIn