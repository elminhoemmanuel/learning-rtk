import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counter";
import { getUsers } from "../redux/users";

export default function Home() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const { users }= useSelector((state) => state.users);

  const incr = () => {
    dispatch(increment());
  };

  const incrByAmt = (val) => {
    dispatch(incrementByAmount(val));
  };

  const decr = () => {
    dispatch(decrement());
  };

  useEffect(() => {
        dispatch(getUsers());
      console.log(users)
  }, [dispatch])

  return (
    <div className="App">
      <h1>My Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={incr}>Increment</button>
      <button onClick={()=>incrByAmt(10)}>Increment by 10</button>
      <button onClick={decr}>Decrement</button>

      <div>
          users
          {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
      </div>
    </div>
  );
}

