import React, {useState, useEffect} from 'react'
import Post from './post';
import './App.css'


const App = ({initialCount}) => {

  const [state, setState] = useState({
    count: initialCount,
    user: "ITPOWER"
  });

  let [posts, setPosts] = useState([
    {
      name: 'This is React Hook',
      body: 'You can learn by doing this'
    },
    {
      name: 'JavaScript is important',
      body: 'With the help of it you will succssed'
    },
  ])

  const restOne = () => {
    setState({
      ...state,
      count:state.count-1
    })
  }

  const addOnePost = () => {
    let newPost = {
      name: 'CSS is still vital in React',
      body: 'You still need to design'
    }

    setPosts([
      ...posts,
      newPost
    ])

  }

  const removePosts = () => {
    setPosts([])
  }


  useEffect(() => {
    console.log('change on state')
  }, [state])

  useEffect(() => {
    console.log('change on posts')
  }, [posts])
  

  return (
    <>
      <div className="container"> 
        <h1>{state.user}</h1>
        <h3>Count: <span>{state.count}</span></h3>
        <button onClick={restOne}>Rest one -1</button>
        <button onClick={ () => setState ({
          ...state,
          count:state.count+1
        })}>Add one +1</button>
        <button onClick={removePosts}>Remove Posts</button>

        <hr/>

        {posts.map((item, i) =>(
          <Post item={item} key={i}/>
        ))}

        <button
          onClick={addOnePost}
        >
          Add one more
        </button>

      </div>
    </>
  );
}

export default App;
