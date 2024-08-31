import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
  return (
    <div>
      <SignIn routing='path' path='/sign-in' />
    </div>
  )
}

export default SignInPage
