import { signIn } from "next-auth/react"

function Landing() {
  <a onClick={signIn}>
    <img src="/google-logo.png" alt="" />
    Sign In With Google
  </a>
}

export default Landing