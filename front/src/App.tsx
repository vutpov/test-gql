import { gql, useMutation, useQuery } from '@apollo/client'

const login = gql`
  mutation {
    loginMutation(username: "admin", password: "12345678") {
      token
    }
  }
`

const ping = gql`
  {
    ping
  }
`

function App() {
  const [mutateFunction, { data, error: dataError }] = useMutation(login)

  const { data: pingData, error: pingError } = useQuery(ping)

  return (
    <div className="App">
      <div
        style={{
          wordWrap: 'break-word',
        }}
      >
        <>
          {JSON.stringify(pingError?.stack, null, 2)}{' '}
          {JSON.stringify(pingData, null, 2)}
        </>
      </div>

      <div
        style={{
          wordWrap: 'break-word',
        }}
      >
        <>
          {JSON.stringify(dataError?.stack, null, 2)}{' '}
          {JSON.stringify(data, null, 2)}
        </>
      </div>
      <button
        onClick={() => {
          mutateFunction()
        }}
      >
        Login
      </button>
    </div>
  )
}

export default App
