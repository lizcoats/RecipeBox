function App() {

  const [users, setUsers] = useState([])
  const [text, setText] = useState()

  useEffect( () => {

    async function getUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const body = await res.json()
      setUsers(body)
    }
    getUsers()
  }, [])

  const generateUserElements = () => {
    return users.map( u => <p>{u.name}, {u.phone}</p>)
  }

  const handleClick = async (e) => {
    const randNum = Math.floor((Math.random() * 499) + 1);
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${randNum}`)
    const body = await res.json()
    setText(body.body)
  }

  const generateTextElement = () => {
    return <h3>{text}</h3>
  }

  return (
    <div class="row App">
      <div class="column">
        <h1>This is stuff I want the user to see automatically (useEffect).</h1>
        {users && generateUserElements()}
      </div>
      <div class="column">
        <h1>This is the stuff I want the user to see when he does some specific action (event handler)</h1>
        <button onClick={handleClick}>Click for Text</button>
        {text && generateTextElement()}
      </div>
    </div>
  );
}

export default App;

